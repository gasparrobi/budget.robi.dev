/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  images: {
    unoptimized: true,
  },

  env: {
    STATS_URL: process.env.STATS_URL,
    STATS_WEBSITE_ID: process.env.STATS_WEBSITE_ID,
  },
};

module.exports = nextConfig;
