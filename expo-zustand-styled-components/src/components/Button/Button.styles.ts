import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity<{primary?: boolean}>`
  padding: 10px;
  border-width: 1px;
  border-color: ${(p) => (p.primary ? '#fff': '#000')};
  border-radius: 5px;
  margin-top: 10px;
`;

export const ButtonViewStyled = styled.View<{primary?: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;


export const ButtonTextStyled = styled.Text<{primary?: boolean}>`
  color: ${(p) => (p.primary ? '#fff': '#000')};
  font-size: 16px;
  margin-left: 10px;
  text-align: center;
`;
