/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      domains: ['localhost'],
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '143.244.182.165',
          port: '',
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
  