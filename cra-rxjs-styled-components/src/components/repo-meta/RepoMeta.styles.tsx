import styled from 'styled-components';

export const Metadata = styled.div`
  display: flex;
  margin-top: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(75 85 99);
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const LanguageColor = styled.span`
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
  border-radius: 9999px;
  display: inline-block;
  top: 0.125rem;
`;

export const SocialWrapper = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const SocialCount = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    color: rgb(37 99 235);
  }
  & > *:not(:first-child) {
    margin-left: 0.25rem;
  }
`;

export const TextSpan = styled.span`
  margin: 0;
`;
