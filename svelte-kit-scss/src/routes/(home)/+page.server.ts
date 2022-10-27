import type { PageServerLoad } from './$types';
import { GITHUB_URL } from '$env/static/private'

export const load: PageServerLoad = async ({ fetch, locals }) => {

    let gists: any[] = [];

    const url = `${GITHUB_URL}/users/${locals.user.username}/gists`;
    const response = await fetch(url);

    gists = await response.json();

    return {
        gists
    };
};