import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { baseOptions } from '@/lib/layout.shared';
import { blog, source } from '@/lib/source';

function getBlogTree() {
  const posts = blog.getPages();
  const postsByYear: Record<string, typeof posts> = {};

  for (const post of posts) {
    const postDate = new Date(String(Reflect.get(post.data, 'date')));
    const year = postDate.getFullYear().toString();

    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  }

  const years = Object.keys(postsByYear).toSorted(
    (a, b) => Number(b) - Number(a),
  );

  return {
    name: 'Blog',
    children: years.map((year) => {
      return {
        type: 'folder' as const,
        name: year,
        defaultOpen: true,
        children: postsByYear[year]
          .toSorted((a, b) => {
            const secondDate = new Date(
              String(Reflect.get(b.data, 'date')),
            ).getTime();
            const firstDate = new Date(
              String(Reflect.get(a.data, 'date')),
            ).getTime();

            return (
              secondDate - firstDate
            );
          })
          .map((post) => {
            return {
              type: 'page' as const,
              name: post.data.title,
              url: post.url,
            };
          }),
      };
    }),
  };
}

const pageTreeWithCustomRoot = {
  name: 'Root',
  children: [
    {
      type: 'folder',
      name: 'Documentation',
      children: source.pageTree.children,
    },
    {
      type: 'folder',
      name: 'Blog',
      children: getBlogTree().children,
      index: {
        type: 'page',
        name: 'Blog',
        url: '/blog',
      },
    },
  ],
};

const docsOptions: DocsLayoutProps = {
  ...baseOptions(),
  tree: pageTreeWithCustomRoot,
  githubUrl: 'https://github.com/AndreaPontrandolfo/sheriff',
  links: [
    {
      type: 'custom',
      children: (
        <ErrorBoundary fallback={null}>
          <GithubInfo
            owner="AndreaPontrandolfo"
            repo="sheriff"
            token={process.env.GITHUB_TOKEN}
            className="flex-row lg:-mx-2"
          />
        </ErrorBoundary>
      ),
    },
  ],
};

export function SharedDocsLayout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
