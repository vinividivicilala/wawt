import Link from 'next/link'

export default function TentangSaya() {
  return (
    <div className="min-h-screen bg-black text-gray-100 py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block border border-gray-700 rounded-lg p-3 mb-6">
            <div className="border border-gray-600 rounded-md p-2">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 sm:text-5xl lg:text-6xl">
                Tentang Saya
              </h1>
            </div>
          </div>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
            Halo! Saya seorang developer yang passionate dalam membangun website modern.
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg shadow-lg shadow-blue-500/10 bg-gray-900 overflow-hidden mb-12">
          <div className="px-6 py-8 sm:p-10">
            <div className="mb-8">
              <div className="border-b border-gray-700 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-white">Profil Saya</h2>
              </div>
              <div className="prose prose-invert text-gray-300">
                <p>
                  Saya adalah seorang web developer dengan pengalaman lebih dari 5 tahun dalam membangun
                  aplikasi web modern. Saya memiliki keahlian dalam berbagai teknologi termasuk Next.js,
                  React, TypeScript, dan Tailwind CSS.
                </p>
                <p>
                  Saya sangat tertarik dengan perkembangan teknologi web terbaru dan selalu berusaha
                  untuk mengikuti best practices dalam pengembangan web.
                </p>
              </div>
            </div>

            <div>
              <div className="border-b border-gray-700 pb-4 mb-6">
                <h2 className="text-2xl font-bold text-white">Keahlian</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  "Next.js", "React", "TypeScript", 
                  "Tailwind CSS", "Node.js", "GraphQL"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
                    <svg className="h-5 w-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
