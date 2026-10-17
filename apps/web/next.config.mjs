/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@readup/core", "@readup/content", "@readup/docs"],
  async redirects() {
    return [{ source: "/tecnico", destination: "/lecturas?filtro=T%C3%A9cnico", permanent: true }];
  },
};

export default nextConfig;
