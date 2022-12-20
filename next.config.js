/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    Base_URL: "http://localhost:3000",
    Cart_Route: process.env.Cart_Route,
    Order_Route: process.env.Order_Route,
  },
};

module.exports = nextConfig;
