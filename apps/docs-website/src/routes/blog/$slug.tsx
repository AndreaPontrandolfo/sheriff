import browserCollections from 'collections/browser';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { Suspense } from 'react';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { getMDXComponents } from '@/components/mdx';
import { SharedDocsLayout } from '@/components/SharedDocsLayout';
import { blog } from '@/lib/source.server';

const blogClientLoader = browserCollections.blogPosts.createClientLoader({
  component({ toc, frontmatter, default: MDX }) {
    const publishedDate = frontmatter.date;
    const readingTimeValue = frontmatter.readingTime;
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
                timeZone: 'UTC',
              })}
            </p>
          ) : null}
          {hasReadingTime ? (
            <p>
              <strong>Reading time:</strong> {readingTimeValue.text}
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

const getBlogPage = createServerFn({ method: 'GET' })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const page = blog.getPage([slug]);

    if (!page) {
      throw notFound();
    }

    return { path: page.path };
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
    const data = await getBlogPage({ data: params.slug });

    await blogClientLoader.preload(data.path);

    return { path: data.path };
  },
});
