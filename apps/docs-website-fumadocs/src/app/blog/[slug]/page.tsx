import { notFound } from 'next/navigation';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { getLastUpdate } from '@/lib/getLastUpdate';
// Link component can be re-added later if a "Back to blog" is needed manually
// import Link from 'next/link';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const MdxContent = page.data.body;

  const lastUpdate = await getLastUpdate(page);

  return (
    <DocsPage toc={page.data.toc} lastUpdate={lastUpdate ?? undefined}>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description && (
        <DocsDescription>{page.data.description}</DocsDescription>
      )}

      {/* Author and Date information */}
      <div className="text-muted-foreground text-sm">
        {page.data.date && (
          <p>
            <strong>Published:</strong>{' '}
            {new Date(page.data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
        {page.data.readingTime && (
          <p>
            <strong>Reading time:</strong> {page.data.readingTime.text}
          </p>
        )}
      </div>

      <DocsBody>
        <MdxContent components={defaultMdxComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
