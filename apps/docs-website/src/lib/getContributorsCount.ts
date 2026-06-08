import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN as string,
});

interface GetContributorsCountOptions {
  owner: string;
  repo: string;
}

export async function getContributorsCount({
  owner,
  repo,
}: GetContributorsCountOptions): Promise<number> {
  try {
    const contributors = await octokit.paginate(
      octokit.rest.repos.listContributors,
      {
        owner,
        repo,
        per_page: 100,
      },
    );

    return contributors.length;
  } catch (error) {
    console.error(error);
  }

  return 0;
}
