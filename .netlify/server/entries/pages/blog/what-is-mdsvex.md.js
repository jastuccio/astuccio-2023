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
  default: () => What_is_mdsvex,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cba20f33 = require("../../../_app/immutable/chunks/index-cba20f33.js");
const metadata = {
  "title": "What is MDsveX?",
  "date": "31-07-2022",
  "categories": ["tech"]
};
const What_is_mdsvex = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  return `<p><a href="${"https://mdsvex.com/docs"}" rel="${"nofollow"}">MDsveX</a> is a Markdown preprocessor for Svelte.</p>`;
});
