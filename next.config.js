/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://yes-dmelz79we-mostafijurs-projects.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
