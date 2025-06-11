'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import AstroDarkLogo from '@/assets/logos/astro-icon-dark.svg?url';
import AstroLightLogo from '@/assets/logos/astro-icon-light.svg?url';
import EslintLogo from '@/assets/logos/eslint.svg?url';
import JestLogo from '@/assets/logos/jest.svg?url';
import LodashLogo from '@/assets/logos/lodash.svg?url';
import NextjsLogo from '@/assets/logos/nextjs.svg?url';
import PlaywrightLogo from '@/assets/logos/playwright.svg?url';
import RamdaLogo from '@/assets/logos/ramda.svg?url';
import ReactLogo from '@/assets/logos/react.svg?url';
import StorybookLogo from '@/assets/logos/storybook.svg?url';
import TypescriptLogo from '@/assets/logos/typescript.svg?url';
import VitestLogo from '@/assets/logos/vitest.svg?url';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { HPSectionStart } from './HPSectionStart';
import { IntegrationCard } from './IntegrationCard';

export function IntegrationsSection() {
  const { theme } = useTheme();

  // #region Mounting state
  // This is a specific workaround to resolve a hydration error caused by the dynamic Astro logo.
  const [isMounted, setIsMounted] = useState(false);

  // eslint-disable-next-line react-you-might-not-need-an-effect/you-might-not-need-an-effect
  useEffect(() => {
    // eslint-disable-next-line react-you-might-not-need-an-effect/you-might-not-need-an-effect
    setIsMounted(true);
  }, []);
  // #endregion

  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Refs for left-side cards
  const leftTop1Ref = useRef<HTMLDivElement>(null);
  const leftTop2Ref = useRef<HTMLDivElement>(null);
  const leftMiddleRef = useRef<HTMLDivElement>(null);
  const leftBottom1Ref = useRef<HTMLDivElement>(null);
  const leftBottom2Ref = useRef<HTMLDivElement>(null);

  // Refs for right-side cards
  const rightTop1Ref = useRef<HTMLDivElement>(null);
  const rightTop2Ref = useRef<HTMLDivElement>(null);
  const rightMiddleRef = useRef<HTMLDivElement>(null);
  const rightBottom1Ref = useRef<HTMLDivElement>(null);
  const rightBottom2Ref = useRef<HTMLDivElement>(null);

  /**
   * For side icons.
   */
  const iconSize = 24;
  /**
   * For center icon.
   */
  const centerIconSize = 32;

  return (
    <section className="px-6 py-20 sm:px-0">
      <HPSectionStart
        title="Batteries included"
        description="Sheriff is the ultimate culmination of the ESLint ecosystem. It is designed to be an all-in-one solution. Forget about dependency management hell. Everything your project needs is already built-in."
        buttonText="Learn more about the techs involved"
        buttonLink="/docs/techs"
      />

      <div className="mx-auto max-w-2xl md:max-w-5xl">
        <div
          className="relative mx-auto flex items-center justify-between md:max-w-sm"
          ref={containerRef}
        >
          <div className="space-y-5">
            <IntegrationCard ref={leftTop2Ref}>
              <Image
                src={TypescriptLogo}
                alt="TypeScript Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={leftTop1Ref}>
              <Image
                src={ReactLogo}
                alt="React Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={leftMiddleRef}>
              <Image
                src={NextjsLogo}
                alt="Next.js Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={leftBottom1Ref}>
              <Image
                src={StorybookLogo}
                alt="Storybook Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={leftBottom2Ref}>
              {isMounted && (
                <Image
                  src={theme === 'dark' ? AstroLightLogo : AstroDarkLogo}
                  alt="Astro Logo"
                  width={iconSize}
                  height={iconSize}
                />
              )}
            </IntegrationCard>
          </div>
          <div className="mx-auto my-2 flex w-fit justify-center gap-2">
            <div className="bg-muted relative z-20 rounded-2xl border p-1">
              <IntegrationCard
                isCenter
                ref={centerRef}
                className="shadow-black-950/10 bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
              >
                <Image
                  src={EslintLogo}
                  alt="ESLint Logo"
                  width={centerIconSize}
                  height={centerIconSize}
                />
              </IntegrationCard>
            </div>
          </div>
          <div
            role="presentation"
            className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
          ></div>

          <div className="space-y-5">
            <IntegrationCard ref={rightTop1Ref}>
              <Image
                src={JestLogo}
                alt="Jest Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={rightTop2Ref}>
              <Image
                src={VitestLogo}
                alt="Vitest Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={rightMiddleRef}>
              <Image
                src={PlaywrightLogo}
                alt="Playwright Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={rightBottom1Ref}>
              <Image
                src={RamdaLogo}
                alt="Ramda Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
            <IntegrationCard ref={rightBottom2Ref}>
              <Image
                src={LodashLogo}
                alt="Lodash Logo"
                width={iconSize}
                height={iconSize}
              />
            </IntegrationCard>
          </div>

          {/* AnimatedBeams */}
          {/* Left side to Center */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftTop1Ref}
            toRef={centerRef}
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftTop2Ref}
            toRef={centerRef}
            duration={3}
            delay={0.2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftMiddleRef}
            toRef={centerRef}
            duration={3}
            delay={0.4}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftBottom1Ref}
            toRef={centerRef}
            duration={3}
            delay={0.6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftBottom2Ref}
            toRef={centerRef}
            duration={3}
            delay={0.8}
          />

          {/* Right side to Center (reversed) */}
          <AnimatedBeam
            reverse
            containerRef={containerRef}
            fromRef={rightTop1Ref}
            toRef={centerRef}
            duration={3}
            delay={0.1}
          />
          <AnimatedBeam
            reverse
            containerRef={containerRef}
            fromRef={rightTop2Ref}
            toRef={centerRef}
            duration={3}
            delay={0.3}
          />
          <AnimatedBeam
            reverse
            containerRef={containerRef}
            fromRef={rightMiddleRef}
            toRef={centerRef}
            duration={3}
            delay={0.5}
          />
          <AnimatedBeam
            reverse
            containerRef={containerRef}
            fromRef={rightBottom1Ref}
            toRef={centerRef}
            duration={3}
            delay={0.7}
          />
          <AnimatedBeam
            reverse
            containerRef={containerRef}
            fromRef={rightBottom2Ref}
            toRef={centerRef}
            duration={3}
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
}
