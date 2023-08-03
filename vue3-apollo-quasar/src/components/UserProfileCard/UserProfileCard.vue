<template>
  <!-- Actual content -->
  <q-card
    v-if="!userLoading"
    class="full-height"
    flat
    square
    style="width: 325px"
  >
    <q-card-section class="" v-bind="$attrs">
      <q-list>
        <q-item-section>
          <q-avatar class="" type="circle" style="width: 18rem; height: 18rem">
            <img :src="userData?.avatarUrl" alt="avatar" />
          </q-avatar>
        </q-item-section>
      </q-list>
      <q-list>
        <q-item-section>
          <q-item-label
            class="name text-bold q-pt-md"
            style="font-size: 24px; line-height: 1.25"
          >
            {{ userData?.name }}
          </q-item-label>
          <q-item-label
            class="login"
            style="
              font-size: 20px;
              line-height: 24px;
              color: var(--color-fg-muted);
            "
          >
            {{ userData?.login }}
          </q-item-label>
        </q-item-section>
      </q-list>
      <q-list>
        <!-- bio section -->
        <q-item-section class="bio">
          {{ userData?.bio }}
        </q-item-section>
        <!-- follow section TODO: spacing issues and alignment-->
        <q-item-section style="display: inline">
          <q-item-label>
            <a
              href="#"
              style="text-decoration: none"
              v-if="userData?.followers?.totalCount"
            >
              <q-icon
                class="q-mr-xs"
                style="color: var(--color-btn-text)"
                name="fas fa-users"
              ></q-icon>
              <span
                class="text-bold q-pl-sm q-pr-sm"
                style="color: var(--color-btn-text)"
              >
                {{ userData?.followers?.totalCount }}</span
              >
              <span style="color: var(--color-fg-muted)">followers</span>
            </a>
            ·
            <a
              href="#"
              style="text-decoration: none"
              v-if="userData?.following?.totalCount"
            >
              <span
                class="text-bold q-pr-sm"
                style="color: var(--color-btn-text)"
                >{{ userData?.following?.totalCount }}</span
              >
              <span style="color: var(--color-fg-muted)">following</span>
            </a>
            ·
            <a
              href="#"
              style="text-decoration: none"
              v-if="userData?.followers?.totalCount"
            >
              <q-icon
                class="q-mr-xs"
                style="color: var(--color-btn-text)"
                name="far fa-star"
              ></q-icon>
              <span
                class="text-bold q-pl-sm"
                style="color: var(--color-btn-text)"
              >
                {{
                  userData?.starredRepositories?.totalCount?.toLocaleString() ||
                  0
                }}
              </span>
            </a>
          </q-item-label>
        </q-item-section>
      </q-list>
      <!-- media section -->
      <q-list style="margin-top: 1rem">
        <q-item-section>
          <q-item-label
            v-if="userData?.company"
            class="items-center text-bold"
            style="margin-bottom: 4px"
          >
            <q-icon class="q-mr-xs" name="far fa-building"></q-icon>
            {{ userData?.company }}</q-item-label
          >
          <q-item-label
            v-if="userData?.location"
            class="items-center"
            style="margin-bottom: 4px"
          >
            <q-icon class="q-mr-xs" name="fas fa-map-marker-alt"></q-icon>
            {{ userData?.location }}</q-item-label
          >
          <q-item-label
            v-if="userData?.websiteUrl"
            class="items-center"
            style="margin-bottom: 4px"
          >
            <q-icon class="q-mr-xs" name="fas fa-link"></q-icon>
            <a
              :href="userData?.websiteUrl"
              target="__blank"
              style="
                text-decoration: none;
                margin-left: 4px;
                color: var(--color-btn-text);
              "
              >{{ userData?.websiteUrl }}</a
            >
          </q-item-label>
          <q-item-label
            v-if="userData?.twitterUsername"
            class="items-center"
            style="margin-bottom: 1rem"
          >
            <q-icon class="q-mr-xs" name="fab fa-twitter"></q-icon>
            <a
              href="https://twitter.com/${userData.twitterUsername}"
              target="__blank"
              style="
                text-decoration: none;
                margin-left: 4px;
                color: var(--color-btn-text);
              "
              >@{{ userData?.twitterUsername }}</a
            >
          </q-item-label>
        </q-item-section>
      </q-list>
      <!-- org section -->
      <template late v-if="userData?.organizations?.nodes?.length">
        <q-separator></q-separator>
        <q-list>
          <q-item-section>
            <q-item-label class="text-bold q-pt-md" style="font-size: 16px">
              Organizations
            </q-item-label>
            <div class="row q-pt-sm">
              <a
                v-for="organization in userData?.organizations?.nodes"
                :href="organization?.login"
                :key="`org-${organization?.login}`"
                class="q-mr-sm"
              >
                <img
                  :src="organization?.avatarUrl"
                  alt="some"
                  class="avatar"
                  style="width: 32px; height: 32px"
                />
              </a>
            </div>
          </q-item-section>
        </q-list>
      </template>
    </q-card-section>
  </q-card>
  <!-- Loading -->
  <div v-else class="q-mt-md q-px-lg" style="width: 325px">
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
import { useUser } from '@/composables';

const { getUserProfile } = useUser();
const props = defineProps({
  username: String,
});
const { data: userData, loading: userLoading } = getUserProfile(props.username);
</script>

<style lang="scss" scoped>
@import '../../App.css';
</style>
