# starter.dev Backend

A Serverless Framework Express.js backend for allowing users to perform OAuth authentication with GitHub from a set of configured applications.

## Getting Started

### Requirements

- node v16
- yarn
- [serverless framework](https://www.serverless.com/framework/docs/getting-started)

### Setup

1. [Create a GitHub OAuth application](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
2. Create your project `.env`

```
cp .env.example .env
```

3. Add your GitHub OAuth application credentials to `.env`
4. Sign into [Netlify CLI](https://docs.netlify.com/cli/get-started/)
5. Link Backend project to Netlify site locally using the site ID `af6d562a-a86b-4bed-a35b-7675fc241591`

```bash
 netlify link
Git directory located in /Users/jesse/Documents/code/starter.dev-github-showcases

netlify link will connect this folder to a site on Netlify

? How do you want to link this folder to a site? Enter a site ID
? What is the site ID? af6d562a-a86b-4bed-a35b-7675fc241591

Directory Linked

Admin url: https://app.netlify.com/sites/starter-dev-showcases-backend
Site url:  https://starter-dev-showcases-backend.netlify.app

You can now run other `netlify` cli commands in this directory
```

6. Install dependencies: `yarn install`
7. Run the project: `yarn dev`

## Deployment

Running `yarn dev` will get your api's running

```bash
❯ yarn dev
yarn run v1.22.11
warning package.json: No license field
$ netlify dev
◈ Netlify Dev ◈
◈ Ignored general context env var: LANG (defined in process)
◈ Ignored general context env var: LC_ALL (defined in process)
◈ Injected site settings env var: COOKIE_SECRET
◈ Injected site settings env var: CORS_REGEXP
◈ Ignored site settings env var: GITHUB_CLIENT_ID (defined in .env file)
◈ Injected .env file env var: GITHUB_CLIENT_ID
◈ Ignored site settings env var: GITHUB_CLIENT_SECRET (defined in .env file)
◈ Injected .env file env var: GITHUB_CLIENT_SECRET
◈ Injected site settings env var: GITHUB_OAUTH_URL
◈ Injected site settings env var: PR_PREVIEW_REGEXP
◈ Injected site settings env var: SERVER_BASE_URL
◈ No app server detected. Using simple static server
◈ Unable to determine public folder to serve files from. Using current working directory
◈ Setup a netlify.toml file with a [dev] section to specify your dev server settings.
◈ See docs at: https://cli.netlify.com/netlify-dev#project-detection
◈ Running static server from "starter-dev-backend"
◈ Loaded function graphql http://localhost:8888/.netlify/functions/graphql.
◈ Loaded function server http://localhost:8888/.netlify/functions/server.
◈ Functions server is listening on 63757
◈ Setting up local development server
​
────────────────────────────────────────────────────────────────
  Netlify Build
────────────────────────────────────────────────────────────────
```

The graphql playground should now be available at http://localhost:8888/.netlify/functions/graphql. Be sure to turn of the auto polling or your terminal will be pretty noise.

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in the following response:

```
{"message":"Hello from root!"}
```

Calling the `/hello` path with:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/hello
```

Should result in the following response:

```bash
{"message":"Hello from path!"}
```

If you try to invoke a path or method that does not have a configured handler, e.g. with:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/nonexistent
```

You should receive the following response:

```bash
{"error":"Not Found"}
```
