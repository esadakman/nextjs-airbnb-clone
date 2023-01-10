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
    mapbox_key: ''
  }
}
