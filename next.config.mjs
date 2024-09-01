/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
};

export default nextConfig;
