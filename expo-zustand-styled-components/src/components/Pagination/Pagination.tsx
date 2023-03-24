import {
  PaginationWrapper,
  PaginationBtnsWrapper,
  PaginationBtn,
  PaginationBtnText,
} from './Pagination.styles';
import { colors } from '../../utils/style-variables';

interface Props {
  goToNext: () => null;
  goToPrev: () => null;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination = ({ goToNext, goToPrev, hasPrevPage, hasNextPage }: Props) => {
  return (
    <PaginationWrapper>
      <PaginationBtnsWrapper>
        <PaginationBtn
          onPress={goToPrev}
          activeOpacity={0.8}
          disabled={!hasPrevPage}
          style={{
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            backgroundColor: hasPrevPage ? 'transparent' : colors.gray300,
          }}>
          <PaginationBtnText style={{ color: hasPrevPage ? colors.blue500 : '#FFF' }}>
            Prev
          </PaginationBtnText>
        </PaginationBtn>
        <PaginationBtn
          onPress={goToNext}
          activeOpacity={0.8}
          disabled={!hasNextPage}
          style={{
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            backgroundColor: hasNextPage ? 'transparent' : colors.gray300,
          }}>
          <PaginationBtnText style={{ color: hasNextPage ? colors.blue500 : '#FFF' }}>
            Next
          </PaginationBtnText>
        </PaginationBtn>
      </PaginationBtnsWrapper>
    </PaginationWrapper>
  );
};

export default Pagination;
