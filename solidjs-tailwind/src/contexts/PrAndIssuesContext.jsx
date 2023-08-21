import { createContext, createSignal, useContext } from 'solid-js';
import { useLocation, useSearchParams } from '@solidjs/router';

const PrAndIssueContext = createContext();

export function PrAndIssuesProvider(props) {
  const [params, setParams] = useSearchParams();
  const { pathname } = useLocation();
  const type = pathname.includes('pulls') ? 'pr' : 'issue';
  const [tabActive, setActiveTab] = [
    () => params.tab || 'open',
    (tab) => setParams({ tab }),
  ];
  const [sortBy, setSortBy] = createSignal('Newest');
  const [selectedLabel, setSelectedLabel] = createSignal(undefined);
  const [selectedMilestone, setSelectedMilestone] = createSignal(undefined);
  const [labelOpt, setLabelOpt] = createSignal([]);
  const [milestoneOpt, setMilestoneOpt] = createSignal([]);
  const [milestoneNumber, setMilestoneNumber] = createSignal(undefined);

  const clearSortAndFilter = () => {
    setSortBy('Newest');
    setSelectedLabel(undefined);
    setSelectedMilestone(undefined);
    setMilestoneNumber(undefined);
  };

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
    setLabelOpt,
    selectedMilestone,
    setSelectedMilestone,
    milestoneOpt,
    setMilestoneOpt,
    milestoneNumber,
    setMilestoneNumber,
  };

  return (
    <PrAndIssueContext.Provider value={PrAndIssuesParameters}>
      {props.children}
    </PrAndIssueContext.Provider>
  );
}

export function usePrAndIssuesContext() {
  return useContext(PrAndIssueContext);
}
