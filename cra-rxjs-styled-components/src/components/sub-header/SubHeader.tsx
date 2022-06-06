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
import {
  BookIcon,
  EyeIcon,
  StarIcon,
  ForkIcon,
  CodeIcon,
  PrIcon,
  IssuesIcon,
} from '../icons/index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tap, forkJoin } from 'rxjs';
import { SINGLE_USER_REPO, ISSUE_PR_SEARCH } from '../../constants/url.constants';
import { Repository } from '../../interfaces/repositories.interfaces';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';

type IssueDetails = {
  total_count: number;
  incomplete_results: boolean,
  items: any[]
}

type RepositoryDetails = {
  repo: Repository | null;
  prs?: IssueDetails;
  rootFileInfo?: any[];
  issues?: IssueDetails;
};


export default function SubHeader() {
  const [repoDetails, setRepoDetails] = useState<RepositoryDetails>({
    repo: null,
  });
  const params = useParams();
  const { repo, prs, issues } = repoDetails;
  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
    forkJoin([
      request(SINGLE_USER_REPO(params.username!, params.repo!)),
      request(`${ISSUE_PR_SEARCH(params.username!, params.repo!, 'pr', 'open', 1, 0)}`),
      request(`${ISSUE_PR_SEARCH(params.username!, params.repo!, 'issue', 'open', 1, 0)}`),
      ])
      .pipe(
        tap((val) => {
          if (val) {
            setRepoDetails({
              repo: val[0],
              prs: val[1],
              issues: val[2]
            });
          }
        })
      )
      .subscribe();
  }, [params.username, params.repo]);


  const basePath = `/${repo?.owner.login!}/${repo?.name!}`;

  const btnArr = [
    { label: 'Watch', icon: <EyeIcon />, count: repo?.subscribers_count! },
    { label: 'Star', icon: <StarIcon />, count: repo?.stargazers_count! },
    { label: 'Fork', icon: <ForkIcon />, count: repo?.forks_count! },
  ];

  const tabArr = [
    { label: 'Code', icon: <CodeIcon />, count: '', to: `` },
    { label: 'Issues', icon: <IssuesIcon />, count: issues?.total_count!, to: `issues` },
    { label: 'Pull Requests', icon: <PrIcon />, count: prs?.total_count!, to: `pull-requests` },
  ];

  return (
    <SubHeaderWrapper>
      <SubHeaderTopRow>
        <SubHeaderH1Section>
          <BookIconStyles>
            <BookIcon />
          </BookIconStyles>
          <SubHeaderSpanContainer>
            <SubHeaderUserLink>{repo?.owner.login!}</SubHeaderUserLink>
            <SubHeaderSeperator>/</SubHeaderSeperator>
            <SubHeaderRepoLink>{repo?.name}</SubHeaderRepoLink>
          </SubHeaderSpanContainer>
          <SubHeaderPrivacyBadge>
            {repo?.private! ? 'Private' : 'Public'}
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
          {tabArr.map((tabInfo, index) => (
            <TabNavigationLink 
              key={index} 
              to={`${basePath}/${tabInfo.to}`} 
            >
              <TabNavigationIcon>{tabInfo.icon}</TabNavigationIcon>
              <span>{tabInfo.label}</span>
              {tabInfo.count ? <TabNavigationCount>{tabInfo.count}</TabNavigationCount> : ''}
            </TabNavigationLink>
          ))}
        </TabNavigation>
      </SubHeaderBottomRow>
    </SubHeaderWrapper>
  );
}
