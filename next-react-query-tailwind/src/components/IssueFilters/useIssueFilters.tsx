import { useReducer } from 'react';
import { IssueState, IssueOrderField, OrderDirection } from '@lib/github';

export type IssueFilterAPI = ReturnType<typeof useIssueFilters>;

export enum IssueType {
  Issue = 'issue',
  PullRequest = 'pull',
}

enum ActionType {
  SET_MILESTONE,
  SET_LABEL,
  REMOVE_LABEL,
  CHANGE_STATE,
  SET_SORT,
  CHANGE_PAGE,
  RESET_STATE,
}

export interface FilterState {
  label: string | null;
  milestone: string | null;
  state: IssueState;
  type: IssueType;
  sort: {
    field: IssueOrderField;
    direction: OrderDirection;
  };
  afterCursor?: string | null;
  beforeCursor?: string | null;
  first?: number;
  last?: number;
}

type FilterAction =
  | { type: ActionType.SET_MILESTONE; payload: { milestone: string } }
  | { type: ActionType.SET_LABEL; payload: { label: string } }
  | { type: ActionType.CHANGE_STATE; payload: { state: IssueState } }
  | {
      type: ActionType.SET_SORT;
      payload: { field: IssueOrderField; direction: OrderDirection };
    }
  | {
      type: ActionType.CHANGE_PAGE;
      payload: {
        afterCursor?: string | null;
        beforeCursor?: string | null;
        first?: number | undefined;
        last?: number | undefined;
      };
    }
  | { type: ActionType.RESET_STATE };

const initialState: FilterState = {
  label: null,
  milestone: null,
  state: IssueState.Open,
  type: IssueType.Issue,
  sort: {
    field: IssueOrderField.CreatedAt,
    direction: OrderDirection.Desc,
  },
  first: 25,
};

function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case ActionType.SET_MILESTONE:
      return {
        ...state,
        milestone: action.payload.milestone,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.SET_LABEL:
      return {
        ...state,
        label: action.payload.label,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.CHANGE_STATE:
      return {
        ...state,
        state: action.payload.state,
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.SET_SORT:
      return {
        ...state,
        sort: {
          field: action.payload.field,
          direction: action.payload.direction,
        },
        afterCursor: undefined,
        beforeCursor: undefined,
      };
    case ActionType.CHANGE_PAGE:
      return {
        ...state,
        afterCursor: action.payload.afterCursor,
        beforeCursor: action.payload.beforeCursor,
        first: action.payload.first,
        last: action.payload.last,
      };
    case ActionType.RESET_STATE:
      return {
        ...initialState,
        type: state.type,
      };
  }
}

export function useIssueFilters(type: IssueType = IssueType.Issue) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    type: type,
  });

  function setMilestone(milestone: string) {
    dispatch({ type: ActionType.SET_MILESTONE, payload: { milestone } });
  }

  function setLabel(label: string) {
    dispatch({ type: ActionType.SET_LABEL, payload: { label } });
  }

  function setSort(sort: string) {
    const [field, direction] = sort.split('^');
    dispatch({
      type: ActionType.SET_SORT,
      payload: {
        field: field as IssueOrderField,
        direction: direction as OrderDirection,
      },
    });
  }

  function changeState(state: IssueState) {
    dispatch({ type: ActionType.CHANGE_STATE, payload: { state } });
  }

  function changePage({
    after,
    before,
  }: {
    after?: string | null;
    before?: string | null;
  }) {
    dispatch({
      type: ActionType.CHANGE_PAGE,
      payload: {
        afterCursor: after,
        beforeCursor: before,
        first: after ? 25 : undefined,
        last: before ? 25 : undefined,
      },
    });
  }

  function clearFilters() {
    dispatch({ type: ActionType.RESET_STATE });
  }

  const hasActiveFilters =
    typeof state.label === 'string' ||
    typeof state.milestone === 'string' ||
    state.sort.direction !== OrderDirection.Desc ||
    state.sort.field !== IssueOrderField.CreatedAt;

  return {
    state,
    hasActiveFilters,
    setMilestone,
    setLabel,
    setSort,
    clearFilters,
    changeState,
    changePage,
  };
}
