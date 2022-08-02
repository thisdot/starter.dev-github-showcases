import {
  formatDistance
} from "/_static/build/_shared/chunk-TZ6KWIXP.js";
import {
  GitBranchIcon_default,
  StarIcon_default
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  React,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// app/components/RepoMeta/RepoMeta.tsx
init_react();

// app/components/RepoMeta/RepoMeta.classNames.ts
init_react();
var metadata = "flex  mt-4 text-xs text-gray-600 space-x-4";
var languageColor = "w-3 h-3 inline-block rounded-full mr-1 relative top-0.5";
var socialCount = "hover:cursor-pointer hover:text-blue-600";
var socialIcon = "w-4 h-4 inline mb-0.5";

// app/components/RepoMeta/RepoMeta.tsx
function RepoMeta({
  language,
  languageColor: languageColor2,
  stargazerCount,
  forkCount,
  updatedAt
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: metadata
  }, language && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    style: {
      backgroundColor: languageColor2 || "#ccc"
    },
    className: languageColor
  }), language), (stargazerCount > 0 || forkCount > 0) && /* @__PURE__ */ React.createElement("div", {
    className: "space-x-4"
  }, stargazerCount > 0 && /* @__PURE__ */ React.createElement("span", {
    className: socialCount
  }, /* @__PURE__ */ React.createElement(StarIcon_default, {
    className: socialIcon
  }), " ", stargazerCount), forkCount > 0 && /* @__PURE__ */ React.createElement("span", {
    className: socialCount
  }, /* @__PURE__ */ React.createElement(GitBranchIcon_default, {
    className: socialIcon
  }), " ", forkCount)), /* @__PURE__ */ React.createElement("div", null, "Updated", " ", formatDistance(new Date(updatedAt), Date.now(), {
    addSuffix: true
  })));
}
var RepoMeta_default = RepoMeta;

export {
  RepoMeta_default
};
//# sourceMappingURL=/_static/build/_shared/chunk-C3EZB5DJ.js.map
