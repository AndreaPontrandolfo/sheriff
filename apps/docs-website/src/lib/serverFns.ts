import type * as PageTree from 'fumadocs-core/page-tree';
import { createServerFn } from '@tanstack/react-start';
import { blog, source } from '@/lib/source.server';

export interface BlogPost {
  url: string;
  title: string;
  description: string | undefined;
  date: string;
}

// Recursively replace icon (React element) with icon name string so the tree
// is serializable across the server→client boundary.
/**
 * The icon name is extracted from the element's type (the component function name).
 */
function replaceIconsWithNames(node: PageTree.Node): PageTree.Node {
  if (node.type === 'page') {
    const { icon, ...rest } = node;
    const iconName =
      icon && typeof icon === 'object' && 'type' in icon
        ? (icon as { type?: { name?: string } }).type?.name
        : undefined;

    return {
      ...rest,
      ...(iconName
        ? { icon: iconName as unknown as PageTree.Node['icon'] }
        : {}),
    } as PageTree.Node;
  }
  if (node.type === 'folder') {
    const { icon, ...rest } = node;
    const iconName =
      icon && typeof icon === 'object' && 'type' in icon
        ? (icon as { type?: { name?: string } }).type?.name
        : undefined;

    return {
      ...rest,
      ...(iconName
        ? { icon: iconName as unknown as PageTree.Node['icon'] }
        : {}),
      children: rest.children.map(replaceIconsWithNames),
      ...(rest.index
        ? { index: replaceIconsWithNames(rest.index) as PageTree.Item }
        : {}),
    } as PageTree.Node;
  }

  return node;
}

export const getPageTree = createServerFn({ method: 'GET' }).handler(
  // @ts-expect-error
  async () => {
    const posts = blog.getPages();
    const postsByYear: Record<string, BlogPost[]> = {};

    for (const post of posts) {
      const postDate = new Date(String(post.data.date));
      const year = postDate.getFullYear().toString();

      if (!postsByYear[year]) {
        postsByYear[year] = [];
      }
      postsByYear[year].push({
        url: post.url,
        title: post.data.title,
        description: post.data.description,
        date: String(post.data.date),
      });
    }

    const years = Object.keys(postsByYear).toSorted(
      (a, b) => Number(b) - Number(a),
    );

    const blogTree = {
      // eslint-disable-next-line unicorn/no-unused-properties
      name: 'Blog',
      children: years.map((year) => {
        return {
          type: 'folder' as const,
          name: year,
          defaultOpen: true,
          children: postsByYear[year]
            .toSorted(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .map((post) => {
              return {
                type: 'page' as const,
                name: post.title,
                url: post.url,
              };
            }),
        };
      }),
    };

    const strippedDocChildren = source.pageTree.children.map(
      replaceIconsWithNames,
    );

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
  },
);
