<template>
  <div class="tab_header">
    <q-tabs
      v-model="activeTab"
      style="color: #586069"
      indicator-color="orange"
      dense
      no-caps
      inline-label
    >
      <q-tab name="Overview" style="height: 50px; --gap: 0" v-if="Overview">
        <q-icon>
          <svg
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
            class="allSvg"
          >
            <path
              fill-rule="evenodd"
              d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
            ></path>
          </svg>
        </q-icon>
        <span class="tab_label">Overview</span>
      </q-tab>
      <q-tab
        name="Respositories"
        style="height: 50px; --gap: 0"
        v-if="Respositories"
      >
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          aria-hidden="true"
          class="allSvg"
        >
          <path
            fill-rule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        <span class="tab_label" :class="{ active: tab === 'Respositories' }">
          Respositories
        </span>
        <span class="num" :class="{ active: tab === 'Respositories' }">
          85
        </span>
      </q-tab>
      <q-tab name="Projects" style="height: 50px; --gap: 0" v-if="Projects">
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          aria-hidden="true"
          class="allSvg"
        >
          <path
            fill-rule="evenodd"
            d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
          ></path>
        </svg>
        <span class="tab_label" :class="{ active: tab === 'Projects' }">
          Projects
        </span>
      </q-tab>
      <q-tab name="Packages" style="height: 50px; --gap: 0" v-if="Packages">
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          aria-hidden="true"
          class="allSvg"
        >
          <path
            fill-rule="evenodd"
            d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
          ></path>
        </svg>
        <span class="tab_label" :class="{ active: tab === 'Packages' }">
          Packages
        </span>
      </q-tab>
      <q-tab name="Stars" style="height: 50px; --gap: 0" v-if="Stars">
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="allSvg starIcon"
        >
          <path
            fill-rule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        <span class="tab_label" :class="{ active: tab === 'Stars' }">
          Stars
        </span>
        <span class="num" :class="{ active: tab === 'Stars' }"> 14 </span>
      </q-tab>
    </q-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TabHeader',
  props: {
    triggerTab: {
      type: Function,
      default: () => null,
    },
    Overview: {
      type: Boolean,
      default: false,
    },
    Respositories: {
      type: Boolean,
      default: false,
    },
    Projects: {
      type: Boolean,
      default: false,
    },
    Packages: {
      type: Boolean,
      default: false,
    },
    Stars: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const tab = ref('Respositories');
    const activeTab = computed({
      get() {
        props.triggerTab(tab.value);
        return tab.value;
      },
      set(val: string) {
        tab.value = val;
        props.triggerTab(val);
      },
    });
    return {
      tab,
      activeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~/src/App.css';

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
