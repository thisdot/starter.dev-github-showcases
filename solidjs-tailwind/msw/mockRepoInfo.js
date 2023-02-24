import { rest } from "msw";
import { repoInforResponse } from "./data";

export const mockRepoInfo = rest.post("https://api.github.com/graphql", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(repoInforResponse));
});
