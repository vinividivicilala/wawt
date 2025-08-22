/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Nonaktifkan kompresi karena Netlify sudah menanganinya
  compress: false,
  
  // Nonaktifkan header powered-by untuk keamanan
  poweredByHeader: false,
  
  // Konfigurasi images
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
    unoptimized: true // Penting untuk deploy di Netlify
  },
  
  // Opsi untuk static export (jika ingin menggunakan SSG)
  // output: 'export',
  
  // Opsi experimental (hati-hati dengan ini di production)
  experimental: {
    // optimizeCss: true, // Nonaktifkan sementara karena eksperimental
  },
  
  // Redirect dan rewrite jika diperlukan
  async redirects() {
    return [
      {
        source: '/tentang-saya',
        destination: '/tentang-saya',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
