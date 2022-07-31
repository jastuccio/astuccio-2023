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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cba20f33 = require("../../_app/immutable/chunks/index-cba20f33.js");
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-s9wg7d{padding:1rem;background:var(--white);display:grid;grid-area:header}ul.svelte-s9wg7d{margin:0;display:flex;gap:1rem}",
  map: null
};
const Header = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-s9wg7d"}"><a href="${"/"}" class="${"title-font"}">Joe Astuccio</a>
	<nav><ul class="${"svelte-s9wg7d"}"><li><a href="${"/blog"}">Blog</a></li>
			<li><a href="${"/blog"}">Portfolio</a></li>
			<li><a href="${"/about"}">About</a></li>
			<li><a href="${"/contact"}">Contact</a></li></ul></nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-13ozb0i{grid-area:footer;padding:0 1rem}",
  map: null
};
const Footer = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-13ozb0i"}"><a href="${"https://github.com/jastuccio"}" target="${"_blank"}" rel="${"noreferrer noopener"}" class="${"socialLink"}">My code on GitHub
    <svg stroke="${"currentColor"}" fill="${"currentColor"}" stroke-width="${"0"}" viewBox="${"0 0 512 512"}" height="${"1em"}" width="${"1em"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}"></path></svg></a>

  <div><a sveltekit:prefetch href="${"/blog/uncopyright"}">Uncopyright</a> 2016 - ${(0, import_index_cba20f33.e)(new Date().getFullYear())}
  Joe Astuccio</div>

</footer>`;
});
const global_styles = "";
const load = ({ url }) => {
  const currentRoute = url.pathname;
  return { props: { currentRoute } };
};
const _layout = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  let { currentRoute } = $$props;
  if ($$props.currentRoute === void 0 && $$bindings.currentRoute && currentRoute !== void 0)
    $$bindings.currentRoute(currentRoute);
  return `${(0, import_index_cba20f33.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

${(0, import_index_cba20f33.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
