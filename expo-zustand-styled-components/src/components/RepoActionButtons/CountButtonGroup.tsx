import { ReactNode } from 'react';
import { BtnGroup, BtnMain, BtnMainText, BtnSide, BtnSideText } from './RepoActionButtons.styles';

const formatCountString = (props) => {
  const count = () => props || 0;
  let countText = `${count()}`;
  if (count() && count() > 1000) {
    const digits = countText.split('');
    digits.splice(digits.length - 3, 3);
    countText = `${digits.join('')}k`;
  }
  return countText;
};

interface CountButtonGroupProps {
  count?: number;
  children: ReactNode;
}

const CountButtonGroup = ({ count, children }: CountButtonGroupProps) => {
  const countText = formatCountString(count);

  return (
    <BtnGroup testID="count-button-group">
      <BtnMain>
        <BtnMainText>{children}</BtnMainText>
      </BtnMain>
      <BtnSide>
        <BtnSideText>{countText}</BtnSideText>
      </BtnSide>
    </BtnGroup>
  );
};

export default CountButtonGroup;
