import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development'
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
};

const buildConfig = _phase => {
  const plugins = [withPWA]
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  })
  return config
}

export default buildConfig

