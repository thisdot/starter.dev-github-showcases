# Get Top repositories from GitHub API

## Background

Like the actual GitHub dashboard, we want to show a user their top repositories. The actual dashboard shows some other information, such as event feeds, but these aren’t available via the API easily so we opted for top repositories instead.

## Acceptance

- [ ] Get top repositories from GitHub API
- [ ] For display on main page; data needed:
    - [ ] Repo name
    - [ ] description
    - [ ] language
    - [ ] star count
    - [ ] fork count
    - [ ] last updated
    - [ ] visibility tag (public / private)

## Notes

- If you’re using the GraphQL API, there’s a TopRepositories query you can run to retrieve this information easily. (example [GraphQL](angular-apollo-tailwind/src/app/gql/queries/user-top-repos.query.gql) )
- If you’re using the REST API, an equivalent query doesn’t exist. We’ve opted to use the following request instead. (example [rest API](angular-ngrx-scss/src/app/user/services/user.service.ts))
