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
