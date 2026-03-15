import browserCollections from 'collections/browser';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { Suspense } from 'react';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { getMDXComponents } from '@/components/mdx';
import { SharedDocsLayout } from '@/components/SharedDocsLayout';
import { blog } from '@/lib/source';

const blogClientLoader = browserCollections.blogPosts.createClientLoader({
  component(
    { toc, frontmatter, default: MDX },
    _props: undefined,
  ) {
    const publishedDate = Reflect.get(frontmatter, 'date');
    const readingTimeValue = Reflect.get(frontmatter, 'readingTime');
    const hasReadingTime =
      typeof readingTimeValue === 'object' &&
      readingTimeValue !== null &&
      'text' in readingTimeValue;

    return (
      <DocsPage toc={toc}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        {frontmatter.description && (
          <DocsDescription>{frontmatter.description}</DocsDescription>
        )}

        {/* Author and Date information */}
        <div className="text-muted-foreground text-sm">
          {publishedDate ? (
            <p>
              <strong>Published:</strong>{' '}
              {new Date(String(publishedDate)).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          ) : null}
          {hasReadingTime ? (
            <p>
              <strong>Reading time:</strong> {String(Reflect.get(readingTimeValue, 'text'))}
            </p>
          ) : null}
        </div>

        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});

function BlogSlugRoute() {
  const loaderData = Route.useLoaderData();

  return (
    <SharedDocsLayout>
      <Suspense>{blogClientLoader.useContent(loaderData.path)}</Suspense>
    </SharedDocsLayout>
  );
}

export const Route = createFileRoute('/blog/$slug')({
  component: BlogSlugRoute,
  loader: async ({ params }) => {
    const pageSlug = params.slug;
    const page = blog.getPage([pageSlug]);

    if (!page) {
      throw notFound();
    }

    await blogClientLoader.preload(page.path);

    return {
      path: page.path,
    };
  },
});
