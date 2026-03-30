import { Check, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PageActionsProps {
  markdownUrl: string;
  githubUrl?: string;
}

interface LLMCopyButtonProps {
  markdownUrl: string;
}
export function LLMCopyButton({ markdownUrl }: LLMCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const response = await fetch(markdownUrl);
    const text = await response.text();

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      aria-label="Copy page as Markdown"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
        'text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent',
      )}
      onClick={handleCopy}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? 'Copied' : 'Copy Markdown'}
    </button>
  );
}

export function ViewOptions({
  markdownUrl,
  githubUrl,
}: Pick<PageActionsProps, 'markdownUrl' | 'githubUrl'>) {
  return (
    <div className="inline-flex items-center gap-1">
      <a
        href={markdownUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
          'text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent',
        )}
      >
        <ExternalLink className="size-3.5" />
        View as Markdown
      </a>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors',
            'text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-accent',
          )}
        >
          <ExternalLink className="size-3.5" />
          View on GitHub
        </a>
      )}
    </div>
  );
}
