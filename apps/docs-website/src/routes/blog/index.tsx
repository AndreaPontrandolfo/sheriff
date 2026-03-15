import { createFileRoute, Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { blog } from '@/lib/source';
import { SharedDocsLayout } from '@/components/SharedDocsLayout';

function BlogPage() {
  const posts = blog.getPages().toReversed();

  return (
    <SharedDocsLayout>
      <section className="container mx-auto grow px-4 py-8 pb-36">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <h2 className="mb-4 text-2xl font-semibold">Latest Posts</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const postImage = Reflect.get(post.data, 'image');

            return (
              <Link
                key={post.url}
                to={post.url}
                className="bg-card block overflow-hidden rounded-lg shadow-md"
              >
                {typeof postImage === 'string' ? (
                  <Image
                    src={postImage}
                    alt={post.data.title}
                    width={600}
                    height={200}
                    className="h-56 object-cover"
                    layout="constrained"
                  />
                ) : null}
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold">
                    {post.data.title}
                  </h2>
                  <p className="mb-4">{post.data.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SharedDocsLayout>
  );
}

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
});
