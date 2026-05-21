/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turbopack is the default bundler in Next.js 16+
  turbopack: {},
  // Transpile Three.js ecosystem packages that ship ESM only
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}

module.exports = nextConfig
