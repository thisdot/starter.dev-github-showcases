import { component$, useContextProvider, useStore, Slot } from '@builder.io/qwik';
import issuesPRStore from '../../context/issue-pr-store';

type Tabs = 'open' | 'closed';

export interface Issues {
  activeTab: Tabs;
}
export const PRIssueContextProvider = component$(({ activeTab }: Issues) => {
  const store = useStore({
    activeTab: activeTab,
  });
  useContextProvider(issuesPRStore, store);

  return (
    <>
      <Slot />
    </>
  );
});
