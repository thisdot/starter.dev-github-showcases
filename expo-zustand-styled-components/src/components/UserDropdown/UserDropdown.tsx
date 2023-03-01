import React, { useState } from 'react';
import { DropdownNav, DropdownBtn, UserDropdownAvatarContainer, UserDropdownAvatarSpan, UserDropdownAvatarImage, IconContainer, UserDropdownMenuItems, UserDropdownMenuItemsPaddingDiv, UserDropdownMenuItemAnchorTag, UserDropdownMenuItemSignoutBtn } from './UserDropdown.styles';
import { ImageSourcePropType, Text } from 'react-native';


interface IProps {
  image?: ImageSourcePropType;
  username?: string;
}

const UserDropdown = (props: IProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <DropdownNav>
      <DropdownBtn onPress={toggleDropdown}>
        <UserDropdownAvatarContainer>
          <UserDropdownAvatarSpan>
            {props.image && props.username && (
              <UserDropdownAvatarImage source={props.image} />
            )}
          </UserDropdownAvatarSpan>
        </UserDropdownAvatarContainer>
        <IconContainer>
          {/* <DropdownIcon /> */}
        </IconContainer>
      </DropdownBtn>
      {openDropdown ? (
        <UserDropdownMenuItems>
          <UserDropdownMenuItemsPaddingDiv>
            <UserDropdownMenuItemAnchorTag>
              {/* <Link to="/"> */}
              <Text>Profile</Text>
              {/* </Link> */}
            </UserDropdownMenuItemAnchorTag>
            <UserDropdownMenuItemSignoutBtn onPress={() => console.log("press")}>
              <Text>Sign out</Text>
            </UserDropdownMenuItemSignoutBtn>
          </UserDropdownMenuItemsPaddingDiv>
        </UserDropdownMenuItems>
      ) : null
      }
    </DropdownNav >
  );
};

export default UserDropdown;