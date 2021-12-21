import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/client';

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
