/// <reference types="vite/client" />

import type { ReactNode } from 'react';
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';
import QueryProvider from '@/components/QueryProvider';
import { Footer } from '@/components/Footer';
import { getPageTree } from '@/lib/serverFns';
import '@/global.css';

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <HeadContent />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Sheriff is a comprehensive next-gen ESLint configuration that supports various popular technologies. Typescript-first, batteries included, highly configurable."
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <QueryProvider>{children}</QueryProvider>
          <Footer />
        </RootProvider>
        <Scripts />
      </body>
    </html>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  loader: async () => {
    const pageTree = await getPageTree();
    return { pageTree };
  },
});
