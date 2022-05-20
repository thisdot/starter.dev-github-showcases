export type InitialStateTypes = {
    token: string | null;
}


export const initialState: InitialStateTypes = {
    token: null
};


export type Action = {
    type: 
        'SET_TOKEN',
    payload: any,
};

function reducer(state: InitialStateTypes, action:Action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
