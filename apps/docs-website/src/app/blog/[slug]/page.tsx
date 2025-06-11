import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLastUpdate } from '@/lib/getLastUpdate';
import { blog } from '@/lib/source';
// Link component can be re-added later if a "Back to blog" is needed manually
// import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = blog.getPage([slug]);

  if (!page) {
    notFound();
  }
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

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => {
    return {
      slug: page.slugs[0],
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = blog.getPage([slug]);

  if (!page) {
    notFound();
  }

  const image = `/blog-og/${slug}-image.png`;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: image,
    },
    twitter: {
      card: 'summary_large_image',
      images: image,
    },
  };
}
