import {
  __toESM,
  init_react,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// app/components/RepoFilters/useRepoFilters.tsx
init_react();
var import_react = __toESM(require_react());
var initialState = {
  sort: "UPDATED_AT" /* UpdatedAt */,
  type: "all" /* ALL */,
  language: "all",
  query: "",
  languages: void 0
};
var reducer = (state, action) => {
  switch (action.type) {
    case 0 /* CHANGE_SORT */:
      return {
        ...state,
        sort: action.payload.sort
      };
    case 1 /* CHANGE_LANGUAGE */:
      return {
        ...state,
        language: action.payload.language
      };
    case 2 /* CHANGE_TYPE */:
      return {
        ...state,
        type: action.payload.type
      };
    case 3 /* SET_QUERY */:
      return {
        ...state,
        query: action.payload.query
      };
    case 5 /* RESET_FILTERS */:
      return {
        ...state,
        sort: "UPDATED_AT" /* UpdatedAt */,
        type: "all" /* ALL */,
        language: "all",
        query: ""
      };
    default:
      return state;
  }
};
function useRepoFilters() {
  const [state, dispatch] = (0, import_react.useReducer)(reducer, initialState);
  const changeSort = (sort) => {
    dispatch({
      type: 0 /* CHANGE_SORT */,
      payload: { sort }
    });
  };
  const changeLanguage = (language) => {
    dispatch({
      type: 1 /* CHANGE_LANGUAGE */,
      payload: { language }
    });
  };
  const changeType = (type) => {
    dispatch({
      type: 2 /* CHANGE_TYPE */,
      payload: { type }
    });
  };
  const setQuery = (query) => {
    dispatch({
      type: 3 /* SET_QUERY */,
      payload: { query }
    });
  };
  const setLanguages = (languages) => {
    dispatch({
      type: 4 /* SET_LANGUAGES */,
      payload: { languages }
    });
  };
  const resetFilters = () => {
    dispatch({
      type: 5 /* RESET_FILTERS */
    });
  };
  const isQueryActive = state.query !== "";
  const isTypeActive = state.type !== "all" /* ALL */;
  const isLanguageActive = state.language !== "all";
  const isSortActive = state.sort !== "UPDATED_AT" /* UpdatedAt */;
  const isFiltersActive = isQueryActive || isTypeActive || isLanguageActive || isSortActive;
  return {
    state,
    changeSort,
    changeLanguage,
    changeType,
    setQuery,
    setLanguages,
    resetFilters,
    isQueryActive,
    isTypeActive,
    isLanguageActive,
    isFiltersActive
  };
}

export {
  useRepoFilters
};
//# sourceMappingURL=/_static/build/_shared/chunk-DWOITULD.js.map
