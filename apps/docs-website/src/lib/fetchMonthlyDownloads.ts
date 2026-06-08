import type { DownloadsResponse } from '@/types/stats';

export async function fetchMonthlyDownloads(
  fallbackMonthlyDownloadsInThousands: number,
): Promise<number> {
  try {
    const response = await fetch(
      'https://api.npmjs.org/downloads/point/last-month/eslint-config-sheriff',
    );

    if (!response.ok) {
      return fallbackMonthlyDownloadsInThousands;
    }

    const data = (await response.json()) as DownloadsResponse;

    return Math.round(data.downloads / 1000);
  } catch {
    return fallbackMonthlyDownloadsInThousands;
  }
}
