import type { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

/**
 * Higher-order function that redirects to sign-in page if a valid session is not set.
 */
export function withAuthRedirect(
  getServerSideProps?: GetServerSideProps
): GetServerSideProps {
  return async (context) => {
    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: '/api/auth/signin',
        },
      };
    }
    return getServerSideProps ? getServerSideProps(context) : { props: {} };
  };
}
