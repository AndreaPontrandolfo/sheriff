import { createFileRoute } from '@tanstack/react-router';
import { getStargazers } from '@/lib/getStargazer';

export const Route = createFileRoute('/api/stargazers')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const data = await getStargazers({
            owner: 'AndreaPontrandolfo',
            repo: 'sheriff',
          });

          return Response.json(data);
        } catch (error) {
          console.error('Unable to fetch stargazers:', error);

          return Response.json({ stargazers: [], stargazerCount: 0 }, { status: 500 });
        }
      },
    },
  },
});
