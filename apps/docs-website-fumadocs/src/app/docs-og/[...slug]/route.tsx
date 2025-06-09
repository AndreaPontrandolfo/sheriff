import { generateOGImage } from 'fumadocs-ui/og';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));

  if (!page) {
    notFound();
  }

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Sheriff',
  });
}

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return source.generateParams().map((page) => {
    return {
      ...page,
      slug: [...page.slug, 'image.png'],
    };
  });
}
