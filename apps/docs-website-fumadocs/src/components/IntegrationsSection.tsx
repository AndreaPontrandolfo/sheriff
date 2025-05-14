import type React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mx-auto flex max-w-sm items-center justify-between">
            <div className="space-y-5">
              <IntegrationCard position="left-top-1">
                <Gem className="text-purple-500" />
              </IntegrationCard>
              <IntegrationCard position="left-top-2">
                <Database className="text-blue-400" />
              </IntegrationCard>
              <IntegrationCard position="left-middle">
                <Code2 className="text-orange-500" />
              </IntegrationCard>
              <IntegrationCard position="left-bottom-1">
                <Cloud className="text-sky-500" />
              </IntegrationCard>
              <IntegrationCard position="left-bottom-2">
                <Wand2 className="text-pink-500" />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-2xl border p-1">
                <IntegrationCard
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
              <IntegrationCard position="right-top-1">
                <Codepen className="text-blue-500" />
              </IntegrationCard>
              <IntegrationCard position="right-top-2">
                <Globe className="text-green-500" />
              </IntegrationCard>
              <IntegrationCard position="right-middle">
                <FileCode className="text-violet-500" />
              </IntegrationCard>
              <IntegrationCard position="right-bottom-1">
                <Cpu className="text-amber-500" />
              </IntegrationCard>
              <IntegrationCard position="right-bottom-2">
                <BrainCircuit className="text-emerald-500" />
              </IntegrationCard>
            </div>
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

const IntegrationCard = ({
  children,
  className,
  position,
  isCenter = false,
}: {
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
}) => {
  return (
    <div
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
      {position && !isCenter && (
        <div
          className={cn(
            'from-foreground/20 to-foreground/5 absolute z-10 h-px bg-gradient-to-r',
            position === 'left-top-1' &&
              'left-full top-1/2 w-[130px] origin-left rotate-[35deg]',
            position === 'left-top-2' &&
              'left-full top-1/2 w-[130px] origin-left rotate-[20deg]',
            position === 'left-middle' &&
              'left-full top-1/2 w-[120px] origin-left',
            position === 'left-bottom-1' &&
              'left-full top-1/2 w-[130px] origin-left rotate-[-20deg]',
            position === 'left-bottom-2' &&
              'left-full top-1/2 w-[130px] origin-left rotate-[-35deg]',
            position === 'right-top-1' &&
              'right-full top-1/2 w-[130px] origin-right rotate-[-35deg] bg-gradient-to-l',
            position === 'right-top-2' &&
              'right-full top-1/2 w-[130px] origin-right rotate-[-20deg] bg-gradient-to-l',
            position === 'right-middle' &&
              'right-full top-1/2 w-[120px] origin-right bg-gradient-to-l',
            position === 'right-bottom-1' &&
              'right-full top-1/2 w-[130px] origin-right rotate-[20deg] bg-gradient-to-l',
            position === 'right-bottom-2' &&
              'right-full top-1/2 w-[130px] origin-right rotate-[35deg] bg-gradient-to-l',
          )}
        />
      )}
    </div>
  );
};
