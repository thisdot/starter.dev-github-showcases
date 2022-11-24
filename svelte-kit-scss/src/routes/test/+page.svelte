<script lang="ts">
  import IssueSearchAssignees from '$lib/components/IssueSearch/IssueSearchListItem/IssueSearchAssignees.svelte';
  import type { IssueUser } from '$lib/interfaces';

  const assignees: IssueUser[] = [
    {
      login: 'cole',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/24354175?s=40&u=a59062bbe328316a82d58441167a4e60cb01a5b8&v=4',
    },
    {
      login: 'ian',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/15368874?s=40&u=2c98cce4abfd37b7a846a546fcc8a6c82d435259&v=4',
    },
    {
      login: 'iharz',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/31627738?s=40&u=efc9a27f3ebc7975eb78b95e68e4736bf76aefec&v=4',
    },
    {
      login: 'simone',
      avatarUrl: 'https://avatars.githubusercontent.com/u/9040770?s=40&v=4',
    },
  ];
</script>

<div>testPage</div>
<div class="container">
  <div class="first" />
  <div class="second"><IssueSearchAssignees {assignees} /></div>
</div>

<style lang="scss">
  .container {
    display: flex;
    .first {
      flex: 1;
    }
    .second {
      flex: 0 0 25%;
    }
  }
</style>
