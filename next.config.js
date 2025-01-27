/** @type {import('next').NextConfig} */
const nextConfig = {
  // 完全禁用 ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 忽略 TypeScript 类型检查错误
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
