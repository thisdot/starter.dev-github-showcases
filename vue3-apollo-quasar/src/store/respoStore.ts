import { Label } from '@/composables/github/types';
import { MilestoneProps } from '@/composables/github/types/Milestones';
import { defineStore } from 'pinia';

interface IRepoStore {
  labels: Label[];
  milestones: MilestoneProps[];
  selectedLabel?: string;
  selectedMilestone?: string;
  milestoneNumber?: string;
  sortBy?: string;
}

export const useRepoStore = defineStore('repoStore', {
  state: (): IRepoStore => ({
    labels: [],
    milestones: [],
    selectedLabel: undefined,
    selectedMilestone: undefined,
    sortBy: undefined,
    milestoneNumber: undefined,
  }),
  getters: {},
  actions: {
    setMilestones(value) {
      this.milestones = value;
    },
    setLabels(value) {
      this.labels = value;
    },
    setSelectedLabel(value) {
      this.selectedLabel = value;
    },
    setSelectedMilestone(value) {
      this.selectedMilestone = value;
    },
    setSelectedMilestoneNumber(value) {
      this.milestoneNumber = value;
    },
    setSortBy(value) {
      this.sortBy = value;
    },
  },
});
