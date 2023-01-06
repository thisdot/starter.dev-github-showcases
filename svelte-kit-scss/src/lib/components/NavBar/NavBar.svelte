<script lang="ts">
  import { ChevronDown16, MarkGithub16 } from 'svelte-octicons';
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';

  export let userAvatar: string;
  export let username: string;

  let dropdownMenuIsOpen = false;

  function toggleMenu() {
    dropdownMenuIsOpen = !dropdownMenuIsOpen;
  }

  function closeDropdown() {
    dropdownMenuIsOpen = false;
  }

  function signOut() {
    closeDropdown();
    location.href = '/logout';
  }

  onMount(() => {
    document.addEventListener('click', closeDropdown);
  });

  if (browser) {
    onDestroy(() => {
      document.removeEventListener('click', closeDropdown);
    });
  }
</script>

<nav class="nav-bar" aria-label="Main Navigation">
  <ul>
    <li>
      <a class="github-icon" href="/">
        <MarkGithub16 height="32" width="32" fill="white" />
      </a>
    </li>
    <li on:click={closeDropdown} on:keypress={closeDropdown} class="dropdown">
      <button
        type="button"
        class="dropdown-title"
        aria-controls="nav-dropdown"
        on:click|stopPropagation={toggleMenu}
        data-testid="nav-dropdown"
      >
        <img src={userAvatar} alt="{username} avatar" />
        <ChevronDown16 height="20" width="20" fill="white" />
      </button>
      {#if dropdownMenuIsOpen}
        <ul class="dropdown-menu" id="nav-dropdown">
          <li>
            <a href="/{username}" on:click={closeDropdown}> Profile </a>
          </li>
          <li>
            <button
              type="button"
              class="sign-out-btn"
              on:click={signOut}
              data-testid="sign-out-btn"
            >
              Sign out
            </button>
          </li>
        </ul>
      {/if}
    </li>
  </ul>
</nav>

<style lang="scss">
  @use 'src/lib/styles/variables';
  .nav-bar {
    font-size: 0.875rem;
    height: 100%;
    display: grid;
    background: variables.$gray900;

    ul {
      list-style: none;
      margin: 0;
      padding: 1em 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .github-icon,
      .dropdown-title {
        color: variables.$white;
        cursor: pointer;
      }
    }

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 1em;
    }

    .dropdown {
      position: relative;

      .dropdown-title {
        background-color: transparent;
        border: none;
        font-family: inherit;
        display: flex;
        align-items: center;
      }

      .dropdown-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        right: 0;
        width: 14em;
        background-color: variables.$white;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.375em;
        margin-top: 0.5em;
        padding: 0.25em 0;
        transform-origin: top right;
        z-index: 10;

        a,
        .sign-out-btn {
          color: variables.$gray900;
          font-weight: 500;
          padding: 0.5em 1em;
          display: block;
          text-decoration: none;

          &:hover {
            color: variables.$blue600;
          }
        }

        .sign-out-btn {
          font-size: 1em;
          border: none;
          background: inherit;
          cursor: pointer;
        }
      }
    }
  }
</style>
