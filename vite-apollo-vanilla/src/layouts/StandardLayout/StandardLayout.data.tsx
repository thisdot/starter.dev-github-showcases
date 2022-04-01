import { PropsWithChildren } from 'react';
import { useStandardLayoutQuery } from '@lib/github';
import NavBar from '@components/NavBar';

export default function StandardLayout({ children }: PropsWithChildren<{}>) {
  const { loading, data, error } = useStandardLayoutQuery();

  if (error) throw error;
  if (loading || !data) return null;
  return (
    <>
      <NavBar user={data.viewer} />
      {children}
    </>
  );
}
