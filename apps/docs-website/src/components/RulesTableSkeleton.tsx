/* eslint-disable react/no-array-index-key */
import type React from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Assuming Skeleton is in ui

export const RulesTableSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Skeleton for the form part (optional, adjust as needed) */}
      <div className="flex flex-wrap gap-4 rounded-md border p-4">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-24" />
      </div>

      {/* Skeleton for the table itself */}
      <div className="rounded-md border">
        {/* Table Header Skeleton */}
        <div className="flex items-center justify-between gap-x-4 border-b p-4">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-8 w-1/6" />
          <Skeleton className="h-8 w-1/6" />
          <Skeleton className="h-8 w-1/6" />
          <Skeleton className="h-8 w-1/12" />
        </div>

        {/* Table Body Skeleton - Repeat for a few rows */}
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-x-4 border-b p-4 last:border-b-0"
            >
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-6 w-1/6" />
              <Skeleton className="h-6 w-1/6" />
              <Skeleton className="h-6 w-1/6" />
              <Skeleton className="h-6 w-1/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
