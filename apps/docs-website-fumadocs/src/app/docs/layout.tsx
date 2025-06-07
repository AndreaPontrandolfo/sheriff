import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source, blog } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import type { PageTree } from 'fumadocs-core/server';

const pageTreeWithCustomRoot: PageTree.Root = {
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
      children: blog.pageTree.children,
    },
  ],
};

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTreeWithCustomRoot,
  githubUrl: 'https://github.com/AndreaPontrandolfo/sheriff',
  links: [
    {
      type: 'custom',
      children: (
        <GithubInfo
          owner="AndreaPontrandolfo"
          repo="sheriff"
          className="lg:-mx-2"
        />
      ),
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
