/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            // pathname: '/api/secure-image/**',
            pathname: '/storage/products/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            pathname: '/storage/settings/**',
          },
        ],
      },
};

export default nextConfig;
