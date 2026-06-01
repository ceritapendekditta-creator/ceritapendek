import { createFileRoute } from '@tanstack/react-router'
import { Facebook, Youtube, Instagram, Mail, MessageSquare } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
})

function ContactComponent() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-toska-600 uppercase bg-toska-50 px-3 py-1.5 rounded-full">
          Hubungi Kami
        </span>
        <h1 className="text-3xl font-extrabold text-toska-900 mt-4 tracking-tight sm:text-4xl">
          Hubungi Ditta Lyona
        </h1>
        <p className="text-sm text-gray-500 mt-2">Mari terhubung dan berdiskusi melalui jejaring sosial</p>
      </div>

      {/* Social Connection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {/* Facebook Card */}
        <a 
          href="https://www.facebook.com/share/1ALZLARqV9/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group block p-6 bg-white border border-toska-100/50 hover:border-toska-500 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Facebook size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Facebook</h3>
              <p className="text-xs text-gray-400 mt-0.5">Kunjungi profil Facebook resmi</p>
              <span className="text-sm text-toska-600 font-medium inline-block mt-2 group-hover:underline">Buka Link →</span>
            </div>
          </div>
        </a>

        {/* YouTube Card */}
        <a 
          href="https://youtube.com/@learnenglishtogether24?si=mo7hH_0rtRAwfndv" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group block p-6 bg-white border border-toska-100/50 hover:border-toska-500 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Youtube size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">YouTube</h3>
              <p className="text-xs text-gray-400 mt-0.5">Learn English Together</p>
              <span className="text-sm text-toska-600 font-medium inline-block mt-2 group-hover:underline">Buka Channel →</span>
            </div>
          </div>
        </a>

        {/* Instagram Card */}
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group block p-6 bg-white border border-toska-100/50 hover:border-toska-500 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-purple-600 group-hover:text-white transition-all">
              <Instagram size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Instagram</h3>
              <p className="text-xs text-gray-400 mt-0.5">Ikuti kegiatan sehari-hari di Instagram</p>
              <span className="text-sm text-toska-600 font-medium inline-block mt-2 group-hover:underline">Buka Instagram →</span>
            </div>
          </div>
        </a>
      </div>

      {/* Elegant Message Panel */}
      <div className="bg-toska-50/50 border border-toska-100/60 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-toska-100 text-toska-700 flex items-center justify-center mx-auto mb-4">
          <Mail size={24} />
        </div>
        <h3 className="font-bold text-lg text-toska-900">Ingin Mengirimkan Surel?</h3>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
          Untuk kolaborasi, undangan bernyanyi, akting, atau sekadar mengirimkan umpan balik mengenai karya tulis cerpen, silakan kirimkan email Anda.
        </p>
        <a 
          href="mailto:contact@dittalyona.com" 
          className="inline-block mt-6 px-6 py-2.5 bg-toska-600 hover:bg-toska-700 text-white font-medium text-sm rounded-xl shadow-md shadow-toska-600/10 transition-colors"
        >
          Kirim Email
        </a>
      </div>
    </div>
  )
}
