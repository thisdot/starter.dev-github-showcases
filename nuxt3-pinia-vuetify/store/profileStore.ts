import useFetchAPI from '~~/hooks/useFetchApI';
import { IUser, IUserOrg } from '~~/types/users/interface';

export interface IProfileRootState {
	user: IUser | Record<string, any> | null;
	login: string | null;
	avatar_url: string | null;
}

export const useProfileStore = defineStore('profileStore', {
	state: (): IProfileRootState => ({
		user: null,
		login: null,
		avatar_url: null,
	}),
	actions: {
		async getProfile() {
			try {
				const url = `/users/${this.login}`;
				const { data } = await useFetchAPI(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
				});

				const resp = data.value;

				this.user = resp;
				const companyURL = resp.organizations_url;

				const { data: companyData } = await useFetchAPI<IUserOrg>(companyURL, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
				});

				const orgs = companyData.value;

				this.user = {
					...this.user,
					orgs,
				};
			} catch (error) {
				throw new Error('Error fetching user profile');
			}
		},
		async getAuthUser() {
			try {
				const url = `/user`;
				const { data } = await useFetchAPI<IUser>(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
				});

				const user = data.value;
				this.login = user.login;
				this.avatar_url = user.avatar_url;
				this.getProfile();
			} catch (error) {
				throw new Error('Error fetching authenticated user');
			}
		},
	},
});
