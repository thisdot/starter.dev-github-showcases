import {
  RepoMeta_default
} from "/_static/build/_shared/chunk-C3EZB5DJ.js";
import {
  useRepoFilters
} from "/_static/build/_shared/chunk-DWOITULD.js";
import "/_static/build/_shared/chunk-TZ6KWIXP.js";
import {
  Menu,
  Transition
} from "/_static/build/_shared/chunk-2Z3CX2SQ.js";
import {
  CheckIcon_default,
  ChevronDownIcon_default,
  XIcon_default
} from "/_static/build/_shared/chunk-MWJ6W5IQ.js";
import {
  TabNavigation_default
} from "/_static/build/_shared/chunk-MHIJW24B.js";
import {
  GitRepoIcon_default,
  LinkIcon_default,
  LocationMarkerIcon_default,
  OfficeBuildingIcon_default,
  PrivacyBadge_default,
  StarIcon_default,
  TwitterIcon_default,
  UsersIcon_default,
  require_classnames
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  require_auth
} from "/_static/build/_shared/chunk-V2UYFXEK.js";
import {
  Link,
  useLoaderData,
  useLocation
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/$user/index.tsx?browser
init_react();

// app/routes/$user/index.tsx
init_react();
var import_auth = __toESM(require_auth());

// app/components/ProfilePage/ProfilePage.view.tsx
init_react();

// app/components/ProfileNav/ProfileNav.tsx
init_react();

// app/components/ProfileNav/tabList.tsx
init_react();
var tabList = [
  {
    title: "Repositories",
    path: "",
    Icon: GitRepoIcon_default
  }
];

// app/components/ProfileNav/ProfileNav.tsx
function ProfileNav({ className, pathname }) {
  return /* @__PURE__ */ React.createElement(TabNavigation_default, {
    tabs: tabList,
    className,
    pathname
  });
}
var ProfileNav_default = ProfileNav;

// app/components/UserProfile/UserProfile.view.tsx
init_react();

// app/components/UserProfile/OrgList.tsx
init_react();

// app/components/UserProfile/OrgList.classNames.ts
init_react();
var container = "mt-5 border-t border-gray-200";
var heading = "my-2 pt-2 text-gray-800 font-bold";
var list = "flex flex-wrap space-x-2";
var listItem = "relative w-9 h-9 rounded border border-gray-300 overflow-hidden";

// app/components/UserProfile/OrgList.tsx
function OrgList({ organizations }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: container
  }, /* @__PURE__ */ React.createElement("h2", {
    className: heading
  }, "Organizations"), /* @__PURE__ */ React.createElement("div", {
    className: list
  }, organizations.map(({ avatarUrl, login }) => /* @__PURE__ */ React.createElement("div", {
    key: login,
    className: listItem
  }, /* @__PURE__ */ React.createElement("img", {
    src: avatarUrl,
    alt: "Organization",
    style: { objectFit: "fill" }
  })))));
}
var OrgList_default = OrgList;

// app/components/UserProfile/UserProfile.classNames.ts
init_react();
var avatar = "rounded-full shadow z-30";
var name = "text-2xl text-gray-800 font-bold leading-tight";
var username = "text-xl text-gray-500 font-light";
var bio = "text-gray-800 mt-4 mb-3";
var icon = "w-4 h-4 mb-0.5 mr-1 inline";
var count = "font-medium text-gray-900";
var socials = "text-sm text-gray-600 my-4";
var fields = "text-sm text-gray-800 space-y-1";
var link = "hover:text-blue-600 hover:underline";

// app/components/UserProfile/UserProfile.view.tsx
function UserProfileView({
  avatarUrl,
  bio: bio2,
  company,
  location,
  login,
  name: name2,
  twitterUsername,
  websiteUrl,
  followers,
  following,
  starredRepositories,
  organizations
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: avatarUrl,
    alt: "Avatar",
    width: 260,
    height: 260,
    className: avatar
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: name
  }, name2), /* @__PURE__ */ React.createElement("div", {
    className: username
  }, login)), bio2 && /* @__PURE__ */ React.createElement("div", {
    className: bio,
    dangerouslySetInnerHTML: { __html: bio2 }
  }), /* @__PURE__ */ React.createElement("div", {
    className: socials
  }, /* @__PURE__ */ React.createElement(UsersIcon_default, {
    className: icon
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: count
  }, followers.totalCount), " followers"), /* @__PURE__ */ React.createElement("span", {
    className: "mx-1"
  }, "\xB7"), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: count
  }, following.totalCount), " following"), /* @__PURE__ */ React.createElement("span", {
    className: "mx-1"
  }, "\xB7"), /* @__PURE__ */ React.createElement(StarIcon_default, {
    className: icon
  }), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block"
  }, /* @__PURE__ */ React.createElement("span", {
    className: count
  }, starredRepositories.totalCount), " ")), /* @__PURE__ */ React.createElement("div", {
    className: fields
  }, company && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(OfficeBuildingIcon_default, {
    className: icon
  }), company), location && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LocationMarkerIcon_default, {
    className: icon
  }), location), websiteUrl && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LinkIcon_default, {
    className: icon
  }), /* @__PURE__ */ React.createElement("a", {
    className: link,
    href: websiteUrl,
    target: "_blank",
    rel: "noreferrer"
  }, websiteUrl)), twitterUsername && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(TwitterIcon_default, {
    className: icon
  }), /* @__PURE__ */ React.createElement("a", {
    className: link,
    href: `https:/twitter.com/${twitterUsername}`,
    target: "_blank",
    rel: "noreferrer"
  }, "@", twitterUsername))), organizations.nodes.length > 0 && /* @__PURE__ */ React.createElement(OrgList_default, {
    organizations: organizations.nodes
  }));
}
var UserProfile_view_default = UserProfileView;

// app/components/UserRepos/UserRepos.view.tsx
init_react();

// app/components/UserRepos/UserRepos.classNames.ts
init_react();
var container2 = "py-8 border-b border-gray-200 first-of-type:border-t grid grid-cols-12 gap-x-4";
var content = "col-span-12 md:col-span-7";
var headingLink = "text-xl text-blue-600 font-semibold hover:underline mr-3";
var description = "text-gray-600 text-sm max-w-prose";
var aside = "col-span-12 md:col-span-5 flex items-start justify-end";
var starBtn = "relative inline-flex items-center px-3 py-1 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50";
var starIcon = "w-4 h-4 text-gray-600 mr-1";

// app/components/Pagination/Pagination.tsx
init_react();
var import_classnames = __toESM(require_classnames());

// app/components/Pagination/Pagination.classNames.ts
init_react();
var container3 = "flex items-center justify-center mt-4";
var group = "relative z-0 inline-flex shadow-sm rounded-md";
var button = "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-100 text-sm font-semibold text-blue-500 hover:bg-blue-500 hover:border-blue-500  hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gray-100 disabled:hover:text-blue-500 disabled:hover:border-gray-200 transition-colors duration-150 ease-in-out";
var buttonPrev = "rounded-l-lg";
var buttonNext = "rounded-r-lg";

// app/components/Pagination/Pagination.tsx
function Pagination({ pageInfo, owner }) {
  if (!pageInfo) {
    return null;
  }
  const prevUrl = `/${owner}?before=${pageInfo.startCursor}`;
  const nextUrl = `/${owner}?after=${pageInfo.endCursor}`;
  const handlePreviousClick = () => {
    window.location.assign(prevUrl);
  };
  const handleNextClick = () => {
    window.location.assign(nextUrl);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: container3
  }, /* @__PURE__ */ React.createElement("span", {
    className: group
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    disabled: !pageInfo.hasPreviousPage || !pageInfo.startCursor,
    onClick: handlePreviousClick,
    className: !pageInfo.hasPreviousPage || !pageInfo.startCursor ? (0, import_classnames.default)(button, buttonPrev) : (0, import_classnames.default)(button, buttonPrev)
  }, "Previous"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: handleNextClick,
    disabled: !pageInfo.hasNextPage || !pageInfo.endCursor,
    className: !pageInfo.hasNextPage || !pageInfo.endCursor ? (0, import_classnames.default)(button, buttonNext) : (0, import_classnames.default)(button, buttonNext)
  }, "Next")));
}
var Pagination_default = Pagination;

// app/components/UserRepos/filterRepos.ts
init_react();
function filterRepos(repos, state) {
  return repos.reduce((acc, repo) => {
    var _a;
    switch (state.type) {
      case "forked" /* FORKS */:
        if (!repo.isFork) {
          return acc;
        }
        break;
      case "archived" /* ARCHIVED */:
        if (!repo.isArchived) {
          return acc;
        }
    }
    if (state.language !== "all" && ((_a = repo.language) == null ? void 0 : _a.toLocaleLowerCase()) !== state.language) {
      return acc;
    }
    if (state.query !== "" && !repo.name.toLocaleLowerCase().includes(state.query.toLocaleLowerCase())) {
      return acc;
    }
    switch (state.sort) {
      case "NAME" /* Name */: {
        return [...acc, repo].sort((a, b) => {
          if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
          }
          if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      case "STARGAZERS" /* Stargazers */: {
        return [...acc, repo].sort((a, b) => {
          if (a.stargazerCount < b.stargazerCount) {
            return 1;
          }
          if (a.stargazerCount > b.stargazerCount) {
            return -1;
          }
          return 0;
        });
      }
    }
    return [...acc, repo];
  }, []);
}

// app/components/UserRepos/getLanguages.ts
init_react();
function getLanguages(repos) {
  const initialValue = { all: "All" };
  const languageMap = repos.reduce((acc, repo) => repo.language ? { ...acc, [repo.language.toLowerCase()]: repo.language } : acc, initialValue);
  return Object.entries(languageMap).map(([key, value]) => ({
    value: key,
    label: value
  }));
}

// app/components/RepoFilters/RepoFilters.tsx
init_react();

// app/components/RepoFilters/RepoFilters.classNames.ts
init_react();
var container4 = "flex relative mb-4 space-x-4";
var searchInput = "border p-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none";
var filters = "flex items-center space-x-1.5";
var filtersDetail = "py-4 border-t flex items-center justify-between";
var clearBtn = "inline-flex items-center justify-center";
var clearBtnIconContainer = "p-0.5 rounded bg-gray-500 inline-flex items-center justify-center mr-2 group-hover:bg-blue-500";
var clearBtnIcon = "w-3.5 h-3.5 text-white";
var clearBtnText = "text-sm text-gray-500 group-hover:text-blue-500";

// app/components/RepoFilters/FilterDropdown.tsx
init_react();
var import_react = __toESM(require_react());

// app/components/RepoFilters/FilterDropdown.classNames.ts
init_react();
var container5 = "relative inline-block text-left z-30";
var menuButton = "relative inline-flex items-center px-4 py-1.5 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50";
var menuButtonIcon = "-mr-1 ml-1 mt-0.5 h-4 w-4";
var menu = "border border-gray-300 origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
var menuHeader = "flex justify-between items-center";
var description2 = "px-4 py-2.5 text-xs text-gray-800 font-semibold";
var closeButtonIcon = "mr-2 h-4 w-4 text-gray-600";
var itemButton = "relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize";
var itemActiveIcon = "inline w-4 h-4 absolute left-4";

// app/components/RepoFilters/FilterDropdown.tsx
function Dropdown({
  name: name2,
  description: description3,
  current,
  items,
  onChange
}) {
  return /* @__PURE__ */ React.createElement(Menu, {
    as: "div",
    className: container5
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Menu.Button, {
    className: menuButton
  }, name2, /* @__PURE__ */ React.createElement(ChevronDownIcon_default, {
    className: menuButtonIcon,
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(Transition, {
    as: import_react.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(Menu.Items, {
    className: menu
  }, /* @__PURE__ */ React.createElement("div", null, description3 && /* @__PURE__ */ React.createElement("div", {
    className: menuHeader
  }, /* @__PURE__ */ React.createElement("div", {
    className: description2
  }, description3), /* @__PURE__ */ React.createElement(Menu.Button, null, /* @__PURE__ */ React.createElement(XIcon_default, {
    className: closeButtonIcon,
    "aria-hidden": "true"
  }))), items.map(({ label, value }) => /* @__PURE__ */ React.createElement(Menu.Item, {
    key: value
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: itemButton,
    onClick: () => {
      onChange(value);
    }
  }, value === current && /* @__PURE__ */ React.createElement(CheckIcon_default, {
    className: itemActiveIcon
  }), " ", label)))))));
}
var FilterDropdown_default = Dropdown;

// app/components/RepoFilters/RepoFilters.tsx
var import_classnames2 = __toESM(require_classnames());
var import_react3 = __toESM(require_react());
function RepoFilters({
  state,
  changeSort,
  changeLanguage,
  changeType,
  setLanguages,
  setQuery,
  resetFilters,
  isQueryActive,
  isTypeActive,
  isLanguageActive,
  isFiltersActive,
  languages,
  resultCount
}) {
  (0, import_react3.useEffect)(() => {
    setLanguages(languages);
  }, [languages, setLanguages]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: container4
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grow"
  }, /* @__PURE__ */ React.createElement("input", {
    role: "search",
    type: "search",
    name: "search",
    id: "search",
    value: state.query,
    className: searchInput,
    placeholder: "Find a repository..",
    onChange: (e) => setQuery(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: filters
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FilterDropdown_default, {
    name: "Type",
    description: "Select type",
    current: state.type,
    items: [
      {
        label: "All",
        value: "all" /* ALL */
      },
      {
        label: "Forks",
        value: "forked" /* FORKS */
      },
      {
        label: "Archived",
        value: "archived" /* ARCHIVED */
      }
    ],
    onChange: changeType
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FilterDropdown_default, {
    name: "Language",
    description: "Select language",
    current: state.language,
    items: languages,
    onChange: changeLanguage
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FilterDropdown_default, {
    name: "Sort",
    description: "Select order",
    current: state.sort,
    items: [
      {
        value: "UPDATED_AT" /* UpdatedAt */,
        label: "Last updated"
      },
      { value: "NAME" /* Name */, label: "Name" },
      { value: "STARGAZERS" /* Stargazers */, label: "Stars" }
    ],
    onChange: changeSort
  })))), isFiltersActive && /* @__PURE__ */ React.createElement("div", {
    className: filtersDetail
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold",
    "data-testid": "filterText"
  }, resultCount), " ", "results for", " ", isTypeActive && /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, state.type), " ", "repositories", " ", isQueryActive && /* @__PURE__ */ React.createElement(React.Fragment, null, "matching ", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, state.query)), " ", isLanguageActive && /* @__PURE__ */ React.createElement(React.Fragment, null, "written in", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold capitalize"
  }, state.language)), " ", "sorted by", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, state.sort.split("_").join(" ").toLowerCase())), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: resetFilters,
    className: (0, import_classnames2.default)(clearBtn, "group")
  }, /* @__PURE__ */ React.createElement("span", {
    className: (0, import_classnames2.default)(clearBtnIconContainer, "group-hover:bg-blue-500")
  }, /* @__PURE__ */ React.createElement(XIcon_default, {
    className: clearBtnIcon
  })), /* @__PURE__ */ React.createElement("span", {
    className: (0, import_classnames2.default)(clearBtnText, "group-hover:text-blue-500")
  }, "Clear filter")))));
}
var RepoFilters_default = RepoFilters;

// app/components/UserRepos/UserRepos.view.tsx
function UserReposView({ repos, owner }) {
  var _a, _b;
  const repoFilters = useRepoFilters();
  const filteredRepos = filterRepos(repos.repos, repoFilters.state);
  const languages = getLanguages(repos.repos);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(RepoFilters_default, {
    ...repoFilters,
    languages,
    resultCount: filteredRepos.length
  }), filteredRepos.map(({
    id,
    name: name2,
    description: description3,
    stargazerCount,
    forkCount,
    language,
    languageColor,
    updatedAt,
    isPrivate
  }) => /* @__PURE__ */ React.createElement("div", {
    key: id,
    className: container2
  }, /* @__PURE__ */ React.createElement("div", {
    className: content
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/${owner}/${name2}`,
    className: headingLink
  }, name2), /* @__PURE__ */ React.createElement(PrivacyBadge_default, {
    isPrivate,
    className: "relative bottom-0.5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: description
  }, description3), /* @__PURE__ */ React.createElement(RepoMeta_default, {
    language,
    languageColor,
    forkCount,
    stargazerCount,
    updatedAt
  })), /* @__PURE__ */ React.createElement("div", {
    className: aside
  }, /* @__PURE__ */ React.createElement("button", {
    className: starBtn
  }, /* @__PURE__ */ React.createElement(StarIcon_default, {
    className: starIcon
  }), "Star")))), (((_a = repos.pageInfo) == null ? void 0 : _a.hasNextPage) || ((_b = repos.pageInfo) == null ? void 0 : _b.hasPreviousPage)) && /* @__PURE__ */ React.createElement(Pagination_default, {
    pageInfo: repos.pageInfo,
    owner
  }));
}
var UserRepos_view_default = UserReposView;

// app/components/ProfilePage/ProfilePage.classNames.ts
init_react();
var container6 = "relative pt-8";
var stickyNav = "border-b border-gray-200 sticky top-0 bg-white z-20  hidden md:block";
var gridNav = "grid grid-cols-12 gap-8 max-w-screen-2xl mx-auto";
var profileNav = "col-span-12 md:col-span-8 xl:col-span-9";

// app/components/ProfilePage/ProfilePage.view.tsx
function ProfilePage({ userProfileData, owner, pathname }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: container6
  }, /* @__PURE__ */ React.createElement("div", {
    className: stickyNav
  }, /* @__PURE__ */ React.createElement("div", {
    className: gridNav
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-12 md:col-span-4 xl:col-span-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: profileNav
  }, /* @__PURE__ */ React.createElement(ProfileNav_default, {
    className: "border-none",
    pathname
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-screen-2xl py-8 px-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative z-20 col-span-12 md:-top-20 md:col-span-4 xl:col-span-3"
  }, /* @__PURE__ */ React.createElement(UserProfile_view_default, {
    ...userProfileData
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-12 md:col-span-8 xl:col-span-9"
  }, /* @__PURE__ */ React.createElement(ProfileNav_default, {
    className: "border-none md:hidden",
    pathname
  }), /* @__PURE__ */ React.createElement(UserRepos_view_default, {
    repos: userProfileData.repositories,
    owner
  })))));
}
var ProfilePage_view_default = ProfilePage;

// app/routes/$user/index.tsx
function User() {
  const location = useLocation();
  const { userProfileData, owner } = useLoaderData();
  return /* @__PURE__ */ React.createElement(ProfilePage_view_default, {
    userProfileData,
    owner,
    pathname: location.pathname
  });
}
export {
  User as default
};
//# sourceMappingURL=/_static/build/routes/$user/index-MC63PCMN.js.map
