function Footer() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl">
        <div className="border-t py-6">
          <p className="text-muted-foreground flex flex-col items-center justify-center gap-1 text-sm sm:flex-row">
            <span>
              Copyright © {new Date().getFullYear().toString()}{' '}
              eslint-config-sheriff.
            </span>
            <span>Built with Fumadocs ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
