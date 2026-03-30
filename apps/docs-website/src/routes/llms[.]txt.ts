import { llms } from 'fumadocs-core/source';
import { createFileRoute } from '@tanstack/react-router';
import { source } from '@/lib/source.server';

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET() {
        return new Response(llms(source).index());
      },
    },
  },
});
