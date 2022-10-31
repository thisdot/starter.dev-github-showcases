import type { ContextUser } from "$lib/interfaces/context-user";

export const remapContextUserAsync = async (response: Response): Promise<ContextUser | undefined> => {
  const json = await response.json();

  return json ? {
    username: json.username
  } : undefined;
}