import { rest } from "msw";
import { GITHUB_GRAPHQL } from "../src/utils/constants";
import { repoInforResponse } from "./data";

export const mockRepoInfo = rest.post(GITHUB_GRAPHQL, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(repoInforResponse));
});
