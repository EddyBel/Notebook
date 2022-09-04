/** @type {import('next').NextConfig} */

// Configuraciones
const config = require("./config.json")

// Definir la variable que contendra las rutas
let path;

// Verificar si se esta en desarrollo o produccion
process.env.NODE_ENV === "development" ? path = '' : path = config.basePath

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
