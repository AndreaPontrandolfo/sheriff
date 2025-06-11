/* eslint-disable fsecond/prefer-destructured-optionals */
import * as Twoslash from 'fumadocs-twoslash/ui';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

/**
 * Use this function to get MDX components, you will need it for rendering MDX.
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    ...Twoslash,
    ...components,
  };
}
