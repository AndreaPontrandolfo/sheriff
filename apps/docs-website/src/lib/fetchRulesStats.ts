import {
  configCombinationDefaultValues,
  LOCAL_PORT,
} from '@sherifforg/constants';
import type { ServerResponse } from '@sherifforg/types';
import type { RulesStatsResponse } from '@/types/stats';

const rulesApiUrl =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${LOCAL_PORT}/api/get-new-sheriff-config`
    : 'https://sheriff-webservices.onrender.com/api/get-new-sheriff-config';

export async function fetchRulesStats(
  fallbackRulesStats: RulesStatsResponse,
): Promise<RulesStatsResponse> {
  try {
    const response = await fetch(rulesApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(configCombinationDefaultValues),
    });

    if (!response.ok) {
      return fallbackRulesStats;
    }

    const data = (await response.json()) as ServerResponse;

    return {
      pluginsNames: data.pluginsNames,
      totalAvailableRulesAmount:
        data.totalAvailableRulesAmount ??
        fallbackRulesStats.totalAvailableRulesAmount,
    };
  } catch {
    return fallbackRulesStats;
  }
}
