/* 
    This file is simply meant to be an aggregator of all components.
    This file does not implement any logic of its own and simply serves the purpose of importing components and exporting them out together so that they can be loaded from one file/directory.
*/
import AppInput from './AppInput';
import GistsPanel from './GistsPanel/GistsPanel.vue';
import Logo from './Logo/Logo.vue';
import NavHeader from './NavHeader/NavHeader.vue';
import RepoCard from './RepoCard';
import SearchDropdowns from './SearchDropdowns';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';
import UserAvatar from './UserAvatar/UserAvatar.vue';
import UserProfileCard from './UserProfileCard';
import TabHeader from './TabHeader';

// TODO: Consider reading the filesystem dynamically to fetch all vue components (children of the components/ directory)

//
export {
  AppInput,
  GistsPanel,
  Logo,
  NavHeader,
  RepoCard,
  SearchDropdowns,
  SearchInput, //? Imported in order of what depends on what. SearchFilter depends on SearchInput
  SearchFilter,
  UserAvatar,
  UserProfileCard,
  TabHeader,
};
