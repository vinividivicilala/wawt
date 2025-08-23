import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TentangSaya() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update waktu setiap detik
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Blogo</h1>
              <p className="text-sm text-gray-400">Life Is What It Is Learn</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium">Farid Ardiansyah</p>
              <p className="text-xs text-gray-400">farid@example.com</p>
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">FA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tentang Saya Section */}
        <div className="border border-gray-800 rounded-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Tentang Saya</h1>
            <div className="text-sm text-gray-400 text-right">
              <div>Terakhir update:</div>
              <div>{formatDate(currentTime)}</div>
              <div>{formatTime(currentTime)}</div>
            </div>
          </div>
          
          <div className="prose prose-invert text-gray-300 max-w-none">
            <p className="text-xl mb-6">
              Halo! Saya seorang developer yang passionate dalam membangun website modern.
            </p>
            
            <div className="border-t border-b border-gray-800 py-6 my-6">
              <h2 className="text-2xl font-bold mb-4">Profil Saya</h2>
              <p className="mb-4">
                Saya adalah seorang web developer dengan pengalaman lebih dari 5 tahun dalam membangun
                aplikasi web modern. Saya memiliki keahlian dalam berbagai teknologi termasuk Next.js,
                React, TypeScript, dan Tailwind CSS.
              </p>
              <p>
                Saya sangat tertarik dengan perkembangan teknologi web terbaru dan selalu berusaha
                untuk mengikuti best practices dalam pengembangan web.
              </p>
            </div>

            <div className="py-6">
              <h2 className="text-2xl font-bold mb-4">Keahlian</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  "Next.js", "React", "TypeScript", 
                  "Tailwind CSS", "Node.js", "GraphQL"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 border border-gray-800 rounded-md bg-gray-900 hover:border-gray-700 transition-colors">
                    <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tombol Kembali ke Beranda */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
        <p>© 2025 Blogo. All rights reserved.</p>
      </footer>
    </div>
  );
}
