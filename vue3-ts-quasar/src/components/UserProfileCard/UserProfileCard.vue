<template>
  <!-- Actual content -->
  <div v-if="!userLoading" class="profile-card" v-bind="$attrs">
    <div class="avatar_name_bio">
      <!-- TODO: Replace with q-avatar -->
      <div class="avatar">
        <img :src="userData.avatarUrl" alt="avatar" />
      </div>
      <div class="name_bio">
        <span class="name">
          {{ userData.name }}
        </span>
        <span class="login">
          {{ userData.login }}
        </span>
      </div>
    </div>
    <p class="bio">
      {{ userData.bio }}
    </p>
    <div class="follows">
      <a href="#" class="follower" v-if="userData.followers.totalCount">
        <q-icon class="q-mr-xs" name="fas fa-users"></q-icon>
        <span>
          {{ userData.followers.totalCount }}
        </span>
        followers
      </a>
      <span>·</span>
      <a href="#" class="following" v-if="userData.following.totalCount">
        <span>
          {{ userData.following.totalCount }}
        </span>
        followers
      </a>
    </div>
    <div class="others">
      <p>
        <q-icon class="q-mr-xs" name="far fa-star"></q-icon>

        <span>{{
          userData.starredRepositories?.totalCount?.toLocaleString() || 0
        }}</span>
      </p>
      <p v-if="userData.company">
        <q-icon class="q-mr-xs" name="fas fa-map-marker-alt"></q-icon>
        <span>{{ userData?.location }}</span>
      </p>
      <p v-if="userData.company">
        <q-icon class="q-mr-xs" name="far fa-building"></q-icon>
        <span>{{ userData.company }}</span>
      </p>
      <p v-if="userData.websiteUrl">
        <q-icon class="q-mr-xs" name="fas fa-link"></q-icon>
        <a :href="userData.websiteUrl" target="__blank">{{
          userData.websiteUrl
        }}</a>
      </p>
    </div>

    <template v-if="userData.organizations.nodes.length">
      <q-separator></q-separator>
      <h3 class="heading">Organizations</h3>
      <div class="flex organization">
        <a
          v-for="organization in userData.organizations.nodes"
          :href="organization.login"
          :key="`org-${organization.login}`"
        >
          <img :src="organization.avatarUrl" alt="some" class="avatar" />
          <div class="info">
            <p class="top">
              <!-- TODO: Replace with q-avatar -->
              <img
                :src="organization.avatarUrl"
                alt="some"
                class="avatar"
                style="width: 42px; height: 42px"
              />
              <span>
                {{ organization.login }}
              </span>
            </p>
            <div class="divider" />
          </div>
        </a>
      </div>
    </template>
  </div>

  <!-- Loading -->
  <div v-else class="q-mt-xl q-px-lg" style="width: 400px">
    <div class="full-width text-center q-mb-md">
      <q-skeleton
        class="avatar q-mb-sm"
        type="circle"
        style="width: 18rem; height: 18rem"
      ></q-skeleton>
    </div>
    <q-skeleton class="q-mb-xs" type="rect"></q-skeleton>
    <q-skeleton class="q-mb-md" type="text"></q-skeleton>

    <div class="row q-col-gutter-x-md q-mb-lg">
      <div class="col-6">
        <q-skeleton type="rect"></q-skeleton>
      </div>
      <div class="col-6">
        <q-skeleton type="rect"></q-skeleton>
      </div>
    </div>
    <q-skeleton class="q-mb-md" type="text"></q-skeleton>
    <q-skeleton class="q-mb-md" type="text"></q-skeleton>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  name: 'UserProfileCard',
});
</script>

<script lang="ts" setup>
import { Loading } from '@/components';
import { useUser } from '@/composables';
const { getUserProfile } = useUser();

const props = defineProps({
  username: String,
});

const { data: userData, loading: userLoading } = getUserProfile(props.username);
</script>

<style lang="scss" scoped>
// TODO: Refactor all this
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
