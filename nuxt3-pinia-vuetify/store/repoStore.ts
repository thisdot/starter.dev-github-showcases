import useFetchAPI from '~~/hooks/useFetchApI';
import { IRepository } from '~~/types/interfaces';
import {
	IRepositoryInfo,
	IBranch,
	IPullRequest,
	IRepoContents,
	IReadme,
} from '~~/types/repository/interface';

interface IRepoRootState {
	repository: IRepositoryInfo | null;
}

export const useRepoStore = defineStore('repositoryStore ', {
	state: (): IRepoRootState => ({
		repository: null,
	}),
	actions: {
		async getRepoInfo(owner: string, repoName: string) {
			try {
				// Define all the urls
				const url = `/repos/${owner}/${repoName}`;
				const branchesUrl = `${url}/branches`;
				const pullRequestsUrl = `${url}/pulls`;
				const repoContentsUrl = `${url}/contents`;
				const repoReadmeUrl = `${url}/readme`;

				// Prepare the promises to be fetched
				const getRepoInfo = useFetchAPI<IRepository>(url);
				const getRepoBranches = useFetchAPI<IBranch[]>(branchesUrl);
				const getPullRequests = useFetchAPI<IPullRequest[]>(pullRequestsUrl, {
					params: {
						state: 'all',
					},
				});
				const getRepoRootContents =
					useFetchAPI<IRepoContents[]>(repoContentsUrl);
				const getRepoReadme = useFetchAPI<IReadme>(repoReadmeUrl);

				// Fetch all the data
				const [
					{ data: repoInfo },
					{ data: repoBranches },
					{ data: repoPullRequests },
					{ data: repoRootContent },
					{ data: repoReadme },
				] = await Promise.all([
					getRepoInfo,
					getRepoBranches,
					getPullRequests,
					getRepoRootContents,
					getRepoReadme,
				]);

				this.repository = {
					owner: repoInfo.owner.login,
					name: repoInfo.name,
					visibility: repoInfo.visibility,
					watchersCount: repoInfo.watchers_count,
					stargazersCount: repoInfo.stargazers_count,
					forksCount: repoInfo.forks_count,
					openIssuesCount: repoInfo.open_issues_count,
					description: repoInfo.description,
					url: repoInfo.url,
					branches: repoBranches,
					pullsRequests: repoPullRequests,
					rootContent: repoRootContent,
					readme: repoReadme,
				};
			} catch (error: any) {
				throw new Error('Error fetching repository info');
			}
		},
	},
});
