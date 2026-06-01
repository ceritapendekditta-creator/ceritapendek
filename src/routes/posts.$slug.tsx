import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { marked } from 'marked'
import { Calendar, Clock, BookOpen, ArrowLeft, ShieldAlert } from 'lucide-react'

import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
      throw new Error('Post not found')
    }
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()
  const [showToast, setShowToast] = useState(false)
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Trigger anti-copy warning toast
  const triggerWarning = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current)
    }
    setShowToast(true)
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false)
    }, 2500)
  }

  // Prevent keyboard shortcuts (Ctrl+C, Ctrl+A, Ctrl+U, Ctrl+S)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.ctrlKey || e.metaKey
      if (isCmdOrCtrl) {
        switch (e.key.toLowerCase()) {
          case 'c':
          case 'a':
          case 'u':
          case 's':
            e.preventDefault()
            triggerWarning()
            break
        }
      }
      // Block F12 and Ctrl+Shift+I / Ctrl+Shift+J
      if (e.key === 'F12' || (isCmdOrCtrl && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j'))) {
        e.preventDefault()
        triggerWarning()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    }
  }, [])

  // Simple reading time calculation
  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} mnt baca`
  }

  // Resolve image path
  let imageSrc = post.image || '/placeholder.png'
  if (imageSrc && !imageSrc.startsWith('/') && !imageSrc.startsWith('http') && imageSrc !== 'placeholder.png') {
    imageSrc = '/' + imageSrc
  } else if (imageSrc === 'placeholder.png') {
    imageSrc = '/placeholder.png'
  }

  return (
    <div className="max-w-2xl mx-auto py-4 relative">
      {/* Back to Home Link */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm font-semibold text-toska-600 hover:text-toska-800 mb-6 transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Kembali ke Koleksi
      </Link>

      <article>
        {/* Sampul Cerpen (Cover Image) */}
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-toska-50 border border-toska-100/50 mb-8 shadow-sm">
          <img 
            src={imageSrc} 
            alt={`Sampul ${post.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Categories / Badges */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-4">
            {post.categories.map((cat) => (
              <span 
                key={cat}
                className="text-[10px] font-bold tracking-wider text-toska-700 bg-toska-50 border border-toska-100 px-2.5 py-1 rounded-md uppercase"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-toska-950 tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        {/* Metadata (Date and Reading time) */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 border-b border-toska-100/30 pb-6 font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={13} className="text-toska-400" />
            {new Date(post.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} className="text-toska-400" />
            {getReadingTime(post.content)}
          </span>
        </div>

        {/* Summary Block */}
        <div className="bg-toska-50/40 border-l-4 border-toska-400 p-4 rounded-r-xl mb-8">
          <p className="text-sm text-toska-900 italic font-medium">
            &ldquo;{post.summary}&rdquo;
          </p>
        </div>

        {/* Protected Story Content */}
        <div 
          className="anti-copy prose prose-toska max-w-none text-gray-700 leading-relaxed text-base md:text-lg space-y-6"
          onCopy={(e) => {
            e.preventDefault()
            triggerWarning()
          }}
          onCut={(e) => {
            e.preventDefault()
            triggerWarning()
          }}
          onContextMenu={(e) => {
            e.preventDefault()
            triggerWarning()
          }}
          onDragStart={(e) => {
            e.preventDefault()
            triggerWarning()
          }}
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </article>

      {/* Decorative End of Story separator */}
      <div className="my-16 flex justify-center items-center gap-2 text-toska-300">
        <span className="w-10 h-0.5 bg-toska-100" />
        <BookOpen size={16} />
        <span className="w-10 h-0.5 bg-toska-100" />
      </div>

      {/* Toast Notification for Anti-Copy Feature */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-fade-in text-sm font-medium border border-gray-800">
          <ShieldAlert className="text-yellow-400 flex-shrink-0" size={18} />
          <span>Fitur Anti-Copy Aktif: Teks cerpen dilindungi dari penyalinan.</span>
        </div>
      )}
    </div>
  )
}
