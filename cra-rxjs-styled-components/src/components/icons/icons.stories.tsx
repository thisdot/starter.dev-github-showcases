import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

// Importing icons
import {
	BookIcon,
	ClosedIssueIcon,
	ClosedPRIcon,
	CloseIcon,
	CodeIcon,
	CorrectIcon,
	DirectoryIcon,
	DropdownIcon,
	EyeIcon,
	FileIcon,
	ForkIcon,
	IssuesIcon,
	LinkIcon,
	PrIcon,
	ReadmeBookIcon,
	ReadmeListIcon,
	StarIcon,
	TwitterIcon,
} from '.';

const ICONS = [
	{ name: 'BookIcon', component: BookIcon },
	{ name: 'ClosedIssueIcon', component: ClosedIssueIcon },
	{ name: 'ClosedPRIcon', component: ClosedPRIcon },
	{ name: 'CloseIcon', component: CloseIcon },
	{ name: 'CodeIcon', component: CodeIcon },
	{ name: 'CorrectIcon', component: CorrectIcon },
	{ name: 'DirectoryIcon', component: DirectoryIcon },
	{ name: 'DropdownIcon', component: DropdownIcon },
	{ name: 'EyeIcon', component: EyeIcon },
	{ name: 'FileIcon', component: FileIcon },
	{ name: 'ForkIcon', component: ForkIcon },
	{ name: 'IssuesIcon', component: IssuesIcon },
	{ name: 'LinkIcon', component: LinkIcon },
	{ name: 'PrIcon', component: PrIcon },
	{ name: 'ReadmeBookIcon', component: ReadmeBookIcon },
	{ name: 'ReadmeListIcon', component: ReadmeListIcon },
	{ name: 'StarIcon', component: StarIcon },
	{ name: 'TwitterIcon', component: TwitterIcon },
];

const IconContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	svg {
		width: 50px;
		height: 50px;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
`;

const IconContainer = () => {
	return (
		<IconContainerStyled>
			{ICONS.map((icon) => (
				<div>
					<icon.component key={icon.name} />
					<p>{icon.name}</p>
				</div>
			))}
		</IconContainerStyled>
	);
};

export default {
	title: 'Icons',
	component: IconContainer,
} as ComponentMeta<typeof IconContainer>;

const Template: ComponentStory<typeof IconContainer> = () => <IconContainer />;

// Stories
export const Default = Template.bind({});
