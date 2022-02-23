<template>
  <div>
    <TabHeader
      :Respositories="true"
      :triggerTab="changeTab"
      classNames="org_tab"
    />
    <div class="wrapper">
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SearchFilter, TabHeader } from '..';

export default defineComponent({
  name: 'ProfilePageLayout',
  components: {
    TabHeader,
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
    };
  },
});
</script>

<style lang="scss">
@import '~/src/App.css';
.tab-contents {
  flex-grow: 1;
}

.org_tab {
  & .q-tabs__content--align-center {
    justify-content: start !important;
  }
}

.usercard {
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}
</style>
