import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type IntegrationCardPosition =
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

export interface IntegrationCardProps {
  children: ReactNode;
  className?: string;
  position?: IntegrationCardPosition;
  isCenter?: boolean;
}

export const IntegrationCard = ({
  children,
  className,
  position,
  isCenter = false,
  ref,
}: IntegrationCardProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <div
      ref={ref}
      className={cn(
        'dark:bg-muted relative z-10 flex size-12 rounded-xl border',
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
};
