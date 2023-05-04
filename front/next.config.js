/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://localhost:3065/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
