/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
  experimental: {
    esmExternals: 'loose',
  },
  transpilePackages: ['react-leaflet-cluster'],
  reactStrictMode: false,
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig;
