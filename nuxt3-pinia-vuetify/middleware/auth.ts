export default defineNuxtRouteMiddleware((to) => {
	const token: any = useCookie('token');

	const IS_SIGNIN_PAGE = to.path === '/sign-in';
	const IS_REDIRECT_PAGE = to.path.includes('/redirect');

	if ((IS_SIGNIN_PAGE || IS_REDIRECT_PAGE) && token.value) {
		return navigateTo('/');
	}
	if (!(IS_SIGNIN_PAGE || IS_REDIRECT_PAGE) && !token.value) {
		return navigateTo('/sign-in');
	}
});
