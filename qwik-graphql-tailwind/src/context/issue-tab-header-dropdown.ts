import { createContext } from '@builder.io/qwik';
export interface DropdownStoresProps {
  selectedLabel?: string;
  selectedSort: string;
  selectedMilestones?: string;
}
const DropdownContext = createContext<DropdownStoresProps>('DropdownStores-context');

export default DropdownContext;
