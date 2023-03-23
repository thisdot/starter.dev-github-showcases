import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import CloseIcon from '../Icons/CloseIcon';
import { ClearFilterWrapper, ClearText, IconContainer } from './IssuesPRClearFilter.styles';

const IssuesPRClearFilter = () => {
  const { clearFilter } = usePRAndIssueHeaderStore();

  return (
    <ClearFilterWrapper activeOpacity={0.8} onPress={clearFilter}>
      <IconContainer>
        <CloseIcon color="#FFF" />
      </IconContainer>
      <ClearText>Clear Filter</ClearText>
    </ClearFilterWrapper>
  );
};

export default IssuesPRClearFilter;
