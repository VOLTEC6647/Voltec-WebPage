/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.dicebear.com",
      "lh3.googleusercontent.com",
      "cdn.medina.dev",
      "www.clarin.com",
      "lastfm.freetls.fastly.net",
      "source.unsplash.com",
      "images.unsplash.com"
    ],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
