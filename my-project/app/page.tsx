import MaintenancePopup from './components/MaintenancePopup'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Konten utama website */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Selamat Datang di Website Kami
        </h1>
        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
          Kami sedang bekerja keras untuk menyiapkan pengalaman terbaik untuk Anda.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">{item}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Fitur {item}</h2>
              <p className="text-gray-400">Deskripsi fitur yang akan datang...</p>
            </div>
          ))}
        </div>
      </div>

      <MaintenancePopup />
    </main>
  )
}
