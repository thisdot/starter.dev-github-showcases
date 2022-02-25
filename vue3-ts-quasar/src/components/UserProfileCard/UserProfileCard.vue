<template>
  <div class="profile-card">
    <div class="avatar_name_bio">
      <div class="avatar">
        <img :src="avatarUrl" alt="avatar" />
      </div>
      <div class="name_bio">
        <span class="name">
          {{ name }}
        </span>
        <span class="login">
          {{ login }}
        </span>
      </div>
    </div>
    <p class="bio">
      {{ bio }}
    </p>
    <div class="follows">
      <a href="#" class="follower" v-if="follower">
        <svg
          text="muted"
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="allSvg"
        >
          <path
            fill-rule="evenodd"
            d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
          ></path>
        </svg>
        <span>
          {{ follower }}
        </span>
        followers
      </a>
      <span>.</span>
      <a href="#" class="following" v-if="following">
        <span>
          {{ following }}
        </span>
        followers
      </a>
    </div>
    <div class="others">
      <p>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="allSvg starIcon"
        >
          <path
            fill-rule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        <span>{{ stars }}</span>
      </p>
      <p>
        <svg
          class="allSvg loc"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
          ></path>
        </svg>
        <span>{{ location }}</span>
      </p>
      <p>
        <svg
          class="allSvg orgs"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
          ></path>
        </svg>
        <span>{{ organization }}</span>
      </p>
      <p>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="allSvg bioLink"
        >
          <path
            fill-rule="evenodd"
            d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
          ></path>
        </svg>
        <a :href="bioLink">{{ bioLink }}</a>
      </p>
    </div>
    <div class="divider" />
    <h3 class="heading">Organizations</h3>
    <div class="flex organization">
      <a
        v-for="(organization, i) in organizations"
        :href="organization.url"
        :key="i"
      >
        <img :src="organization.avatar" alt="some" class="avatar" />
        <div class="info">
          <p class="top">
            <img
              :src="organization.avatar"
              alt="some"
              class="avatar"
              style="width: 42px; height: 42px"
            />
            <span>
              {{ organization.name }}
            </span>
          </p>
          <div class="divider" />
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Organization {
  name: string;
  url: string;
  avatar: string;
}

export default defineComponent({
  name: 'UserProfileCard',
  props: {
    avatarUrl: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    login: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    organization: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    bioLink: {
      type: String,
      default: '',
    },
    stars: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    follower: {
      type: Number,
      default: 0,
    },
    organizations: {
      type: Array as PropType<Organization[]>,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
@import '../../App.css';

.profile-card {
  width: 400px;
  display: none;
  background-color: #ffffff;
  padding: 1rem 3rem;
  font-family: var(--font-family);

  @media (min-width: 1024px) {
    display: block;
  }

  & > .avatar_name_bio {
    margin-inline: auto;
    width: 100%;
    // background-color: var(--color-btn-bg);

    & > .avatar {
      width: 100%;
      min-height: 277.88px;
      height: auto;
      border: 1px solid var(--color-avatar-border);
      background-color: var(--color-btn-bg);
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      -o-border-radius: 50%;
      overflow: hidden;
    }
    & > .name_bio {
      margin: 0.5rem 0 1rem;
      // padding: 1rem;
      & > .name {
        display: block !important;
        font-size: 26px;
        line-height: 1.25;
        font-weight: 600;
        overflow: hidden;
      }
      & > .login {
        display: block !important;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        color: var(--color-fg-muted);
      }
    }
  }

  & > .bio {
    // padding: 1rem;
    font-size: 16px !important;
  }
  & > .follows {
    display: flex;
    align-items: center;
    margin: 1rem 0 0;
    // padding-left: 1rem;

    & > *:not(:last-child) {
      margin-right: 0.5rem;
    }

    & > a {
      text-decoration: none;
      display: inline-block;
      color: var(--color-fg-muted);
      &:hover {
        color: var(--color-accent-fg);
        & > svg {
          color: var(--color-accent-fg);
        }
      }
      & > span {
        display: inline-block;
        font-weight: 600 !important;
        color: var(--color-fg-default);
        margin-inline: 0.2rem;
      }
    }
  }
  .others {
    margin-top: 1rem;
    & > p {
      margin-bottom: 8px;
      & > a {
        text-decoration: none;
      }
      & > svg {
        margin-right: 6px;
      }
    }
  }
  .heading {
    font-size: 16px !important;
  }
  .divider {
    margin: 10px 0 10px;
  }
  .organization {
    margin: 2px 0 6px;
    align-items: center;
    // overflow-x: auto;
    flex-wrap: nowrap;
    padding: 10px 1px;
    --gap: 0;

    & > * {
      width: 32px;
      height: 32px;
      flex: 0 0 auto;
      position: relative;
      & > .info {
        display: none;
        position: absolute;
        z-index: 20;
        bottom: 42px;
        left: -13px;
        width: 280px;
        height: 120px;
        border: 1px solid var(--color-border-muted);
        background-color: #ffffff;
        box-shadow: 0 0 20px -7px rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        -ms-border-radius: 6px;
        -o-border-radius: 6px;

        & > p.top {
          padding: 1rem;
          display: flex;
          & > img {
            margin-right: 10px;
          }
        }
        & :after {
          content: '';
          position: absolute;
          z-index: 0;
          width: 15px;
          height: 15px;
          background-color: #ffffff;
          bottom: -7px;
          left: 20px;
          border-bottom: 1px solid var(--color-border-muted);
          border-right: 1px solid var(--color-border-muted);
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
        }
      }

      &:hover {
        & > .info {
          display: block;
        }
      }
    }

    & > *:not(:last-child) {
      margin-right: 4px;
    }
  }
}

img {
  width: 100%;
  height: 100%;
}
</style>
