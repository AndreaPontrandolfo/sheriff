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

const siteTitle = 'Sheriff - Next Generation ESLint Configuration';
const siteDescription =
  'Sheriff is a comprehensive next-gen ESLint configuration that supports various popular technologies. Typescript-first, batteries included, highly configurable.';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.eslint-config-sheriff.dev',
  ),
  title: {
    template: '%s | Sheriff',
    default: siteTitle,
  },
  description: siteDescription,
  keywords: [
    'eslint',
    'typescript',
    'javascript',
    'linting',
    'code quality',
    'sheriff',
    'config',
  ],
  authors: [{ name: 'Andrea Pontrandolfo' }],
  creator: 'Andrea Pontrandolfo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.eslint-config-sheriff.dev',
    siteName: 'Sheriff',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/img/sheriff-logo.svg',
        width: 163,
        height: 144,
        alt: 'Sheriff Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/img/sheriff-logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
