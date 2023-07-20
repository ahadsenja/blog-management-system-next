/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/protected',
        destination: '/protected'
      }
    ]
  }
}

module.exports = nextConfig
