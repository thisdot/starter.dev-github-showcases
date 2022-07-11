<template>
  <div>
    <div class="row items-center no-wrap q-px-xs q-py-sm tab-container">
      <div class="row items-center">
        <button
          class="tab text-capitalize text-caption q-px-xs row justify-center items-center bg-transparent no-border cursor-pointer"
          :class="{ 'text-weight-medium active': isTab(TABS.OPEN) }"
          @click="updateActiveTab(TABS.OPEN)"
        >
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/pull-request.svg#pull-request"
            v-if="tabType === TAB_TYPE.PULL_REQUEST"
          />
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/issue.svg#issue"
            v-else
          />
          <span class="q-mr-xs">{{ openCounts }}</span>
          Open
        </button>
        <button
          class="tab text-capitalize text-caption q-px-xs row justify-center items-center bg-transparent no-border cursor-pointer"
          :class="{ 'text-weight-medium active': isTab(TABS.CLOSED) }"
          @click="updateActiveTab(TABS.CLOSED)"
        >
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/correct.svg#correct"
          />
          <span class="q-mr-xs">{{ closedCounts }}</span>
          Closed
        </button>
      </div>
      <div class="col row justify-end items-center relative-position">
        <q-btn-dropdown
          label="Label"
          flat
          class="text-capitalize q-px-xs dropdown-label text-caption row justify-center items-center bg-transparent no-border cursor-pointer"
          @click="toggleLabelMenu"
        >
        </q-btn-dropdown>
        <q-list class="dropdown_menu q-menu" v-if="labelRef">
          <slot name="label-list">
            <q-item
              class="text-center text-caption text-primary text-bold q-py-xs"
            >
              Label options
            </q-item>
          </slot>
        </q-list>
        <q-btn-dropdown
          label="Sort"
          flat
          class="text-capitalize q-px-xs dropdown-label text-caption row justify-center items-center bg-transparent no-border cursor-pointer"
          @click="toggleSortMenu"
        >
        </q-btn-dropdown>
        <q-list separator class="dropdown_menu q-menu" v-if="sortRef">
          <slot name="sort-list">
            <q-item
              class="text-center text-caption text-primary text-bold q-py-xs"
            >
              Sort options
            </q-item>
          </slot>
        </q-list>
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TAB_TYPE, TABS } from './data';

export default defineComponent({
  name: 'IssuePullRequestTab',
  props: {
    openCounts: {
      type: Number,
      default: 0,
    },
    closedCounts: {
      type: Number,
      default: 0,
    },
    tabType: {
      type: String,
      validator: (prop: string) => Object.values(TAB_TYPE).includes(prop),
      default: 'pullrequest',
    },
  },
  emits: ['changeTab'],
  setup(_, { emit }) {
    const activeTab = ref(TABS.OPEN);
    const labelRef = ref(false);
    const sortRef = ref(false);

    const isTab = (value) => value === activeTab.value;

    const toggleLabelMenu = () => {
      sortRef.value = false;
      labelRef.value = !labelRef.value;
    };
    const toggleSortMenu = () => {
      labelRef.value = false;
      sortRef.value = !sortRef.value;
    };

    document.body.addEventListener('click', (e) => {
      const target = e.target as Element;
      const value = target.localName;
      const exemptedLocalNames = ['i', 'span'];
      if (!exemptedLocalNames.includes(value)) {
        labelRef.value = false;
        sortRef.value = false;
      }
    });

    const updateActiveTab = (tab) => {
      activeTab.value = tab;
      emit('changeTab', tab);
    };

    return {
      TABS,
      activeTab,
      labelRef,
      sortRef,
      TAB_TYPE,
      isTab,
      toggleLabelMenu,
      toggleSortMenu,
      updateActiveTab,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';

.tab-container {
  background: $primary-100;
  border-right-width: 1px;
  border-left-width: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  .dropdown-label {
    margin-inline: 0.5rem;

    .fa-caret-down {
      font-size: 1rem;
      transform: translate(0, -0.1rem);
    }
  }
}

.tab {
  color: $secondary-200;

  &:hover,
  &.active {
    color: $dark;
  }

  .custom-icon {
    transform: translateY(0.1rem);
  }
}

.dropdown_menu {
  max-width: 21rem;
  max-height: fit-content;
  top: 2rem;
  position: absolute !important;
  min-width: 10.5rem;
  min-height: 2rem;
}
</style>
