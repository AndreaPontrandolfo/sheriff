'use client';

import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HPSectionTitle } from './HPSectionTitle';
import { ShineBorder } from './magicui/shine-border';

interface HPSectionStartProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export function HPSectionStart({
  title,
  description,
  buttonText,
  buttonLink,
  className,
}: HPSectionStartProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-lg space-y-6 text-center',
        buttonText && buttonLink ? 'mb-20' : 'mb-10',
        className,
      )}
    >
      <HPSectionTitle title={title} />
      {description && <p className="text-muted-foreground">{description}</p>}

      {buttonText && buttonLink && (
        <div className="relative mx-auto my-0 w-fit overflow-hidden rounded-md">
          <ShineBorder
            shineColor="var(--primary)"
            duration={12}
            className="w-full rounded-md"
          />
          <Button asChild variant="outline" size="sm" className="rounded-md">
            <Link href={buttonLink}>
              {buttonText} <LuChevronRight />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
