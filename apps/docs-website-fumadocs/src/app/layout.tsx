import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import QueryProvider from '@/components/QueryProvider';
// import { Footer } from '@/components/ui/Footer';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <QueryProvider>{children}</QueryProvider>
        </RootProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
