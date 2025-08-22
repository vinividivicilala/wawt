// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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

export default nextConfig
