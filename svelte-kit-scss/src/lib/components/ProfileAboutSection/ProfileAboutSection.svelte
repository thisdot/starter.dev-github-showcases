<script lang="ts">
  import type {UserInfo, UserOrgs} from "../../interfaces";
  import {Link16, Location16, Mail16, Organization16, People16} from "svelte-octicons";

  export let userInfo: UserInfo;
  export let userOrgs: UserOrgs[];

</script>

<section class="profile-about-section">
  {#if userInfo?.avatar}
    <img
      class="avatar"
      src={userInfo?.avatar}
      alt="{userInfo?.avatar} avatar"
    />
  {/if}

  {#if userInfo}
    <div class="content">
      <h1>
        <div class="name">{userInfo.name}</div>
        <div class="username">{userInfo.username}</div>
      </h1>

      {#if userInfo.bio}
        <div class="bio">{userInfo.bio}</div>
      {/if}
      <div class="socials">
        <People16/>
        <span class="social-label"> {userInfo.followers} Followers </span>
        ·
        <People16/>
        <span class="social-label"> {userInfo.following} Following </span>
      </div>
      <div class="fields">
        {#if userInfo.company}
          <div>
            <Organization16/>
            <span>{userInfo.company}</span>
          </div>
        {/if}
        {#if userInfo.location}
          <div>
            <Location16/>
            <span>{userInfo.location}</span>
          </div>
        {/if}
        {#if userInfo.email}
          <div>
            <Mail16/>
            <a href="mailto:{ userInfo.email }">
              {userInfo?.email }
            </a>
          </div>
        {/if}
        {#if userInfo.blog}
          <div>
            <Link16/>
            <a href={userInfo.blog}>{userInfo.blog}</a>
          </div>
        {/if}
        {#if userInfo.twitter_username}
          <div>
        <span class="icon twitter-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 273.5 222.3"
            role="img"
            class="octicon"
          >
            <title>Twitter</title>
            <path
              d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
              fill="currentColor"
            ></path>
          </svg>
        </span>
            <a href="https://twitter.com/{ userInfo.twitter_username }"
            >@{userInfo.twitter_username}</a
            >
          </div>
        {/if}
      </div>

      <div class="organizations">
        <h2>Organizations</h2>
        <ul>
          {#each userOrgs as org}
            <li>
              <a href="/{ org.login }">
                <img src={org.avatar_url} alt="{ org.login } logo"/>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</section>

<style lang="scss">

  .profile-about-section {
    box-sizing: border-box;
  }

  /*
   * This image is styled so that it renders over the sticky header just like what
   * happens with upstream GitHub, while the content under it does not.
   */
  .avatar {
    position: relative;
    transform: translateY(-5rem);
    z-index: 20;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1; // Prevent reflow of content under image on image load.
    border-radius: 50%;
  }

  a {
    color: black;

    &:hover,
    &:active,
    &:focus {
      color: #0000ee;

      &:visited {
        color: #551a8b;
      }
    }
  }

  .icon {
    margin-right: 6px;
  }

  .content {
    margin-top: -5rem;
  }

  .name {
    font-size: 26px;
    line-height: 1.25;
    font-weight: 600;
  }

  .username {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #8b949e;
  }

  .bio {
    margin: 16px 0;
  }

  .twitter-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  .organizations {
    margin-top: 1.25rem;
    border-top: solid 1px rgba(229, 231, 235, 1);

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 8px;
    }

    img {
      display: block;
      width: 32px;
      height: 32px;
      aspect-ratio: 1/1;
      border-radius: 0.25rem;
      border: solid 1px rgba(209, 213, 219, 1);
      box-sizing: content-box;
      background-color: white;
    }

    h2 {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

</style>
