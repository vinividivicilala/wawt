'use client'

import { useEffect, useState } from 'react'

export default function MaintenancePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    // Cek localStorage untuk melihat jika popup sudah ditutup sebelumnya
    const isDismissed = typeof window !== 'undefined' ? localStorage.getItem('popupDismissed') : null
    if (isDismissed) {
      setShowPopup(false)
      return
    }
    
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Simpan di localStorage bahwa user sudah menutup popup
    if (typeof window !== 'undefined') {
      localStorage.setItem('popupDismissed', 'true')
    }
    setTimeout(() => setShowPopup(false), 300)
  }

  if (!showPopup) return null

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-gray-900 border border-cyan-500 rounded-xl max-w-md w-full mx-4 p-8 transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-90'}`}>
        {/* SVG animasi gear */}
        <div className="flex justify-center mb-6">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#00ffff" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-spin"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"></path>
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-center text-cyan-400 mb-4">Website Dalam Perkembangan</h2>
        <p className="text-gray-300 text-center mb-6">
          Fitur dan tampilan mungkin akan berubah seiring waktu. Terima kasih atas pengertiannya.
        </p>
        
        <button 
          onClick={handleClose}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Mengerti dan lanjutkan"
        >
          Mengerti, Lanjutkan
        </button>
      </div>
    </div>
  )
}
