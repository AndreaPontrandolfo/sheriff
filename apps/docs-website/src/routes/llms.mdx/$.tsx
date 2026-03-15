import { createFileRoute, notFound } from '@tanstack/react-router';
import { getLLMText } from '@/lib/get-llm-text';
import { source } from '@/lib/source';

export const Route = createFileRoute('/llms/mdx/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slug = params._splat?.split('/').filter(Boolean) ?? [];
        const page = source.getPage(slug);

        if (!page) {
          throw notFound();
        }

        return new Response(await getLLMText(page), {
          headers: {
            'Content-Type': 'text/plain',
          },
        });
      },
    },
  },
});
