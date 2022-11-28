import { createContext } from '@builder.io/qwik';
export type Tabs = 'open' | 'closed';
export interface IssuesPRStoreProps {
  activeTab: Tabs;
}
const issuesPRStore = createContext<IssuesPRStoreProps>('Issues-context');

export default issuesPRStore;
