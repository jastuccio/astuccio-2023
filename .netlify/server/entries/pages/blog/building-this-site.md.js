var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Building_this_site,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cba20f33 = require("../../../_app/immutable/chunks/index-cba20f33.js");
var import_what_is_mdsvex_md = __toESM(require("./what-is-mdsvex.md.js"));
const metadata = {
  "title": "Building this site",
  "date": "07-31-2022",
  "categories": ["tech", "sveltekit"]
};
const Building_this_site = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Welcome to my personal blog and lab.  This site has been built and rebuilt a number of times using different frameworks.  The current version is built using <a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">SvelteKit</a> and based on this <a href="${"https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog"}" rel="${"nofollow"}">building a static Markdown blog</a> post by Josh Collinsworth. I added my own styling, features, and animations.</p>
<h2>Blog post dates</h2>
<p>Date is an item included in the frontmatter.  It looks similar to this</p>
<h2>Import blog posts into other blog posts</h2>
<p>I wanted to be able to write small blog posts and then connect them in a single larger post of closely related material.  I found <a href="${"https://github.com/pngwn/MDsveX/issues/247#issuecomment-835817061"}" rel="${"nofollow"}">an import Markdown issue in the MDsveX repo</a> that looked helpful.</p>
${(0, import_index_cba20f33.v)(import_what_is_mdsvex_md.default, "MDsveX").$$render($$result, {}, {}, {})}
<h2>My Portfolio page</h2>`;
});
