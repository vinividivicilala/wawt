'use client'

import { useState, useEffect } from 'react'

export default function DevPopup() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Cek jika popup sudah pernah ditutup
    const isDismissed = localStorage.getItem('devPopupDismissed')
    if (isDismissed) {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('devPopupDismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center flex-col text-center p-5">
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
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"></path>
      </svg>

      <h2 className="text-2xl md:text-3xl mb-4">Website ini sedang dalam perkembangan</h2>
      <p className="text-lg text-gray-300">Fitur dan tampilan mungkin akan berubah seiring waktu.</p>
      
      <button 
        onClick={handleDismiss}
        className="mt-8 px-6 py-3 border-2 border-cyan-400 text-cyan-400 text-lg rounded-lg hover:bg-cyan-400 hover:bg-opacity-10 transition-colors"
      >
        Saya Mengerti
      </button>
    </div>
  )
}