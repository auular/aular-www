const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    output: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "/src/styles")],
    prependData: `@import "./sass/main.scss";`,
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // {
          //   key: "Content-Security-Policy",
          //   value: "default-src 'self'",
          // },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // {
          //   key: "Permissions-Policy",
          //   value: "camera=(); battery=(self); geolocation=(); microphone=()",
          // },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
