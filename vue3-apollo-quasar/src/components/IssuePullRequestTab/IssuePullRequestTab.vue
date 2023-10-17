<template>
  <div>
    <div class="row items-center no-wrap q-px-xs q-py-sm tab-container">
      <div class="row items-center">
        <button
          class="tab tab--open text-capitalize text-caption q-px-xs row justify-center items-center bg-transparent no-border cursor-pointer"
          :class="{ 'text-weight-bold active': isTab(TABS.OPEN) }"
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
          <span class="q-mr-xs" v-if="!isNaN(openCounts)">{{
            openCounts
          }}</span>
          Open
        </button>
        <button
          class="tab tab--closed text-capitalize text-caption q-px-xs row justify-center items-center bg-transparent no-border cursor-pointer"
          :class="{ 'text-weight-bold active': isTab(TABS.CLOSED) }"
          @click="updateActiveTab(TABS.CLOSED)"
        >
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/correct.svg#correct"
          />
          <span class="q-mr-xs" v-if="!isNaN(closedCounts)">{{
            closedCounts
          }}</span>
          Closed
        </button>
      </div>
      <div class="col row justify-end items-center relative-position">
        <q-btn-dropdown
          label="Label"
          flat
          class="text-capitalize q-px-xs dropdown-label dropdown-label--label text-caption row justify-center items-center bg-transparent no-border cursor-pointer"
        >
          <q-list separator class="dropdown-menu">
            <div
              class="q-py-sm q-px-md row justify-between items-center text-caption text-weight-bold"
            >
              Select Label
              <q-icon name="close" size="xs" v-close-popup />
            </div>
            <q-separator />
            <q-item
              v-for="label in labelsOpt"
              class="text-caption"
              :key="label.name"
              clickable
              v-close-popup
              @click="setlabel(label.name)"
            >
              <q-item-section>
                <span class="row items-center q-gutter-x-xs">
                  <span v-if="repoStore.selectedLabel === label.name">
                    <q-icon name="check" size="xs" />
                  </span>
                  <span class="q-mr-md" v-else />
                  <span>
                    {{ label.name }}
                  </span>
                </span>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown
          label="Milestones"
          flat
          class="text-capitalize q-px-xs dropdown-label dropdown-label--milestones text-caption row justify-center items-center bg-transparent no-border cursor-pointer"
        >
          <q-list separator class="dropdown-menu">
            <div
              class="q-py-sm q-px-md row justify-between items-center text-caption text-weight-bold"
            >
              Select Milestone
              <q-icon name="close" size="xs" v-close-popup />
            </div>
            <q-separator />
            <q-item
              v-for="milestone in milestoneOpt"
              class="text-caption"
              :key="milestone.id"
              clickable
              v-close-popup
              @click="setMilestone(milestone.title)"
            >
              <q-item-section>
                <span class="row items-center q-gutter-x-xs">
                  <span v-if="repoStore.selectedMilestone === milestone.title">
                    <q-icon name="check" size="xs" />
                  </span>
                  <span class="q-mr-md" v-else />
                  <span>
                    {{ milestone.title }}
                  </span>
                </span>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown
          label="Sort"
          flat
          class="text-capitalize q-px-xs dropdown-label dropdown-label--sort text-caption row justify-center items-center bg-transparent no-border cursor-pointer posi"
        >
          <q-list separator class="dropdown-menu">
            <div
              class="q-py-sm q-px-md row justify-between items-center text-caption text-weight-bold"
            >
              Sort By
              <q-icon name="close" size="xs" v-close-popup />
            </div>
            <q-separator />
            <q-item
              v-for="option in sortOptions"
              class="text-caption"
              :key="option"
              clickable
              v-close-popup
              @click="setSortBy(option)"
            >
              <q-item-section>
                <span class="row items-center q-gutter-x-xs">
                  <span v-if="repoStore.sortBy === option">
                    <q-icon name="check" size="xs" />
                  </span>
                  <span class="q-mr-md" v-else />
                  <span>
                    {{ option }}
                  </span>
                </span>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { TAB_TYPE, TABS } from './data';
import { useRepoStore } from '@/store/respoStore';
import { getSelectedMilestoneNumber, SORT_OPTIONS } from '@/helpers';

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
    const milestonesRef = ref(false);
    const sortOptions = Object.values(SORT_OPTIONS);
    const repoStore = useRepoStore();

    const labelsOpt = computed(() => repoStore.labels);
    const milestoneOpt = computed(() => repoStore.milestones);

    const setMilestone = (value: string) => {
      repoStore.setSelectedMilestone(value);
      const milestoneNum = getSelectedMilestoneNumber(
        repoStore.milestones || [],
        value,
      );
      repoStore.setSelectedMilestoneNumber(milestoneNum);
    };
    const setlabel = (value: string) => repoStore.setSelectedLabel(value);
    const setSortBy = (value: string) => repoStore.setSortBy(value);

    const isTab = (value) => value === activeTab.value;

    const toggleLabelMenu = () => {
      sortRef.value = false;
      milestonesRef.value = false;
      labelRef.value = !labelRef.value;
    };
    const toggleSortMenu = () => {
      labelRef.value = false;
      milestonesRef.value = false;
      sortRef.value = !sortRef.value;
    };
    const toggleMilestonesMenu = () => {
      labelRef.value = false;
      sortRef.value = false;
      milestonesRef.value = !milestonesRef.value;
    };

    document.body.addEventListener('click', (e) => {
      const target = e.target as Element;
      const value = target.localName;
      const exemptedLocalNames = ['i', 'span'];
      if (!exemptedLocalNames.includes(value)) {
        labelRef.value = false;
        sortRef.value = false;
        milestonesRef.value = false;
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
      milestonesRef,
      sortRef,
      TAB_TYPE,
      milestoneOpt,
      labelsOpt,
      repoStore,
      sortOptions,
      isTab,
      toggleLabelMenu,
      toggleSortMenu,
      updateActiveTab,
      toggleMilestonesMenu,
      setMilestone,
      setlabel,
      setSortBy,
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

.dropdown-menu {
  width: 100%;
  height: 100%;
  min-width: 200px;
  max-height: unset;
}
</style>
