'use client';

import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Button } from '@/components/ui/button';
import { CopyToClipboard } from '@/components/ui/copy-to-clipboard';
import { GridBackground } from '@/components/ui/grid-background';

// TODO: these fade-in animation destroys SEO ranking especially on mobile. Should remove them.

export function HeroSection() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
      <div className="mx-auto max-w-5xl px-6">
        <div className="pb-20 sm:mx-auto lg:mr-auto lg:mt-0">
          <GridBackground />
          {/* TODO: maybe i should use "prose" class here? */}
          <div className="relative mt-8 text-center text-5xl font-medium md:max-w-2xl md:text-left md:text-6xl lg:mt-16">
            <h1 className="text-gradient-gold-metal mb-6 text-8xl md:mb-0">
              Sheriff
            </h1>
            <p className="text-balance">
              The Nextgen Typescript Linting Experience
            </p>
          </div>

          <p className="dark:text-muted-foreground relative mt-6 text-pretty text-center text-lg md:max-w-2xl md:text-left">
            All the power of ESLint at your fingertips, without the hassle.
          </p>

          <div className="mt-12 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <RainbowButton className="rounded-xl text-base" size="lg">
                <Link href="/docs/introduction">
                  <div className="flex items-center gap-2 text-nowrap">
                    Get started
                    <LuChevronRight />
                  </div>
                </Link>
              </RainbowButton>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="dark:bg-background z-1 h-11 rounded-xl px-10 py-2 text-base dark:hover:bg-zinc-800"
              >
                <Link href="/docs/rules">
                  <div className="flex items-center gap-2 text-nowrap">
                    Rules
                    <LuChevronRight />
                  </div>
                </Link>
              </Button>
            </div>
            <div className="z-1 mt-4 flex w-fit items-center justify-between gap-2 rounded-xl bg-zinc-900 px-4 py-2">
              <code className="text-zinc-200">
                pnpm create @sherifforg/config
              </code>
              <CopyToClipboard value="pnpm create @sherifforg/config"></CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
