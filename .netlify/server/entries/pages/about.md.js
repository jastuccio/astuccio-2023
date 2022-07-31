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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cba20f33 = require("../../_app/immutable/chunks/index-cba20f33.js");
const About = (0, import_index_cba20f33.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>What is Joe Astuccio doing now? | Now | About | Contact</title>`, ""}`, ""}


<h2>Now</h2>
<ul><li>Learning more Salesforce Commerce Cloud using <a href="${"https://trailhead.salesforce.com"}" rel="${"nofollow"}">Trailhead</a></li>
<li>Checking out TypeScript</li>
<li>Father to a basketball crazed <del>middle</del> High Schooler \u{1F3C0} \u2764\uFE0F \u{1F601}</li></ul>
<p>inspired by Derek Sivers and <a href="${"https://nownownow.com/about"}" rel="${"nofollow"}">the Now page movement</a></p>
<h2>About</h2>
<h2>Contact</h2>
<a href="${"mailto:joe.nc6up@simplelogin.com"}">Email me</a>`;
});
