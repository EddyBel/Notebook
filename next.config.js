/** @type {import('next').NextConfig} */

// Definir la variable que contendra las rutas
let path;
// Verificar si se esta en desarrollo o produccion
if (process.env.NODE_ENV === 'development') {
  path = '' // si esta en desarrollo la ruta principal es el home
} else {
  path = "/Notebook" //si se esta en produccion definir el nombre del inicio de la ruta.
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
