/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
      ignoreBuildErrors: true, // Temporarily ignore TypeScript errors during build
    },
    eslint: {
      ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
    },
  }
  
  module.exports = nextConfig