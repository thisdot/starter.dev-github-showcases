import { graphql } from 'msw';

export const mockUserGistsQuery = graphql.query('UserGists', (_, res, ctx) => {
  return res(ctx.data(gistsResponse));
});

//
// Mocked responses
//

const gistsResponse = {
  viewer: {
    gists: {
      nodes: [
        {
          id: 'G_kwDOADjK-doAIGU0OTc3ODQ1ZmRlOGNjZmU1Yzc0MjQxNzlmZGMyZmVh',
          description: 'A react hook that handles firebase storage uploading',
          url: 'https://gist.github.com/e4977845fde8ccfe5c7424179fdc2fea',
          name: 'e4977845fde8ccfe5c7424179fdc2fea',
          files: [{ name: 'useFirebaseUploader.ts' }],
        },
        {
          id: 'MDQ6R2lzdGQ1Yzc1NTIwMWJiMTI1MmJiNzI2YzQ2ZTIzOTE1Mzgw',
          description:
            'Mobx store for managing form state (built for my react-native app)',
          url: 'https://gist.github.com/d5c755201bb1252bb726c46e23915380',
          name: 'd5c755201bb1252bb726c46e23915380',
          files: [{ name: 'FormStore.js' }],
        },
        {
          id: 'MDQ6R2lzdDlkYzcwMGY2NWIyN2E3OTE2YzBhZmU2OTFiNzYzMDIw',
          description: 'codes for my hapi-bookshelf plugin',
          url: 'https://gist.github.com/9dc700f65b27a7916c0afe691b763020',
          name: '9dc700f65b27a7916c0afe691b763020',
          files: [{ name: 'hapi-bookshelf.js' }],
        },
        {
          id: 'MDQ6R2lzdDY0YzA3YzU4MGNlMWI3YzE2MDIx',
          description:
            'Bash script to parse command line args / flags (./script start --name=awesome -t --number=15 -g realll)',
          url: 'https://gist.github.com/64c07c580ce1b7c16021',
          name: '64c07c580ce1b7c16021',
          files: [{ name: 'parse-cli-opts.sh' }],
        },
        {
          id: 'MDQ6R2lzdDkyZWY5MjQwYzZhYjcxNWYzNWM0',
          description: 'Cordova Meteor Slingshot',
          url: 'https://gist.github.com/92ef9240c6ab715f35c4',
          name: '92ef9240c6ab715f35c4',
          files: [{ name: 'upload.js' }],
        },
        {
          id: 'MDQ6R2lzdDlmZGI1MmNhNjNkOWJkNzQxNmVj',
          description: 'Fluxible server side rendering with Hapi',
          url: 'https://gist.github.com/9fdb52ca63d9bd7416ec',
          name: '9fdb52ca63d9bd7416ec',
          files: [{ name: 'hapi-server.js' }],
        },
      ],
    },
  },
};
