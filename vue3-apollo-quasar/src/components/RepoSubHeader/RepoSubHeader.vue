<template>
  <div class="subheader q-pt-sm">
    <div class="container">
      <div class="row justify-between items-center no-wrap">
        <!-- Top left of the sub header -->
        <div class="row items-baseline">
          <span class="book-icon">
            <q-icon
              class="text-h5"
              name="svguse:/app-icons/book.svg#book"
            ></q-icon>
          </span>
          <span class="q-mx-sm user-reponame text-subtitle1">
            <a :href="profile_url">{{ username }}</a>
            <span class="q-mx-sm">/</span>
            <strong>
              <a :href="repo_url">{{ repoName }}</a>
            </strong>
          </span>
          <q-chip
            class="text-caption text-weight-medium q-pa-sm visibility text-capitalize"
            outline
          >
            {{ visibilityTag }}
          </q-chip>
        </div>
        <!-- Top right of the sub header -->
        <div
          class="row col col-md-5 col-lg-4 items-center no-wrap justify-between relative-position"
        >
          <button
            class="git-btn menu-btn--watch text-capitalize row justify-between items-center"
            @click="toggleWatchMenu()"
          >
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-eye text-caption"></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">watch</span>
              </template>
              <template v-if="watch > 0" v-slot:count>
                <q-badge rounded :label="watch_count" class="count-badge" />
              </template>
            </TextWithIconAndCount>
            <span class="q-ml-xs">
              <q-icon class="fa fa-caret-down"></q-icon>
            </span>
          </button>
          <div
            class="dropdown-menu q-menu dropdown-menu--watch"
            v-if="refWatchMenu"
          >
            <q-list>
              <q-item
                class="row justify-between items-center q-py-xs q-px-md options-heading text-caption"
              >
                <strong>Notifications</strong>
                <button class="close-btn" @click="refWatchMenu = false">
                  <q-icon class="fa fa-times"></q-icon>
                </button>
              </q-item>
              <q-separator></q-separator>
              <ListItem
                clickable
                @click="selectNotification(NOTIFICATIONS.mentions)"
              >
                <template v-slot:icon>
                  <span
                    class="text-h6"
                    :class="{ 'q-mr-md': isNotActive(NOTIFICATIONS.mentions) }"
                  >
                    <q-icon
                      v-show="notify === NOTIFICATIONS.mentions"
                      name="svguse:/app-icons/correct.svg#correct"
                    >
                    </q-icon>
                  </span>
                </template>
                <div>
                  <div class="text-bold">Participating and @mentions</div>
                  <div class="text-caption overview">
                    Only receive notifications from this repository when
                    participating or @mentioned.
                  </div>
                </div>
              </ListItem>
              <q-separator></q-separator>
              <ListItem
                clickable
                @click="selectNotification(NOTIFICATIONS.all)"
              >
                <template v-slot:icon>
                  <span
                    class="text-h6"
                    :class="{ 'q-mr-md': isNotActive(NOTIFICATIONS.all) }"
                  >
                    <q-icon
                      v-show="notify === NOTIFICATIONS.all"
                      name="svguse:/app-icons/correct.svg#correct"
                    >
                    </q-icon>
                  </span>
                </template>
                <div>
                  <div class="text-bold">All Activity</div>
                  <div class="text-caption overview">
                    Notified of all notifications on this repository.
                  </div>
                </div>
              </ListItem>
              <q-separator></q-separator>
              <ListItem
                clickable
                @click="selectNotification(NOTIFICATIONS.ignore)"
              >
                <template v-slot:icon>
                  <span
                    class="text-h6"
                    :class="{ 'q-mr-md': isNotActive(NOTIFICATIONS.ignore) }"
                  >
                    <q-icon
                      v-show="notify === NOTIFICATIONS.ignore"
                      name="svguse:/app-icons/correct.svg#correct"
                    >
                    </q-icon>
                  </span>
                </template>
                <div>
                  <div class="text-bold">Ignore</div>
                  <div class="text-caption overview">Never be notified.</div>
                </div>
              </ListItem>
              <q-separator></q-separator>
              <ListItem
                clickable
                @click="selectNotification(NOTIFICATIONS.custom)"
              >
                <template v-slot:icon>
                  <span
                    class="text-h6"
                    :class="{ 'q-mr-md': isNotActive(NOTIFICATIONS.custom) }"
                  >
                    <q-icon
                      v-show="notify === NOTIFICATIONS.custom"
                      name="svguse:/app-icons/correct.svg#correct"
                    >
                    </q-icon>
                  </span>
                </template>
                <div>
                  <div class="row items-start justify-between">
                    <div class="text-bold">Custom</div>
                    <q-icon
                      class="text-h6"
                      name="svguse:/app-icons/arrow-right.svg#arrow-right"
                    ></q-icon>
                  </div>
                  <div class="text-caption overview">
                    Select events you want to be notified of in addition to
                    participating and @mentions.
                  </div>
                </div>
              </ListItem>
              <q-separator></q-separator>
              <ListItem className="item-bottom">
                <template v-slot:icon>
                  <q-icon
                    name="svguse:/app-icons/mobile.svg#mobile"
                    class="text-h6"
                  ></q-icon>
                </template>
                <span class="text-caption color-fg-muted text-normal pb-1">
                  Get push notifications on
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/app/apple-store/id1477376905?ct=watch-dropdown&amp;mt=8&amp;pt=524675"
                    >iOS</a
                  >
                  or
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.github.android&amp;referrer=utm_campaign%3Dwatch-dropdown%26utm_medium%3Dweb%26utm_source%3Dgithub"
                    >Android</a
                  >.
                </span>
              </ListItem>
            </q-list>
          </div>
          <button
            class="git-btn text-capitalize row justify-between items-center no-wrap"
          >
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon
                  class="custom-icon text-h6"
                  name="svguse:/app-icons/fork.svg#fork"
                ></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mx-xs text-caption">fork</span>
              </template>
              <template v-if="forks > 0" v-slot:count>
                <q-badge rounded :label="forks_count" class="count-badge" />
              </template>
            </TextWithIconAndCount>
          </button>
          <button
            class="git-btn menu-btn--star text-capitalize row justify-between items-center no-wrap"
            @click="toggleStarsMenu()"
          >
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-star text-caption"></q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">Star</span>
              </template>
              <template v-if="stars > 0" v-slot:count>
                <q-badge rounded :label="stars_count" class="count-badge" />
              </template>
            </TextWithIconAndCount>

            <span class="star_dropdown q-ml-md">
              <q-icon class="fa fa-caret-down"></q-icon>
            </span>
          </button>
          <div
            class="dropdown-menu q-menu dropdown-menu--star"
            v-if="refStarsMenu"
          >
            <q-list>
              <q-item
                class="row justify-between items-center q-py-xs q-px-md options-heading text-caption"
              >
                <strong>Suggested lists</strong>
                <button class="close-btn" @click="refStarsMenu = false">
                  <q-icon class="fa fa-times"></q-icon>
                </button>
              </q-item>
              <q-separator></q-separator>
              <ListItem>
                <template v-slot:icon>
                  <q-icon class="fa fa-plus"></q-icon>
                </template>
                <span class="text-caption"> Create list </span>
              </ListItem>
            </q-list>
          </div>
        </div>
      </div>

      <!-- bottom of the sub header -->
      <RepoTabHeader
        :issuesCount="issuesCount"
        :pullRequestsCount="pullRequestsCount"
        @triggerTab="triggerTab"
      />
    </div>
    <q-tab-panels v-model="tab">
      <q-tab-panel :name="TABS.CODE">
        <slot :name="TABS.CODE" />
      </q-tab-panel>
      <q-tab-panel :name="TABS.ISSUES">
        <slot :name="TABS.ISSUES" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import RepoTabHeader from './RepoTabHeader.vue';
import ListItem from './ListItem.vue';
import TextWithIconAndCount from '@/components/TextWithIconAndCount';
import { countCalc } from '@/helpers';
import { NOTIFICATIONS, TABS } from './data';

type Props = {
  username: string;
  repoName: string;
  visibilityTag: string;
  stars: number;
  watch: number;
  forks: number;
  issuesCount: number;
  pullRequestsCount: number;
};

export default defineComponent({
  name: 'RepoSubHeader',
  props: {
    username: {
      type: String,
      required: true,
    },
    repoName: {
      type: String,
      required: true,
    },
    visibilityTag: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    watch: {
      type: Number,
      required: true,
    },
    forks: {
      type: Number,
      required: true,
    },
    issuesCount: {
      type: Number,
      required: true,
    },
    pullRequestsCount: {
      type: Number,
      required: true,
    },
  },
  components: {
    TextWithIconAndCount,
    RepoTabHeader,
    ListItem,
  },
  setup(props: Props) {
    const refStarsMenu = ref(false);
    const refWatchMenu = ref(false);
    const tab = ref(TABS.CODE);

    const notify = ref(NOTIFICATIONS.all);

    const toggleWatchMenu = () => {
      refStarsMenu.value = false;
      refWatchMenu.value = !refWatchMenu.value;
    };
    const toggleStarsMenu = () => {
      refWatchMenu.value = false;
      refStarsMenu.value = !refStarsMenu.value;
    };

    document.body.addEventListener('click', (e) => {
      const target = e.target as Element;
      const value = target.localName;
      if (value == 'body') {
        refWatchMenu.value = false;
        refStarsMenu.value = false;
      }
    });

    const selectNotification = (value: string) => (notify.value = value);

    const repo_url = computed(() => `/${props.username}/${props.repoName}`);
    const profile_url = computed(() => `/${props.username}`);
    const stars_count = computed(() => countCalc(props.stars));
    const watch_count = computed(() => countCalc(props.watch));
    const forks_count = computed(() => countCalc(props.forks));

    const isNotActive = (value) => notify.value !== value;
    const triggerTab = (value: string) => {
      tab.value = value;
    };

    return {
      repo_url,
      profile_url,
      stars_count,
      watch_count,
      forks_count,
      refStarsMenu,
      refWatchMenu,
      notify,
      selectNotification,
      toggleWatchMenu,
      toggleStarsMenu,
      isNotActive,
      NOTIFICATIONS,
      tab,
      TABS,
      triggerTab,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.subheader {
  background-color: $primary-100;
}

.user-reponame {
  span {
    color: $secondary-200;
  }
}

a:link {
  text-decoration: none;
  color: $primary;
}
a:hover {
  text-decoration: underline;
}

.visibility {
  color: $secondary-200;
  border-color: $secondary-100;
  font-size: 0.75rem;
}

.star_dropdown::before {
  width: 1px;
  top: 0;
  bottom: 0;
  content: '';
  position: absolute;
  right: 1.5rem;
  background-color: $secondary-100;
}

.star_dropdown {
  color: $secondary-200;
}

.fa-caret-down,
.fa-times,
button {
  cursor: pointer;
}
.count-badge {
  background: $dark-300;
  color: inherit;
}

.fa,
.custom-icon,
.book-icon {
  color: $secondary-200;
}

.custom-icon {
  transform: translateY(0.2rem);
}
.options-heading {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
  min-height: unset;
}
.item-bottom {
  background-color: $primary-100;
}

.text-caption.overview {
  color: $secondary-200;
}
button.close-btn {
  background-color: transparent;
  border: none;
}

.dropdown-menu {
  max-width: 21rem;
  max-height: fit-content;
  top: 3rem;
  position: absolute !important;
  &--watch {
    min-width: 10.5rem;
  }
  &--star {
    min-width: 20.5rem;
    left: 3rem;
  }
}

button + button {
  margin-left: 0;
}

.book-icon {
  transform: translate(0.1rem, 0.2rem);
}
</style>
