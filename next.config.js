/** @type {import('next').NextConfig} */

// Definir la variable que contendra las rutas
let path;

if (process.env.NODE_ENV === 'development') {
  path = ''
} else {
  path = '/EddyBel/Notebook'
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: path,
  assetPrefix: path
}

module.exports = nextConfig
