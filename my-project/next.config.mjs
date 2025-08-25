// next.config.mjs
import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ["www.svgrepo.com"],
  },
  experimental: {
    optimizeCss: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // ⬅️ WAJIB ada ini
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
