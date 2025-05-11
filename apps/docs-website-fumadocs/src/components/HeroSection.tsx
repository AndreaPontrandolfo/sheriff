import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { GridBackground } from './ui/grid-background';

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

export function HeroSection() {
  return (
    <section>
      <div className="relative pt-24">
        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
        <div className="mx-auto max-w-5xl px-6">
          <div className="sm:mx-auto lg:mr-auto lg:mt-0">
            <GridBackground />

            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="mt-8 max-w-2xl text-5xl font-medium md:text-6xl lg:mt-16"
            >
              The Nextgen Typescript Linting Experience
            </TextEffect>

            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mt-8 max-w-2xl text-pretty text-lg dark:text-zinc-400"
            >
              All the power of ESLint at your fingertips, without the hassle.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex items-center gap-2"
            >
              <div
                key={1}
                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
              >
                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                  <Link href="/docs/introduction">
                    <span className="text-nowrap">Get started</span>
                  </Link>
                </Button>
              </div>
              <Button
                key={2}
                asChild
                size="lg"
                variant="ghost"
                className="h-10.5 rounded-xl px-5 text-base"
              >
                <Link href="/docs/rules">
                  <span className="text-nowrap">Rules</span>
                </Link>
              </Button>
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
