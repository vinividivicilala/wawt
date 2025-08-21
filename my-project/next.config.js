/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mengizinkan file static di public folder
  async rewrites() {
    return [
      {
        source: '/legacy',
        destination: '/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
