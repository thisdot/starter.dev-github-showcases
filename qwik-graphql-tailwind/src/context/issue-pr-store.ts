import { createContext } from '@builder.io/qwik';
export interface IssuesPRStoreProps {
  activeTab: string;
}
const issuesPRStore = createContext<IssuesPRStoreProps>('Issues-context');

export default issuesPRStore;
