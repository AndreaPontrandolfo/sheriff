import { configCombinationDefaultValues } from '@sherifforg/constants';
import { fetchContributors } from '@/lib/fetchContributors';
import { fetchMonthlyDownloads } from '@/lib/fetchMonthlyDownloads';
import { fetchRulesStats } from '@/lib/fetchRulesStats';
import type { RulesStatsResponse, Stats } from '@/types/stats';

const technologiesAmount =
  Object.values(configCombinationDefaultValues).filter(Boolean).length + 2;

const fallbackStats: Stats = {
  technologies: technologiesAmount,
  plugins: 27,
  rules: 1332,
  githubStars: 155,
  monthlyDownloadsInThousands: 70,
  contributors: 10,
};

const fallbackRulesStats: RulesStatsResponse = {
  pluginsNames: Array.from({ length: fallbackStats.plugins }),
  totalAvailableRulesAmount: fallbackStats.rules,
};

export function getStats() {
  return {
    fallbackStats,
    technologiesAmount,
    statsQueries: [
      {
        queryKey: ['stats', 'ruleset', configCombinationDefaultValues],
        queryFn: () => fetchRulesStats(fallbackRulesStats),
        select: (data: RulesStatsResponse) => {
          return {
            plugins: data.pluginsNames.length,
            rules: data.totalAvailableRulesAmount,
          };
        },
        staleTime: 5 * 60 * 1000,
      },
      {
        queryKey: ['npm-downloads', 'eslint-config-sheriff', 'last-month'],
        queryFn: () =>
          fetchMonthlyDownloads(fallbackStats.monthlyDownloadsInThousands),
        staleTime: 60 * 60 * 1000,
      },
      {
        queryKey: ['github-contributors', 'AndreaPontrandolfo', 'sheriff'],
        queryFn: () => fetchContributors(fallbackStats.contributors),
        staleTime: 60 * 60 * 1000,
      },
    ] as const,
  };
}
