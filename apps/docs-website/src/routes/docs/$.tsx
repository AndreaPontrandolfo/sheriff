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
import { LLMCopyButton, ViewOptions } from '@/components/PageActions';
import { SharedDocsLayout } from '@/components/SharedDocsLayout';
import { source } from '@/lib/source.server';

const docsClientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }) {
    const pageIsFull = frontmatter.full;

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

    return { path: page.path, url: page.url };
  });

function DocsPageRoute() {
  const loaderData = Route.useLoaderData();
  const markdownUrl = `${loaderData.url}.mdx`;
  const githubUrl = `https://github.com/AndreaPontrandolfo/sheriff/blob/master/apps/docs-website/content/docs/${loaderData.path}`;

  return (
    <SharedDocsLayout>
      <div className="flex flex-row gap-1 items-center border-b pt-2 pb-4">
        <LLMCopyButton markdownUrl={markdownUrl} />
        <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
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

    return { path: data.path, url: data.url };
  },
});
