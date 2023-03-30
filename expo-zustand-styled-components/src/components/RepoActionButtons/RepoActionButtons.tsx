import { Text, useWindowDimensions } from 'react-native';

import EyeIcon from '../Icons/EyeIcon';
import GitBranchIcon from '../Icons/GitBranchIcon';
import StarIcon from '../Icons/StarIcon';
import CountButtonGroup from './CountButtonGroup';
import { Container } from './RepoActionButtons.styles';
import { colors } from '../../utils/style-variables';
import { useRepoInfoStore } from '../../hooks/stores';

const RepoActionButtons = () => {
  const { width } = useWindowDimensions();
  const { info } = useRepoInfoStore();

  const btns = [
    {
      text: 'Watch',
      Icon: EyeIcon,
      count: info?.watcherCount || 0,
    },
    {
      text: 'Star',
      Icon: StarIcon,
      count: info?.stargazerCount,
    },
    {
      text: 'Fork',
      Icon: GitBranchIcon,
      count: info?.forkCount,
    },
  ];

  return (
    <Container screenWidth={width}>
      {btns.map(({ text, count, Icon }, index) => (
        <CountButtonGroup key={index} count={count}>
          <Icon color={colors.gray600} style={{ marginRight: 4 }} />
          <Text>{text}</Text>
        </CountButtonGroup>
      ))}
    </Container>
  );
};

export default RepoActionButtons;
