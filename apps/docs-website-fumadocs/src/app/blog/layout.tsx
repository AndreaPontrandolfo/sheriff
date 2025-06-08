import type { ReactNode } from 'react';
import { SharedDocsLayout } from '@/components/SharedDocsLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <SharedDocsLayout>{children}</SharedDocsLayout>;
}
