import useFetchAPI from '~~/hooks/useFetchApI';
import { IRepository } from '~~/types/interfaces';

interface IOrgRootState {
	repos: IRepository[];
}

export const useOrgStore = defineStore('orgStore ', {
	state: (): IOrgRootState => ({
		repos: [],
	}),
	actions: {
		async getOrgRepos(org: string) {
			try {
				const url = `/orgs/${org}/repos`;

				const { data } = await useFetchAPI<IRepository[]>(url, {
					params: {
						sort: 'updated',
						per_page: '10',
					},
				});

				this.repos = data.value;
			} catch (error: any) {
				throw new Error('Error fetching org repos');
			}
		},
	},
});
