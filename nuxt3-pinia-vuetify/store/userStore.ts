import { useProfileStore } from './profileStore';

import useFetchAPI from '~~/hooks/useFetchApI';
import { IRepository } from '~~/types/interfaces';
import { UserGist } from '~~/types/users/interface';

export interface IUserRootState {
	topRepos: IRepository[];
	gists: UserGist[];
}

export const useUserStore = defineStore('userStore', {
	state: (): IUserRootState => ({
		topRepos: [],
		gists: [],
	}),
	actions: {
		async getUserTopRepos() {
			try {
				const url = `/user/repos`;
				const { data } = await useFetchAPI<IRepository[]>(url, {
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
		async getUserGists() {
			const profileStore = useProfileStore();
			const url = `/users/${profileStore.login}/gists`;

			try {
				const { data } = await useFetchAPI<UserGist[]>(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
					params: {
						per_page: '10',
					},
				});

				this.gists = data.value;
			} catch (error) {
				throw new Error('Error fetching user gists');
			}
		},
	},
});
