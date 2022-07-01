import { ButtonWrapper } from './PaginateButton.style';
import React from 'react';

interface Props {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const PaginateButton = ({ onClick, disabled, children, ...rest }: Props) => {
  return (
    <ButtonWrapper
      className="button"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
};

export default PaginateButton;
