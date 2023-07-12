import useFetchAPI from "~~/hooks/useFetchApI";
import { IRepository } from "~~/types/interfaces";

export interface IUserRootState {
	topRepos: IRepository[];
}

export const useUserStore = defineStore('userStore', {
	state: (): IUserRootState => ({
		topRepos: [],
	}),
	actions: {
		async getUserTopRepos() {
			try {
				const url = `/user/repos`;
				const { data } = await useFetchAPI(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
					params: {
						sort: 'updated',
						affiliation: 'owner, collaborator, organization_member',
						per_page: '20',
					},
				});

				const topRepos = data.value as IRepository[];
				this.topRepos = topRepos;

			} catch (error: any) {
				if (error && error?.response) {
					throw error;
				}

				throw new Error('Error fetching user top repos');
			}
		},
	},
});
