/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      domains: ['localhost'],
      unoptimized: true, // Add this for static exports
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '8889',
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
  
  module.exports = nextConfig