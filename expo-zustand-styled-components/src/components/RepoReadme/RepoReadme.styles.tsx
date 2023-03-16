import styled from 'styled-components/native';
export const ReadmeContainer = styled.View`
  margin: 1rem 0;
  border-radius: 6px;
  border-width: 1px;
  border-color: #e1e4e8;
`;

export const ReadmeHeader = styled.View`
  z-index: 30;
  border-bottom-width: 1px;
  border-color: #e1e4e8;
  background-color: rgb(255 255 255 / 0);
  padding: 0.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReadmeDiv = styled.View`
  padding: 24px 40px;
`;

export const ReadmeIconContainer = styled.View`
  margin-right: 4px;
  border-radius: 4px;
  padding: 6px;
`;

export const ReadmeText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
`;
