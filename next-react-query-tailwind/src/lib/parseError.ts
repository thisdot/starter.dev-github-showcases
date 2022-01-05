import { ClientError } from 'graphql-request';

export const parseError = (error: unknown): Error | undefined => {
  if (!error) {
    return undefined;
  }
  if (error instanceof ClientError && error.response.errors) {
    const firstError = error.response.errors[0];
    return new Error(firstError.message);
  }
  if (error instanceof Error) {
    return error;
  }
  if (typeof error === 'string') {
    return new Error(error);
  }
  return new Error('Unknown Error');
};
