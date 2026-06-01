import { createFileRoute } from '@tanstack/react-router'
import { Calendar, User, Award, Music } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-toska-600 uppercase bg-toska-50 px-3 py-1.5 rounded-full">
          Tentang Penulis
        </span>
        <h1 className="text-3xl font-extrabold text-toska-900 mt-4 tracking-tight sm:text-4xl">
          Ditta Lyona
        </h1>
        <p className="text-sm text-gray-500 mt-2">Aktris, Penyanyi, &amp; Penulis Indonesia</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-toska-100/60 rounded-2xl p-6 shadow-sm mb-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-toska-100 flex items-center justify-center text-toska-600 border border-toska-200">
            <User size={48} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-lg text-gray-800">Ratu Marga Ditta</h3>
            <p className="text-sm text-toska-600 font-medium">Lahir: 28 Oktober 2002</p>
            <p className="text-xs text-gray-400 mt-1">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>

      {/* Biography Content */}
      <div className="prose prose-toska max-w-none text-gray-600 leading-relaxed text-base space-y-6">
        <p>
          <strong>Ditta Lyona</strong> (memiliki nama lengkap Ratu Marga Ditta, lahir 28 Oktober 2002) adalah seorang aktris, penyanyi, dan pemain film asal Indonesia. Ia dikenal sebagai penyanyi solo dan vokalis utama untuk duo Teenagers pada tahun 2018 hingga 2025.
        </p>
        <p>
          Kini, selain aktif di dunia seni peran dan musik, ia juga mendedikasikan waktunya untuk menulis kisah-kisah fiksi yang menyentuh hati. Melalui platform digital <em>Cerpen Lyona</em>, ia membagikan karya tulis orisinal yang dikurasi dengan gaya penceritaan estetik, intim, dan imajinatif.
        </p>
      </div>

      {/* Decorative timeline / achievements */}
      <div className="mt-12 border-t border-toska-100/50 pt-10">
        <h2 className="text-xl font-bold text-toska-800 mb-6">Milestone Karir</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-toska-50 text-toska-600 flex items-center justify-center">
              <Music size={16} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">2018 - 2025: Duo Teenagers</p>
              <p className="text-sm text-gray-500">Berkarya sebagai vokalis utama, merilis berbagai hits single pop remaja yang populer secara nasional.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-toska-50 text-toska-600 flex items-center justify-center">
              <Award size={16} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">2025 - Sekarang: Penulis &amp; Artis Solo</p>
              <p className="text-sm text-gray-500">Memulai karir mandiri sebagai penulis cerpen estetik dan mengeksplorasi seni peran lebih mendalam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
