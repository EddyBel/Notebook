/** @type {import('next').NextConfig} */

// Definir la ruta base dependiendo del estado de desarrollo
const path = process.env.NODE_ENV === "development" ? "" : "/Notebook";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: path,
  assetPrefix: path,
};

module.exports = nextConfig;
