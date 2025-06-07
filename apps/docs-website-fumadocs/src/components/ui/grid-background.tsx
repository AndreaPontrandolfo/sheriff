'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function GridBackground(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="dark:bg-background pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
