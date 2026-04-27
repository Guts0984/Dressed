import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yourdomain.com",
      },
    ],
  },
};

export default nextConfig;
