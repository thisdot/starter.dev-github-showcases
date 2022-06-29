import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';
import { auth } from '~/services/auth.server';

export const loader: LoaderFunction = () => redirect('/login');

export const action: ActionFunction = async ({ request }) => {
  return await auth.authenticate('github', request, {
    successRedirect: '/',
    failureRedirect: '/login',
  });
};
