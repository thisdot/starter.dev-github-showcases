<template>
  <q-toolbar class="bg-dark row q-py-sm">
    <Logo />
    <q-space></q-space>

    <q-btn class="text-white" flat icon-right="expand_more">
      <UserAvatar :img="userStore.profileImgUrl" />
      <q-menu
        class="menu--nav-header"
        transition-show="jump-down"
        transition-hide="jump-up"
        max-width="20rem"
        style="min-width: 12.5rem"
      >
        <q-list style="width: 100%">
          <q-item clickable>
            <q-item-section>
              Signed in as
              <br />
              <span class="text-weight-bold">{{
                userStore.username || '--'
              }}</span>
            </q-item-section>
          </q-item>
          <q-separator />

          <!-- Standard menu items -->
          <q-item
            class="nav-item"
            v-for="(navItem, i) in primaryNavItems"
            :key="`nav-menu-${i}`"
            clickable
            :to="navItem.to"
          >
            <q-item-section class="text-dark">{{
              navItem.label
            }}</q-item-section>
          </q-item>

          <q-separator />
          <q-item clickable @click="handleSignOut">
            <q-item-section>Sign out</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'NavHeader',
});
</script>

<script lang="ts" setup>
//* Composables
import { useAuth, useNav } from '@/composables';

//* Components
import { Logo, UserAvatar } from '@/components';

//* Stores
import { useUserStore } from '@/store/userStore';

const userStore = useUserStore();

const primaryNavItems = computed(() => [
  {
    label: 'Profile',
    to: `/${userStore.username || '#'}`,
  },
  {
    label: 'Repositories',
    to: '#',
  },
  {
    label: 'Gists',
    to: '#',
  },
  {
    label: 'Organizations',
    to: '#',
  },
]);


const { goToExternal } = useNav();
const { signOut } = useAuth();

const handleSignOut = async () => {
  await signOut();
  // TODO: Add feedback/notify user that they have been signed out

  goToExternal('/', 250);
};
</script>

<style lang="scss" scoped>
.menu--nav-header {
  width: 20rem;

  * {
    font-size: 0.9rem;
  }
}
.nav-item {
  &:hover {
    background: #4078c0;

    * {
      color: #f5f5f5 !important;
    }
    transition: 0.25s;
  }
}
</style>
