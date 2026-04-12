import type { Page } from 'fumadocs-core/source';

type ContentType = 'docs' | 'blog';

export async function getLastUpdate(
  _page: Page,
  contentType: ContentType,
): Promise<Date | null> {
  try {
    // eslint-disable-next-line
    void contentType;

    return null;
  } catch (error) {
    console.error('Failed to get last update time from GitHub:', error);

    return null;
  }
}
