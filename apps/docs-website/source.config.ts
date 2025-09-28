import { rehypeCodeDefaultOptions, remarkNpm } from 'fumadocs-core/mdx-plugins';
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen/remark-ts2js';
import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { createFileSystemTypesCache } from 'fumadocs-twoslash/cache-fs';
import remarkReadingTime from 'remark-reading-time';
import readingMdxTime from 'remark-reading-time/mdx.js';
import { z } from 'zod';

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.iso.date().or(z.date()),
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
        remarkNpm,
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
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      langs: ['js', 'ts', 'bash', 'json'],
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash({
          langs: ['ts', 'js'],
          throws: false,
          typesCache: createFileSystemTypesCache(),
        }),
      ],
    },
  },
});
