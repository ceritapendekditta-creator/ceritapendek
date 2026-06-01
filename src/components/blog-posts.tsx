import { Link } from '@tanstack/react-router'
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react'

import { type Post } from 'content-collections'

export default function BlogPosts({
  title,
  posts,
}: {
  title: string
  posts: Post[]
}) {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Simple reading time calculation
  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} mnt baca`
  }

  return (
    <div className="max-w-3xl mx-auto py-4">
      {/* Home Hero Section */}
      {title === "Your Blog" && (
        <div className="text-center mb-16 py-8 border-b border-toska-100/30">
          <h1 className="text-4xl md:text-5xl font-extrabold text-toska-950 tracking-tight">
            Ruang Cerita <span className="text-toska-600">Ditta Lyona</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Menyelami untaian kata, imajinasi, dan rasa. Temukan kumpulan cerita pendek penuh estetika di sini.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link 
              to="/about"
              className="px-5 py-2 bg-toska-600 hover:bg-toska-700 text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-toska-500/10"
            >
              Kenali Penulis
            </Link>
            <a 
              href="#koleksi"
              className="px-5 py-2 bg-toska-50 hover:bg-toska-100 text-toska-700 font-medium text-sm rounded-xl transition-all"
            >
              Mulai Membaca
            </a>
          </div>
        </div>
      )}

      {/* Main Section Header */}
      <div id="koleksi" className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-extrabold text-toska-900 tracking-tight flex items-center gap-2">
          <BookOpen className="text-toska-500" size={24} />
          {title === "Your Blog" ? "Koleksi Cerpen Terbaru" : title}
        </h2>
        <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
          {sortedPosts.length} Cerita
        </span>
      </div>

      {/* Grid List of Posts */}
      {sortedPosts.length === 0 ? (
        <div className="text-center py-16 bg-white border border-dashed border-toska-200 rounded-2xl">
          <p className="text-gray-400">Belum ada cerpen yang diterbitkan.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedPosts.map((post) => {
            // Resolve image path
            let imageSrc = post.image || '/placeholder.png'
            // Ensure leading slash for uploaded images
            if (imageSrc && !imageSrc.startsWith('/') && !imageSrc.startsWith('http') && imageSrc !== 'placeholder.png') {
              imageSrc = '/' + imageSrc
            } else if (imageSrc === 'placeholder.png') {
              imageSrc = '/placeholder.png'
            }

            return (
              <article 
                key={post._meta.path}
                className="group bg-white border border-toska-100/50 hover:border-toska-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                {/* Cover Image (Sampul Cerpen) */}
                <Link to={`/posts/${post.slug}`} className="block relative aspect-video overflow-hidden bg-toska-50">
                  <img 
                    src={imageSrc} 
                    alt={`Sampul ${post.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Badge */}
                  {post.categories && post.categories.length > 0 && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider text-toska-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm uppercase">
                      {post.categories[0]}
                    </span>
                  )}
                </Link>

                {/* Info Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date and Reading Time */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-toska-400" />
                        {new Date(post.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-toska-400" />
                        {getReadingTime(post.content)}
                      </span>
                    </div>

                    {/* Title */}
                    <Link to={`/posts/${post.slug}`} className="block">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-toska-600 transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Summary */}
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read Link */}
                  <div className="mt-6 pt-4 border-t border-toska-50 flex items-center justify-between">
                    <Link 
                      to={`/posts/${post.slug}`}
                      className="text-xs font-bold text-toska-600 hover:text-toska-800 flex items-center gap-1 transition-colors"
                    >
                      Baca Cerita 
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
