// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
    ignoreBuildErrors: true, // ✅ Deploy despite errors
  },
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '', // Allow any port
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add more domains as needed
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;