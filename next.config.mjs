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
          {
            protocol: 'https', // Allow images from your live server
            hostname: 'shabsa.eportsolutions.co.tz',
            pathname: '/storage/**', // Allow all images from storage
          },
        ],
      },
};

export default nextConfig;
