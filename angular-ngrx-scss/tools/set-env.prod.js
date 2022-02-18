const { writeFile } = require('fs');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv');

// get .env.prod vars
dotenv.config({ path: path.join(__dirname, '../.env.prod') });
const targetPath = path.join(
  __dirname,
  '../src/environments/environment.prod.ts',
);

const envConfigFile = `export const environment = {
  production: true,
  apiUrl: '${process.env.OAUTH_API_URL}',
  graphApiUrl: '${process.env.GITHUB_GRAPHQL_URL}',
  redirectUrl: '${process.env.CLIENT_REDIRECT_URL}',
};`;

console.log(
  colors.magenta(
    'The file `environment.prod.ts` will be written with the following content: \n',
  ),
);
console.log(colors.grey(envConfigFile));

writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    throw console.error(err);
  }

  console.log(
    colors.magenta(
      `Angular environment.prod.ts file generated correctly at ${targetPath} \n`,
    ),
  );
});
