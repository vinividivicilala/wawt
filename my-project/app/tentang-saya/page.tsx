"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth"

// 🔥 Konfigurasi Firebase (dari kamu)
const firebaseConfig = {
  apiKey: "AIzaSyAzgMVdqZhrqQ3PqiSWapaCl6oglF3QP64",
  authDomain: "life-is-what-it-is-learn.firebaseapp.com",
  projectId: "life-is-what-it-is-learn",
  storageBucket: "life-is-what-it-is-learn.appspot.com",
  messagingSenderId: "755474876167",
  appId: "1:755474876167:web:205fb4ea8c7b8d5b66e7a2",
}

// Init Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export default function TentangSaya() {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setLastUpdate(new Date())

    // Listener login
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
    })
    return () => unsubscribe()
  }, [])

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error("Login gagal:", error)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
  }

  const formatDate = (date: Date) => {
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
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      {/* Nama Website */}
      <div className="mt-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          Life Is What It Is Learn
        </h1>
      </div>

      {/* Tombol Google */}
      <div className="mt-6">
        {user ? (
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 border border-gray-400 px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            <span className="text-sm">Keluar ({user.displayName})</span>
          </button>
        ) : (
          <button
            onClick={handleGoogleLogin}
            className="flex items-center space-x-2 border border-gray-400 px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium">Masuk dengan Google</span>
          </button>
        )}
      </div>

      {/* Box Tentang Saya */}
      <main className="flex justify-center mt-12 px-6 w-full">
        <div className="w-full max-w-4xl border border-gray-700 rounded-2xl p-8 shadow-lg bg-black">
          <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Halo! Saya seorang developer yang passionate dalam membangun website modern.
            Saya memiliki pengalaman lebih dari 5 tahun dalam Next.js, React, TypeScript, dan Tailwind CSS.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Saya sangat tertarik dengan perkembangan teknologi web terbaru dan selalu berusaha
            mengikuti best practices dalam pengembangan aplikasi web.
          </p>

          {/* Last update */}
          <div className="text-sm text-gray-400">
            Terakhir diperbarui: {formatDate(lastUpdate)}
          </div>

          {/* Link kembali */}
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
