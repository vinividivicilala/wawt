"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

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
    // Update setiap menit, bukan setiap detik
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
            <div className="flex items-center space-x-3">
              {/* Foto profil */}
              {user.photoURL && (
                <Image
                  src={user.photoURL}
                  alt="User Photo"
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-400"
                />
              )}
              {/* Halo + Nama */}
              <span className="text-lg">Halo, {user.displayName}</span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-lg border border-red-400 text-red-400 rounded-full hover:bg-red-600 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center space-x-2 px-5 py-2 text-lg border border-blue-400 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white"
            >
              <Image
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                width={20}
                height={20}
              />
              <span>Masuk dengan Google</span>
            </button>
          )}
        </div>
      </div>

      {/* Judul Tentang Saya di atas box */}
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold">Tentang Saya</h2>
      </div>

      {/* Content Box */}
      <div className="max-w-5xl mx-auto mt-8 border border-white rounded-2xl p-10 bg-[#111]">
        {/* Last Updated */}
        <p className="text-lg text-gray-400 mb-6 text-right">Diperbarui {lastUpdated}</p>

        {/* Nama Website */}
        <h1 className="text-4xl font-bold mb-8">Life Is What It Is Learn</h1>

        {/* Detail Tentang Saya */}
        <div className="space-y-6 text-xl leading-relaxed text-justify">
          <p>
            Halo, selamat datang di halaman <b>Tentang Saya</b>. Website ini
            dibuat untuk berbagi informasi, pengetahuan, dan pengalaman.
          </p>
          <p>
            Anda bisa menemukan lebih banyak informasi melalui tautan berikut:{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Kunjungi Website Saya
            </a>
          </p>
          <div className="flex justify-center mt-8">
            <Image
              src="/images/6.jpg"
              alt="Tentang Saya"
              width={450}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
