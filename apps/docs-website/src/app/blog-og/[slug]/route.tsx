import { generateOGImage } from 'fumadocs-ui/og';
import { notFound } from 'next/navigation';
import { blog } from '@/lib/source';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const page = blog.getPage([slug.replace('image.png', '')]);

  if (!page) {
    notFound();
  }

  return generateOGImage({
    title: page.data.title,
    description: page.data.description || '',
    site: 'Sheriff Blog',
  });
}

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return blog.getPages().map((page) => {
    return {
      slug: `${page.slugs[0]}-image.png`,
    };
  });
}
