import { makeVar } from '@apollo/client';
export const DEFAULT_BRANCH = 'main';
export const branch = makeVar(DEFAULT_BRANCH);
