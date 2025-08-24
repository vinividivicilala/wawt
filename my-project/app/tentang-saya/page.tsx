"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export default function TentangSaya() {
  const [user, setUser] = useState<any>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Simpan login user secara permanen (persisted login)
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

  // Update waktu otomatis
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }) + ` • ${now.toLocaleTimeString("id-ID")}`;
      setLastUpdated(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
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
          <span className="text-xl font-bold">Life Is What It Is Learn</span>
        </div>

        {/* Login / Logout */}
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 border border-red-400 text-red-400 rounded-full hover:bg-red-600 hover:text-white"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center space-x-2 px-5 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white"
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

      {/* Content Box */}
      <div className="max-w-3xl mx-auto mt-10 border border-gray-600 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-2">Tentang Saya</h2>
        <p className="text-sm text-gray-400 mb-4">
          Diperbarui {lastUpdated}
        </p>
        <h1 className="text-3xl font-bold">Life Is What It Is Learn</h1>
      </div>
    </div>
  );
}
