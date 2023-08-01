import { LoadingTextLine } from '../Loading';
import {
	Aside,
	Menu,
	MenuItem,
	MenuLink,
	MenuList,
	MenuTitle,
} from './UserGists.styles';

export default function UserGists({
	title,
	links,
	loading,
}: {
	title: string;
	links: { id: string; title: string; href: string }[];
	loading: boolean;
}) {
	return (
		<Aside>
			<Menu>
				<MenuTitle>{title}</MenuTitle>
				{loading ? (
					<LoadingTextLine />
				) : (
					<>
						{links && (
							<MenuList>
								{links.map(({ id, title, href }) => (
									<MenuItem key={id}>
										<MenuLink target="_blank" href={href}>
											{title}
										</MenuLink>
									</MenuItem>
								))}
							</MenuList>
						)}
					</>
				)}
			</Menu>
		</Aside>
	);
}
