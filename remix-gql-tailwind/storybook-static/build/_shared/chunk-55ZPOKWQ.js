import {
  useRepo
} from "/_static/build/_shared/chunk-JK2KSBGQ.js";
import {
  GitBranchIcon_default
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  Link
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// app/components/FileExplorerNav/FileExplorerNav.tsx
init_react();

// app/components/FileExplorerNav/FileExplorerNav.classNames.ts
init_react();
var container = "my-6 flex items-center";
var btn = "relative inline-flex items-center px-4 py-1 rounded-md bg-gray-50 border border-gray-300 font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-50";
var btnIcon = "w-5 h-5 text-gray-600 mr-1";
var btnCaret = "text-[10px] text-gray-600 ml-1.5 mt-0.5";
var separator = "text-lg text-gray-800 leading-snug mx-1.5";
var rootLink = "font-semibold text-blue-600 hover:underline";
var crumbs = "flex px-3";
var crumbLink = "text-blue-600 hover:underline";
var crumbEnd = "font-semibold";

// app/lib/pathUtils.ts
init_react();
function removeLastPathPart(path) {
  const pathParts = path.split("/");
  return pathParts.slice(0, pathParts.length - 1).join("/");
}
function removePathPart(path, index) {
  return path.slice(0, index + 1).join("/");
}

// app/components/FileExplorerNav/FileExplorerNav.tsx
function RepoNavigation() {
  const { name, owner, path, branch } = useRepo();
  const crumbs2 = path.split("/").filter(Boolean);
  return /* @__PURE__ */ React.createElement("nav", {
    className: container
  }, /* @__PURE__ */ React.createElement("button", {
    className: btn
  }, /* @__PURE__ */ React.createElement(GitBranchIcon_default, {
    className: btnIcon
  }), " ", branch, " ", /* @__PURE__ */ React.createElement("span", {
    className: btnCaret
  }, "\u25BC")), crumbs2.length > 0 && /* @__PURE__ */ React.createElement("div", {
    className: crumbs
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/${owner}/${name}`,
    className: rootLink
  }, name), /* @__PURE__ */ React.createElement("span", {
    className: separator
  }, "/"), crumbs2.map((crumb, i) => {
    const isLast = i === crumbs2.length - 1;
    const crumbPath = removePathPart(crumbs2, i);
    const href = `${owner}/${name}/tree/${branch}/${crumbPath}`;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, isLast ? /* @__PURE__ */ React.createElement("span", {
      className: crumbEnd
    }, crumb) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Link, {
      to: `/${href}`,
      prefetch: "intent",
      className: crumbLink
    }, crumb), /* @__PURE__ */ React.createElement("span", {
      className: separator
    }, "/")));
  })));
}
var FileExplorerNav_default = RepoNavigation;

export {
  removeLastPathPart,
  FileExplorerNav_default
};
//# sourceMappingURL=/_static/build/_shared/chunk-55ZPOKWQ.js.map
