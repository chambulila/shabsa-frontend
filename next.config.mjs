const nextConfig = {
  output: 'export', // Enables static export

  images: {
    unoptimized: true, // Disables the image optimization API for static export
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: false, // Set to true for a 301 redirect, or false for a 302 redirect
      },
    ];
  },
};

export default nextConfig;
