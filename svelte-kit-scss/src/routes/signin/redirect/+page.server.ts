import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { PUBLIC_API_URL } from '$env/static/public'


export const load: PageServerLoad = async ({ cookies }) => {
  
  const tokenUrl = `${PUBLIC_API_URL}/api/auth/token`
  const response = await fetch(tokenUrl, {
    credentials: 'include',
  });
  const { access_token } = await response.json();
    
  // redirect the user to home page
  if(access_token){
    cookies.set('access_token', access_token, {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // only sent over HTTPS in production
        secure: process.env.NODE_ENV === 'production',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30,
    });

    throw redirect(302, '/');
  }
}