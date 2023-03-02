import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DropdownWrapper, ProfileImage, UserMenu, ListItem } from './UserDropdown.styles';


interface IProps {
  image: string;
  username?: string;
}

const UserDropdown = (props: IProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <DropdownWrapper>
      <TouchableOpacity testID='profile-image' onPress={() => toggleDropdown()}>
        <ProfileImage source={{ uri: props.image }} />
      </TouchableOpacity>
      {openDropdown && <UserMenu>
        <ListItem>
          <Text>Profile</Text>
        </ListItem>
        <ListItem>
          <Text>Sign Out</Text>
        </ListItem>
      </UserMenu>}
    </DropdownWrapper>
  );
};

export default UserDropdown;