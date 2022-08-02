import {
  Menu,
  Transition
} from "/_static/build/_shared/chunk-2Z3CX2SQ.js";
import {
  ChevronDownIcon_default
} from "/_static/build/_shared/chunk-MWJ6W5IQ.js";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react,
  require_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// empty-module:./services/auth.server
var require_auth = __commonJS({
  "empty-module:./services/auth.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// empty-module:./services/session.server
var require_session = __commonJS({
  "empty-module:./services/session.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/tailwind.css
var tailwind_default = "/_static/build/_assets/tailwind-ACYLH7HS.css";

// app/components/Navbar/NavBar.tsx
init_react();

// app/components/Navbar/Navbar.classNames.ts
init_react();
var header = "bg-gray-900 flex justify-between items-center py-4 px-8";
var navLink = "text-white font-semibold text-lg";

// app/components/UserDropdown/UserDropdown.view.tsx
init_react();
var import_react = __toESM(require_react());

// app/components/UserDropdown/UserDropdown.classNames.ts
init_react();
var dropdown = "relative top-1 inline-block text-left";
var dropdownBtn = "inline-flex items-center text-white";
var avatarContainer = "w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-600";
var menuItems = "z-30 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
var menuBtn = "block font-medium px-4 py-2 text-gray-900 hover:text-blue-600";

// app/components/UserDropdown/UserDropdown.view.tsx
function UserDropdownView({ image, username }) {
  return /* @__PURE__ */ React.createElement(Menu, {
    as: "nav",
    className: dropdown
  }, /* @__PURE__ */ React.createElement(Menu.Button, {
    role: "button",
    className: dropdownBtn
  }, /* @__PURE__ */ React.createElement("div", {
    className: avatarContainer
  }, image && /* @__PURE__ */ React.createElement("img", {
    src: image,
    alt: "Profile Photo",
    width: 32,
    height: 32
  })), /* @__PURE__ */ React.createElement(ChevronDownIcon_default, {
    className: "-mr-1 ml-2 h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement(Transition, {
    as: import_react.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(Menu.Items, {
    className: menuItems,
    "data-testid": "dropdown-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, username && /* @__PURE__ */ React.createElement(Menu.Item, null, /* @__PURE__ */ React.createElement(Link, {
    to: `/${username}`,
    className: menuBtn
  }, "Profile")), /* @__PURE__ */ React.createElement(Menu.Item, null, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    action: "/logout"
  }, /* @__PURE__ */ React.createElement("button", {
    className: menuBtn
  }, "Sign Out")))))));
}
var UserDropdown_view_default = UserDropdownView;

// app/components/Icons/GitHubLogo.tsx
init_react();
function GitHubLogo() {
  return /* @__PURE__ */ React.createElement("svg", {
    height: "32",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "32",
    "data-view-component": "true",
    className: "inline-block overflow-visible align-middle text-white",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
  }));
}

// app/components/Navbar/NavBar.tsx
function NavBar({ user }) {
  return /* @__PURE__ */ React.createElement("header", {
    className: header
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(GitHubLogo, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, user ? /* @__PURE__ */ React.createElement(UserDropdown_view_default, {
    image: user.avatarUrl,
    username: user.login
  }) : /* @__PURE__ */ React.createElement(Link, {
    to: "/api/auth/signin"
  }, /* @__PURE__ */ React.createElement("a", {
    className: navLink
  }, "Sign In")))));
}
var NavBar_default = NavBar;

// app/root.tsx
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "GitHub Demo App" };
};
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message));
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " mb-8 text-9xl"
  }, caught.status), /* @__PURE__ */ React.createElement("div", {
    className: "mb-5 text-2xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: ""
  }, "Ooops..."), /* @__PURE__ */ React.createElement("br", null), caught.statusText), /* @__PURE__ */ React.createElement("div", {
    className: " rounded bg-gray-900 px-7 py-2 text-white"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/`,
    className: " "
  }, "Go to Home"))));
}
function App() {
  const { viewer } = useLoaderData();
  return /* @__PURE__ */ React.createElement(Document, null, viewer ? /* @__PURE__ */ React.createElement(NavBar_default, {
    user: viewer
  }) : null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, title ? title : "GitHub Demo App"), /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/_static/build/root-GG56NIMY.js.map
