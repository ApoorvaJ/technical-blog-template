import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  },
  integrations: [mdx({
    remarkPlugins: [remarkToc, remarkMath],
    rehypePlugins: [rehypeKatex]
  }), tailwind()],
  site: 'https://google.com' // TODO: Add your website URL. This is used in RSS feed generation.
});