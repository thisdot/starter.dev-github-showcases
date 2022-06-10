import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Star } from '@styled-icons/heroicons-outline';

interface Props {
  star?: boolean;
}

export const Containers = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 1rem;
  &:first-of-type {
    border-top: ${(props) =>
      props.star && '1px solid rgb(229 231 235 / var(--tw-border-opacity))'};
  }
  padding: ${(props) => (props.star ? '2rem 0' : '1rem')};
  border-bottom: 1px solid rgb(229 231 235 / var(--tw-border-opacity));
`;

export const Content = styled.div`
  grid-column: span 12 / span 12;

  @media (min-width: 768px) {
    grid-column: span 7 / span 7;
  }
`;

export const Header = styled.h3`
  margin-bottom: 0.5rem;
`;

export const HeadingLink = styled(Link)`
  margin-right: 0.75rem;
  text-decoration: none;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(37 99 235);
  font-weight: 600;
  &:hover {
    text-decoration-line: underline;
  }
`;

export const BadgeWrapper = styled.span`
  position: relative;
  bottom: 0.125rem;
`;

export const Description = styled.div`
  color: rgb(75 85 99 / var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  max-width: 65ch;
`;
export const Aside = styled.div`
  grid-column: span 12 / span 12;

  @media (min-width: 768px) {
    grid-column: span 5 / span 5;
  }
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const StarBtn = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  background-color: rgb(243 244 246 / 0.75);
  border: 1px solid rgb(209 213 219 / 0.75);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(31 41 55 0.75);
  &:hover {
    background-color: rgb(229 231 235 / 0.5);
  }
`;

export const StarIcon = styled(Star)`
  width: 1rem;
  height: 1rem;
  color: rgb(75 85 99 / var(--tw-text-opacity));
  margin-right: 0.25rem;
`;
