import {
  FileExplorer_view_default,
  RepoReadMe_view_default
} from "/_static/build/_shared/chunk-IT24V5AT.js";
import {
  FileExplorerNav_default
} from "/_static/build/_shared/chunk-55ZPOKWQ.js";
import "/_static/build/_shared/chunk-MWJ6W5IQ.js";
import {
  RepoHeader_default,
  RepoProvider
} from "/_static/build/_shared/chunk-JK2KSBGQ.js";
import "/_static/build/_shared/chunk-MHIJW24B.js";
import "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  require_auth
} from "/_static/build/_shared/chunk-V2UYFXEK.js";
import {
  useLoaderData
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/$user/$repository/tree/$branch/$.tsx?browser
init_react();

// app/routes/$user/$repository/tree/$branch/$.tsx
init_react();
var import_auth = __toESM(require_auth());
function Screen() {
  const { context, items, readme } = useLoaderData();
  return /* @__PURE__ */ React.createElement(RepoProvider, {
    value: context
  }, /* @__PURE__ */ React.createElement(RepoHeader_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-screen-2xl py-8 px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-12"
  }, /* @__PURE__ */ React.createElement(FileExplorerNav_default, null), /* @__PURE__ */ React.createElement(FileExplorer_view_default, {
    items,
    branch: context.branch,
    basePath: `/${context.owner}/${context.name}`,
    repoPath: context.path
  }), readme && /* @__PURE__ */ React.createElement(RepoReadMe_view_default, {
    readme
  })))));
}
export {
  Screen as default
};
//# sourceMappingURL=/_static/build/routes/$user/$repository/tree/$branch/$-DVXVIPVK.js.map
