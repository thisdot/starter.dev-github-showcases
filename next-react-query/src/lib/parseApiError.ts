import { ClientError } from 'graphql-request';

export const parseApiError = (error: unknown): string => {
  if (error instanceof ClientError && error.response.errors) {
    const firstError = error.response.errors[0];
    return firstError.message;
  } else if (error instanceof Error) {
    return error.message;
  }
  return 'Unknown Error';
};
