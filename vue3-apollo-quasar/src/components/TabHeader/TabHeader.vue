<template>
  <div class="tab_header" :class="classNames">
    <div class="wrapper">
      <q-tabs
        v-model="activeTab"
        style="color: #586069"
        indicator-color="orange"
        dense
        no-caps
        inline-label
        v-if="tabConfig"
      >
        <q-tab
          v-for="tabItem in tabConfig"
          v-bind:key="tabItem.name"
          :name="tabItem.name"
          style="height: 50px; --gap: 0"
        >
          <component :is="tabItem.icon" />
          <span class="tab_label" :class="{ active: tab === tabItem.name }">
            {{ tabItem.title }}
          </span>
          <span
            class="num"
            v-if="tabItem.counter !== undefined"
            :class="{ active: tab === tabItem.name }"
          >
            {{ tabItem.counter }}
          </span>
        </q-tab>
      </q-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import CodeIcon from '../Icons/CodeIcon.vue';
import OverviewIcon from '../Icons/OverviewIcon.vue';
import PackagesIcon from '../Icons/PackagesIcon.vue';
import ProjectsIcon from '../Icons/ProjectsIcon.vue';
import RepositoriesIcon from '../Icons/RepositoriesIcon.vue';
import StarsIcon from '../Icons/StarsIcon.vue';

export default defineComponent({
  name: 'TabHeader',
  props: {
    tabConfig: {
      type: Array as PropType<
        {
          name: string;
          title: string;
          icon?: string;
          counter?: number;
          active?: boolean;
        }[]
      >,
      default: () => [],
    },
    classNames: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const tabConfig = props.tabConfig as {
      name: string;
      title: string;
      icon?: string;
      counter?: number;
      active?: boolean;
    }[];
    const activeKey =
      tabConfig?.length > 0
        ? tabConfig.find((tab) => tab.active)?.name ?? tabConfig[0].name
        : '';
    const tab = ref(activeKey);
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
    return {
      tab,
      activeTab,
    };
  },
  components: {
    CodeIcon,
    OverviewIcon,
    PackagesIcon,
    ProjectsIcon,
    RepositoriesIcon,
    StarsIcon,
  },
});
</script>

<style lang="scss" scoped>
@import '../../App.css';

.tab_header {
  margin: 10px auto 0;
  border-bottom: 1px solid #eaecef;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid var(--color-border);
  padding-top: 0;
  padding-bottom: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: #fff;
  align-items: flex-end;
}
.tab_label {
  display: inline-block;
  margin: 0 8px;
  &.active {
    font-weight: bold;
  }
  & ~ .num {
    background-color: rgba(209, 213, 218, 0.5);
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 500;
    &.active {
      font-weight: bold;
    }
  }
}
</style>
