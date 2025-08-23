"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TentangSaya() {
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Update waktu otomatis kalau ada perubahan data
  useEffect(() => {
    // simulasi last update dari database / props
    setLastUpdate(new Date())
  }, [])

  const formatDate = (date) => {
    return date.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <h1 className="text-lg font-semibold">Life Is What It Is Learn</h1>
        </div>
        <button className="flex items-center space-x-2 bg-transparent border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-800 transition">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
          <span className="text-sm font-medium">Masuk dengan Google</span>
        </button>
      </header>

      {/* Content */}
      <main className="flex justify-center mt-10 px-6">
        <div className="w-full max-w-4xl border border-gray-700 rounded-2xl p-8 bg-black shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Tentang Saya</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Halo! Saya seorang developer yang passionate dalam membangun website modern.
            Saya memiliki pengalaman lebih dari 5 tahun dalam Next.js, React, TypeScript, dan Tailwind CSS.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Saya sangat tertarik dengan perkembangan teknologi web terbaru dan selalu berusaha
            mengikuti best practices dalam pengembangan aplikasi web.
          </p>

          {/* Last update otomatis */}
          <div className="text-sm text-gray-400">
            Terakhir diperbarui: {formatDate(lastUpdate)}
          </div>

          {/* Tombol Kembali */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2 border border-gray-500 rounded-md hover:bg-gray-800 transition"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
