/* eslint-disable react/no-array-index-key */
'use client';
import { Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export const StargazerSection = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['stargazers'],
    queryFn: () => fetch('api/stargazers').then((res) => res.json()),
  });

  const count = data?.stargazerCount
    ? Intl.NumberFormat('en-us', { notation: 'compact' }).format(
        data.stargazerCount,
      )
    : '...';

  return (
    <div className="relative">
      <div className="flex w-full flex-col items-center gap-8 px-4 pt-2 sm:px-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-wrap items-center justify-center">
            {isFetching ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => {
                  return (
                    <div
                      className={cn('relative -mx-0.5 transition-all')}
                      key={i}
                    >
                      <Avatar className="ring-secondary size-10 ring-4">
                        <div className="bg-secondary h-full w-full rounded-full">
                          <div className="bg-secondary h-full w-full animate-pulse rounded-full" />
                        </div>
                      </Avatar>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {data?.stargazers.map((o: { id: number; login: string }) => {
                  return (
                    <TooltipProvider key={o.id}>
                      <Tooltip delayDuration={0} key={o.login}>
                        <TooltipContent className="text-center">
                          <p>{o.login}</p>
                        </TooltipContent>
                        <TooltipTrigger asChild>
                          <a
                            target="_blank"
                            href={`https://github.com/${o.login}`}
                            rel="noreferrer nofollow"
                            className={cn(
                              'relative -mx-0.5 transition-all hover:z-10 hover:scale-125',
                            )}
                          >
                            <Avatar className="text-muted dark:bg-background bg-background size-9 ring-2 transition-opacity duration-200">
                              <AvatarImage
                                src={`https://avatars.githubusercontent.com/${o.login}`}
                              />
                            </Avatar>
                          </a>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </>
            )}
            <div
              className={cn(
                'relative -mx-0.5 transition-all hover:z-10 hover:scale-125',
              )}
            >
              <Avatar className="text-muted dark:bg-background bg-background flex size-9 items-center justify-center ring-2">
                <p className="text-muted-foreground text-xs font-semibold">
                  99+
                </p>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            asChild
            className="dark:bg-background group h-11 rounded-xl px-10 py-2 text-base dark:hover:bg-zinc-800"
            variant="outline"
            size="lg"
          >
            <a
              href="https://github.com/AndreaPontrandolfo/sheriff"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              Star us on GitHub
              <Star className="group-hover:fill-foreground size-4 shrink-0 transition-colors" />
              {count}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
