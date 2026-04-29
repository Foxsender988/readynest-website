import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      {
        source: "/how-it-works",
        destination: "/process",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
