import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Life Is What It Is Learn',
  description: 'Website pribadi dengan Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-black text-white`}>
        <nav className="bg-black shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-3xl font-bold text-white">
                    Life Is What It Is Learn
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="/"
                    className="border-transparent text-gray-300 hover:border-gray-500 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                  >
                    Beranda
                  </a>
                  <a
                    href="/tentang-saya"
                    className="border-transparent text-gray-300 hover:border-gray-500 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                  >
                    Tentang Saya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
