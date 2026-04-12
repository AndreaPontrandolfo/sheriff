import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server';

const fetchHandler = createStartHandler(defaultStreamHandler);

const mdxExtensionRewriter = rewritePath(
  '/docs{/*path}.mdx',
  '/llms.mdx/docs{/*path}',
);
const acceptHeaderRewriter = rewritePath(
  '/docs{/*path}',
  '/llms.mdx/docs{/*path}',
);

const server = {
  async fetch(request: Request) {
    const url = new URL(request.url);

    // Rewrite /docs/path.mdx → /llms.mdx/docs/path
    const mdxTarget = mdxExtensionRewriter.rewrite(url.pathname);

    if (mdxTarget) {
      const newUrl = new URL(mdxTarget, url);

      return fetchHandler(new Request(newUrl.toString(), request));
    }

    // Rewrite for AI agents that send Accept: text/markdown
    if (url.pathname.startsWith('/docs') && isMarkdownPreferred(request)) {
      const acceptTarget = acceptHeaderRewriter.rewrite(url.pathname);

      if (acceptTarget) {
        const newUrl = new URL(acceptTarget, url);

        return fetchHandler(new Request(newUrl.toString(), request));
      }
    }

    return fetchHandler(request);
  },
};

export default server;
