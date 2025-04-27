import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  // bg-background and text-foreground were added here because of shadcn compatibility. Reference: https://github.com/fuma-nama/fumadocs-shadcn?tab=readme-ov-file#with-shadcn-ui
  return (
    <HomeLayout className="bg-background text-foreground" {...baseOptions}>
      {children}
    </HomeLayout>
  );
}
