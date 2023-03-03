export const LOGGEDIN_USER_PROFILE = `
  query LoggedinUser {
    viewer {
      avatarUrl
      name
      login
    }
  }
`;