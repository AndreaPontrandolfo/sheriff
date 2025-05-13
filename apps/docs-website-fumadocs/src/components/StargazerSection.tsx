'use client';
import { LuStar } from 'react-icons/lu';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
    <section className="relative w-full py-6">
      <div className="flex w-full flex-col items-center gap-4 px-4 pt-2 sm:px-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-wrap items-center justify-center">
            {isFetching ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
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
                ))}
              </>
            ) : (
              <>
                {data?.stargazers.map((o: { id: number; login: string }) => (
                  <TooltipProvider key={o.id}>
                    <Tooltip delayDuration={0} key={o.login}>
                      <TooltipContent className="text-center">
                        <p>{o.login}</p>
                      </TooltipContent>
                      <TooltipTrigger asChild>
                        <a
                          target="_blank"
                          href={`https://github.com/${o.login}`}
                          className={cn(
                            'relative -mx-0.5 transition-all hover:z-10 hover:scale-125',
                          )}
                          rel="noreferrer nofollow"
                        >
                          <Avatar className="ring-muted-foreground/70 dark:bg-background bg-background size-9 ring-2 transition-opacity duration-200">
                            <AvatarImage
                              src={`https://avatars.githubusercontent.com/${o.login}`}
                            />
                          </Avatar>
                        </a>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </>
            )}
            <div
              className={cn(
                'relative -mx-0.5 transition-all hover:z-10 hover:scale-125',
              )}
            >
              <Avatar className="ring-muted-foreground/70 bg-secondary flex size-9 items-center justify-center ring-2">
                <p className="text-muted-foreground text-xs font-semibold">
                  99+
                </p>
              </Avatar>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground max-w-prose text-pretty text-center text-lg/7 sm:text-wrap">
          Join our stargazers!
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button
            className="button text-muted-foreground group order-2 h-11 rounded-full px-4 has-[>svg]:px-10"
            variant="outline"
            asChild
          >
            <a
              href="https://github.com/AndreaPontrandolfo/sheriff"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              Star us on GitHub
              <LuStar className="group-hover:fill-foreground size-4 shrink-0 transition-colors" />
              {count}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
