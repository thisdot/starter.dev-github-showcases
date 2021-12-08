export interface CurrentUserData {
  id: string; // needed for InmemoryCache merging `viewer` query
  viewer: {
    avatarUrl: string;
    login: string;
    name: string;
  };
}

export interface CurrentUser {
  avatarUrl: string;
  login: string;
  name: string;
}
