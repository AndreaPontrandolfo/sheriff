export interface Stats {
  technologies: number;
  plugins: number;
  rules: number;
  githubStars: number;
  monthlyDownloadsInThousands: number;
  contributors: number;
}

export interface DownloadsResponse {
  downloads: number;
}

export interface ContributorsResponse {
  contributorCount: number;
}

export interface RulesStatsResponse {
  pluginsNames: string[];
  totalAvailableRulesAmount: number;
}

export interface StargazersResponse {
  stargazers: unknown[];
  stargazerCount: number;
}
