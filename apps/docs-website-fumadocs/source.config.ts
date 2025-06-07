import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import { remarkInstall } from 'fumadocs-docgen';
import { z } from 'zod';
import remarkReadingTime from 'remark-reading-time';
import readingMdxTime from 'remark-reading-time/mdx.js';

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    image: z.string().optional(),
    readingTime: z
      .object({
        text: z.string(),
      })
      .optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkInstall,
        {
          persist: {
            id: 'packagemanagers',
          },
        },
      ],
      remarkTypeScriptToJavaScript,
      remarkReadingTime,
      readingMdxTime,
    ],
  },
});
