import { Link } from 'react-router-dom';
import { GithubLogo } from '../misc/GitHubLogo';
import { HeaderSection } from './Header.styles';
import Dropdown from '../dropdown/Dropdown';

export default function Header() {
	return (
		<HeaderSection>
			<Link to="/">
				<GithubLogo />
			</Link>
			<Dropdown />
		</HeaderSection>
	);
}
