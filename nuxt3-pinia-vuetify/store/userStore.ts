import useFetchAPI from "~~/hooks/useFetchApI";
import { IRepository } from "~~/types/interfaces";

export interface IUserRootState {
	topRepos: IRepository[];
	repos: IRepository[];
}

export const useUserStore = defineStore('userStore', {
	state: (): IUserRootState => ({
		topRepos: [],
		repos: [],
	}),
	actions: {
		async getUserRepos() {
			try {
				const url = '/user/repos';
				const { data } = await useFetchAPI<IRepository[]>(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
					params: {
						sort: 'updated',
						per_page: '10',
					},
				});

				this.repos = data.value;

			} catch (error) {
				throw new Error('Error fetching user repos');
			}
		},
		async getUserTopRepos() {
			try {
				const url = `/user/repos`;
				const { data } = await useFetchAPI<IRepository>(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
					params: {
						sort: 'updated',
						affiliation: 'owner, collaborator, organization_member',
						per_page: '20',
					},
				});

				const topRepos = data.value;
				this.topRepos = topRepos;

			} catch (error: any) {

				throw new Error('Error fetching user top repos');
			}
		},
	},
});
