/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
