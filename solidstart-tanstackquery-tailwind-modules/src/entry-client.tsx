import { redirect } from 'solid-start';
import { mount, StartClient } from 'solid-start/entry-client';
import { useAuth } from './auth';

mount(() => {
  const { authStore }: any = useAuth();
  if (authStore.isAuthenticated) return <StartClient />
  redirect('/signin')
}, document);
