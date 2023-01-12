const ROUTES = {
  HOME: '/',
  SIGNIN: '/signin',
  REDIRECT: '/auth/redirect',
  PROFILE: '/:login',
  ORGPROFILE: '/orgs/:org',
  REPO_DETAILS: '/:owner/:name',
  REPO_PULLS: '/pulls',
  REPO_ISSUES: '/issues',
  REPO_TREE: '/tree/:branch/*path',
  REPO_BLOB: '/blob/:branch/:path',
};

export default ROUTES;
