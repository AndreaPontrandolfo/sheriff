'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

function Footer() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <div className="relative">
      <footer
        className={cn(
          'flex flex-col border-b bg-white dark:bg-transparent',
          isHomepage
            ? 'mx-auto max-w-4xl px-2 pt-20'
            : 'absolute bottom-0 left-0 right-0 transition-[margin] md:[--fd-sidebar-width:268px] lg:[--fd-sidebar-width:286px] xl:[--fd-toc-width:286px]',
        )}
        style={{
          marginInlineStart: isHomepage ? 'auto' : 'var(--fd-sidebar-width)',
        }}
      >
        <div
          className="mx-auto flex w-full flex-1"
          style={{
            maxWidth: isHomepage
              ? 'auto'
              : 'min(var(--fd-page-width),calc(var(--fd-layout-width) - var(--fd-sidebar-width)))',
          }}
        >
          <div className="mx-6 w-full border-t py-6 md:mx-auto md:w-[calc(100%_-_6rem)]">
            <p className="text-muted-foreground flex flex-col items-center justify-center gap-1 text-sm sm:flex-row">
              <span>
                Copyright © {new Date().getFullYear().toString()}{' '}
                eslint-config-sheriff.
              </span>
              <span>Built with Fumadocs ❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
