import { type Page } from 'fumadocs-core/source';
import { getGithubLastEdit } from 'fumadocs-core/server';

export async function getLastUpdate(page: Page): Promise<Date | null> {
  try {
    const lastUpdate = await getGithubLastEdit({
      owner: 'AndreaPontrandolfo',
      repo: 'sheriff',
      path: `apps/docs-website-fumadocs/${page.file.path}`,
    });
    return lastUpdate;
  } catch (error) {
    console.error('Failed to get last update time from GitHub:', error);
    return null;
  }
}
