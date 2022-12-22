<script lang="ts">
  import type { PublicProfileInformation } from '$lib/interfaces';
  import { Link16, Location16, Mail16, Organization16 } from 'svelte-octicons';
  import ProfileFollowers from '../common/ProfileFollowers.svelte';
  import SocialLink from '../common/SocialLink.svelte';
  import IconTwitter16 from '$lib/components/shared/icons/IconTwitter16.svelte';

  export let profile: PublicProfileInformation;
  $: ({ avatarUrl, bio, blog, company, email, followers, location, login, name, twitterUsername } =
    profile);
  const at = `@${login}`;
</script>

<div class="organization-profile">
  <div class="section avatar">
    <img class="image" src={avatarUrl} alt={at} width="100" height="100" />
  </div>
  <div class="section info">
    <div class="name">
      <h1>{name}</h1>
    </div>
    {#if bio}
      <div class="bio">
        <span>{bio}</span>
      </div>
    {/if}

    <div class="details">
      <ProfileFollowers {followers} />
      {#if company}
        <SocialLink iconComponent={Organization16} label={company} />
      {/if}
      {#if location}
        <SocialLink iconComponent={Location16} label={location} mobileHide={true} />
      {/if}
      {#if email}
        <SocialLink
          iconComponent={Mail16}
          label={email}
          href={`mailto:{${email}}`}
          mobileHide={true}
        />
      {/if}
      {#if blog}
        <SocialLink iconComponent={Link16} label={blog} href={blog} />
      {/if}
      {#if twitterUsername}
        <SocialLink
          iconComponent={IconTwitter16}
          label={twitterUsername}
          href={`https://twitter.com/${twitterUsername}`}
          mobileHide={true}
        />
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .organization-profile {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .section {
      &.avatar {
        flex: 0 0 100px;
        .image {
          border: 1px solid variables.$gray300;
          border-radius: 6px;
          background-color: variables.$white;
        }
      }
      &.info {
        flex: 1 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          h1 {
            line-height: 1.25;
            font-size: 1.5em;
            font-weight: 600;
            color: variables.$gray800;
            margin: 0;
          }
        }
        .bio {
          font-size: 0.875em;
          color: variables.$gray600;
        }
        .details {
          margin-top: 1em;
          font-size: 0.75em;
          display: flex;
          flex-wrap: wrap;
          gap: 0.25em;
          @media (min-width: variables.$md) {
            gap: 1em;
          }
        }
      }
    }
  }
</style>
