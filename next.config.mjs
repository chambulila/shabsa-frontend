// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/',
          permanent: true, // Set to true for a 301 redirect, or false for a 302 redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  
  