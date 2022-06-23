import type { LoaderFunction } from "@remix-run/node";
import { auth } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  return auth.authenticate("github", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};
