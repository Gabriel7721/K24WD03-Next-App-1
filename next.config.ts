import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/users/static",
        headers: [{ key: "refresh", value: "5" }],
      },
      {
        source: "/users/dynamic",
        headers: [{ key: "refresh", value: "1" }],
      },
      {
        source: "/users/isr",
        headers: [{ key: "refresh", value: "5" }],
      },
    ];
  },
};

export default nextConfig;
