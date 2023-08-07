/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/2z2ihhod6j4p/**',
      },
      {
        protocol: 'http',
        hostname: 'ntp-rubus.ru',
        port: ''
      },
    ],
  },
}