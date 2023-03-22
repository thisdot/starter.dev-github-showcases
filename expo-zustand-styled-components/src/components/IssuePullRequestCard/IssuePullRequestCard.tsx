import { IssuePullRequestCardProps } from '../../types/issue-pr-type';
import {
  Card,
  CommentCount,
  CommentCountWrapper,
  Content,
  ContentFooter,
  ContentTitle,
  LabelView,
  TitleLabelsWrapper,
  Labels,
} from './IssuePullRequestCard.styles';
import IssuesIcon from '../Icons/IssuesIcon';
import { STATES, cardTypes } from './data';
import ClosedIssueIcon from '../Icons/ClosedIssueIcon';
import { colors } from '../../utils/style-variables';
import PullRequestIcon from '../Icons/PullRequestIcon';
import MergedPrIcon from '../Icons/MergedPrIcon';
import ClosedPrIcon from '../Icons/ClosedPrIcon';
import { Text, View } from 'react-native';
import { format } from 'date-fns';
import { Link } from '@react-navigation/native';
import CommentIcon from '../Icons/CommentIcon';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { PR_ISSUE_TABS } from '../../utils/constants';

const IssuePullRequestCard = ({
  number,
  title,
  url,
  state,
  createdAt,
  login,
  commentCount,
  labels,
  cardType,
}: IssuePullRequestCardProps) => {
  const { activeTab } = usePRAndIssueHeaderStore();
  const getIcon = () => {
    let icon = null;
    if (cardType === cardTypes.issue) {
      if (state === STATES.closed) {
        icon = <ClosedIssueIcon color={colors.purple600} width={20} height={20} />;
      } else {
        icon = (
          <IssuesIcon
            color={state === STATES.open ? colors.green600 : colors.gray500}
            width={20}
            height={20}
          />
        );
      }
    } else {
      if (state === STATES.open) {
        icon = <PullRequestIcon color={colors.green600} width={20} height={20} />;
      } else if (state === STATES.merged) {
        icon = <MergedPrIcon color={colors.purple600} width={20} height={20} />;
      } else {
        icon = <ClosedPrIcon color={colors.red600} width={20} height={20} />;
      }
    }

    return icon;
  };
  return (
    <Card>
      <View>{getIcon()}</View>
      <Content>
        <TitleLabelsWrapper>
          <Link to={url}>
            <ContentTitle>{title}</ContentTitle>
          </Link>
          <Labels>
            {labels.map(({ color, name }, index) => (
              <LabelView key={index} color={color}>
                <Text style={{ fontSize: 12 }}>{name}</Text>
              </LabelView>
            ))}
          </Labels>
        </TitleLabelsWrapper>
        <ContentFooter>
          <Text>
            #{number}
            {' by '}
            <Link to="#">{login}</Link> was {activeTab === PR_ISSUE_TABS.open ? 'opened' : 'closed'} on{' '}
            {format(new Date(createdAt), 'MMM d, yyyy')}
          </Text>
        </ContentFooter>
      </Content>
      <CommentCountWrapper>
        <Link to="#">
          <CommentCount>
            <CommentIcon color={colors.gray500} />
            <Text>{commentCount}</Text>
          </CommentCount>
        </Link>
      </CommentCountWrapper>
    </Card>
  );
};

export default IssuePullRequestCard;
