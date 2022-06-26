/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.dicebear.com",
      "lh3.googleusercontent.com",
    ],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
