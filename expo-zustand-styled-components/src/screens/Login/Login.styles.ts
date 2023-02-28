import styled from 'styled-components/native';

export const SafeAreaViewStyled = styled.SafeAreaView`
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LoginButtonStyled = styled.TouchableOpacity`
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const LoginButtonTextStyled = styled.Text`
  color: #fff;
  font-size: 20px;
  padding: 10px;
`;
