# Technical blog template

This is a template I wrote for [my blog](https://apoorvaj.io). I figured it would be useful to other folks too, so I'm releasing it into the public domain.

TODO: Demo and screenshot

## Features

- 10 kB
- Responsive layout
- Auto blog post list
- Auto table of contents
- Auto RSS feed
- Numbered sidenotes
- Build-time syntax highlighting
- Math typesetting
- Markdown
- Optional HTML & JS alongside Markdown for interactivity

## Tech

This is built with [Astro](https://astro.build/), with KaTeX for math rendering, and Tailwind for CSS. If these names mean nothing to you, no worries. :) The system does as much as possible at build time, producing small HTML and CSS files with no mandatory JavaScript.

## Set up

1. Install [Node.js](https://nodejs.org/en/download/) `14.18.0`, `v16.12.0`, or higher.
2. Fork and clone this repo
3. From inside the repo, run `npm install`
4. Change the `site` URL in `astro.config.mjs` to point to your website. This is necessary for RSS feed generation.
5. Change the title and description in `rss.xml.js`.

## Develop

While developing, run `npm run dev`, and access the website on localhost. It will refresh automatically when you make changes to the source. This is handy when writing blog posts in Markdown and seeing changes refresh in the browser automatically.

## Deploy

When you're ready to deploy you have many options:
1. Run `npm run build` to create a built site in the `dist` folder, which you can then manually deploy to a hosting provider, or
2. [Set up auto-deploying](https://docs.astro.build/en/guides/deploy/) when you push to the master branch of your repo. I use this for my blog, with a free Netlify plan.