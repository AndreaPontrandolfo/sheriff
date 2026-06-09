import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/Logo';

/**
 * Shared layout configurations.
 *
 * You can customise layouts individually from:
 * Home Layout: routes/index.tsx
 * Docs Layout: routes/docs/$.tsx.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    themeSwitch: {
      mode: 'light-dark-system',
    },
    nav: {
      title: (
        <>
          <Logo />
          Sheriff
        </>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs/introduction',
        active: 'nested-url',
      },
      {
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
    ],
  };
}
