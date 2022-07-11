import styled from 'styled-components';

export const Aside = styled.aside`
  background-color: rgb(255, 255, 255);
  grid-area: aside;
  padding: 2rem;
`;

export const Menu = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-top-width: 1px;
  border-top-style: solid;
  border-color: rgb(229, 231, 235);
  padding: 2rem 0;
`;

export const MenuTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0 0 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 0 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuLink = styled.a`
  color: #24292f;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
