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
}: {
	title: string;
	links: { id: string; title: string; href: string }[];
}) {
	return (
		<Aside>
			<Menu>
				{title && <MenuTitle>{title}</MenuTitle>}
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
			</Menu>
		</Aside>
	);
}
