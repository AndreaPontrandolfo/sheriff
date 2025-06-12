import { getGithubLastEdit } from 'fumadocs-core/server';
import type { Page } from 'fumadocs-core/source';

type ContentType = 'docs' | 'blog';

export async function getLastUpdate(
  page: Page,
  contentType: ContentType,
): Promise<Date | null> {
  try {
    const lastUpdate = await getGithubLastEdit({
      owner: 'AndreaPontrandolfo',
      repo: 'sheriff',
      path: `apps/docs-website/content/${contentType}/${page.file.path}`,
      sha: 'master',
      token: process.env.GITHUB_TOKEN,
    });

    return lastUpdate;
  } catch (error) {
    console.error('Failed to get last update time from GitHub:', error);

    return null;
  }
}
