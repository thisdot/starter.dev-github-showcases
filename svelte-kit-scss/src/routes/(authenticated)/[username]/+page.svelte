<script lang="ts">
  import type {PageServerData} from './$types';
  import ProfileAboutSection from "$lib/components/ProfileAboutSection/ProfileAboutSection.svelte";

  export let data: PageServerData

</script>

<div class="grid grid-cols-12 profile-body container">
  <div class="subpage col-span-3">
    <ProfileAboutSection userInfo={data.userInfo} userOrgs={data.userOrgs}/>
  </div>
</div>

<style lang="scss">

  .profile-body {
    grid-template-rows: max-content 1fr;

    .subpage {
      grid-row: 1 / 3;
    }
  }

</style>
