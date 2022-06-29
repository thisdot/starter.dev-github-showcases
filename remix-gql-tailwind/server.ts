import { createRequestHandler } from '@remix-run/architect';
import * as build from '@remix-run/dev/server-build';

// TODO: This is left as a reminder to flesh out "./mocks"
// and or make decisions around this

// if (process.env.NODE_ENV !== "production") {
//   require("./mocks");
// }

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
