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
  useRepo
} from "/_static/build/_shared/chunk-JK2KSBGQ.js";
import {
  CheckIcon_default as CheckIcon_default2,
  ChevronLeftIcon_default,
  ChevronRightIcon_default,
  MinusCircleIcon_default,
  PullRequestIcon_default,
  XIcon_default as XIcon_default2,
  require_classnames
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  Link,
  useSearchParams
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// app/components/IssuesContainer/IssuesContainer.tsx
init_react();
var import_classnames = __toESM(require_classnames());

// app/components/IssuesContainer/IssuesContainer.classNames.ts
init_react();
var clearButton = "mb-6 inline-flex items-center space-x-1.5";
var clearButtonIconContainer = "bg-gray-500 rounded-md p-0.5 inline-flex items-center justify-center";
var clearButtonIcon = "h-3.5 w-3.5 text-white";
var clearButtonText = "text-sm font-semibold text-gray-500";
var container = "border rounded-lg overflow-hidden";

// app/components/IssuesContainer/IssuesContainer.tsx
function IssuesContainer({
  filtersEl,
  children,
  hasActiveFilters = false,
  clearFilters
}) {
  const [searchParams, setSearchParams] = useSearchParams({});
  return /* @__PURE__ */ React.createElement(React.Fragment, null, hasActiveFilters && /* @__PURE__ */ React.createElement("button", {
    className: (0, import_classnames.default)(clearButton, "group"),
    onClick: () => {
      clearFilters ? (clearFilters(), setSearchParams("")) : "";
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: (0, import_classnames.default)(clearButtonIconContainer, "group-hover:bg-blue-500")
  }, /* @__PURE__ */ React.createElement(XIcon_default2, {
    className: clearButtonIcon
  })), /* @__PURE__ */ React.createElement("span", {
    className: (0, import_classnames.default)(clearButtonText, "group-hover:text-blue-500"),
    "data-testid": "clear filters button"
  }, "Clear current search query, filters, and sorts")), /* @__PURE__ */ React.createElement("div", {
    className: container
  }, filtersEl, children));
}
var IssuesContainer_default = IssuesContainer;

// app/components/IssuesEmpty/IssuesEmpty.tsx
init_react();

// app/components/IssuesEmpty/IssuesEmpty.classNames.ts
init_react();
var container2 = "w-full py-16 flex flex-col items-center";
var icon = "w-6 h-6 text-gray-600";
var heading = "text-2xl font-semibold text-gray-900 text-center my-4";

// app/components/IssuesEmpty/IssuesEmpty.tsx
function IssuesEmpty({ Icon }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: container2,
    "data-testid": "issues-empty"
  }, Icon && /* @__PURE__ */ React.createElement(Icon, {
    className: icon
  }), /* @__PURE__ */ React.createElement("h3", {
    className: heading
  }, "No results matched your search."));
}
var IssuesEmpty_default = IssuesEmpty;

// app/components/IssueFilters/useIssueFilters.tsx
init_react();
var import_react2 = __toESM(require_react());
var initialState = {
  label: null,
  milestone: null,
  state: "OPEN" /* Open */,
  type: "issue" /* Issue */,
  sort: {
    field: "CREATED_AT" /* CreatedAt */,
    direction: "DESC" /* Desc */
  }
};
function reducer(state, action) {
  switch (action.type) {
    case 0 /* SET_MILESTONE */:
      return {
        ...state,
        milestone: action.payload.milestone,
        afterCursor: void 0,
        beforeCursor: void 0
      };
    case 1 /* SET_LABEL */:
      return {
        ...state,
        label: action.payload.label,
        afterCursor: void 0,
        beforeCursor: void 0
      };
    case 3 /* CHANGE_STATE */:
      return {
        ...state,
        state: action.payload.state,
        afterCursor: void 0,
        beforeCursor: void 0
      };
    case 4 /* SET_SORT */:
      return {
        ...state,
        sort: {
          field: action.payload.field,
          direction: action.payload.direction
        },
        afterCursor: void 0,
        beforeCursor: void 0
      };
    case 5 /* CHANGE_PAGE */:
      return {
        ...state,
        afterCursor: action.payload.afterCursor,
        beforeCursor: action.payload.beforeCursor
      };
    case 6 /* RESET_STATE */:
      return {
        ...initialState,
        type: state.type
      };
  }
}
function useIssueFilters(type = "issue" /* Issue */) {
  const [state, dispatch] = (0, import_react2.useReducer)(reducer, {
    ...initialState,
    type
  });
  function setMilestone(milestone) {
    dispatch({ type: 0 /* SET_MILESTONE */, payload: { milestone } });
  }
  function setLabel(label2) {
    dispatch({ type: 1 /* SET_LABEL */, payload: { label: label2 } });
  }
  function setSort(sort) {
    const [field, direction] = sort.split("^");
    dispatch({
      type: 4 /* SET_SORT */,
      payload: {
        field,
        direction
      }
    });
  }
  function changeState(state2) {
    dispatch({ type: 3 /* CHANGE_STATE */, payload: { state: state2 } });
  }
  function changePage({
    after,
    before
  }) {
    dispatch({
      type: 5 /* CHANGE_PAGE */,
      payload: { afterCursor: after, beforeCursor: before }
    });
  }
  function clearFilters() {
    dispatch({ type: 6 /* RESET_STATE */ });
  }
  const hasActiveFilters = typeof state.label === "string" || typeof state.milestone === "string" || state.sort.direction !== "DESC" /* Desc */ || state.sort.field !== "CREATED_AT" /* CreatedAt */;
  return {
    state,
    hasActiveFilters,
    setMilestone,
    setLabel,
    setSort,
    clearFilters,
    changeState,
    changePage
  };
}

// app/components/IssueFilters/IssueFilters.tsx
init_react();
var import_classnames2 = __toESM(require_classnames());

// app/components/FilterDropdown/FilterDropdown.tsx
init_react();
var import_react3 = __toESM(require_react());

// app/components/FilterDropdown/FilterDropdown.classNames.ts
init_react();
var container3 = "relative inline-block text-left z-30";
var menuButton = "relative inline-flex items-center px-4 py-1.5 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50";
var menuButtonIcon = "-mr-1 ml-1 mt-0.5 h-4 w-4";
var menu = "border border-gray-300 origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
var menuHeader = "flex justify-between items-center";
var description = "px-4 py-2.5 text-xs text-gray-800 font-semibold";
var closeButtonIcon = "mr-2 h-4 w-4 text-gray-600";
var itemButton = "relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize";
var itemActiveIcon = "inline w-4 h-4 absolute left-4";

// app/components/FilterDropdown/FilterDropdown.tsx
function FilterDropdown({
  name,
  description: description2,
  current,
  items,
  onChange,
  buttonClassName
}) {
  const [width, setWidth] = (0, import_react3.useState)("0");
  const [searchParams, setSearchParams] = useSearchParams({});
  const handleAppendQuery = (name2, value) => {
    let str = "";
    const key = searchParams.get(name2);
    if (key !== null) {
      if (value !== null && value !== key) {
        searchParams.set(name2, value);
        str = searchParams.toString();
      } else {
        searchParams.delete(name2);
        str = searchParams.toString();
      }
    } else {
      str = searchParams.toString();
      if (value && value !== null) {
        if (str !== "") {
          str = str + `&${name2}=${value}`;
        } else {
          str = str + `${name2}=${value}`;
        }
      }
    }
    setSearchParams(str);
  };
  (0, import_react3.useEffect)(() => {
    if (window.screen.width > 768) {
      setWidth("inherit");
    } else {
      setWidth("0");
    }
  }, [width]);
  return /* @__PURE__ */ React.createElement(Menu, {
    as: "div",
    className: container3
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Menu.Button, {
    className: buttonClassName || menuButton
  }, name, /* @__PURE__ */ React.createElement(ChevronDownIcon_default, {
    className: menuButtonIcon,
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement(Transition, {
    as: import_react3.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(Menu.Items, {
    className: menu,
    "data-testid": "filterDropdown",
    style: {
      left: width
    }
  }, /* @__PURE__ */ React.createElement("div", null, description2 && /* @__PURE__ */ React.createElement("div", {
    className: menuHeader
  }, /* @__PURE__ */ React.createElement("div", {
    className: description
  }, description2), /* @__PURE__ */ React.createElement(Menu.Button, null, /* @__PURE__ */ React.createElement(XIcon_default, {
    className: closeButtonIcon,
    "aria-hidden": "true"
  }))), items.map(({ label: label2, value }) => /* @__PURE__ */ React.createElement(Menu.Item, {
    key: value
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    name,
    className: itemButton,
    onClick: (e) => {
      onChange(value);
      handleAppendQuery(name, value);
    }
  }, value === current && /* @__PURE__ */ React.createElement(CheckIcon_default, {
    className: itemActiveIcon
  }), " ", label2)))))));
}
var FilterDropdown_default = FilterDropdown;

// app/components/IssueFilters/IssueFilters.classNames.ts
init_react();
var container4 = "flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b";
var typeIcon = "w-5 h-5 inline mr-1.5 mb-0.5";
var filterButton = "text-gray-600 hover:text-gray-900 inline-flex items-center text-sm";

// app/components/IssueFilters/IssueFilters.tsx
function IssueFilters({
  openCount = 0,
  closedCount = 0,
  className,
  type = "issue" /* Issue */,
  milestones,
  labels = [],
  state,
  changeState,
  setLabel,
  setMilestone,
  setSort
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames2.default)(className, container4)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-x-4"
  }, /* @__PURE__ */ React.createElement("button", {
    "data-testid": "openIssuesButton",
    className: (0, import_classnames2.default)("text-sm", state.state === "OPEN" /* Open */ ? "font-semibold text-gray-900" : "text-gray-600"),
    onClick: () => changeState("OPEN" /* Open */)
  }, type === "issue" /* Issue */ ? /* @__PURE__ */ React.createElement(MinusCircleIcon_default, {
    className: typeIcon
  }) : /* @__PURE__ */ React.createElement(PullRequestIcon_default, {
    className: typeIcon
  }), openCount, " Open"), /* @__PURE__ */ React.createElement("button", {
    "data-testid": "closedIssuesButton",
    className: (0, import_classnames2.default)("text-sm", state.state === "CLOSED" /* Closed */ ? "font-semibold text-gray-900" : "text-gray-600"),
    onClick: () => changeState("CLOSED" /* Closed */)
  }, /* @__PURE__ */ React.createElement(CheckIcon_default2, {
    className: typeIcon
  }), closedCount, " Closed")), /* @__PURE__ */ React.createElement("div", {
    className: "space-x-8"
  }, /* @__PURE__ */ React.createElement(FilterDropdown_default, {
    name: "Label",
    description: "Filter by label",
    current: state.label,
    items: [
      ...labels.map((label2) => ({
        label: label2.name,
        value: label2.name
      }))
    ],
    onChange: (label2) => setLabel(label2),
    buttonClassName: filterButton
  }), milestones && /* @__PURE__ */ React.createElement(FilterDropdown_default, {
    name: "Milestones",
    description: "Filter by milestone",
    current: state.milestone,
    items: [
      { label: "Issue with no milestone", value: null },
      ...milestones.map((milestone) => ({
        label: milestone.title,
        value: milestone.id
      }))
    ],
    onChange: (milestone) => setMilestone(milestone),
    buttonClassName: filterButton
  }), /* @__PURE__ */ React.createElement(FilterDropdown_default, {
    name: "Sort",
    description: "Sort by",
    current: `${state.sort.field}^${state.sort.direction}`,
    items: [
      {
        label: "Newest",
        value: `${"CREATED_AT" /* CreatedAt */}^${"DESC" /* Desc */}`
      },
      {
        label: "Oldest",
        value: `${"CREATED_AT" /* CreatedAt */}^${"ASC" /* Asc */}`
      },
      {
        label: "Most commented",
        value: `${"COMMENTS" /* Comments */}^${"DESC" /* Desc */}`
      },
      {
        label: "Least commented",
        value: `${"COMMENTS" /* Comments */}^${"ASC" /* Asc */}`
      },
      {
        label: "Recently updated",
        value: `${"UPDATED_AT" /* UpdatedAt */}^${"DESC" /* Desc */}`
      },
      {
        label: "Least recently updated",
        value: `${"UPDATED_AT" /* UpdatedAt */}^${"ASC" /* Asc */}`
      }
    ],
    onChange: (sort) => setSort(sort),
    buttonClassName: filterButton
  })));
}
var IssueFilters_default = IssueFilters;

// app/components/IssueFilters/Pagination.tsx
init_react();

// app/components/IssueFilters/Pagination.classNames.ts
init_react();
var container5 = "flex items-center justify-center my-8";
var group = "relative z-0 inline-flex space-x-2";
var linkBase = "relative inline-flex items-center px-2 py-1 rounded border border-white text-sm font-medium";
var link = `${linkBase} text-blue-500 transition-colors duration-150 ease-in-out`;
var linkDisabled = `${linkBase} pointer-events-none cursor-default text-gray-500`;

// app/components/IssueFilters/Pagination.tsx
var Previous = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ChevronLeftIcon_default, {
    className: "mr-1.5 inline h-4 w-4"
  }), "Previous");
};
var Next = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, "Next", /* @__PURE__ */ React.createElement(ChevronRightIcon_default, {
    className: "ml-1.5 inline h-4 w-4"
  }));
};
function Pagination({ pageInfo }) {
  const { owner, name, path } = useRepo();
  const prevUrl = `/${owner}/${name}/${path}?before=${pageInfo == null ? void 0 : pageInfo.startCursor}`;
  const nextUrl = `/${owner}/${name}/${path}?after=${pageInfo == null ? void 0 : pageInfo.endCursor}`;
  return /* @__PURE__ */ React.createElement("div", {
    className: container5
  }, /* @__PURE__ */ React.createElement("span", {
    className: group
  }, (pageInfo == null ? void 0 : pageInfo.hasPreviousPage) ? /* @__PURE__ */ React.createElement(Link, {
    to: prevUrl,
    className: link
  }, /* @__PURE__ */ React.createElement(Previous, null)) : /* @__PURE__ */ React.createElement("div", {
    className: linkDisabled
  }, /* @__PURE__ */ React.createElement(Previous, null)), (pageInfo == null ? void 0 : pageInfo.hasNextPage) ? /* @__PURE__ */ React.createElement(Link, {
    to: nextUrl,
    className: link
  }, /* @__PURE__ */ React.createElement(Next, null)) : /* @__PURE__ */ React.createElement("div", {
    className: linkDisabled
  }, /* @__PURE__ */ React.createElement(Next, null))));
}
var Pagination_default = Pagination;

// app/components/RepoIssues/RepoIssues.classNames.ts
init_react();
var issue = "p-4 hover:bg-gray-100 border-b";
var container6 = "flex flex-wrap justify-between items-start";
var stateIcon = "w-5 h-5 mr-2 mt-0.5";
var content = "max-w-3xl leading-tight";
var title = "font-semibold text-gray-800 hover:text-blue-500 hover:cursor-pointer mr-1";
var label = "inline-block py-0.5 px-2 mx-0.5 rounded-xl text-xs font-medium whitespace-nowrap cursor-pointer";
var meta = "mt-1.5 text-xs text-gray-600";
var link2 = "hover:text-blue-500 cursor-pointer";
var comments = "text-sm text-gray-700";
var commentsIcon = "inline h-5 w-5 mr-1";

export {
  IssuesContainer_default,
  IssuesEmpty_default,
  issue,
  container6 as container,
  stateIcon,
  content,
  title,
  label,
  meta,
  link2 as link,
  comments,
  commentsIcon,
  useIssueFilters,
  IssueFilters_default,
  Pagination_default
};
//# sourceMappingURL=/_static/build/_shared/chunk-7GWNS4KM.js.map
