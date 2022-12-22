<script lang="ts">
  import type { OrganizationSimple } from '$lib/interfaces';

  export let organizations: OrganizationSimple[];
</script>

<div class="profile-organizations">
  {#each organizations as organization}
    <a class="organization-link" href="/{organization.login}">
      <img class="image" src={organization.avatarUrl} alt={organization.login} />
    </a>
  {/each}
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .profile-organizations {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25em;
    .organization-link {
      text-decoration: none;
      width: 2rem;
      height: 2rem;
      border: 1px solid variables.$gray300;
      border-radius: 6px;
      overflow: hidden;
      .image {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>
