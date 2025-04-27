import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

import { GithubInfo } from 'fumadocs-ui/components/github-info';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
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
