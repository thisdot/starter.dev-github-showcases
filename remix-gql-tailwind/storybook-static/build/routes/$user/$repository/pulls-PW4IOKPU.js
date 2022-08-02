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
  ClosedPullRequestIcon_default,
  MergedPullRequestIcon_default,
  PullRequestIcon_default,
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

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/$user/$repository/pulls.tsx?browser
init_react();

// app/routes/$user/$repository/pulls.tsx
init_react();

// app/components/RepoPulls/RepoPulls.tsx
init_react();

// app/components/RepoPulls/RepoPulls.view.tsx
init_react();
var import_classnames = __toESM(require_classnames());
function RepoPullsView({ pullRequests, name, owner }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, pullRequests.map((pullRequest) => {
    let icon = /* @__PURE__ */ React.createElement(PullRequestIcon_default, {
      className: (0, import_classnames.default)(stateIcon, "text-green-600")
    });
    if (pullRequest.merged) {
      icon = /* @__PURE__ */ React.createElement(MergedPullRequestIcon_default, {
        className: (0, import_classnames.default)(stateIcon, "text-purple-600")
      });
    } else if (pullRequest.closed) {
      icon = /* @__PURE__ */ React.createElement(ClosedPullRequestIcon_default, {
        className: (0, import_classnames.default)(stateIcon, "text-red-600")
      });
    }
    return /* @__PURE__ */ React.createElement("div", {
      key: pullRequest.id,
      className: issue,
      "data-testid": "pr"
    }, /* @__PURE__ */ React.createElement("div", {
      className: container
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex"
    }, /* @__PURE__ */ React.createElement("div", null, icon), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: content
    }, /* @__PURE__ */ React.createElement("span", {
      className: title
    }, /* @__PURE__ */ React.createElement("a", {
      href: `https://github.com/${owner}/${name}/pull/${pullRequest.number}`,
      target: "_blank"
    }, pullRequest.title)), /* @__PURE__ */ React.createElement("span", {
      className: "inline"
    }, pullRequest.labels.map(({ color, name: name2 }) => /* @__PURE__ */ React.createElement("span", {
      key: color,
      style: {
        backgroundColor: `#${color}`
      },
      className: label
    }, name2)))), /* @__PURE__ */ React.createElement("div", {
      className: meta
    }, "#", pullRequest.number, " ", pullRequest.closed === false && /* @__PURE__ */ React.createElement("span", null, "opened", " ", formatDistance(new Date(), new Date(pullRequest.createdAt)), " ", "ago", " "), "by ", /* @__PURE__ */ React.createElement("span", {
      className: link
    }, pullRequest.login), pullRequest.closedAt && /* @__PURE__ */ React.createElement("span", null, " ", "was ", pullRequest.merged ? "merged" : "closed", " ", formatDistance(new Date(), new Date(pullRequest.closedAt)), " ", "ago")))), /* @__PURE__ */ React.createElement("div", {
      className: "mt-1"
    }, /* @__PURE__ */ React.createElement("span", {
      className: comments
    }, /* @__PURE__ */ React.createElement(ChatAltIcon_default, {
      className: commentsIcon
    }), pullRequest.commentCount))));
  }));
}
var RepoPulls_view_default = RepoPullsView;

// app/components/RepoPulls/RepoPulls.tsx
function RepoPulls({
  openPullRequests,
  closedPullRequests,
  labels
}) {
  var _a;
  const { name, owner } = useRepo();
  const filters = useIssueFilters();
  const activePullRequests = filters.state.state === "OPEN" /* Open */ ? openPullRequests : closedPullRequests;
  const filtersElement = /* @__PURE__ */ React.createElement(IssueFilters_default, {
    openCount: openPullRequests.totalCount,
    closedCount: closedPullRequests.totalCount,
    labels,
    type: "pull" /* PullRequest */,
    ...filters
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IssuesContainer_default, {
    filtersEl: filtersElement,
    clearFilters: filters.clearFilters,
    hasActiveFilters: filters.hasActiveFilters
  }, activePullRequests.pullRequests.length > 0 ? /* @__PURE__ */ React.createElement(RepoPulls_view_default, {
    pullRequests: activePullRequests.pullRequests,
    name,
    owner
  }) : /* @__PURE__ */ React.createElement(IssuesEmpty_default, {
    Icon: PullRequestIcon_default
  })), (activePullRequests.pageInfo.hasNextPage || ((_a = activePullRequests.pageInfo) == null ? void 0 : _a.hasPreviousPage)) && /* @__PURE__ */ React.createElement(Pagination_default, {
    pageInfo: activePullRequests.pageInfo,
    changePage: filters.changePage
  }));
}
var RepoPulls_default = RepoPulls;

// app/routes/$user/$repository/pulls.tsx
var import_auth = __toESM(require_auth());
function Pulls() {
  const { context, openPullRequests, closedPullRequests, labels } = useLoaderData();
  return /* @__PURE__ */ React.createElement(RepoProvider, {
    value: context
  }, /* @__PURE__ */ React.createElement(RepoHeader_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-screen-xl md:py-12"
  }, /* @__PURE__ */ React.createElement(RepoPulls_default, {
    openPullRequests,
    closedPullRequests,
    labels
  })));
}
export {
  Pulls as default
};
//# sourceMappingURL=/_static/build/routes/$user/$repository/pulls-PW4IOKPU.js.map
