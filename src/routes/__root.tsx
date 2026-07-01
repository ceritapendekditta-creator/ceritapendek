import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X, BookOpen, Facebook, Youtube, Instagram } from 'lucide-react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Cerpen Ditta Lyona - Kumpulan Cerita Pendek Estetik',
      },
      {
        name: 'description',
        content: 'Nikmati kumpulan cerpen pilihan dan estetik dari Ratu Marga Ditta (Ditta Lyona) dengan desain minimalis toska yang menenangkan.',
      },
      // Open Graph Tags
      {
        property: 'og:title',
        content: 'Cerpen Ditta Lyona - Kumpulan Cerita Pendek Estetik',
      },
      {
        property: 'og:description',
        content: 'Nikmati kumpulan cerpen pilihan dan estetik dari Ratu Marga Ditta (Ditta Lyona) dengan desain minimalis toska yang menenangkan.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Cerpen Ditta Lyona - Kumpulan Cerita Pendek Estetik',
      },
      {
        name: 'twitter:description',
        content: 'Nikmati kumpulan cerpen pilihan dan estetik dari Ratu Marga Ditta (Ditta Lyona).',
      },
      {
        name: 'twitter:image',
        content: '/og-image.png',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
      }
    ],
    scripts: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        async: true,
      }
    ]
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="id">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) - Script Eksternal */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T2Z85XC4TB" />
        
        {/* Google tag (gtag.js) - Konfigurasi Internal */}
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T2Z85XC4TB');
        `}} />
        <script dangerouslySetInnerHTML={{__html: `
          document.addEventListener("DOMContentLoaded", () => {
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          });
        `}} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fafdfd] selection:bg-toska-200 selection:text-toska-800">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#fafdfd]/80 backdrop-blur-md border-b border-toska-100/50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo / Web Name */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-toska-500 rounded-xl text-white shadow-sm shadow-toska-500/20 group-hover:bg-toska-600 transition-colors">
                <BookOpen size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-toska-800 hover:text-toska-900 transition-colors">
                Cerpen Lyona
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-toska-800 hover:text-toska-600 hover:bg-toska-50 rounded-lg transition-all duration-300 focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Hamburger Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-toska-950/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center transition-all duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-3 text-toska-100 hover:text-white hover:scale-110 transition-all rounded-full bg-toska-800/40"
              aria-label="Tutup Menu"
            >
              <X size={28} />
            </button>
            
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-10 text-center text-3xl font-medium tracking-wide">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link-hover text-toska-100 hover:text-white"
              >
                Koleksi Cerpen
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link-hover text-toska-100 hover:text-white"
              >
                Tentang Web
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="nav-link-hover text-toska-100 hover:text-white"
              >
                Contact Us
              </Link>
            </nav>
            
            {/* Overlay Footer Decors */}
            <div className="absolute bottom-10 flex gap-4 text-toska-300/60 text-sm">
              <span>© 2026 Cerpen Lyona</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-toska-100/30 bg-toska-50/50 py-8">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="font-bold text-toska-800 text-lg">Cerpen Ditta Lyona</p>
              <p className="text-sm text-gray-500 mt-1">Ruang membaca cerpen estetik dan minimalis.</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1ALZLARqV9/" target="_blank" rel="noopener noreferrer" className="p-2 text-toska-700 hover:text-toska-900 bg-white shadow-sm rounded-lg hover:shadow-md transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/@learnenglishtogether24?si=mo7hH_0rtRAwfndv" target="_blank" rel="noopener noreferrer" className="p-2 text-toska-700 hover:text-toska-900 bg-white shadow-sm rounded-lg hover:shadow-md transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-toska-700 hover:text-toska-900 bg-white shadow-sm rounded-lg hover:shadow-md transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-6 mt-6 pt-4 border-t border-toska-100/10 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Cerpen Lyona. All rights reserved.
          </div>
        </footer>

        <Scripts />
      </body>
    </html>
  )
}
