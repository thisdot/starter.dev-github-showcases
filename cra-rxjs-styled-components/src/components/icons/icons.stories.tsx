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

const IconContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	svg {
		width: 50px;
		height: 50px;
	}
`;

const IconContainer = () => {
	return (
		<IconContainerStyled>
			<BookIcon />
			<ClosedIssueIcon />
			<ClosedPRIcon />
			<CloseIcon />
			<CodeIcon />
			<CorrectIcon />
			<DirectoryIcon />
			<DropdownIcon />
			<EyeIcon />
			<FileIcon />
			<ForkIcon />
			<IssuesIcon />
			<LinkIcon />
			<PrIcon />
			<ReadmeBookIcon />
			<ReadmeListIcon />
			<StarIcon />
			<TwitterIcon />
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
