This demo application is a small re-implementation of some GitHub pages / functionality built using their GraphQL API.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Featured Tech Stack](#featured-tech-stack)
  - [Development Notes](#development-notes)
    - [Adding Storybook](#adding-storybook)
    - [Authenticating with GitHub](#authenticating-with-github)

## Overview

### Featured Tech Stack

- [GraphQL](https://graphql.org/)
- [React](https://reactjs.org)
- [Remix](https://remix.run)
- [Tailwind CSS](https://tailwindcss.com)

### Development Notes

#### Adding Storybook

[Storybook is not officially supported by Remix at this time](https://github.com/remix-run/remix/issues/214). For the latest discussion, [see here](https://github.com/remix-run/remix/discussions/2481).

To get Storybook working, I had to separately add a different bundler that worked with it. I choose the newer option to bundle Storybook with Vite, since it's a bit closer to esbuild which Remix uses. In the future, it might be possible to not include a separate bundler just for Storybook.

Remix's `<Link>` component does not play nice with Storybook, so we include an aliased mock to convert it into a regular `<a>` when Storybook is running. You can see this and other potential mock components in `.storybook/mockRemix`, and edit how Storybook sees and resolves them in `.storybook/main.js`.

#### Authenticating with GitHub

This app uses an OAuth flow to authenticate with GitHub and use their API. You will need to create an OAuth GitHub app and use the provided client and secret IDs in `.env`. While developing locally, you will need to tunnel your webserver so that webhooks are available. Your GitHub app will need to point to `{{tunnel URL}}/auth/github/callback`.
