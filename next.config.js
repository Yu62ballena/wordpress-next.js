/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['images.microcms-assets.io', 'yu-and-you.com', 'live.staticflickr.com', 'pdf.wondershare.jp', 'localhost', 'ad.linksynergy.com', 'secure.gravatar.com'],
  },
}

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig
