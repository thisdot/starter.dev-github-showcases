import { ActionFunction } from '@remix-run/node';
import { auth } from '~/services/auth.server';

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: '/login' });
};
