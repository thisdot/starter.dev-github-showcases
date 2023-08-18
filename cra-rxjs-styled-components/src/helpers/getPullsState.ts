import { IssuePRData } from '@/types/types';

export const getPullsState = (pr: IssuePRData) => {
	if (pr.state === 'open') {
		return 'open';
	}

	if (pr.state === 'closed' && pr.merged_at) {
		return 'merged';
	}
	return 'closed';
};
