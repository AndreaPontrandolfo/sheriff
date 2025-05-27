'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { GridBackground } from '@/components/ui/grid-background';
import { CopyToClipboard } from '@/components/ui/copy-to-clipboard';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { LuChevronRight } from 'react-icons/lu';
import { useMediaQuery } from '@uidotdev/usehooks';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// TODO: these fade-in animation destroys SEO ranking especially on mobile. Should remove them.

export function HeroSection() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <section className="relative pt-24">
      {!isMobile && (
        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
      )}
      <div className="mx-auto max-w-5xl px-6">
        <div className="pb-20 sm:mx-auto lg:mr-auto lg:mt-0">
          {!isMobile && (
            <GridBackground
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
          {isMobile ? (
            <h1 className="mt-8 text-balance text-center text-5xl font-medium lg:mt-16">
              The Nextgen Typescript Linting Experience
            </h1>
          ) : (
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-8 text-5xl font-medium md:max-w-2xl md:text-6xl lg:mt-16"
            >
              The Nextgen Typescript Linting Experience
            </TextEffect>
          )}

          {isMobile ? (
            <p className="dark:text-muted-foreground mt-6 text-pretty text-center text-lg">
              All the power of ESLint at your fingertips, without the hassle
            </p>
          ) : (
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.3}
              as="p"
              className="dark:text-muted-foreground mt-6 max-w-2xl text-pretty text-lg"
            >
              All the power of ESLint at your fingertips, without the hassle.
            </TextEffect>
          )}

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    duration: 0.4,
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12 flex flex-col items-center md:items-start"
          >
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
                className="dark:bg-background h-11 rounded-xl px-10 py-2 text-base dark:hover:bg-zinc-800"
              >
                <Link href="/docs/rules">
                  <div className="flex items-center gap-2 text-nowrap">
                    Rules
                    <LuChevronRight />
                  </div>
                </Link>
              </Button>
            </div>
            <div className="mt-4 flex w-fit items-center justify-between gap-2 rounded-xl bg-zinc-900 px-4 py-2">
              <code className="text-zinc-200">
                pnpm create @sherifforg/config
              </code>
              <CopyToClipboard value="pnpm create @sherifforg/config"></CopyToClipboard>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
