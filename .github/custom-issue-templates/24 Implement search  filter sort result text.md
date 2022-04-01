# Implement search / filter / sort result text

## Background

In another ticket, a component was created with various search and filter options. The purpose of this ticket is to dynamically update a line of text that will show below the search / filter component and above the repository list, that gives the user information on how their repositories are filtered and sorted. There should also be a “clear filter” option that shows, that when clicked, removes all filter options and hides this text section.

## Acceptance

- [ ] Below the search bar and above results, should see text related to the current options
- [ ] text will update based on which options are active
    - [ ] search: “{number} results for repositories **matching {query}** sorted by {sort}”
    - [ ] type filter: “{number} results **for {type} repositories** sorted by {sort}”
[ ] language filter:  “{number} results for repositories **written in {language}** sorted by {sort}”
    - [ ] all options: “{number} results for {type} repositories matching {query} written in {language} sorted by {sort}”
    - [ ] sort selection by itself does not show any text - however when any other option is selected, it will show the correct active sort value
- [ ] if search or type / language filter options are selected, will always show “X clear filter” text on the right hand side, which will reset all values to default when clicked

## Notes
