import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lipsum.app",
      },
    ],
  },
};

export default nextConfig;
