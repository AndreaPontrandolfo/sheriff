import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import { remarkInstall } from 'fumadocs-docgen';

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkTypeScriptToJavaScript],
  },
});
