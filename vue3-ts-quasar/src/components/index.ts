/* 
    This file is simply meant to be an aggregator of all components.
    This file does not implement any logic of its own and simply serves the purpose of importing components and exporting them out together so that they can be loaded from one file/directory.
*/
import AppInput from './AppInput/AppInput.vue';
import Logo from './Logo/Logo.vue';
import NavHeader from './NavHeader/NavHeader.vue';
import RepoCard from './RepoCard/RepoCard.vue';
import SearchDropdowns from './SearchDropdowns/SearchDropdowns.vue';
import SearchFilter from './SearchFilter/SearchFilter.vue';
import UserAvatar from './UserAvatar/UserAvatar.vue';
import UserProfileCard from './UserProfileCard/UserProfileCard.vue';

// TODO: Consider reading the filesystem dynamically to fetch all vue components (children of the components/ directory)

//
export {
  AppInput,
  Logo,
  NavHeader,
  RepoCard,
  SearchDropdowns,
  SearchFilter,
  UserAvatar,
  UserProfileCard,
};
