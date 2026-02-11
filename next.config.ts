/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "host.docker.internal",
        port: "8080",
        pathname: "/images/**",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",  
    },
  },
};

module.exports = nextConfig;
