import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'github-schema-loader.js',
  documents: ['./src/**/*.query.ts', './src/**/*.mutation.ts'],
  generates: {
    'src/lib/github.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: '// @ts-nocheck',
          },
        },
      ],
      config: {
        fetcher: 'graphql-request',
      },
    },
  },
};

export default config;
