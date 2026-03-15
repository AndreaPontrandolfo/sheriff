import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { useMatch } from '@tanstack/react-router';
import { baseOptions } from '@/lib/layout.shared';

export function SharedDocsLayout({ children }: { children: ReactNode }) {
  const { loaderData } = useMatch({ from: '__root__' });
  const pageTree = loaderData?.pageTree;

  const docsOptions: DocsLayoutProps = {
    ...baseOptions(),
    tree: pageTree,
    githubUrl: 'https://github.com/AndreaPontrandolfo/sheriff',
  };

  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
