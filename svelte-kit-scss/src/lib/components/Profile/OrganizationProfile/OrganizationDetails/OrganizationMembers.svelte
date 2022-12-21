<script lang="ts">
  import type { SimpleUser } from '$lib/interfaces';

  export let members: SimpleUser[];
</script>

<div class="organization-members">
  {#each members as member}
    <a class="member-link" href={member.href}>
      <img class="image" src={member.avatarUrl} alt={member.login} />
    </a>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .organization-members {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25em;
    .member-link {
      text-decoration: none;
      width: 2rem;
      height: 2rem;
      border: 1px solid variables.$gray300;
      border-radius: 100%;
      overflow: hidden;
      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
