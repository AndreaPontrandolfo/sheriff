import { createFileRoute, notFound } from '@tanstack/react-router';
import { source } from '@/lib/source.server';

export const Route = createFileRoute('/docs-og/$')({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const slug = params._splat?.split('/').filter(Boolean) ?? [];
        // Remove 'image.png' from the end if present
        const cleanSlug = slug[slug.length - 1] === 'image.png' ? slug.slice(0, -1) : slug;
        const page = source.getPage(cleanSlug);

        if (!page) {
          throw notFound();
        }

        // Temporary Vite-safe fallback until a TanStack-native OG renderer is added.
        return Response.redirect(new URL('/img/sheriff-logo.svg', request.url), 307);
      },
    },
  },
});
