import { StargazerSection } from '@/components/StargazerSection';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  // bg-background and text-foreground were added here because of shadcn compatibility. Reference: https://github.com/fuma-nama/fumadocs-shadcn?tab=readme-ov-file#with-shadcn-ui
  return (
    <main className="bg-background text-foreground flex flex-1 flex-col justify-center text-center">
      <div className="center mx-auto h-[85vh] max-w-4xl px-2 lg:h-[90vh]">
        <div className="animate-in mt-10 sm:mt-16">
          <h1 className="h1 mb-4 text-balance text-center text-4xl font-black md:text-5xl lg:text-6xl">
            Sheriff
          </h1>
          <p className="mx-auto mb-4 text-pretty text-center text-lg dark:text-zinc-400">
            Make your website stand out with minimal effort.
            <span className="block">
              Built with{' '}
              <span className="font-semibold text-green-700 dark:text-green-300">
                Reactjs
              </span>
              ,{' '}
              <span className="font-semibold text-green-700 dark:text-green-300">
                shadcn
              </span>{' '}
              and{' '}
              <span className="font-semibold text-green-700 dark:text-green-300">
                Framer Motion
              </span>{' '}
              for animation.
            </span>
          </p>
          <div className="flex-row-center mx-auto max-w-fit gap-4 py-4">
            <Button asChild>
              <Link
                href="https://github.com/AndreaPontrandolfo/sheriff/releases"
                className="mx-auto w-fit font-semibold"
                prefetch={false}
              >
                What{"'"}s new
              </Link>
            </Button>
          </div>
          <StargazerSection />
        </div>
      </div>
    </main>
  );
}
