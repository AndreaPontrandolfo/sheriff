import type { Page } from 'fumadocs-core/source';

type ContentType = 'docs' | 'blog';

export async function getLastUpdate(
  _page: Page,
  contentType: ContentType,
): Promise<Date | null> {
  try {
    // Disabled during migration to TanStack Start.
    // This can be re-enabled when a compatible "last edit" API is wired.
    void contentType;
    return null;
  } catch (error) {
    console.error('Failed to get last update time from GitHub:', error);

    return null;
  }
}
