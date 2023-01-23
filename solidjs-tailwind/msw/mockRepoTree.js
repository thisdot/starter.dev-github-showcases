import { rest } from "msw";
import { GITHUB_GRAPHQL } from "../src/utils/constants";

export const mockRepoTree = rest.post(GITHUB_GRAPHQL, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({}))
})
