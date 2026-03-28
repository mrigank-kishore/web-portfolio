/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/web-portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig