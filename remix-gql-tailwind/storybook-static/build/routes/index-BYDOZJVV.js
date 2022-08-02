import {
  RepoMeta_default
} from "/_static/build/_shared/chunk-C3EZB5DJ.js";
import "/_static/build/_shared/chunk-TZ6KWIXP.js";
import {
  PrivacyBadge_default
} from "/_static/build/_shared/chunk-LRTETJ3V.js";
import {
  require_auth
} from "/_static/build/_shared/chunk-V2UYFXEK.js";
import {
  Link,
  useLoaderData
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __toESM,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_auth = __toESM(require_auth());

// app/components/UserTopRepos/UserTopRepos.view.tsx
init_react();

// app/components/UserTopRepos/UserTopRepos.classNames.ts
init_react();
var container = "w-full border rounded-lg relative bg-white";
var item = "p-4 border-b";
var headingLink = "text-xl text-blue-600 font-semibold hover:underline mr-3";
var description = "text-gray-600 text-sm max-w-prose -mb-1 -mt-1";
var linkContainer = "bg-gray-50 p-5 w-full text-center";
var allRepoLink = "font-semibold text-gray-600 hover:text-blue-500";

// app/components/UserTopRepos/UserTopRepos.view.tsx
function UserTopReposView({ repos, login }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: container
  }, repos.map(({
    id,
    name,
    owner,
    description: description2,
    stargazerCount,
    forkCount,
    language,
    languageColor,
    updatedAt,
    isPrivate
  }) => /* @__PURE__ */ React.createElement("div", {
    key: id,
    className: item
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-2"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/${owner}/${name}`,
    className: headingLink
  }, name), /* @__PURE__ */ React.createElement(PrivacyBadge_default, {
    isPrivate,
    className: "relative bottom-0.5"
  })), /* @__PURE__ */ React.createElement("div", {
    className: description
  }, description2), /* @__PURE__ */ React.createElement(RepoMeta_default, {
    language,
    languageColor,
    forkCount,
    stargazerCount,
    updatedAt
  }))), /* @__PURE__ */ React.createElement("div", {
    className: linkContainer
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/${login}`,
    className: allRepoLink
  }, "View all repositories")));
}
var UserTopRepos_view_default = UserTopReposView;

// app/components/UserGists/UserGists.view.tsx
init_react();

// app/components/UserGists/container.tsx
init_react();

// app/components/UserGists/container.classNames.ts
init_react();
var container2 = "py-8 border-t border-b";

// app/components/UserGists/container.tsx
function Container({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: container2
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-semibold"
  }, "Gists"), children);
}
var container_default = Container;

// app/components/UserGists/UserGists.classNames.ts
init_react();
var link = "text-sm hover:text-blue-500 hover:underline";

// app/components/UserGists/UserGists.view.tsx
function UserGistsView({ gists = [] }) {
  return /* @__PURE__ */ React.createElement(container_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-3"
  }, gists.map((gist) => /* @__PURE__ */ React.createElement("div", {
    key: `${gist.id}-${gist.name}`,
    className: "my-1"
  }, /* @__PURE__ */ React.createElement("a", {
    href: gist.url,
    className: link,
    target: "_blank"
  }, gist.name)))));
}
var UserGists_view_default = UserGistsView;

// app/routes/index.tsx
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-sm"
  }, "Error: ", error.message);
}
function Screen() {
  const { profile, userRepos, userGists } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex  min-h-[calc(100vh-70px)] w-full flex-col-reverse bg-gray-100 lg:flex-row"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "w-full bg-white p-8 lg:w-96"
  }, /* @__PURE__ */ React.createElement(UserGists_view_default, {
    gists: userGists
  })), /* @__PURE__ */ React.createElement("main", {
    className: "w-full max-w-screen-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-12"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "mb-4 text-lg font-medium"
  }, "Top Repositories"), /* @__PURE__ */ React.createElement(UserTopRepos_view_default, {
    repos: userRepos,
    login: profile._json.login
  }))));
}
export {
  ErrorBoundary,
  Screen as default
};
//# sourceMappingURL=/_static/build/routes/index-BYDOZJVV.js.map
