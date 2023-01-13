import {
  createSignal,
  createContext,
  useContext,
} from 'solid-js';
import { useLocation } from '@solidjs/router';


const PrAndIssueContext = createContext();

export function PrAndIssuesProvider(props) {
  const { pathname } = useLocation();
  const type = pathname.includes('pulls') ? 'pr' : 'issue'
  const [tabActive, setActiveTab] = createSignal('open');
  const [sortBy, setSortBy] = createSignal('Newest');
  const [selectedLabel, setSelectedLabel] = createSignal(undefined);
  const [labelOpt, setLabelOpt] = createSignal([]);

  const clearSortAndFilter = () => {
    setSortBy('Newest')
    setSelectedLabel(undefined)
  }

  const PrAndIssuesParameters = {
    type,
    clearSortAndFilter,  
    tabActive, 
    setActiveTab,
    sortBy,
    setSortBy,
    selectedLabel,
    setSelectedLabel,
    labelOpt,
    setLabelOpt
  };

  return (
    <PrAndIssueContext.Provider value={PrAndIssuesParameters}>
      <>{props.children}</>
    </PrAndIssueContext.Provider>
  );
}

export function usePrAndIssuesContext() {
  return useContext(PrAndIssueContext);
}
