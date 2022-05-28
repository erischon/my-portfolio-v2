/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const images = {
  domains: ["cdn.sanity.io"],
};

module.exports = { nextConfig, images };
