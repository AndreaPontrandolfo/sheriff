import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/Logo';

/**
 * Shared layout configurations.
 *
 * You can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx.
 */
export const baseOptions: BaseLayoutProps = {
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
