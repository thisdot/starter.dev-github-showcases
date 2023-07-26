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
      ],
      config: {
        fetcher: 'graphql-request',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["sed -i '' '/types.dom/d' ./src/lib/github.ts"],
  },
};

export default config;
