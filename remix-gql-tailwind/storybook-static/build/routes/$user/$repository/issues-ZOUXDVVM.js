import {
  IssueFilters_default,
  IssuesContainer_default,
  IssuesEmpty_default,
  Pagination_default,
  comments,
  commentsIcon,
  container,
  content,
  issue,
  label,
  link,
  meta,
  stateIcon,
  title,
  useIssueFilters
} from "/_static/build/_shared/chunk-7GWNS4KM.js";
import "/_static/build/_shared/chunk-DWOITULD.js";
import {
  formatDistance
} from "/_static/build/_shared/chunk-TZ6KWIXP.js";
import "/_static/build/_shared/chunk-2Z3CX2SQ.js";
import "/_static/build/_shared/chunk-MWJ6W5IQ.js";
import {
  RepoHeader_default,
  RepoProvider,
  useRepo
} from "/_static/build/_shared/chunk-JK2KSBGQ.js";
import "/_static/build/_shared/chunk-MHIJW24B.js";
import {
  ChatAltIcon_default,
  CheckCircleIcon_default,
  MinusCircleIcon_default,
  require_classnames
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
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

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/$user/$repository/issues.tsx?browser
init_react();

// app/routes/$user/$repository/issues.tsx
init_react();

// app/components/RepoIssues/RepoIssues.tsx
init_react();

// app/components/RepoIssues/RepoIssues.view.tsx
init_react();
var import_classnames = __toESM(require_classnames());
function RepoIssuesView({ issues, pathname }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, issues.map((issue2) => /* @__PURE__ */ React.createElement("div", {
    key: issue2.id,
    className: issue,
    "data-testid": "issue"
  }, /* @__PURE__ */ React.createElement("div", {
    className: container
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", null, issue2.closed ? /* @__PURE__ */ React.createElement(CheckCircleIcon_default, {
    className: (0, import_classnames.default)(stateIcon, "text-purple-600")
  }) : /* @__PURE__ */ React.createElement(MinusCircleIcon_default, {
    className: (0, import_classnames.default)(stateIcon, "text-green-600")
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: content
  }, /* @__PURE__ */ React.createElement("span", {
    className: title
  }, /* @__PURE__ */ React.createElement("a", {
    href: `https://github.com${pathname}/${issue2.number}`,
    target: "_blank"
  }, issue2.title)), /* @__PURE__ */ React.createElement("span", {
    className: "inline"
  }, issue2.labels.map(({ color, name }) => /* @__PURE__ */ React.createElement("span", {
    key: color,
    style: {
      backgroundColor: `#${color}`
    },
    className: label
  }, name)))), /* @__PURE__ */ React.createElement("div", {
    className: meta
  }, "#", issue2.number, " ", issue2.closed === false && /* @__PURE__ */ React.createElement("span", null, "opened", " ", formatDistance(new Date(), new Date(issue2.createdAt)), " ", "ago", " "), "by ", /* @__PURE__ */ React.createElement("span", {
    className: link
  }, issue2.login), issue2.closedAt && /* @__PURE__ */ React.createElement("span", null, " ", "was closed", " ", formatDistance(new Date(), new Date(issue2.closedAt)), " ago")))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("span", {
    className: comments
  }, /* @__PURE__ */ React.createElement(ChatAltIcon_default, {
    className: commentsIcon
  }), issue2.commentCount))))));
}
var RepoIssues_view_default = RepoIssuesView;

// app/components/RepoIssues/RepoIssues.tsx
function RepoIssues({
  openIssues,
  closedIssues,
  milestones,
  labels
}) {
  var _a;
  const { pathname } = useRepo();
  const filters = useIssueFilters();
  const activeIssues = filters.state.state === "OPEN" /* Open */ ? openIssues : closedIssues;
  const filtersElement = /* @__PURE__ */ React.createElement(IssueFilters_default, {
    openCount: openIssues.totalCount,
    closedCount: closedIssues.totalCount,
    milestones,
    labels,
    type: "issue" /* Issue */,
    ...filters
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IssuesContainer_default, {
    filtersEl: filtersElement,
    clearFilters: filters.clearFilters,
    hasActiveFilters: filters.hasActiveFilters
  }, activeIssues.issues.length > 0 ? /* @__PURE__ */ React.createElement(RepoIssues_view_default, {
    pathname,
    issues: activeIssues.issues
  }) : /* @__PURE__ */ React.createElement(IssuesEmpty_default, {
    Icon: MinusCircleIcon_default
  })), (activeIssues.pageInfo.hasNextPage || ((_a = activeIssues.pageInfo) == null ? void 0 : _a.hasPreviousPage)) && /* @__PURE__ */ React.createElement(Pagination_default, {
    pageInfo: activeIssues.pageInfo,
    changePage: filters.changePage
  }));
}
var RepoIssues_default = RepoIssues;

// app/routes/$user/$repository/issues.tsx
var import_auth = __toESM(require_auth());
function Issues() {
  const { context, openIssues, closedIssues, milestones, labels } = useLoaderData();
  return /* @__PURE__ */ React.createElement(RepoProvider, {
    value: context
  }, /* @__PURE__ */ React.createElement(RepoHeader_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-screen-xl md:py-12"
  }, /* @__PURE__ */ React.createElement(RepoIssues_default, {
    openIssues,
    closedIssues,
    milestones,
    labels
  })));
}
export {
  Issues as default
};
//# sourceMappingURL=/_static/build/routes/$user/$repository/issues-ZOUXDVVM.js.map
