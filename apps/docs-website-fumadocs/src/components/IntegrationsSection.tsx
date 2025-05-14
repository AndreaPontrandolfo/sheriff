'use client';

import React, { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import Link from 'next/link';
import {
  Gem,
  Code2,
  Wand2,
  Codepen,
  FileCode,
  BrainCircuit,
  Sparkles,
  Database,
  Cloud,
  Globe,
  Cpu,
} from 'lucide-react';

export default function IntegrationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Refs for left-side cards
  const gemRef = useRef<HTMLDivElement>(null);
  const databaseRef = useRef<HTMLDivElement>(null);
  const code2Ref = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const wand2Ref = useRef<HTMLDivElement>(null);

  // Refs for right-side cards
  const codepenRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const fileCodeRef = useRef<HTMLDivElement>(null);
  const cpuRef = useRef<HTMLDivElement>(null);
  const brainCircuitRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="relative mx-auto flex max-w-sm items-center justify-between"
            ref={containerRef}
          >
            <div className="space-y-5">
              <IntegrationCard ref={gemRef} position="left-top-1">
                <Gem className="text-purple-500" />
              </IntegrationCard>
              <IntegrationCard ref={databaseRef} position="left-top-2">
                <Database className="text-blue-400" />
              </IntegrationCard>
              <IntegrationCard ref={code2Ref} position="left-middle">
                <Code2 className="text-orange-500" />
              </IntegrationCard>
              <IntegrationCard ref={cloudRef} position="left-bottom-1">
                <Cloud className="text-sky-500" />
              </IntegrationCard>
              <IntegrationCard ref={wand2Ref} position="left-bottom-2">
                <Wand2 className="text-pink-500" />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-2xl border p-1">
                <IntegrationCard
                  ref={centerRef}
                  className="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
                  isCenter={true}
                >
                  <Sparkles className="text-teal-500" />
                </IntegrationCard>
              </div>
            </div>
            <div
              role="presentation"
              className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
            ></div>

            <div className="space-y-5">
              <IntegrationCard ref={codepenRef} position="right-top-1">
                <Codepen className="text-blue-500" />
              </IntegrationCard>
              <IntegrationCard ref={globeRef} position="right-top-2">
                <Globe className="text-green-500" />
              </IntegrationCard>
              <IntegrationCard ref={fileCodeRef} position="right-middle">
                <FileCode className="text-violet-500" />
              </IntegrationCard>
              <IntegrationCard ref={cpuRef} position="right-bottom-1">
                <Cpu className="text-amber-500" />
              </IntegrationCard>
              <IntegrationCard ref={brainCircuitRef} position="right-bottom-2">
                <BrainCircuit className="text-emerald-500" />
              </IntegrationCard>
            </div>

            {/* AnimatedBeams */}
            {/* Left side to Center */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={gemRef}
              toRef={centerRef}
              duration={3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={databaseRef}
              toRef={centerRef}
              duration={3}
              delay={0.2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={code2Ref}
              toRef={centerRef}
              duration={3}
              delay={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={cloudRef}
              toRef={centerRef}
              duration={3}
              delay={0.6}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={wand2Ref}
              toRef={centerRef}
              duration={3}
              delay={0.8}
            />

            {/* Right side to Center (reversed) */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={codepenRef}
              toRef={centerRef}
              duration={3}
              reverse
              delay={0.1}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={globeRef}
              toRef={centerRef}
              duration={3}
              reverse
              delay={0.3}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={fileCodeRef}
              toRef={centerRef}
              duration={3}
              reverse
              delay={0.5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={cpuRef}
              toRef={centerRef}
              duration={3}
              reverse
              delay={0.7}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={brainCircuitRef}
              toRef={centerRef}
              duration={3}
              reverse
              delay={0.9}
            />
          </div>

          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Integrate with your favorite tools
            </h2>
            <p className="text-muted-foreground">
              Connect seamlessly with popular platforms and services to enhance
              your workflow.
            </p>

            <Button variant="outline" size="sm" asChild>
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    position?:
      | 'left-top-1'
      | 'left-top-2'
      | 'left-middle'
      | 'left-bottom-1'
      | 'left-bottom-2'
      | 'right-top-1'
      | 'right-top-2'
      | 'right-middle'
      | 'right-bottom-1'
      | 'right-bottom-2';
    isCenter?: boolean;
  }
>(({ children, className, position, isCenter = false }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-background relative flex size-12 rounded-xl border dark:bg-transparent',
        className,
      )}
    >
      <div
        className={cn(
          'relative z-20 m-auto size-fit *:size-6',
          isCenter && '*:size-8',
        )}
      >
        {children}
      </div>
    </div>
  );
});

IntegrationCard.displayName = 'IntegrationCard';
