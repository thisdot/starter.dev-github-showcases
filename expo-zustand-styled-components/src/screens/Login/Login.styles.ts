import styled from 'styled-components/native';

export const SafeAreaViewStyled = styled.SafeAreaView`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #000;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonStyled = styled.Pressable`
  padding: 10px;
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
`;


export const ButtonTextStyled = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
