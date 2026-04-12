import browserCollections from 'collections/browser';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { createContext, Suspense, useContext } from 'react';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { getMDXComponents } from '@/components/mdx';
import { LLMCopyButton, ViewOptions } from '@/components/PageActions';
import { SharedDocsLayout } from '@/components/SharedDocsLayout';
import { source } from '@/lib/source.server';

const PageActionsContext = createContext<{
  markdownUrl: string;
  githubUrl: string;
} | null>(null);

/* eslint-disable react-hooks/rules-of-hooks -- fumadocs API requires lowercase `component` property name */
const docsClientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }) {
    const pageIsFull = frontmatter.full;
    const ctx = useContext(PageActionsContext);

    return (
      <DocsPage toc={toc} full={Boolean(pageIsFull)}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription className="mb-4">
          {frontmatter.description}
        </DocsDescription>
        {ctx && (
          <div className="flex flex-row gap-1 items-center pb-6 border-b mb-6">
            <LLMCopyButton markdownUrl={ctx.markdownUrl} />
            <ViewOptions
              markdownUrl={ctx.markdownUrl}
              githubUrl={ctx.githubUrl}
            />
          </div>
        )}
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});
/* eslint-enable react-hooks/rules-of-hooks */

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
  const slug = loaderData.path.replace(/\.mdx?$/, '');
  const markdownUrl = `/llms.mdx/${slug}`;
  const githubUrl = `https://github.com/AndreaPontrandolfo/sheriff/blob/master/apps/docs-website/content/docs/${loaderData.path}`;

  return (
    <SharedDocsLayout>
      <PageActionsContext.Provider value={{ markdownUrl, githubUrl }}>
        <Suspense>{docsClientLoader.useContent(loaderData.path)}</Suspense>
      </PageActionsContext.Provider>
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
