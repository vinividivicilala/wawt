"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import dynamic from "next/dynamic";

const TentangContent = dynamic(() => import("../tentang.mdx"));


export default function TentangSaya() {
  const [user, setUser] = useState<any>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Simpan login user secara permanen
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Update waktu tanpa detik berjalan
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted =
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }) +
        " • " +
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        });
      setLastUpdated(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        {/* Logo + Nama Website */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/5.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Life Is What It Is Learn</span>
        </div>

        {/* Login / Logout */}
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Icon pengguna */}
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {/* Halo + Nama */}
              <div className="flex flex-col items-end">
                <span className="text-lg">Halo,</span>
                <span className="text-xl font-bold">{user.displayName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-lg bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center space-x-3 px-6 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Image
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                width={24}
                height={24}
              />
              <span className="text-xl font-medium">Masuk dengan Google</span>
            </button>
          )}
        </div>
      </div>

      {/* Judul Tentang Saya di atas box */}
      <div className="text-left mt-8 mb-6">
        <h2 className="text-5xl font-bold text-white">
          Tentang Saya
        </h2>
      </div>

      {/* Content Box */}
      <div className="w-11/12 mx-auto mt-8 border border-gray-700 rounded-3xl p-12 bg-gradient-to-br from-gray-900 to-black shadow-2xl relative overflow-hidden">
        {/* Efek cahaya di sudut */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full opacity-70"></div>
        
        {/* Last Updated */}
        <p className="text-lg mb-6 text-right text-white">
          Diperbarui {lastUpdated}
        </p>

        {/* Nama Website */}
        <h1 className="text-5xl font-bold mb-10 text-left text-white">
          Life Is What It Is Learn
        </h1>

        {/* Detail Tentang Saya */}
        <div className="space-y-8 text-2xl leading-relaxed text-justify text-white">
          <p>
            Halo, selamat datang di halaman <b className="text-blue-300">Tentang Saya</b>. Website ini
            dibuat untuk berbagi informasi, pengetahuan, dan pengalaman.
          </p>
          <p>
            Anda bisa menemukan lebih banyak informasi melalui tautan berikut:{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition-colors"
            >
              Kunjungi Website Saya
            </a>
          </p>
          <div className="flex justify-center mt-10">
            <div className="relative group">
              <Image
                src="/images/5.jpg"
                alt="Tentang Saya"
                width={500}
                height={400}
                className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Render isi dari MDX */}
        <div className="prose prose-invert max-w-none mt-12">
          <TentangContent />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 pb-8 text-gray-400">
        <p>© {new Date().getFullYear()} Life Is What It Is Learn</p>
      </div>
    </div>
  );
}
