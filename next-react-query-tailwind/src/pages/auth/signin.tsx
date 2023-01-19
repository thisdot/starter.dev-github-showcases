/* eslint-disable @next/next/no-img-element */
import { CtxOrReq, getProviders, signIn } from 'next-auth/client';
import { InferGetServerSidePropsType } from 'next';

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {providers
        ? Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))
        : ''}

      <div className="flex justify-center mt-auto pb-5 pt-6">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.netlify.com"
        >
          <img
            src="https://www.netlify.com/v3/img/components/netlify-light.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </div>
    </>
  );
}

export async function getServerSideProps(context: CtxOrReq) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
