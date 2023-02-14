import { createSignal, createContext, useContext, Accessor } from 'solid-js';
import { useLocation } from '@solidjs/router';

interface PrAndIssuesParameters {
  type: string;
  clearSortAndFilter: () => void;
  tabActive: Accessor<string>;
  setActiveTab: (value: string) => void;
  sortBy: Accessor<string>;
  setSortBy: (value: string) => void;
  selectedLabel: Accessor<undefined>;
  setSelectedLabel: (value: string | undefined) => void;
  labelOpt: Accessor<never[]>;
  setLabelOpt: (value: string[]) => void;
  selectedMilestone: Accessor<undefined>;
  setSelectedMilestone: (value: string | undefined) => void;
  milestoneOpt: Accessor<never[]>;
  setMilestoneOpt: (value: string[]) => void;
  milestoneId: Accessor<undefined>;
  setMilestoneId: (value: string | undefined) => void;
}

const PrAndIssueContext = createContext<PrAndIssuesParameters>();

export function PrAndIssuesProvider({ children }: { children: any }) {
  const { pathname } = useLocation();
  const type = pathname.includes('pulls') ? 'pr' : 'issue';
  const [tabActive, setActiveTab] = createSignal('open');
  const [sortBy, setSortBy] = createSignal('Newest');
  const [selectedLabel, setSelectedLabel] = createSignal(undefined);
  const [selectedMilestone, setSelectedMilestone] = createSignal(undefined);
  const [labelOpt, setLabelOpt] = createSignal([]);
  const [milestoneOpt, setMilestoneOpt] = createSignal([]);
  const [milestoneId, setMilestoneId] = createSignal(undefined);

  const clearSortAndFilter = () => {
    setSortBy('Newest');
    setSelectedLabel(undefined);
    setSelectedMilestone(undefined);
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
    milestoneId,
    setMilestoneId,
  };

  return (
    <PrAndIssueContext.Provider value={PrAndIssuesParameters}>
      <>{children}</>
    </PrAndIssueContext.Provider>
  );
}

export function usePrAndIssuesContext() {
  return useContext(PrAndIssueContext) as PrAndIssuesParameters;
}
