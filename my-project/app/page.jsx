"use client";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center p-6 relative">
      {/* Konten utama */}
      <h1 className="text-5xl font-bold mb-6">
        🚧 Website Sedang Dalam Perkembangan 🚧
      </h1>

      <p className="text-lg mb-8 opacity-80">
        Kami sedang memperbarui tampilan dan fitur.
        <br />
        Silakan kembali lagi nanti.
      </p>

      <div className="flex gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500 transition"
        >
          Halaman Utama (Next.js)
        </a>

        <a
          href="/index.html"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          Versi HTML Tradisional
        </a>
      </div>

      {/* Pop-up */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/95 text-white z-[9999] flex flex-col items-center justify-center text-center p-6">
          {/* SVG animasi gear */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00ffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin mb-8"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 
              2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06
              a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 
              0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 
              0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 
              1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 
              0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 
              1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1.82.33l.06-.06a2 
              2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"
            />
          </svg>

          <h2 className="text-2xl font-bold mb-4">
            Website ini sedang dalam perkembangan
          </h2>
          <p className="text-lg text-gray-400">
            Fitur dan tampilan mungkin akan berubah seiring waktu.
          </p>

          <button
            onClick={() => setShowPopup(false)}
            className="mt-8 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Saya Mengerti
          </button>
        </div>
      )}
    </main>
  );
}
