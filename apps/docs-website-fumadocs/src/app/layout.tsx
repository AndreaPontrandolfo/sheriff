import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import QueryProvider from '@/components/QueryProvider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.eslint-config-sheriff.dev',
  ),
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <QueryProvider>{children}</QueryProvider>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
