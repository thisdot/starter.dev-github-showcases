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
  RepoProvider,
  useRepo
} from "/_static/build/_shared/chunk-JK2KSBGQ.js";
import "/_static/build/_shared/chunk-MHIJW24B.js";
import {
  BookOpenIcon_default,
  LinkIcon_default
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  require_auth
} from "/_static/build/_shared/chunk-V2UYFXEK.js";
import {
  Link,
  useLoaderData
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/$user/$repository/index.tsx?browser
init_react();

// app/routes/$user/$repository/index.tsx
init_react();
var import_auth = __toESM(require_auth());

// app/components/RepoAboutWidget/RepoAboutWidget.tsx
init_react();

// app/components/RepoAboutWidget/Description.tsx
init_react();
function Description({ text }) {
  return text ? /* @__PURE__ */ React.createElement("span", null, text) : /* @__PURE__ */ React.createElement("span", {
    className: "italic"
  }, "No description, website, or topics provided.");
}
var Description_default = Description;

// app/components/RepoAboutWidget/HomepageUrl.tsx
init_react();

// app/components/RepoAboutWidget/RepoAboutWidget.classNames.ts
init_react();
var container = "pb-8 space-y-5 border-b-2 border-gray-300";
var heading = "text-gray-700 font-semibold";
var description = "text-gray-600";
var readmeLink = "flex items-center text-gray-500 hover:text-blue-500 text-sm cursor-pointer leading-snug";
var readmeIcon = "h-5 w-5 mt-0.5 mr-2";
var linkContainer = "max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap";
var linkIcon = "w-4 h-4 inline text-gray-700 mr-2 -mt-0.5";
var link = "font-semibold text-blue-600 hover:underline text-sm";
var topic = "inline-block bg-blue-100 text-blue-600 text-xs font-medium py-1 px-2 rounded-xl mr-1.5 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer";

// app/components/RepoAboutWidget/HomepageUrl.tsx
function HomepageUrl({ homepageUrl }) {
  if (!homepageUrl) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: linkContainer
  }, /* @__PURE__ */ React.createElement(LinkIcon_default, {
    className: linkIcon
  }), /* @__PURE__ */ React.createElement(Link, {
    to: homepageUrl,
    className: link,
    target: "_blank"
  }, homepageUrl));
}
var HomepageUrl_default = HomepageUrl;

// app/components/RepoAboutWidget/Topics.tsx
init_react();
function Topics({ topics }) {
  if (!topics) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "space-y-1"
  }, topics.map((topic2) => /* @__PURE__ */ React.createElement("span", {
    key: topic2,
    className: topic
  }, topic2)));
}
var Topics_default = Topics;

// app/components/RepoAboutWidget/RepoAboutWidget.tsx
function RepoAboutWidget() {
  const { data, isRepoLoading } = useRepo();
  return /* @__PURE__ */ React.createElement("div", {
    className: container
  }, /* @__PURE__ */ React.createElement("h3", {
    className: heading
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: description
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ React.createElement(Description_default, {
    text: data == null ? void 0 : data.description
  }), /* @__PURE__ */ React.createElement(HomepageUrl_default, {
    homepageUrl: data == null ? void 0 : data.homepageUrl
  }), /* @__PURE__ */ React.createElement(Topics_default, {
    topics: data == null ? void 0 : data.topics
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    className: readmeLink
  }, /* @__PURE__ */ React.createElement(BookOpenIcon_default, {
    className: readmeIcon
  }), " Readme")));
}
var RepoAboutWidget_default = RepoAboutWidget;

// app/routes/$user/$repository/index.tsx
function Repository() {
  const { context, items, readme } = useLoaderData();
  return /* @__PURE__ */ React.createElement(RepoProvider, {
    value: context
  }, /* @__PURE__ */ React.createElement(RepoHeader_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-screen-2xl px-4 md:py-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-12 md:col-span-7 xl:col-span-9"
  }, /* @__PURE__ */ React.createElement(FileExplorerNav_default, null), /* @__PURE__ */ React.createElement(FileExplorer_view_default, {
    items,
    branch: context.branch,
    basePath: `/${context.owner}/${context.name}`,
    repoPath: context.path
  }), /* @__PURE__ */ React.createElement(RepoReadMe_view_default, {
    readme
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-12 md:col-span-5 xl:col-span-3"
  }, /* @__PURE__ */ React.createElement(RepoAboutWidget_default, null)))));
}
export {
  Repository as default
};
//# sourceMappingURL=/_static/build/routes/$user/$repository/index-XNWMU4WF.js.map
