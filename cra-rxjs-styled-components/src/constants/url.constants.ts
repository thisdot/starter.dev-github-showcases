import replaceSpaceWithPlus, {
	replaceEncodedSpaceWithPlus,
} from '../helpers/replaceSpaceWithPlus';
import convertObjectToQueryString from '../helpers/objectToQueryString';
import { IssueType, State } from '../types/types';

export const API_URL_BASE = process.env.REACT_APP_API_URL;
export const APP_BASE_URL = process.env.REACT_APP_BASE_URL;
export const GITHUB_URL_BASE = `https://api.github.com`;
export const PULLS_PER_PAGE = 25;

export const REDIRECT_URL = `${APP_BASE_URL}/redirect`;

export const SIGN_IN_BASE_URL = `${API_URL_BASE}/auth/signin`;

export const SIGN_IN_URL = (() => {
	const url = new URL(SIGN_IN_BASE_URL);
	url.searchParams.set('redirect_url', REDIRECT_URL);
	return url.toString();
})();

export const SIGN_OUT_URL = `${API_URL_BASE}/auth/signout`;
export const GET_TOKEN_URL = `${API_URL_BASE}/auth/token`;

export const REPOS_URL = (page: string = '1') =>
	`${GITHUB_URL_BASE}/user/repos?sort=pushed&affiliation=owner,collaborator&page=${page}`;

export const SINGLE_USER_REPO = (user: string, repo: string) =>
	`${GITHUB_URL_BASE}/repos/${user}/${repo}`;

export const ORG_REPO_LIST = (user: string) =>
	`${GITHUB_URL_BASE}/orgs/${user}/repos?sort=pushed&per_page=10`;

export const USER_REPO_LIST = (user: string, page: string = '1') =>
	`${GITHUB_URL_BASE}/users/${user}/repos?sort=pushed&page=${page}&type=all`;

export const USER_TOP_REPO_LIST = (page: string = '1') => {
	const params = {
		sort: 'updated',
		affiliation: 'owner, collaborator, organization_member',
		page,
		per_page: 20,
	};
	const queryStrings = convertObjectToQueryString(params);
	return `${GITHUB_URL_BASE}/user/repos?${queryStrings}`;
};

export const GISTS_URL = (user: string) =>
	`${GITHUB_URL_BASE}/users/${user}/gists?per_page=10`;

export const PULLS_URL = (
	owner: string,
	repoName: string,
	page: string = '1'
) =>
	`${GITHUB_URL_BASE}/search/issues?q=repo:${owner}/${repoName}&per_page=30&page=${page}`;

export const ISSUES_PULLS_URL = ({
	user,
	repo,
	type,
	state,
	per_page,
	page,
	labels,
	milestone,
	sort,
	direction,
}: {
	user: string;
	repo: string;
	type: string;
	state: State;
	per_page: number;
	page: number;
	labels?: string;
	milestone?: string | number;
	sort?: string;
	direction?: string;
}) => {
	const params = {
		per_page,
		page,
		sort,
		order: direction,
	};
	const queryStrings = convertObjectToQueryString(params);
	const milestone_check = `+milestone:"${
		typeof milestone === 'string'
			? replaceEncodedSpaceWithPlus(encodeURIComponent(milestone))
			: milestone
	}"`;
	const Q = `+is:${state}+is:${type}${
		labels ? `+label:"${replaceSpaceWithPlus(labels)}"` : ''
	}${milestone ? milestone_check : ''}`;
	return `${GITHUB_URL_BASE}/search/issues?q=repo:${user}/${repo}${Q}&${queryStrings}`;
};

export const ISSUE_PR_SEARCH = (
	user: string,
	repo: string,
	type: IssueType,
	state: State,
	per_page: number,
	page: number
) =>
	`${GITHUB_URL_BASE}/search/issues?q=repo:${user}/${repo}%20is:${type}%20state:${state}&per_page=${per_page}&page=${page}`;

export const ORG_INFO = (org: string) => `${GITHUB_URL_BASE}/orgs/${org}`;

export const REPO_LABELS = ({ user, repo }: { user: string; repo: string }) =>
	`${GITHUB_URL_BASE}/repos/${user}/${repo}/labels`;

export const REPO_MILESTONES = ({
	user,
	repo,
}: {
	user: string;
	repo: string;
}) => `${GITHUB_URL_BASE}/repos/${user}/${repo}/milestones`;
