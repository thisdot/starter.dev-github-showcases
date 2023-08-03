<template>
  <div
    class="tab_header q-py-0 q-mx-auto q-mt-sm justify-center items-center"
    :class="{ classNames: true, org_tab: isOnlyRepositories }"
  >
    <div class="wrapper">
      <q-tabs
        v-model="activeTab"
        class="tabs"
        indicator-color="orange"
        dense
        no-caps
        inline-label
      >
        <q-tab name="overview" class="tab" v-if="overview">
          <q-icon
            class="text-h5 custom-icon"
            name="svguse:/app-icons/repo-overview.svg#repo-overview"
          />
          <span
            class="tab_label q-mx-sm"
            :class="{ 'text-weight-bold': tab === TABS.overview }"
            >Overview</span
          >
        </q-tab>
        <q-tab name="repositories" class="tab" v-if="repositories">
          <q-icon
            class="text-h5 custom-icon"
            name="svguse:/app-icons/repositories.svg#repositories-icon"
          />
          <span
            class="tab_label q-mx-sm"
            :class="{ 'text-weight-bold': tab === TABS.repositories }"
          >
            Repositories
          </span>
          <span
            class="num text-caption q-py-xs q-px-xs"
            :class="{ 'text-weight-bold': tab === TABS.repositories }"
          >
            85
          </span>
        </q-tab>
        <q-tab name="projects" class="tab" v-if="projects">
          <q-icon
            class="text-h5 custom-icon"
            name="svguse:/app-icons/repo-projects.svg#repo-projects"
          />
          <span
            class="tab_label q-mx-sm"
            :class="{ 'text-weight-bold': tab === TABS.projects }"
          >
            Projects
          </span>
        </q-tab>
        <q-tab name="packages" class="tab" v-if="packages">
          <q-icon
            class="text-h5 custom-icon"
            name="svguse:/app-icons/repo-packages.svg#repo-packages"
          />
          <span
            class="tab_label q-mx-sm"
            :class="{ 'text-weight-bold': tab === TABS.packages }"
          >
            Packages
          </span>
        </q-tab>
        <q-tab name="stars" class="tab" v-if="stars">
          <q-icon
            class="text-h5 custom-icon"
            name="svguse:/app-icons/repo-stars.svg#repo-stars"
          />
          <span
            class="tab_label q-mx-sm"
            :class="{ 'text-weight-bold': tab === TABS.stars }"
          >
            Stars
          </span>
          <span
            class="num text-weight-medium text-caption q-py-xs q-px-xs"
            :class="{ 'text-weight-bold': tab === TABS.stars }"
          >
            14
          </span>
        </q-tab>
      </q-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TabHeader',
  props: {
    overview: {
      type: Boolean,
      default: false,
    },
    repositories: {
      type: Boolean,
      default: false,
    },
    projects: {
      type: Boolean,
      default: false,
    },
    packages: {
      type: Boolean,
      default: false,
    },
    stars: {
      type: Boolean,
      default: false,
    },
    classNames: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const TABS = {
      repositories: 'repositories',
      projects: 'projects',
      packages: 'packages',
      stars: 'stars',
      overview: 'overview',
    };

    const tab = ref<string>(TABS.repositories);
    const activeTab = computed({
      get() {
        emit('triggerTab', tab.value);
        return tab.value;
      },
      set(val: string) {
        tab.value = val;
        emit('triggerTab', tab.value);
      },
    });
    const isOnlyRepositories = computed(
      (): boolean =>
        props.repositories &&
        !props.overview &&
        !props.stars &&
        !props.packages &&
        !props.projects,
    );
    return {
      tab,
      activeTab,
      isOnlyRepositories,
      TABS,
    };
  },
});
</script>

<style lang="scss">
@import '../../styles/quasar.variables.scss';
.custom-icon {
  transform: translateY(0.15rem);
}

.tabs {
  color: $secondary;
}
.tab_header {
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: transparent;
}
.tab {
  height: 50px;
  gap: 0;
}
.tab_label {
  display: inline-block;
  & ~ .num {
    background-color: $secondary-300;
    border-radius: 10px;
  }
}
.org_tab {
  & .q-tabs__content--align-center {
    justify-content: start !important;
  }
}
</style>
