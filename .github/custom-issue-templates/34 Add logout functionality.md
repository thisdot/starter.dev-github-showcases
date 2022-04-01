# Add logout functionality

## Background

As a user, if I click the sign out link in the header, I am signed out of the application and redirected to the sign in screen. 

## Acceptance

- [ ] connect header / nav bar button to `/logout` route
- [ ] when clicked, clear user authentication from storage
- [ ] redirect to login page on success

## Notes

Ensure the user’s access token cookie is cleared, and any information in any state storage is cleared as well.

