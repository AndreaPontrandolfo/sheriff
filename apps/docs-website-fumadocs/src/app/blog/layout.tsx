import { SharedDocsLayout } from '@/components/SharedDocsLayout';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <SharedDocsLayout>{children}</SharedDocsLayout>;
}
