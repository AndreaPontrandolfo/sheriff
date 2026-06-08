import type { ContributorsResponse } from '@/types/stats';

export async function fetchContributors(
  fallbackContributorCount: number,
): Promise<number> {
  try {
    const response = await fetch('api/contributors');

    if (!response.ok) {
      return fallbackContributorCount;
    }

    const data = (await response.json()) as ContributorsResponse;

    return data.contributorCount || fallbackContributorCount;
  } catch {
    return fallbackContributorCount;
  }
}
