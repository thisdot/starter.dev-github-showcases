# Implement search functionality

## Background

In another ticket, a component was created with a search input field. The purpose of this ticket is to add the functionality to that input. A user should be able to write a query in the input, and the repositories listed on the page should be filtered based on that query after a short debounce time. If the user removes their query, either by clearing all the letters or clicking the X that should appear in the input, the repositories will be reset.

## Acceptance

- [ ] Search should filter all queries for any that match the search query
- [ ] search works automatically after a debounce time
- [ ] small X should show at end of input when user has added text, that when clicked will remove the query

## Notes
