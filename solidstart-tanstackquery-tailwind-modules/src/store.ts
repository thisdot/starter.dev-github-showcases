import { createSignal } from "solid-js";

const [activeTab, setActiveTab] = createSignal<'OPEN' | 'CLOSED'>('OPEN');
const [sortBy, setSortBy] = createSignal('Newest');
const [selectedLabel, setSelectedLabel] = createSignal<string>();
const [selectedMilestone, setSelectedMilestone] = createSignal<string>();
const [milestoneId, setMilestoneId] = createSignal<string>();

export {
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
  selectedLabel,
  setSelectedLabel,
  selectedMilestone,
  setSelectedMilestone,
  milestoneId,
  setMilestoneId,
};
