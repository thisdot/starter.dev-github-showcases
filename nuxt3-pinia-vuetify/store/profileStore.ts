import useFetchAPI from "~~/hooks/useFetchApI";
import { IUserApiResponse } from "~~/types/users/interface";

export interface IProfileRootState {
	user: IUserApiResponse | null;
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

				this.user = data.value as IUserApiResponse;
			} catch (error: any) {
				if (error && error?.response) {
					throw error;
				}

				throw new Error('Error fetching user top repos');
			}
		},
		async getAuthUser() {
			try {
				const url = `/user`;
				const { data } = await useFetchAPI(url, {
					headers: {
						Accept: 'application/vnd.github+json',
					},
				});

				const user = data.value as { login: string; avatar_url: string | null };
				this.login = user.login;
				this.avatar_url = user.avatar_url;
				this.getProfile();
			} catch (error: any) {
				if (error && error?.response) {
					throw error;
				}

				throw new Error('Error fetching user top repos');
			}
		},
	},
});
