"use client";

import { auth, provider, db } from "@/lib/firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export default function TentangSaya() {
  const [user, setUser] = useState<any>(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login gagal:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-6">
      <h1 className="text-5xl font-bold">Life Is What It Is Learn</h1>
      <h2 className="text-3xl">Tentang Saya</h2>

      {user ? (
        <div className="space-y-4">
          <p>Halo, {user.displayName}</p>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 rounded-2xl hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-green-600 rounded-2xl hover:bg-green-700"
        >
          Login dengan Google
        </button>
      )}
    </div>
  );
}
