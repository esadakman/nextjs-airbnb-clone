/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
      // domains: ['upload.wikimedia.org']
      domains: ['links.papareact.com', 'jsonkeeper.com']
  },
  nextConfig,
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
  },
}
