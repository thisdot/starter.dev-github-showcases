import type { LoaderFunction } from 'remix';
import { Form, json, useLoaderData } from 'remix';
type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ params }) => {
  return params
};

export default function Screen() {
  const params = useLoaderData<LoaderData>();

  return (
    <div>{JSON.stringify(params)}</div>
  );
}
