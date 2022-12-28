<script lang="ts">
  import type { OrganizationSimple, PublicProfileInformation } from '$lib/interfaces';
  import { Link16, Location16, Mail16, Organization16 } from 'svelte-octicons';
  import ProfileFollowers from '../common/ProfileFollowers.svelte';
  import SocialLink from '../common/SocialLink.svelte';
  import IconTwitter16 from '$lib/components/shared/icons/IconTwitter16.svelte';
  import ProfileOrganizations from '../common/ProfileOrganizations/ProfileOrganizations.svelte';
  export let profile: PublicProfileInformation;
  export let organizations: OrganizationSimple[];

  $: ({
    avatarUrl,
    bio,
    blog,
    company,
    email,
    followers,
    following,
    location,
    login,
    name,
    twitterUsername,
  } = profile);
</script>

<div class="user-profile">
  <div class="info primary">
    <div class="avatar">
      {#if avatarUrl}
        <img class="image" src={avatarUrl} alt={name ?? login} data-testid="avatar" />
      {/if}
    </div>
    <div class="names">
      <h1>
        <span class="name" data-testid="name">{name}</span>
        <span class="login" data-testid="login">{login}</span>
      </h1>
    </div>
  </div>
  <div class="info secondary bio">
    {#if bio}
      <span data-testid="bio">{bio}</span>
    {/if}
  </div>
  <div class="info secondary followers">
    <ProfileFollowers {followers} {following} />
  </div>
  {#if company || location || email || blog || twitterUsername}
    <div class="info secondary details">
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
  {/if}
  <div class="info organizations">
    <hr />
    <h2>Organizations</h2>
    <ProfileOrganizations {organizations} />
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  $lines-gap: 1rem;

  .user-profile {
    display: flex;
    flex-direction: column;
    gap: $lines-gap;
    @media (min-width: variables.$md) {
      margin-top: -2rem;
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      &.primary {
        flex-direction: row;
        gap: $lines-gap;
        @media (min-width: variables.$md) {
          flex-direction: column;
        }
        .avatar {
          flex: 1 0 16%;
          .image {
            width: 100%;
            height: auto;
            border-radius: 100%;
          }
        }
        .names {
          flex: 1 0 84%;
          h1 {
            margin: 0;
            span {
              display: block;
              &.name {
                font-size: 1.5rem;
                line-height: 1.25;
                font-weight: 600;
              }
              &.login {
                font-size: 1.25rem;
                line-height: 1.5rem;
                font-weight: 300;
              }
            }
          }
        }
      }
      &.secondary {
        font-size: 0.875rem;
        flex-direction: column;
      }
      h2 {
        font-weight: 600;
        font-size: 1rem;
        margin: 0 0 1rem 0;
      }
      hr {
        border: none;
        border-top: 1px solid variables.$gray300;
        width: 100%;
        margin: 0 0 $lines-gap 0;
      }
    }

    .info {
      &.followers {
        order: 2;
      }
      &.details {
        order: 1;
      }
      &.organizations {
        display: none;
      }
      @media (min-width: variables.$md) {
        &.followers {
          order: 1;
        }
        &.details {
          order: 2;
        }
        &.organizations {
          display: flex;
          order: 3;
        }
      }
    }
  }
</style>
