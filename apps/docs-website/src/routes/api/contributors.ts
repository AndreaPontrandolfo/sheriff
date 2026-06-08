import { createFileRoute } from '@tanstack/react-router';
import { getContributorsCount } from '@/lib/getContributorsCount';

export const Route = createFileRoute('/api/contributors')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const contributorCount = await getContributorsCount({
            owner: 'AndreaPontrandolfo',
            repo: 'sheriff',
          });

          return Response.json({ contributorCount });
        } catch (error) {
          console.error('Unable to fetch contributors:', error);

          return Response.json({ contributorCount: 0 }, { status: 500 });
        }
      },
    },
  },
});
