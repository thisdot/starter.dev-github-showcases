import { Text, View } from 'react-native';
import { format } from 'date-fns';
import { Link } from '@react-navigation/native';

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

import { STATES, cardTypes } from './data';

import ClosedIssueIcon from '../Icons/ClosedIssueIcon';
import PullRequestIcon from '../Icons/PullRequestIcon';
import MergedPrIcon from '../Icons/MergedPrIcon';
import ClosedPrIcon from '../Icons/ClosedPrIcon';
import CommentIcon from '../Icons/CommentIcon';
import IssuesIcon from '../Icons/IssuesIcon';

import { usePRAndIssueHeaderStore } from '../../hooks/stores';

import { PR_ISSUE_TABS } from '../../utils/constants';
import { getTextColor } from '../../utils/dynamicColor';
import { colors } from '../../utils/style-variables';

import { Issue } from '../../types/issues-type';
import LinkButton from '../LinkButton/LinkButton';

const IssuePullRequestCard = ({
  url,
  title,
  state,
  login,
  number,
  labels,
  cardType,
  createdAt,
  commentCount,
}: Issue & { cardType: string }) => {
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
          <LinkButton to={url} isBlank>
            <ContentTitle>{title}</ContentTitle>
          </LinkButton>
          <Labels>
            {labels.map(({ color, name }, index) => (
              <LabelView key={index} color={color}>
                <Text style={{ fontSize: 12, color: color ? getTextColor(`#${color}`) : '#FFF' }}>
                  {name}
                </Text>
              </LabelView>
            ))}
          </Labels>
        </TitleLabelsWrapper>
        <ContentFooter>
          <Text>
            #{number}
            {' by '}
            <Link to="#">{login}</Link> was {activeTab === PR_ISSUE_TABS.open ? 'opened' : 'closed'}{' '}
            on {format(new Date(createdAt), 'MMM d, yyyy')}
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
