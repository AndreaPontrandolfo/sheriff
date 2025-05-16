import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HPSectionStartProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const HPSectionStart = ({
  title,
  description,
  buttonText,
  buttonLink,
}: HPSectionStartProps) => {
  return (
    <div className="mx-auto mb-20 max-w-lg space-y-6 text-center">
      <h2 className="text-balance text-3xl font-semibold md:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>

      <Button variant="outline" size="sm" asChild>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  );
};
