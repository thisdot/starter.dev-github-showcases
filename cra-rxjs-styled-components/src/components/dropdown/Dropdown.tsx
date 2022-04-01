import { useState, useEffect } from 'react';
import { useSignOut } from '../../hooks/auth/use-sign-out';
import { DropdownIcon } from '../icons/index';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';
import { GITHUB_URL_BASE } from '../../constants/url.constants';
import { tap } from 'rxjs';
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

type AvatarImage = {
  image: string;
  alt?: string;
};
export default function Dropdown() {
  const signOutHandler = useSignOut();
  const [avatar, setAvatar] = useState<AvatarImage>({ image: '' });
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
    request(`${GITHUB_URL_BASE}/user`)
      .pipe(
        tap((val) => {
          setAvatar({ image: val.avatar_url, alt: val.name });
        })
      )
      .subscribe();
  }, []);
  return (
    <DropdownNav>
      <DropdownBtn onClick={toggleDropdown}>
        <UserDropdownAvatarContainer>
          <UserDropdownAvatarSpan>
            <UserDropdownAvatarImage alt={avatar.alt} src={avatar.image} />
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
