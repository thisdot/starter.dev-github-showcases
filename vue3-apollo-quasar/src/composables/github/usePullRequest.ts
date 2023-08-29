import { useQuery } from '@vue/apollo-composable';
import { Ref, computed } from 'vue';
import { PULL_REQUEST_QUERY } from './queries';
import { PullRequestResp } from './types';
import { parsePullRequests } from '@/helpers/parsePullRequest';
import { parseLabels, parseMilestones } from '@/helpers/parseFunctions';
import { useToken } from '../auth';
import FetchApi from '@/helpers/api';
import { SEARCH_PULLS } from '@/helpers';
import parseRestAPIPullRequests, {
  IPullRequestProps,
} from '@/helpers/parseRestAPIPullRequests';

interface PullRequestsProps {
  owner: string;
  name: string;
  orderBy?: string;
  direction?: string;
  milestone?: string;
  labels?: (string | undefined)[];
  before?: string;
  after?: string;
  first?: number;
  last?: number;
}

interface UsePullRequest {
  getPullRequests: (value: PullRequestsProps) => {
    data: Ref<PullRequestResp | null>;
    loading: Ref<boolean>;
  };
  getPullRequestsRestAPI: (
    value: PullRequestsProps,
  ) => Promise<PullRequestResp>;
}

export const usePullRequest = (): UsePullRequest => {
  const getPullRequests = ({
    owner,
    name,
    first,
    last,
    labels,
    orderBy = 'CREATED_AT',
    direction = 'DESC',
    before,
    after,
  }: PullRequestsProps) => {
    const { result, loading } = useQuery(PULL_REQUEST_QUERY, {
      owner,
      name,
      orderBy,
      direction,
      labels,
      first,
      last,
      before,
      after,
    });

    const data = computed(() => {
      const openPullRequest = parsePullRequests(
        result.value?.repository.openPullRequest,
      );
      const closedPullRequest = parsePullRequests(
        result.value?.repository.closedPullRequest,
      );
      const milestones = parseMilestones(result.value?.repository.milestones);
      const labels = parseLabels(result.value?.repository.labels);
      const res = {
        openPullRequest,
        closedPullRequest,
        milestones,
        labels,
      };

      return res;
    });

    return { data: data as Ref<PullRequestResp | null>, loading };
  };

  const getPullRequestsRestAPI = async ({
    owner,
    name,
    first,
    labels,
    milestone,
    orderBy = 'CREATED_AT',
    direction = 'DESC',
  }: PullRequestsProps) => {
    const { getAuthToken } = useToken();
    const authToken = getAuthToken();
    if (authToken) {
      const pulls_data = {
        owner,
        name,
        labels: labels?.[0] ?? undefined,
        sort: orderBy,
        direction,
        first,
        type: 'pull-request',
        milestone,
      };
      const restOpenPullRequests = (await FetchApi({
        url: SEARCH_PULLS({
          ...pulls_data,
          state: 'open',
        }),
        headersOptions: {
          authorization: `Bearer ${authToken}`,
        },
      })) as IPullRequestProps;
      const restClosedPullRequests = (await FetchApi({
        url: SEARCH_PULLS({
          ...pulls_data,
          state: 'closed',
        }),
        headersOptions: {
          authorization: `Bearer ${authToken}`,
        },
      })) as IPullRequestProps;
      const openPullRequest = parseRestAPIPullRequests(restOpenPullRequests);
      const closedPullRequest = parseRestAPIPullRequests(
        restClosedPullRequests,
      );

      const data = {
        openPullRequest,
        closedPullRequest,
      };

      return data;
    }
  };

  return { getPullRequests, getPullRequestsRestAPI };
};
