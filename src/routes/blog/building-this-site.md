---
title: "Building this site"
date: "07-31-2022"
categories:
  - "tech"
  - "sveltekit"
---

<script>
  import MDsveX from './what-is-mdsvex.md'
</script>

Welcome to my personal blog and lab.  This site has been built and rebuilt a number of times using different frameworks.  The current version is built using [SvelteKit](https://kit.svelte.dev/) and based on this [building a static Markdown blog](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) post by Josh Collinsworth. I added my own styling, features, and animations.

## Blog post dates

Date is an item included in the frontmatter.  It looks similar to this

## Import blog posts into other blog posts

I wanted to be able to write small blog posts and then connect them in a single larger post of closely related material.  I found [an import Markdown issue in the MDsveX repo](https://github.com/pngwn/MDsveX/issues/247#issuecomment-835817061) that looked helpful.

<MDsveX />


## My Portfolio page
 