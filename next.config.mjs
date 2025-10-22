/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Оптимизация для production
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
