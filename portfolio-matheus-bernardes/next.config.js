/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['github-readme-stats-git-masterrstaa-rickstaa.vercel.app'],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-src 'self' https://app.powerbi.com;",
            },
          ],
        },
      ]
    },
  }
  
  module.exports = nextConfig