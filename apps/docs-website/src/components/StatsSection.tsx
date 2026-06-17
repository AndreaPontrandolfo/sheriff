import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useQueries } from '@tanstack/react-query';
import { getStats } from '@/lib/stats';
import type { StargazersResponse, Stats } from '@/types/stats';
import { AnimatedNumberInView } from './AnimatedNumberOnview';
import { HPSectionStart } from './HPSectionStart';

const { fallbackStats, statsQueries, technologiesAmount } = getStats();

const fallbackStargazers: StargazersResponse = {
  stargazers: [],
  stargazerCount: fallbackStats.githubStars,
};

const fetchStargazers = async (): Promise<StargazersResponse> => {
  try {
    const response = await fetch('api/stargazers');

    if (!response.ok) {
      return fallbackStargazers;
    }

    return (await response.json()) as StargazersResponse;
  } catch {
    return fallbackStargazers;
  }
};

interface StatsGridProps {
  stats: Stats;
}
const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="relative mx-auto grid max-w-4xl grid-cols-1 divide-y border *:p-6 sm:grid-cols-2 sm:divide-x sm:*:p-8 lg:grid-cols-3 lg:divide-y lg:*:p-12">
      <div className="flex flex-col justify-center space-y-3 text-center sm:text-left">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
          <AnimatedNumberInView number={stats.technologies} />
        </div>
        <p>Technologies</p>
      </div>
      <div className="flex flex-col justify-center space-y-2 text-center">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
          <AnimatedNumberInView number={stats.plugins} />
        </div>
        <p>Plugins</p>
      </div>
      <div className="flex flex-col justify-center space-y-2 text-center sm:text-right lg:text-right">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
          +
          <AnimatedNumberInView
            number={stats.rules}
            durationInMilliseconds={1500}
          />
        </div>
        <p>Rules</p>
      </div>
      <div className="flex flex-col justify-center space-y-2 text-center sm:text-left">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
          +
          <AnimatedNumberInView
            number={stats.githubStars}
            durationInMilliseconds={1200}
          />
        </div>
        <p>Github stars</p>
      </div>
      <div className="flex flex-col justify-center space-y-2 text-center">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
          +
          <AnimatedNumberInView
            number={stats.monthlyDownloadsInThousands}
            durationInMilliseconds={2000}
          />
          K
        </div>
        <p>Monthly downloads</p>
      </div>
      <div className="flex flex-col justify-center space-y-2 text-center sm:text-right lg:text-right">
        <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
          +<AnimatedNumberInView number={stats.contributors} />
        </div>
        <p>Contributors</p>
      </div>
    </div>
  );
};

const StatsGridWithQueries = () => {
  const [rulesStatsQuery, monthlyDownloadsQuery, contributorsQuery] =
    statsQueries;
  const [rulesStats, githubStars, monthlyDownloadsInThousands, contributors] =
    useQueries({
      queries: [
        rulesStatsQuery,
        {
          queryKey: ['stargazers'],
          queryFn: fetchStargazers,
          select: (data: StargazersResponse) =>
            data.stargazerCount || fallbackStats.githubStars,
          staleTime: 5 * 60 * 1000,
        },
        monthlyDownloadsQuery,
        contributorsQuery,
      ] as const,
    });

  return (
    <StatsGrid
      stats={{
        technologies: technologiesAmount,
        plugins: rulesStats.data?.plugins ?? fallbackStats.plugins,
        rules: rulesStats.data?.rules ?? fallbackStats.rules,
        githubStars: githubStars.data ?? fallbackStats.githubStars,
        monthlyDownloadsInThousands:
          monthlyDownloadsInThousands.data ??
          fallbackStats.monthlyDownloadsInThousands,
        contributors: contributors.data ?? fallbackStats.contributors,
      }}
    />
  );
};

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-20" ref={sectionRef}>
      <HPSectionStart title="Sheriff in numbers" />
      <div className="mx-auto max-w-2xl space-y-8 px-6 md:max-w-5xl md:space-y-16">
        {isInView ? (
          <StatsGridWithQueries />
        ) : (
          <StatsGrid stats={fallbackStats} />
        )}
      </div>
    </section>
  );
};
