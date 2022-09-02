import { PullRequest } from '../components/pull-request/pull-request/PullRequest.type';

export const getPullsState = (pr: PullRequest) => {
	if (pr.state === 'open') {
		return 'open';
	}

	if (pr.state === 'closed' && pr.merged_at) {
		return 'merged';
	}
	return 'closed';
};
