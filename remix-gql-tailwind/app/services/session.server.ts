import { createCookieSessionStorage, Session } from "remix";

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET], // TODO: replace this with an actual secret
    secure: process.env.NODE_ENV === "production",
  },
});

export function getSession(request: Request): Promise<Session> {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export let { commitSession, destroySession } = sessionStorage;
