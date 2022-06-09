import { useState } from 'react';
import { useSignOut } from '../../hooks/auth/use-sign-out';
import { DropdownIcon } from '../icons/index';
import { useUser } from '../../context/UserProvider';
import {
  DropdownNav,
  DropdownBtn,
  UserDropdownAvatarContainer,
  UserDropdownAvatarSpan,
  UserDropdownAvatarImage,
  UserDropdownMenuItems,
  UserDropdownMenuItemsPaddingDiv,
  UserDropdownMenuItemAnchorTag,
  UserDropdownMenuItemSignoutBtn,
  IconContainer,
} from './Dropdown.styles';

export default function Dropdown() {
  const signOutHandler = useSignOut();
  const user = useUser();
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <DropdownNav>
      <DropdownBtn onClick={toggleDropdown}>
        <UserDropdownAvatarContainer>
          <UserDropdownAvatarSpan>
            {user?.avatar_url && user.name && (
              <UserDropdownAvatarImage alt={user.name} src={user.avatar_url} />
            )}
          </UserDropdownAvatarSpan>
        </UserDropdownAvatarContainer>
        <IconContainer>
          <DropdownIcon />
        </IconContainer>
      </DropdownBtn>
      {openDropdown ? (
        <UserDropdownMenuItems>
          <UserDropdownMenuItemsPaddingDiv>
            <UserDropdownMenuItemAnchorTag href="">
              Profile
            </UserDropdownMenuItemAnchorTag>
            <UserDropdownMenuItemSignoutBtn onClick={signOutHandler}>
              Sign out
            </UserDropdownMenuItemSignoutBtn>
          </UserDropdownMenuItemsPaddingDiv>
        </UserDropdownMenuItems>
      ) : null}
    </DropdownNav>
  );
}
