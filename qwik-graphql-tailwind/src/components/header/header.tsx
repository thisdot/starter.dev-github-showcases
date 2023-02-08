import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { UserDropdown } from '../user-dropdown/user-dropdown';
import { GitHubLogo } from './github-logo';

type HeaderProps = {
  user: {
    avatarUrl: string;
    login: string;
  } | null;
};

export default component$(({ user }: HeaderProps) => {
  return (
    <header class="bg-gray-900 flex justify-between items-center py-4 px-8">
      <Link preventdefault:click={false} href="/">
        <GitHubLogo />
      </Link>
      <div>
        {user ? (
          <UserDropdown image={user.avatarUrl} username={user.login} />
        ) : (
          <Link href="/api/auth/signin">
            <span class="text-white font-semibold text-lg">Sign In</span>
          </Link>
        )}
      </div>
    </header>
  );
});
