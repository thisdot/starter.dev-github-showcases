import { Text } from 'react-native';
import EyeIcon from '../Icons/EyeIcon';
import GitBranchIcon from '../Icons/GitBranchIcon';
import StarIcon from '../Icons/StarIcon';
import CountButtonGroup from './CountButtonGroup';
import { Container } from './RepoActionButtons.styles';
import { colors } from '../../utils/style-variables';

const RepoActionButtons = () => {
  const btns = [
    {
      text: 'Watch',
      Icon: EyeIcon,
      count: 2,
    },
    {
      text: 'Star',
      Icon: StarIcon,
      count: 2,
    },
    {
      text: 'Fork',
      Icon: GitBranchIcon,
      count: 2,
    },
  ];

  return (
    <Container>
      {btns.map(({ text, count, Icon }, index) => (
        <CountButtonGroup key={index} count={count}>
          <Icon color={colors.gray600} style={{marginRight: 4}} />
          <Text>{text}</Text>
        </CountButtonGroup>
      ))}
    </Container>
  );
};

export default RepoActionButtons;
