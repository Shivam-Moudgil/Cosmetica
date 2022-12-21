/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    Base_URL: process.env.Base_URL,
    Cart_Route: process.env.Cart_Route,
    Order_Route: process.env.Order_Route,
  },
};

module.exports = nextConfig;
