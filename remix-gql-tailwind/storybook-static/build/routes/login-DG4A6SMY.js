import {
  require_auth
} from "/_static/build/_shared/chunk-V2UYFXEK.js";
import {
  Form,
  useLoaderData
} from "/_static/build/_shared/chunk-KBE5JUUL.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/_static/build/_shared/chunk-6BO74FWO.js";

// empty-module:~/services/session.server
var require_session = __commonJS({
  "empty-module:~/services/session.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/home/adrian/Work/thisdot/starter.dev-github-showcases/remix-gql-tailwind/app/routes/login.tsx?browser
init_react();

// app/routes/login.tsx
init_react();
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
function Screen() {
  const { error } = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex h-screen w-full items-center justify-center bg-black"
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    action: "/auth/github"
  }, error && /* @__PURE__ */ React.createElement("div", null, error.message), /* @__PURE__ */ React.createElement("button", {
    className: "rounded-md border-2 border-zinc-700 px-20 py-2 text-zinc-100 transition-all hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900"
  }, "Sign In with GitHub")));
}
export {
  Screen as default
};
//# sourceMappingURL=/_static/build/routes/login-DG4A6SMY.js.map
