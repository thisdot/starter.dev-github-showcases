import { createCookieSessionStorage, Session } from 'remix';
import { auth } from './auth.server';

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: ['s3cr3t'], // TODO: replace this with an actual secret
    secure: process.env.NODE_ENV === 'production',
  },
});

export function getSession(request: Request): Promise<Session> {
  return sessionStorage.getSession(request.headers.get('Cookie'));

  // const session = sessionStorage.getSession(request.headers.get('Cookie'));
  // return {
  //   session,
  //   getUser: async () => {
  //     const session = await sessionStorage.getSession(
  //       request.headers.get('Cookie')
  //     );
  //     // console.log(`SESSION YOS${session}`);

  //     const valid = session.get(auth.sessionKey);
  //     // console.log(`TESTING ${valid}`);
  //     if (!valid) return { valid: null, accessToken: '' };

  //     const { accessToken } = await auth.isAuthenticated(request, {
  //       failureRedirect: '/login',
  //     });
  //     return { accessToken, valid };
  //     // const token = getSessionId();
  //     // if (!token) return null;

  //     // finds a user and checks expiration timing to request a new link
  //     // for us we will just use this to find the session.user
  //     // return getUserFromSessionId(token).catch((error: unknown) => {
  //     //   unsetSessionId();
  //     //   console.error(`Failure getting user from session ID:`, error);
  //     //   return null;
  //     // });
  //   },
  // };
}

async function getUser(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );
  // console.log(`SESSION YOS${session}`);

  const valid = session.get(auth.sessionKey);
  // console.log(`TESTING ${valid}`);
  if (!valid) return { valid: null, accessToken: '' };

  const { accessToken } = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });
  return { accessToken, valid };
  // const token = getSessionId();
  // if (!token) return null;

  // finds a user and checks expiration timing to request a new link
  // for us we will just use this to find the session.user
  // return getUserFromSessionId(token).catch((error: unknown) => {
  //   unsetSessionId();
  //   console.error(`Failure getting user from session ID:`, error);
  //   return null;
  // });
}

export { getUser };
