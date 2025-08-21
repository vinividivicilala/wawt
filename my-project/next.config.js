/** @type {import('next').NextConfig} */
const nextConfig = {
  // HAPUS output: 'export' untuk mode full
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: true, // Biarkan header "X-Powered-By: Next.js"
  // Optimasi gambar tetap aktif
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [], // Tambahkan domain external jika perlu
  },
  // Experimental features (opsional)
  experimental: {
    optimizeCss: true, // Optimasi CSS
  },
}

module.exports = nextConfig
