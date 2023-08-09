import {
	SubHeaderWrapper,
	SubHeaderTopRow,
	SubHeaderBottomRow,
	SubHeaderH1Section,
	BookIconStyles,
	SubHeaderButtonsActionsContainer,
	SubHeaderSpanContainer,
	SubHeaderUserLink,
	SubHeaderSeperator,
	SubHeaderRepoLink,
	SubHeaderPrivacyBadge,
	SubHeaderIndividualButtonContainer,
	SubHeaderMainButtonSection,
	SubHeaderMainButtonCount,
	SubHeaderButtonsActionsIcon,
	TabNavigation,
	TabNavigationIcon,
	TabNavigationCount,
	TabNavigationLink,
} from './SubHeader.styles';
import { BookIcon } from '../icons/BookIcon';
import { EyeIcon } from '../icons/EyeIcon';
import { StarIcon } from '../icons/StarIcon';
import { ForkIcon } from '../icons/ForkIcon';
import { CodeIcon } from '../icons/CodeIcon';
import { PrIcon } from '../icons/PrIcon';
import { IssuesIcon } from '../icons/IssuesIcon';
import { useRepo } from '../../context/RepoContext';

export default function SubHeader() {
	const repo = useRepo();
	const pathname = window.location.pathname;

	const btnArr = [
		{ label: 'Watch', icon: <EyeIcon />, count: repo.data?.watcherCount },
		{ label: 'Star', icon: <StarIcon />, count: repo.data?.stargazerCount },
		{ label: 'Fork', icon: <ForkIcon />, count: repo.data?.forkCount },
	];

	const tabArr = [
		{ label: 'Code', icon: <CodeIcon />, count: '', to: `` },
		{
			label: 'Issues',
			icon: <IssuesIcon />,
			count: repo.data?.openIssueCount,
			to: `/issues`,
		},
		{
			label: 'Pull Requests',
			icon: <PrIcon />,
			count: repo.data?.openPullRequestCount,
			to: `/pull-requests`,
		},
	];

	const isCurrentTab = (path?: string): boolean => {
		const matchPath = path === '' ? repo.basePath : `${repo.basePath}${path}`;
		if (path === '') {
			return pathname === repo.basePath || pathname.includes('tree');
		}
		return pathname.includes(matchPath);
	};

	return (
		<SubHeaderWrapper>
			<SubHeaderTopRow>
				<SubHeaderH1Section>
					<BookIconStyles>
						<BookIcon />
					</BookIconStyles>
					<SubHeaderSpanContainer>
						<SubHeaderUserLink
							href={repo.data?.isOrg ? `/orgs/${repo.owner}` : `/${repo.owner}`}
						>
							{repo.owner}
						</SubHeaderUserLink>
						<SubHeaderSeperator>/</SubHeaderSeperator>
						<SubHeaderRepoLink href={`/${repo?.owner}/${repo?.name}`}>
							{repo?.name}
						</SubHeaderRepoLink>
					</SubHeaderSpanContainer>
					<SubHeaderPrivacyBadge>
						{repo.data?.isPrivate ? 'Private' : 'Public'}
					</SubHeaderPrivacyBadge>
				</SubHeaderH1Section>
				<SubHeaderButtonsActionsContainer>
					{btnArr.map((btnInfo, index) => (
						<SubHeaderIndividualButtonContainer key={index}>
							<SubHeaderMainButtonSection>
								<SubHeaderButtonsActionsIcon>
									{btnInfo.icon}
								</SubHeaderButtonsActionsIcon>
								{btnInfo.label}
							</SubHeaderMainButtonSection>
							<SubHeaderMainButtonCount>{btnInfo.count}</SubHeaderMainButtonCount>
						</SubHeaderIndividualButtonContainer>
					))}
				</SubHeaderButtonsActionsContainer>
			</SubHeaderTopRow>
			<SubHeaderBottomRow>
				<TabNavigation>
					{tabArr.map((tabInfo, index) => (
						<TabNavigationLink
							key={index}
							to={`${repo.basePath}${tabInfo.to}`}
							className={isCurrentTab(tabInfo.to) ? 'active-tab' : ''}
						>
							<TabNavigationIcon>{tabInfo.icon}</TabNavigationIcon>
							<span>{tabInfo.label}</span>
							{tabInfo.count ? (
								<TabNavigationCount>{tabInfo.count}</TabNavigationCount>
							) : (
								''
							)}
						</TabNavigationLink>
					))}
				</TabNavigation>
			</SubHeaderBottomRow>
		</SubHeaderWrapper>
	);
}
