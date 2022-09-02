import styled from 'styled-components';

const Aside = styled.aside`
	grid-area: aside;
	padding: 2rem;
`;

const Menu = styled.div`
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-top-width: 1px;
	border-top-style: solid;
	border-color: rgb(229, 231, 235);
	padding: 2rem 0;
`;

const MenuTitle = styled.h3`
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5;
	margin: 0 0 1rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

const MenuList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const MenuItem = styled.li`
	margin: 0 0 0.5rem;

	&:last-child {
		margin-bottom: 0;
	}
`;

const MenuLink = styled.a`
	color: #24292f;
	font-size: 0.875rem;
	line-height: 1.25rem;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export default function Sidebar({
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
								<MenuLink href={href}>{title}</MenuLink>
							</MenuItem>
						))}
					</MenuList>
				)}
			</Menu>
		</Aside>
	);
}
