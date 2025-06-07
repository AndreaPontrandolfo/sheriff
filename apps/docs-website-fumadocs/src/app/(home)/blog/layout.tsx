import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { blog } from '@/lib/source';

function getBlogTree() {
  const posts = blog.getPages();
  const postsByYear: Record<string, typeof posts> = {};

  for (const post of posts) {
    const year = new Date(post.data.date as string | number).getFullYear();
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  }

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return {
    name: 'Blog',
    children: years.map((year) => ({
      type: 'folder' as const,
      name: year,
      defaultOpen: true,
      children: postsByYear[year]
        .sort(
          (a, b) =>
            new Date(b.data.date as string | number).getTime() -
            new Date(a.data.date as string | number).getTime(),
        )
        .map((post) => ({
          type: 'page' as const,
          name: post.data.title as string,
          url: post.url,
        })),
    })),
  };
}

const blogOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: getBlogTree(),
};

export default function BlogPageLayout({ children }: { children: ReactNode }) {
  return <DocsLayout {...blogOptions}>{children}</DocsLayout>;
}
