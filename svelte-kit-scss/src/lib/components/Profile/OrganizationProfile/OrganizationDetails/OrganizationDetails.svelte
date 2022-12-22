<script lang="ts">
  import type { SimpleUser } from '$lib/interfaces';

  import OrganizationMembers from './OrganizationMembers.svelte';
  export let people: SimpleUser[] | undefined = undefined;
</script>

<div class="organization-details">
  {#if people}
    <div class="detail">
      <div class="title">
        <h4>People</h4>
      </div>
      <div>
        <OrganizationMembers members={people} />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .organization-details {
    display: flex;
    flex-direction: column;
    gap: 1em;
    .detail {
      .title h4 {
        font-size: 1em;
        font-weight: 400;
        margin: 0 0 1em 0;
      }
    }
  }
</style>
