import type React from 'react';
import { cn } from '@/lib/utils';

export interface IntegrationCardProps {
  children: React.ReactNode;
  className?: string;
  isCenter?: boolean;
}

export function IntegrationCard({
  children,
  className,
  isCenter = false,
  ref,
}: IntegrationCardProps & { ref?: React.Ref<HTMLDivElement> }) {
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
}
