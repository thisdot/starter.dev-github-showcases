<template>
  <div>
    <TabHeader :triggerTab="changeTab" />
    <div class="wrapper">
      <div class="row" style="--gap: 0">
        <!-- Left side -->
        <div class="usercard">
          <UserProfileCard
            :avatarUrl="avatarUrl"
            :name="name"
            :login="login"
            :bio="bio"
            :following="following"
            :follower="follower"
            :organizations="organizations"
            :location="location"
            :bioLink="bioLink"
            :organization="organization"
            :stars="stars"
          />
        </div>
        <!-- Right side -->
        <div class="tab-contents">
          <SearchFilter />

          <q-tab-panels v-model="tab">
            <q-tab-panel name="Overview">
              <div class="text-h6">Overview</div>
              <slot name="overview"></slot>
            </q-tab-panel>

            <q-tab-panel name="Respositories">
              <div class="text-h6">Respositories</div>
              <slot name="repositories"></slot>
            </q-tab-panel>

            <q-tab-panel name="Projects">
              <div class="text-h6">Projects</div>
              <slot name="projects"></slot>
            </q-tab-panel>

            <q-tab-panel name="Packages">
              <div class="text-h6">Packages</div>
              <slot name="packages"></slot>
            </q-tab-panel>

            <q-tab-panel name="Stars">
              <div class="text-h6">Stars</div>
              <slot name="stars"></slot>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SearchFilter from '../SearchFilter';
import UserProfileCard from '../UserProfileCard';
import TabHeader from './TabHeader.vue';


export default defineComponent({
  name: 'ProfilePageLayout',
  components: {
    TabHeader,
    UserProfileCard,
    SearchFilter,
  },
  setup() {
    const tab = ref('');
    function changeTab(val) {
      tab.value = val;
    }
    return {
      tab,
      changeTab,
      avatarUrl: 'https://avatars.githubusercontent.com/u/28502531?v=4',
      name: 'Jerry Hogan',
      login: 'hdjerry',
      bio: 'I am a Front-End Developer with about 3 years plus of experience and with a very good knowledge of JavaScript, Vue, React, Tailwind, Styled component',
      following: 17,
      follower: 7,
      organizations: [
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
        {
          name: 'This Dot',
          avatar:
            'https://avatars.githubusercontent.com/u/22839396?s=64&amp;v=4',
          url: '',
        },
      ],
      location: 'Lagos, Nigeria',
      bioLink: 'https://music-jerryhogan.vercel.app/',
      organization: 'This Dot',
      stars: 5,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~/src/App.css';
.tab-contents {
  flex-grow: 1;
}

.usercard {
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}
</style>
