var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Blog,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cba20f33 = require("../../../_app/immutable/chunks/index-cba20f33.js");
const load = async ({ fetch }) => {
  const posts = await fetch("/api/posts.json");
  const allPosts = await posts.json();
  return { props: { posts: allPosts } };
};
const Blog = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<ul>${(0, import_index_cba20f33.a)(posts, (post) => {
    return `<li><h2><a${(0, import_index_cba20f33.b)("href", post.path, 0)}>${(0, import_index_cba20f33.e)(post.meta.title)}</a></h2>
			Published ${(0, import_index_cba20f33.e)(post.meta.date)}
		</li>`;
  })}</ul>`;
});
