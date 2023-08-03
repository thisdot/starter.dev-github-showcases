const path = require('path');

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  cacheDirectory: './node_modules/.cache/remix',
  assetsBuildDirectory: 'public/build',
  publicPath: '/_static/build/',
  serverBuildTarget: "netlify",
  server: process.env.NETLIFY || process.env.NETLIFY_LOCAL
  ? "./server.js" : undefined,
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  routes(defineRoutes) {
    return defineRoutes((route) => {
      if (process.env.NODE_ENV === 'production') return;

      console.log('⚠️  Test routes enabled.');
      route(
        '__tests/create-user',
        path.join(__dirname, 'cypress/support/test-routes/create-user.ts')
      );
    });
  },
};
