import Link from 'next/link';
import { blog } from '@/lib/source';

export default function Home() {
  const posts = blog.getPages();

  return (
    <main className="container mx-auto grow px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-fd-secondary block overflow-hidden rounded-lg p-6 shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{post.data.title}</h2>
            <p className="mb-4">{post.data.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
