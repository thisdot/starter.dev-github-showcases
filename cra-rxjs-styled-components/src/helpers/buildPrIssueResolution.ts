export const buildPrIssueResolution = (state: string) => {
	if (state === 'merged') {
		return `was merged on`;
	}

	if (state === 'closed') {
		return `was closed on`;
	}
	return `on`;
};
