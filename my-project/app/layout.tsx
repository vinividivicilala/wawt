import './globals.css'
import { ReactNode } from 'react'
import NextJSDetector from './components/NextJSDetector'

export const metadata = {
  title: 'My Project - Under Maintenance',
  description: 'Website ini sedang dalam pengembangan',
  generator: 'Next.js',
  applicationName: 'My Next.js App',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Developer' }],
  creator: 'Developer',
  publisher: 'Developer',
  metadataBase: new URL('https://yourdomain.netlify.app'),
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: false,
    follow: false,
  },
  // Open Graph
  openGraph: {
    title: 'My Project - Under Maintenance',
    description: 'Website ini sedang dalam pengembangan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* Next.js detection helper */}
        <meta name="next-head-count" content="3" />
      </head>
      <body className="antialiased">
        <NextJSDetector />
        {children}
      </body>
    </html>
  )
}
