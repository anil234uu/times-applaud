/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/news',
        destination: '/category/news',
        permanent: true,
      },
      {
        source: '/entertainment',
        destination: '/category/entertainment',
        permanent: true,
      },
      {
        source: '/sports',
        destination: '/category/sports',
        permanent: true,
      },
      {
        source: '/technology',
        destination: '/category/technology',
        permanent: true,
      },
      {
        source: '/travel',
        destination: '/category/travel',
        permanent: true,
      },
      {
        source: '/lifestyle',
        destination: '/category/lifestyle',
        permanent: true,
      },
      {
        source: '/health',
        destination: '/category/health',
        permanent: true,
      },
      {
        source: '/fashion',
        destination: '/category/fashion',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
