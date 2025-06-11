import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['oxc-transform', 'typescript', 'twoslash'],
  images: {
    dangerouslyAllowSVG: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
      // {
      //   source: '/blog/:path*.mdx',
      //   destination: '/llms.mdx/:path*',
      // },
    ];
  },
};

export default withMDX(nextConfig);
