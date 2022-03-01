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
  TabNavigationInactiveLinks,
  TabNavigationActive,
  TabNavigationIcon,
  TabNavigationCount
} from './sub-header.styles';
import { BookIcon } from '../icons/book-icon';
import { EyeIcon } from '../icons/eye-icon';
import { StarIcon } from '../icons/star-icon';
import { ForkIcon } from '../icons/fork-icon';
import { CodeIcon } from '../icons/code-icon';
import { PrIcon } from '../icons/pr-icon';
import { IssuesIcon } from '../icons/issues-icon';

type Props = {
  user: string;
  repo: string;
  privacy: boolean;
  watchCount: number;
  starCount: number;
  forkCount: number;
  issuesCount: number;
  prCount: number;
}

export default function SubHeader({ user, repo, privacy, watchCount, starCount, forkCount, issuesCount, prCount, }: Props) {
  const btnArr = [
    { label: "Watch", icon: <EyeIcon />, count: watchCount },
    { label: "Star", icon: <StarIcon />, count: starCount },
    { label: "Fork", icon: <ForkIcon />, count: forkCount }
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
          <SubHeaderPrivacyBadge>{privacy ? "Private" : "Public"}</SubHeaderPrivacyBadge>
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
          <TabNavigationActive>
            <TabNavigationIcon>
              <CodeIcon />
            </TabNavigationIcon>
            <span>Code</span>
          </TabNavigationActive>
          <TabNavigationInactiveLinks>
            <TabNavigationIcon>
              <IssuesIcon />
            </TabNavigationIcon>
            <span>Issues</span>
            <TabNavigationCount>{issuesCount}</TabNavigationCount>
          </TabNavigationInactiveLinks>
          <TabNavigationInactiveLinks>
            <TabNavigationIcon>
              <PrIcon />
            </TabNavigationIcon>
            <span>Pull Requests</span>
            <TabNavigationCount>{prCount}</TabNavigationCount>
          </TabNavigationInactiveLinks>
        </TabNavigation>
      </SubHeaderBottomRow>
    </SubHeaderWrapper>
  )
};
