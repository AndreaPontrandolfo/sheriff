import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { blog } from '@/lib/source'; // Assuming blog loader is in lib/source

// Configure layout specifically for blog posts
const blogOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: blog.pageTree, // Assumes your blog loader provides a pageTree
  // You can add other blog-specific layout options here, like:
  // githubUrl: 'YOUR_REPO_URL/tree/main/content/blog', // Example if blog content is in a subfolder
  // links: [], // Or specific links for the blog section
};

export default function BlogPageLayout({ children }: { children: ReactNode }) {
  return <DocsLayout {...blogOptions}>{children}</DocsLayout>;
}
