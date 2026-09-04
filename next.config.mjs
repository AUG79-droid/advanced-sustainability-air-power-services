/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/advanced-sustainability-air-power-services",
  assetPrefix: "/advanced-sustainability-air-power-services",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages publishes the client-only course. Cloudflare/D1-only files are
  // validated by the Vinext/Sites build and are not part of this static target.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
