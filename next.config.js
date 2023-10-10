/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.dummyapi.io",
      },
    ],

  },
}

module.exports = nextConfig
