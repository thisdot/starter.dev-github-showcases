import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonStyled, ButtonViewStyled, ButtonTextStyled } from './Button.styles';

interface ButtonProps extends React.ComponentProps<typeof ButtonStyled> {
  title: string;
  primary?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = ({ title, primary, isLoading, loadingText, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest} primary={primary}>
      <ButtonViewStyled>
        {isLoading && <ActivityIndicator size="small" color={primary ? 'white' : 'black'} />}
        <ButtonTextStyled primary={primary} isLoading={isLoading}>
          {isLoading ? loadingText ?? 'Loading...' : title}
        </ButtonTextStyled>
      </ButtonViewStyled>
    </ButtonStyled>
  );
};

export default Button;
