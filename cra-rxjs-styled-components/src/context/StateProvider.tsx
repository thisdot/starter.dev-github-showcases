import type { ReactNode, Dispatch } from 'react';
import { createContext, useContext, useReducer } from 'react';
import reducer, {initialState, Action, InitialStateTypes} from './reducer';


interface StateProviderProps {
  children: ReactNode;
}

const StateContext = createContext<[any, Dispatch<Action>] | undefined>(undefined);

export default function StateProvider({ children }: StateProviderProps) {
  return (
    <StateContext.Provider
      value={useReducer(reducer, initialState)}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useStateValue() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateValue must be used within a React component');
  }
  return context;
}
