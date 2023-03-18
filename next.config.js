/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["scontent.fdac5-2.fna.fbcdn.net", "www.pexels.com"],
  },
};

module.exports = nextConfig;
