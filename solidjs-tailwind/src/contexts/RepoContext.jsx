import { createSignal, createEffect,  createContext, useContext } from "solid-js";

const RepoContext = createContext();

export function RepoProvider(props) {
  const [readme, setReadme] = createSignal({error: undefined,  text: undefined, isLoading: false});

  createEffect(() => {
    setReadme(props.readme)
  });

  const repo = [
    readme
  ]

  return (
    <RepoContext.Provider value={repo}>
      {props.children}
    </RepoContext.Provider>
  );
}

export function useRepo() {
  return useContext(RepoContext);
}
