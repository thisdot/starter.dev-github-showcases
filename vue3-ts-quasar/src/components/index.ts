/* 
    This file is simply meant to be an aggregator of all components.
    This file does not implement any logic of its own and simply serves the purpose of importing components and exporting them out together so that they can be loaded from one file/directory.
*/
import Logo from './Logo/Logo.vue';
import NavHeader from './NavHeader/NavHeader.vue';
import RepoCard from './RepoCard/RepoCard.vue';
import UserAvatar from './UserAvatar/UserAvatar.vue';
import UserProfileCard from './UserProfileCard/UserProfileCard.vue';

// TODO: Consider reading the filesystem dynamically to fetch all vue components (children of the components/ directory)

//
export { Logo, NavHeader, RepoCard, UserAvatar, UserProfileCard };
