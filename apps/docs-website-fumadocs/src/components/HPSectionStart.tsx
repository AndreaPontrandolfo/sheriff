'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuChevronRight } from 'react-icons/lu';
import { HPSectionTitle } from './HPSectionTitle';
import { ShineBorder } from './magicui/shine-border';
import { useTheme } from 'next-themes';

interface HPSectionStartProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const HPSectionStart = ({
  title,
  description,
  buttonText,
  buttonLink,
}: HPSectionStartProps) => {
  const theme = useTheme();

  return (
    <div className="mx-auto mb-20 max-w-lg space-y-6 text-center">
      <HPSectionTitle title={title} />
      {description && <p className="text-muted-foreground">{description}</p>}

      {buttonText && buttonLink && (
        <div className="relative mx-auto my-0 w-fit overflow-hidden rounded-md">
          <ShineBorder
            shineColor={theme.theme === 'dark' ? 'white' : 'black'}
            duration={12}
            className="w-full rounded-md"
          />
          <Button variant="outline" size="sm" className="rounded-md" asChild>
            <Link href={buttonLink}>
              {buttonText} <LuChevronRight />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};
