import {
  require_classnames
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  Link
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// app/components/TabNavigation/TabNavigation.tsx
init_react();
var import_classnames = __toESM(require_classnames());

// app/components/TabNavigation/TabNavigation.classNames.ts
init_react();
var container = "border-b border-gray-200";
var nav = "-mb-px flex";
var tab = "inline-flex items-center p-4 border-b-2 font-medium text-sm";
var tabInactive = "border-transparent text-gray-600 hover:border-gray-300";
var tabActive = "border-yellow-500 text-gray-900 font-semibold";
var icon = "-ml-0.5 mr-2 h-5 w-5 border-none";
var iconInactive = "text-gray-500";
var iconActive = "text-gray-700";

// app/components/TabNavigation/TabNavigation.tsx
function TabNavigation({
  tabs,
  className,
  basePath = "",
  pathname
}) {
  const isCurrentTab = (pathName) => {
    const otherPaths = tabs.filter(({ path }) => path !== pathName).map(({ path }) => path);
    return pathName !== "" ? pathname.includes(pathName) : otherPaths.every((path) => !pathname.includes(path));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames.default)(container, className)
  }, /* @__PURE__ */ React.createElement("nav", {
    className: nav,
    "aria-label": "Tabs"
  }, tabs.map(({ title, path, Icon, count }, index) => {
    let href = path === "" ? `/${basePath}` : `/${basePath}/${path}`;
    return /* @__PURE__ */ React.createElement(Link, {
      to: href,
      key: index,
      className: (0, import_classnames.default)(isCurrentTab(path) ? tabActive : tabInactive, tab)
    }, /* @__PURE__ */ React.createElement(Icon, {
      className: (0, import_classnames.default)(isCurrentTab(path) ? iconActive : iconInactive, icon)
    }), /* @__PURE__ */ React.createElement("span", null, title), typeof count === "number" && /* @__PURE__ */ React.createElement("span", {
      className: "ml-2 rounded-xl bg-gray-200 py-0.5 px-2 text-xs font-medium text-gray-800"
    }, count));
  })));
}
var TabNavigation_default = TabNavigation;

export {
  TabNavigation_default
};
//# sourceMappingURL=/_static/build/_shared/chunk-MHIJW24B.js.map
