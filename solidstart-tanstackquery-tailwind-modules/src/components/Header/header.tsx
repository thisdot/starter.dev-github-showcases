import { A } from '@solidjs/router';
import { GitHubLogo } from './github-logo';

const Header = () => {
  return (
    <header class="bg-gray-900 flex justify-between items-center py-4 px-8">
      <A href="/">
        <GitHubLogo />
      </A>
    </header>
  );
};

export default Header;