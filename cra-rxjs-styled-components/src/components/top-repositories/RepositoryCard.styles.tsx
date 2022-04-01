import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.article`
  padding: 1rem;
  border-bottom: 1px solid rgb(229, 231, 235);
`;

export const Heading = styled.h3`
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Badge = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: rgb(75, 85, 99);
  padding: 0.125rem 0.5rem;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 12px;
`;

export const RepoNameLink = styled(Link)`
  color: rgb(37, 99, 235);
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 0.75rem;

  :hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const MetaData = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: 12px;
  line-height: 24px;
`;

export const LanguageColor = styled.div`
  background-color: ${(props: { color: string }) => props.color};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 1rem;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  cursor: default;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-basis: 2.2rem;
  flex-shrink: 1;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: rgb(37, 99, 235);
  }
`;
