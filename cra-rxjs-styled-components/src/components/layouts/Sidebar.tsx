import styled from 'styled-components';

const Aside = styled.aside`
  grid-area: aside;
  padding: 2rem;
`;

const MenuItem = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-top-width: 1px;
  border-top-style: solid;
  border-color: rgb(229, 231, 235);
  padding: 2rem 0;
`;

const MenuTitle = styled.h3`
  font-weight: 600;
  margin: 0;
`;

export default function Sidebar() {
  return (
    <Aside>
      <MenuItem>
        <MenuTitle>Gists</MenuTitle>
      </MenuItem>
    </Aside>
  );
}
