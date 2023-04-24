/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space','cdn.lorem.space','mdbcdn.b-cdn.net'],
  },
}

module.exports = nextConfig
