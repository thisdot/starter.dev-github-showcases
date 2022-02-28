<template>
  <q-toolbar class="bg-dark row">
    <Logo />

    <div class="col-7 col-sm-4">
      <q-input
        class="q-ml-lg"
        v-model="searchText"
        type="search"
        standout
        dark
        dense
        placeholder="Search through stuff"
      ></q-input>
    </div>
    <q-space></q-space>

    <q-btn class="text-white" flat icon-right="expand_more">
      <UserAvatar />
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
                currentUser.$state.username || '--'
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavHeader',
});
</script>

<script lang="ts" setup>
import { ref } from 'vue';

//* Composables
import { useAuth, useNav } from '@/composables';

//* Components
import { Logo, UserAvatar } from '@/components';

//* Stores
import { useUserStore } from '@/store/userStore';

const currentUser = useUserStore();

const primaryNavItems = [
  {
    label: 'Profile',
    to: '#',
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
];

//* Reactive values
const searchText = ref('');

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
