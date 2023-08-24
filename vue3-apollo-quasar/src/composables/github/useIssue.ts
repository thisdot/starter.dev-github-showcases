import { useQuery } from '@vue/apollo-composable';
import { Ref, computed } from 'vue';
import { ISSUES_QUERY } from './queries';
import { IssueResp } from './types';
import { parseIssues } from '@/helpers/parseIssue';
import { parseLabels, parseMilestones } from '@/helpers';

interface IssuesProps {
  owner: string;
  name: string;
  orderBy?: string;
  direction?: string;
  filterBy?: {
    assignee?: string;
    createdBy?: string;
    mentioned?: string;
    milestone?: string;
    milestoneNumber?: string;
    labels?: (string | undefined)[];
    states?: 'OPEN' | 'CLOSED';
  };
  before?: string;
  after?: string;
  first?: number;
  last?: number;
}

interface UseIssue {
  getIssues: (value: IssuesProps) => {
    data: Ref<IssueResp | null>;
    loading: Ref<boolean>;
  };
}

export const useIssue = (): UseIssue => {
  const getIssues = ({
    owner,
    name,
    first,
    last,
    orderBy = 'CREATED_AT',
    direction = 'DESC',
    before,
    after,
    filterBy,
  }: IssuesProps) => {
    const { result, loading } = useQuery(ISSUES_QUERY, {
      owner,
      name,
      orderBy,
      direction,
      filterBy,
      first,
      last,
      before,
      after,
    });

    const data = computed(() => {
      const openIssues = parseIssues(result.value?.repository.openIssues);
      const closedIssues = parseIssues(result.value?.repository.closedIssues);
      const milestones = parseMilestones(result.value?.repository.milestones);
      const labels = parseLabels(result.value?.repository.labels);
      const res = {
        openIssues,
        closedIssues,
        milestones,
        labels,
      };

      return res;
    });

    return {
      data: data as Ref<IssueResp>,
      loading,
    };
  };

  return { getIssues };
};
