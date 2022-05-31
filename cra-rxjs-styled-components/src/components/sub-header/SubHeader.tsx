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
  TabNavigationLink,
  TabNavigationIcon,
  TabNavigationCount,
} from './SubHeader.styles';
import {
  BookIcon,
  EyeIcon,
  StarIcon,
  ForkIcon,
  CodeIcon,
  PrIcon,
  IssuesIcon,
} from '../icons/index';

type Props = {
  user: string;
  repo: string;
  privacy: boolean;
  watchCount: number;
  starCount: number;
  forkCount: number;
  issuesCount: number;
  prCount: number;
};

export default function SubHeader({
  user,
  repo,
  privacy,
  watchCount,
  starCount,
  forkCount,
  issuesCount,
  prCount,
}: Props) {
  const btnArr = [
    { label: 'Watch', icon: <EyeIcon />, count: watchCount },
    { label: 'Star', icon: <StarIcon />, count: starCount },
    { label: 'Fork', icon: <ForkIcon />, count: forkCount },
  ];

  return (
    <SubHeaderWrapper>
      <SubHeaderTopRow>
        <SubHeaderH1Section>
          <BookIconStyles>
            <BookIcon />
          </BookIconStyles>
          <SubHeaderSpanContainer>
            <SubHeaderUserLink>{user}</SubHeaderUserLink>
            <SubHeaderSeperator>/</SubHeaderSeperator>
            <SubHeaderRepoLink>{repo}</SubHeaderRepoLink>
          </SubHeaderSpanContainer>
          <SubHeaderPrivacyBadge>
            {privacy ? 'Private' : 'Public'}
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
              <SubHeaderMainButtonCount>
                {btnInfo.count}
              </SubHeaderMainButtonCount>
            </SubHeaderIndividualButtonContainer>
          ))}
        </SubHeaderButtonsActionsContainer>
      </SubHeaderTopRow>
      <SubHeaderBottomRow>
        <TabNavigation>
          <TabNavigationLink to="." end>
            <TabNavigationIcon>
              <CodeIcon />
            </TabNavigationIcon>
            <span>Code</span>
          </TabNavigationLink>
          <TabNavigationLink to="issues">
            <TabNavigationIcon>
              <IssuesIcon />
            </TabNavigationIcon>
            <span>Issues</span>
            <TabNavigationCount>{issuesCount}</TabNavigationCount>
          </TabNavigationLink>
          <TabNavigationLink to="pulls">
            <TabNavigationIcon>
              <PrIcon />
            </TabNavigationIcon>
            <span>Pull Requests</span>
            <TabNavigationCount>{prCount}</TabNavigationCount>
          </TabNavigationLink>
        </TabNavigation>
      </SubHeaderBottomRow>
    </SubHeaderWrapper>
  );
}
