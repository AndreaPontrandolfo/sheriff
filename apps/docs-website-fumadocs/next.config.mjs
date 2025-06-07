import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['oxc-transform', 'typescript', 'twoslash'],
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default withMDX(nextConfig);
