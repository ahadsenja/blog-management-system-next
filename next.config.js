/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
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
