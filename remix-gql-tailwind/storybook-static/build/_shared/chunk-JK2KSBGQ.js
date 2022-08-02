import {
  TabNavigation_default
} from "/_static/build/_shared/chunk-MHIJW24B.js";
import {
  CodeIcon_default,
  EyeIcon_default,
  GitBranchIcon_default,
  GitRepoIcon_default,
  InformationCircleIcon_default,
  LockClosedIcon_default,
  PrivacyBadge_default,
  PullRequestIcon_default,
  StarIcon_default
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  Link
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// app/context/RepoContext.tsx
init_react();
var import_react = __toESM(require_react());
var RepoContext = (0, import_react.createContext)(void 0);
function RepoProvider({ children, value }) {
  return /* @__PURE__ */ React.createElement(RepoContext.Provider, {
    value: {
      isRepoLoading: false,
      ...value
    }
  }, children);
}
function useRepo() {
  const context = (0, import_react.useContext)(RepoContext);
  if (context === void 0) {
    throw new Error("useRepo must be used within a RepoPage");
  }
  return context;
}

// app/components/RepoHeader/RepoHeader.tsx
init_react();

// app/components/RepoHeading/RepoHeading.tsx
init_react();

// app/components/RepoHeading/PrivacyIcon.tsx
init_react();

// app/components/RepoHeading/RepoHeading.classNames.ts
init_react();
var heading = "space-x-2.5 flex items-center text-xl";
var navContainer = "space-x-1.5 mb-0.5";
var ownerLink = "text-blue-600 hover:underline";
var nameLink = "text-blue-600 font-semibold hover:underline";
var separator = "text-gray-600";
var privacyIcon = "w-6 h-6 text-gray-600";
var iconPlaceholder = "w-6 h-6 bg-gray-200 opacity-25 rounded-lg";
var badgePlaceholder = "w-8 h-6 bg-gray-200 opacity-25 rounded-xl";

// app/components/RepoHeading/PrivacyIcon.tsx
function PrivacyIcon({ isPrivate }) {
  if (isPrivate === void 0) {
    return /* @__PURE__ */ React.createElement("div", {
      className: iconPlaceholder
    });
  }
  return isPrivate ? /* @__PURE__ */ React.createElement(LockClosedIcon_default, {
    className: privacyIcon
  }) : /* @__PURE__ */ React.createElement(GitRepoIcon_default, {
    className: privacyIcon
  });
}
var PrivacyIcon_default = PrivacyIcon;

// app/components/RepoHeading/RepoHeading.tsx
function RepoHeading() {
  const { owner, name, data } = useRepo();
  return /* @__PURE__ */ React.createElement("h1", {
    className: heading
  }, /* @__PURE__ */ React.createElement(PrivacyIcon_default, {
    isPrivate: data == null ? void 0 : data.isPrivate
  }), /* @__PURE__ */ React.createElement("span", {
    className: navContainer
  }, /* @__PURE__ */ React.createElement(Link, {
    to: (data == null ? void 0 : data.isOrg) ? `/orgs/${owner}` : `/${owner}`,
    className: ownerLink
  }, owner), /* @__PURE__ */ React.createElement("span", {
    className: separator
  }, "/"), /* @__PURE__ */ React.createElement(Link, {
    to: `/${owner}/${name}`,
    className: nameLink
  }, name)), data ? /* @__PURE__ */ React.createElement(PrivacyBadge_default, {
    isPrivate: data.isPrivate
  }) : /* @__PURE__ */ React.createElement("div", {
    className: badgePlaceholder
  }));
}
var RepoHeading_default = RepoHeading;

// app/components/RepoActionButtons/RepoActionButtons.tsx
init_react();

// app/components/RepoActionButtons/CountButtonGroup.tsx
init_react();

// app/components/RepoActionButtons/RepoActionButtons.classNames.ts
init_react();
var container = "flex flex-wrap items-center justify-start";
var btnGroup = "relative z-0 inline-flex shadow-sm rounded-md mx-2 my-1";
var btnMain = "relative inline-flex items-center px-4 py-1.5 rounded-l-md border border-gray-300 bg-transparent text-xs font-medium text-gray-700 hover:bg-gray-200 hover:bg-opacity-25";
var btnSide = "-ml-px relative inline-flex items-center px-3 py-1.5 rounded-r-md border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600";
var btnIcon = "-ml-1 mr-1 h-4 w-4 text-gray-600";

// app/components/RepoActionButtons/CountButtonGroup.tsx
var formatCountString = (count) => {
  let countText = `${count}`;
  if (count && count > 1e3) {
    let digits = countText.split("");
    digits.splice(digits.length - 3, 3);
    countText = `${digits.join("")}k`;
  }
  return countText;
};
function CountButtonGroup({ children, count = 0 }) {
  let countText = formatCountString(count);
  return /* @__PURE__ */ React.createElement("span", {
    className: btnGroup
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: btnMain
  }, children), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: btnSide
  }, countText));
}
var CountButtonGroup_default = CountButtonGroup;

// app/components/RepoActionButtons/RepoActionButtons.tsx
function RepoActionButtons() {
  const { data } = useRepo();
  return /* @__PURE__ */ React.createElement("div", {
    className: container
  }, /* @__PURE__ */ React.createElement(CountButtonGroup_default, {
    count: data == null ? void 0 : data.watcherCount
  }, /* @__PURE__ */ React.createElement(EyeIcon_default, {
    className: btnIcon
  }), "Watch"), /* @__PURE__ */ React.createElement(CountButtonGroup_default, {
    count: data == null ? void 0 : data.stargazerCount
  }, /* @__PURE__ */ React.createElement(StarIcon_default, {
    className: btnIcon
  }), "Star"), /* @__PURE__ */ React.createElement(CountButtonGroup_default, {
    count: data == null ? void 0 : data.forkCount
  }, /* @__PURE__ */ React.createElement(GitBranchIcon_default, {
    className: btnIcon
  }), "Fork"));
}
var RepoActionButtons_default = RepoActionButtons;

// app/components/RepoHeader/RepoHeader.classNames.ts
init_react();
var wrapper = "pt-6 px-12 bg-gray-100 border-b border-gray-300";
var topRow = "flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center justify-between";
var bottomRow = "mt-6";

// app/components/RepoHeader/tabList.tsx
init_react();
function createTabList({
  issueCount = 0,
  pullRequestCount = 0
}) {
  return [
    {
      title: "Code",
      path: "",
      Icon: CodeIcon_default
    },
    {
      title: "Issues",
      path: "issues",
      Icon: InformationCircleIcon_default,
      count: issueCount
    },
    {
      title: "Pull Requests",
      path: "pulls",
      Icon: PullRequestIcon_default,
      count: pullRequestCount
    }
  ];
}

// app/components/RepoHeader/RepoHeader.tsx
function RepoHeader() {
  var _a, _b;
  const repo = useRepo();
  return /* @__PURE__ */ React.createElement("div", {
    className: wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: topRow
  }, /* @__PURE__ */ React.createElement(RepoHeading_default, null), /* @__PURE__ */ React.createElement(RepoActionButtons_default, null)), /* @__PURE__ */ React.createElement("div", {
    className: bottomRow
  }, /* @__PURE__ */ React.createElement(TabNavigation_default, {
    tabs: createTabList({
      issueCount: (_a = repo.data) == null ? void 0 : _a.openIssueCount,
      pullRequestCount: (_b = repo.data) == null ? void 0 : _b.openPullRequestCount
    }),
    basePath: `${repo.owner}/${repo.name}`,
    pathname: repo.pathname
  })));
}
var RepoHeader_default = RepoHeader;

export {
  RepoProvider,
  useRepo,
  RepoHeader_default
};
//# sourceMappingURL=/_static/build/_shared/chunk-JK2KSBGQ.js.map
