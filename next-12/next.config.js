/** @type {import('next').NextConfig} */

const remotePatterns = [
  {
    protocol: "https",
    hostname: "**",
  },
  {
    protocol: "http",
    hostname: "**",
  },
];

if (process.env.NODE_ENV === "development") {
  remotePatterns.push({
    protocol: "http",
    hostname: "localhost",
  });
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns,
  },
};

module.exports = nextConfig;
