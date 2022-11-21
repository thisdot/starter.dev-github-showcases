import { createContext } from '@builder.io/qwik';
export interface DropdownStoresProps {
  selectedLabel: string;
  selectedSort: string;
  selectedMilestones: string;
}
const DropdownStores = createContext<DropdownStoresProps>('DropdownStores-context');

export default DropdownStores;
