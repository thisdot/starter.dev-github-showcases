import { UseFetchOptions } from "nuxt/app";

export default function useFetchAPI(url: string, opts?: UseFetchOptions<unknown>) {
	const config = useRuntimeConfig();
	const { GITHUB_API_URL } = config;
	const token = useCookie('token');
	const headers = {
		...(opts?.headers || {}),
		...(token && { Authorization: `Bearer ${token.value}` }),
	};

	return useFetch(url, { ...opts, headers, baseURL: GITHUB_API_URL });
}
