import { rest } from "msw";
import { repoTreeResponse } from "./data";

export const mockRepoTree = rest.post("https://api.github.com/graphql", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(repoTreeResponse))
})
