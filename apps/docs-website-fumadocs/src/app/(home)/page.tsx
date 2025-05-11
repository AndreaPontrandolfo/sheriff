import { StargazerSection } from '@/components/StargazerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';

export default function HomePage() {
  // bg-background and text-foreground were added here because of shadcn compatibility. Reference: https://github.com/fuma-nama/fumadocs-shadcn?tab=readme-ov-file#with-shadcn-ui
  return (
    <main>
      <div className="bg-background text-foreground flex flex-1 flex-col justify-center">
        <div className="center mx-auto h-[85vh] max-w-4xl px-2 lg:h-[90vh]">
          <HeroSection />
          <div className="animate-in mt-10 text-center sm:mt-16">
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
      </div>
    </main>
  );
}
