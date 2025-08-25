// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [
      "www.svgrepo.com" // kalau kamu masih load logo Google dari luar
    ],
  },
  experimental: {
    optimizeCss: true,
  },
}

// aktifkan MDX
const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
