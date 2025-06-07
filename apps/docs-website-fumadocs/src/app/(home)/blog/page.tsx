import Image from 'next/image';
import Link from 'next/link';
import { blog } from '@/lib/source';

export default function Home() {
  const posts = blog.getPages();

  return (
    <main className="container mx-auto grow px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Latest Blog Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-card block overflow-hidden rounded-lg shadow-md"
          >
            {post.data.image ? (
              <Image
                src={post.data.image}
                alt={post.data.title}
                width={600}
                height={200}
                className="h-56 object-cover"
              />
            ) : null}
            <div className="p-6">
              <h2 className="mb-2 text-xl font-semibold">{post.data.title}</h2>
              <p className="mb-4">{post.data.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
