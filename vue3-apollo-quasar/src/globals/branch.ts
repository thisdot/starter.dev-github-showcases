import { makeVar } from '@apollo/client';
export const defaultBranch = 'main';
export const branch = makeVar(defaultBranch);
