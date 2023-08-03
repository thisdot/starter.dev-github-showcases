import { rest } from "msw";
import { GITHUB_GRAPHQL } from "../src/utils/constants";
import { readMeResponse } from "./data";

export const mockReadme = rest.post(GITHUB_GRAPHQL, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(readMeResponse));
});
