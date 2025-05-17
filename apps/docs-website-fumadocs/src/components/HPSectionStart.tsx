import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuChevronRight } from 'react-icons/lu';
import { HPSectionTitle } from './HPSectionTitle';

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
  return (
    <div className="mx-auto mb-20 max-w-lg space-y-6 text-center">
      <HPSectionTitle title={title} />
      {description && <p className="text-muted-foreground">{description}</p>}

      {buttonText && buttonLink && (
        <Button variant="outline" size="sm" asChild>
          <Link href={buttonLink}>
            {buttonText} <LuChevronRight />
          </Link>
        </Button>
      )}
    </div>
  );
};
