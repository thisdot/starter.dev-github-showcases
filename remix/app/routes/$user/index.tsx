import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ params }) => {
  return params;
};

export default function User() {
  const params = useLoaderData();
  return <div>{JSON.stringify(params)}</div>;
}
