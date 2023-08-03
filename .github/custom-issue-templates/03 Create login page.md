# Create login page and OAuth functionality
## Background

To get started at all, we need to setup the application with GitHub authentication. The backend server in `starter.dev-github-showcases` will handle the main bits of communicating with GitHub, so this task will connect the new frontend to the backend server to sign the user in and get their access token so we can make future API calls.

## Acceptance


- [ ] Login page with button to login through GitHub
- [ ] Set up OAuth functionality
  - [ ] Reach out to starter-dev-backend in `starter.dev-github-showcases` repo
  - [ ] Listen for token endpoint from backend to progress
- [ ] user to be redirected to "/signin" if not authenticated
- [ ] User to be redirected to "/" on succesful authentication (can be blank page)

## Notes

- This will be one of the larger tasks since it involves both setting up a sign in page with a button and communicating with the backend server. However, it’s a simple, single button design that you can mostly copy from previous showcases and is vital to being able to complete any of the other tasks.
