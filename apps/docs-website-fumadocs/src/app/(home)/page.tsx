import Link from 'next/link';

export default function HomePage() {
  // bg-background and text-foreground were added here because of shadcn compatibility. Reference: https://github.com/fuma-nama/fumadocs-shadcn?tab=readme-ov-file#with-shadcn-ui
  return (
    <main className="bg-background text-foreground flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
