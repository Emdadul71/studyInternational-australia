/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  publicRuntimeConfig: {
    imagePrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],

    domains: ['localhost', '127.0.0.1'],
  },
};

module.exports = nextConfig;
