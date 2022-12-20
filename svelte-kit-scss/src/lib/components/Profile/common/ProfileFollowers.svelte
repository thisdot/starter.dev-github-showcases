<script lang="ts">
  import { People16 } from 'svelte-octicons';
  export let followers: number;
  export let following: number | undefined = undefined;

  $: followingDefined = typeof following === typeof Number();
</script>

<div class="profile-followers">
  <People16 />
  <span class="label">
    <span class="count" data-testid="followers">{followers}</span> followers</span
  >
  {#if followingDefined}
    <span class="separator-dot">&#x2022;</span>
    <span class="label">
      <span class="count" data-testid="following">{following}</span> following</span
    >
  {/if}
</div>

<style lang="scss">
  .profile-followers {
    display: flex;
    align-items: center;
    gap: 0.25em;
    flex-wrap: wrap;
    .label {
      display: flex;
      align-items: center;
      gap: 0.25em;
      .count {
        font-weight: 600;
      }
    }
    .separator-dot {
      justify-content: center;
      text-align: center;
    }
  }
</style>
