import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './schema/index.ts',
  emitLegacyCommonJSImports: false,
  generates: {
    './types/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
