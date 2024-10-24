/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '143.244.182.165',
          port: '',
          pathname: '/wp-content/uploads/**',
        }
      ],
      minimumCacheTTL: 60,
      domains: ['143.244.182.165']
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
  }
  
  module.exports = nextConfig