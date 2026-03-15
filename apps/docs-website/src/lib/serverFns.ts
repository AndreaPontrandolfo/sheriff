import { createServerFn } from '@tanstack/react-start';
import { blog, source } from '@/lib/source';
import type { PageTree } from 'fumadocs-core/server';

export type BlogPost = {
  url: string;
  title: string;
  description: string | undefined;
  date: string;
};

// Recursively strip icon (React element) from page tree nodes so the tree
// is serializable across the server→client boundary.
function stripIcons(node: PageTree.Node): PageTree.Node {
  if (node.type === 'page') {
    const { icon: _icon, ...rest } = node;
    return rest as PageTree.Node;
  }
  if (node.type === 'folder') {
    const { icon: _icon, ...rest } = node;
    return {
      ...rest,
      children: rest.children.map(stripIcons),
      ...(rest.index ? { index: stripIcons(rest.index) as PageTree.Item } : {}),
    } as PageTree.Node;
  }
  return node;
}

export const getPageTree = createServerFn({ method: 'GET' }).handler(async () => {
  const posts = blog.getPages();
  const postsByYear: Record<string, BlogPost[]> = {};

  for (const post of posts) {
    const postDate = new Date(String(Reflect.get(post.data, 'date')));
    const year = postDate.getFullYear().toString();

    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push({
      url: post.url,
      title: post.data.title,
      description: post.data.description,
      date: String(Reflect.get(post.data, 'date')),
    });
  }

  const years = Object.keys(postsByYear).toSorted((a, b) => Number(b) - Number(a));

  const blogTree = {
    name: 'Blog',
    children: years.map((year) => ({
      type: 'folder' as const,
      name: year,
      defaultOpen: true,
      children: postsByYear[year]
        .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => ({
          type: 'page' as const,
          name: post.title,
          url: post.url,
        })),
    })),
  };

  const strippedDocChildren = source.pageTree.children.map(stripIcons);

  return {
    name: 'Root',
    children: [
      {
        type: 'folder' as const,
        name: 'Documentation',
        children: strippedDocChildren,
      },
      {
        type: 'folder' as const,
        name: 'Blog',
        children: blogTree.children,
        index: {
          type: 'page' as const,
          name: 'Blog',
          url: '/blog',
        },
      },
    ],
  };
});
