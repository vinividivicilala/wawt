import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Project - Under Maintenance',
  description: 'Website ini sedang dalam pengembangan',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
