/* eslint-disable @next/next/no-img-element */
import { CtxOrReq, getProviders, signIn } from 'next-auth/client';
import { InferGetServerSidePropsType } from 'next';

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <section className="flex flex-col items-center w-full h-full bg-gray-900">
        {providers
          ? Object.values(providers).map((provider) => (
              <div
                key={provider.name}
                className="flex justify-center content-center h-5/6 w-11/12"
              >
                <button
                  className="self-center w-3/5 lg:w-1/5 py-5 px-2 text-white border-solid border-white border-2   rounded-sm hover:text-gray-900 hover:bg-white transition-colors"
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))
          : ''}

        <div className="w-11/12 pb-6">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.netlify.com"
          >
            <img
              src="https://www.netlify.com/v3/img/components/netlify-light.svg"
              alt="Deploys by Netlify"
              className="m-auto"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context: CtxOrReq) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
