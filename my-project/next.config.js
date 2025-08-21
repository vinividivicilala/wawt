/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Pastikan output: 'export' dihapus atau dikomentari
  // output: 'export',
  images: {
    unoptimized: true
  },
  // Menonaktifkan static optimization untuk menangani redirects
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
