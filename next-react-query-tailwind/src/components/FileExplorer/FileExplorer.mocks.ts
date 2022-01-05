import { graphql } from 'msw';

export const mockRepoTreeQuery = graphql.query('RepoTree', (req, res, ctx) => {
  const { expression, name, owner } = req.variables;

  if (name !== 'testrepo' && owner !== 'testowner') {
    return res(
      ctx.errors([
        {
          type: 'NOT_FOUND',
          path: ['repository'],
          locations: [
            {
              line: 3,
              column: 3,
            },
          ],
          message: `Could not resolve to a Repository with the name '${owner}/${name}'.`,
        },
      ])
    );
  }

  switch (expression) {
    case 'main:src':
      return res(ctx.data(srcDirResponse));
    case 'HEAD:':
    case 'main:':
      return res(ctx.data(rootDirResponse));
    default:
      return res(
        ctx.data({
          repository: {
            ...srcDirResponse.repository,
            tree: undefined,
          },
        })
      );
  }
});

//
// Mocked responses
//

const rootDirResponse = {
  repository: {
    defaultBranchRef: {
      name: 'main',
    },
    branches: {
      nodes: [
        {
          name: 'main',
        },
        {
          name: 'setup',
        },
        {
          name: 'tests',
        },
      ],
    },
    tree: {
      entries: [
        {
          name: '.buckconfig',
          type: 'blob',
          path: '.buckconfig',
          object: {
            byteSize: 114,
          },
        },
        {
          name: '.editorconfig',
          type: 'blob',
          path: '.editorconfig',
          object: {
            byteSize: 299,
          },
        },
        {
          name: '.eslintrc.js',
          type: 'blob',
          path: '.eslintrc.js',
          object: {
            byteSize: 74,
          },
        },
        {
          name: '.flowconfig',
          type: 'blob',
          path: '.flowconfig',
          object: {
            byteSize: 1454,
          },
        },
        {
          name: '.gitattributes',
          type: 'blob',
          path: '.gitattributes',
          object: {
            byteSize: 127,
          },
        },
        {
          name: '.gitignore',
          type: 'blob',
          path: '.gitignore',
          object: {
            byteSize: 813,
          },
        },
        {
          name: '.prettierrc.js',
          type: 'blob',
          path: '.prettierrc.js',
          object: {
            byteSize: 143,
          },
        },
        {
          name: '.watchmanconfig',
          type: 'blob',
          path: '.watchmanconfig',
          object: {
            byteSize: 2,
          },
        },
        {
          name: 'App.js',
          type: 'blob',
          path: 'App.js',
          object: {
            byteSize: 348,
          },
        },
        {
          name: 'README.md',
          type: 'blob',
          path: 'README.md',
          object: {
            byteSize: 2586,
          },
        },
        {
          name: '__tests__',
          type: 'tree',
          path: '__tests__',
          object: {},
        },
        {
          name: 'android',
          type: 'tree',
          path: 'android',
          object: {},
        },
        {
          name: 'app.json',
          type: 'blob',
          path: 'app.json',
          object: {
            byteSize: 57,
          },
        },
        {
          name: 'babel.config.js',
          type: 'blob',
          path: 'babel.config.js',
          object: {
            byteSize: 77,
          },
        },
        {
          name: 'index.js',
          type: 'blob',
          path: 'index.js',
          object: {
            byteSize: 183,
          },
        },
        {
          name: 'ios',
          type: 'tree',
          path: 'ios',
          object: {},
        },
        {
          name: 'metro.config.js',
          type: 'blob',
          path: 'metro.config.js',
          object: {
            byteSize: 299,
          },
        },
        {
          name: 'package.json',
          type: 'blob',
          path: 'package.json',
          object: {
            byteSize: 1122,
          },
        },
        {
          name: 'screenshots',
          type: 'tree',
          path: 'screenshots',
          object: {},
        },
        {
          name: 'scripts',
          type: 'tree',
          path: 'scripts',
          object: {},
        },
        {
          name: 'src',
          type: 'tree',
          path: 'src',
          object: {},
        },
        {
          name: 'yarn.lock',
          type: 'blob',
          path: 'yarn.lock',
          object: {
            byteSize: 306633,
          },
        },
      ],
    },
  },
};

const srcDirResponse = {
  repository: {
    defaultBranchRef: {
      name: 'main',
    },
    branches: {
      nodes: [
        {
          name: 'main',
        },
        {
          name: 'setup',
        },
        {
          name: 'tests',
        },
      ],
    },
    tree: {
      entries: [
        {
          name: 'Navigator.js',
          type: 'blob',
          path: 'src/Navigator.js',
          object: {
            byteSize: 902,
          },
        },
        {
          name: 'components',
          type: 'tree',
          path: 'src/components',
          object: {},
        },
        {
          name: 'context',
          type: 'tree',
          path: 'src/context',
          object: {},
        },
        {
          name: 'data',
          type: 'tree',
          path: 'src/data',
          object: {},
        },
        {
          name: 'screens',
          type: 'tree',
          path: 'src/screens',
          object: {},
        },
        {
          name: 'utils.js',
          type: 'blob',
          path: 'src/utils.js',
          object: {
            byteSize: 507,
          },
        },
      ],
    },
  },
};
