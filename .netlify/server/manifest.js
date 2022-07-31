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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-ea1ef61e.js", "imports": ["_app/immutable/start-ea1ef61e.js", "_app/immutable/chunks/index-2715a9f5.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "blog",
        pattern: /^\/blog\/?$/,
        names: [],
        types: [],
        path: "/blog",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "contact",
        pattern: /^\/contact\/?$/,
        names: [],
        types: [],
        path: "/contact",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "uses",
        pattern: /^\/uses\/?$/,
        names: [],
        types: [],
        path: "/uses",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/posts.json",
        pattern: /^\/api\/posts\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/posts.json.js")))
      },
      {
        type: "page",
        id: "blog/building-this-site",
        pattern: /^\/blog\/building-this-site\/?$/,
        names: [],
        types: [],
        path: "/blog/building-this-site",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "blog/categories",
        pattern: /^\/blog\/categories\/?$/,
        names: [],
        types: [],
        path: "/blog/categories",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "blog/create-mobile-nav",
        pattern: /^\/blog\/create-mobile-nav\/?$/,
        names: [],
        types: [],
        path: "/blog/create-mobile-nav",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "blog/uncopyright",
        pattern: /^\/blog\/uncopyright\/?$/,
        names: [],
        types: [],
        path: "/blog/uncopyright",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "blog/what-is-mdsvex",
        pattern: /^\/blog\/what-is-mdsvex\/?$/,
        names: [],
        types: [],
        path: "/blog/what-is-mdsvex",
        shadow: null,
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        id: "blog/categories/[category]",
        pattern: /^\/blog\/categories\/([^/]+?)\/?$/,
        names: ["category"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 12],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
