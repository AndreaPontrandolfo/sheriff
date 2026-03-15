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
import { source } from '@/lib/source.server';

const docsClientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }, _props: undefined) {
    const pageIsFull = Reflect.get(frontmatter, 'full');

    return (
      <DocsPage toc={toc} full={Boolean(pageIsFull)}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription>{frontmatter.description}</DocsDescription>
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});

const getDocsPage = createServerFn({ method: 'GET' })
  .inputValidator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);

    if (!page) {
      throw notFound();
    }

    return { path: page.path };
  });

function DocsPageRoute() {
  const loaderData = Route.useLoaderData();

  return (
    <SharedDocsLayout>
      <Suspense>{docsClientLoader.useContent(loaderData.path)}</Suspense>
    </SharedDocsLayout>
  );
}

export const Route = createFileRoute('/docs/$')({
  component: DocsPageRoute,
  loader: async ({ params }) => {
    const slugPath = params._splat?.split('/').filter(Boolean) ?? [];
    const data = await getDocsPage({ data: slugPath });

    await docsClientLoader.preload(data.path);

    return { path: data.path };
  },
});
