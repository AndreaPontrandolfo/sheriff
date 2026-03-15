import { createFileRoute, notFound } from '@tanstack/react-router';
import { blog } from '@/lib/source';

export const Route = createFileRoute('/blog-og/$slug')({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const slug = params.slug.replace('-image.png', '');
        const page = blog.getPage([slug]);

        if (!page) {
          throw notFound();
        }

        // Temporary Vite-safe fallback until a TanStack-native OG renderer is added.
        return Response.redirect(new URL('/img/sheriff-logo.svg', request.url), 307);
      },
    },
  },
});
