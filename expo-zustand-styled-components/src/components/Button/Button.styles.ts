import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity<{ primary?: boolean }>`
  padding: 10px;
  border-width: 1px;
  border-color: ${(p) => (p.primary ? '#fff' : '#000')};
  border-radius: 5px;
  margin-top: 10px;
`;

export const ButtonViewStyled = styled.View<{ primary?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonTextStyled = styled.Text<{ primary?: boolean; isLoading?: boolean }>`
  color: ${(p) => (p.primary ? '#fff' : '#000')};
  font-size: 16px;
  margin-left: ${(p) => (p.isLoading ? '10px' : '0px')};
  text-align: center;
`;
