import type { UserApiResponse } from '$lib/interfaces';

export const remapContextUserAsync = async (
  response: Response
): Promise<UserApiResponse | undefined> => {
  const json = await response.json();
  return json;
};
