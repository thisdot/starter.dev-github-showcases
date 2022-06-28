<template>
  <div class="subheader q-pt-sm">
    <div class="container">
      <div class="row justify-between items-center no-wrap">
        <!-- Top left of the sub header -->
        <div class="row items-baseline">
          <span class="book-icon">
            <q-icon>
              <BookIcon />
            </q-icon>
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
        <div class="row items-center">
          <button
            class="git-btn text-capitalize row justify-between items-center relative-position"
          >
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-eye"></q-icon>
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

            <q-menu
              class="dropdown_menu"
              max-width="21rem"
              max-height="50rem"
              :offset="[0, 10]"
              style="min-width: 10.5rem"
              persistent
              ref="refWatchMenu"
            >
              <q-list>
                <q-item
                  class="row justify-between items-center q-py-xs q-px-md options-heading text-caption"
                >
                  <strong>Notifications</strong>
                  <button class="close-btn" @click="refWatchMenu.hide">
                    <q-icon class="fa fa-times"></q-icon>
                  </button>
                </q-item>
                <q-separator></q-separator>
                <ListItem clickable @click="selectNotification('mentions')">
                  <template v-slot:icon>
                    <q-icon class="text-h6">
                      <CorrectIcon v-show="notify === 'mentions'" />
                    </q-icon>
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
                <ListItem clickable @click="selectNotification('all')">
                  <template v-slot:icon>
                    <q-icon class="text-h6">
                      <CorrectIcon v-show="notify === 'all'" />
                    </q-icon>
                  </template>
                  <div>
                    <div class="text-bold">All Activity</div>
                    <div class="text-caption overview">
                      Notified of all notifications on this repository.
                    </div>
                  </div>
                </ListItem>
                <q-separator></q-separator>
                <ListItem clickable @click="selectNotification('ignore')">
                  <template v-slot:icon>
                    <q-icon class="text-h6">
                      <CorrectIcon v-show="notify === 'ignore'" />
                    </q-icon>
                  </template>
                  <div>
                    <div class="text-bold">Ignore</div>
                    <div class="text-caption overview">Never be notified.</div>
                  </div>
                </ListItem>
                <q-separator></q-separator>
                <ListItem clickable @click="selectNotification('custom')">
                  <template v-slot:icon>
                    <q-icon class="text-h6">
                      <CorrectIcon v-show="notify === 'custom'" />
                    </q-icon>
                  </template>
                  <div>
                    <div class="row items-start justify-between">
                      <div class="text-bold">Custom</div>
                      <q-icon>
                        <ArrowRightIcon />
                      </q-icon>
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
                    <q-icon>
                      <MobilePhoneIcon />
                    </q-icon>
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
            </q-menu>
          </button>
          <button
            class="git-btn text-capitalize row justify-between items-center"
          >
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="custome-icon text-body1">
                  <ForkIcon />
                </q-icon>
              </template>
              <template v-slot:title>
                <span class="q-mr-xs q-ml-sm text-caption">fork</span>
              </template>
              <template v-if="forks > 0" v-slot:count>
                <q-badge rounded :label="forks_count" class="count-badge" />
              </template>
            </TextWithIconAndCount>
          </button>
          <button
            class="git-btn text-capitalize row justify-between items-center relative-position"
          >
            <TextWithIconAndCount>
              <template v-slot:icon>
                <q-icon class="far fa-star"></q-icon>
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
            <q-menu
              class="dropdown_menu"
              max-width="21rem"
              max-height="50rem"
              :offset="[-50, 10]"
              style="min-width: 20.5rem"
              ref="refStarsMenu"
            >
              <q-list>
                <q-item
                  class="row justify-between items-center q-py-xs q-px-md options-heading text-caption"
                >
                  <strong>Suggested lists</strong>
                  <button class="close-btn" @click="refStarsMenu.hide">
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
            </q-menu>
          </button>
        </div>
      </div>

      <!-- bottom of the sub header -->
      <RepoTabHeader
        :issuesCount="issuesCount"
        :pullRequestsCount="pullRequestsCount"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, defineProps, ref } from 'vue';
import { countsCalc } from '@/helpers';
import { QMenu } from 'quasar';

export default defineComponent({
  name: 'RepoSubHeader',
});
</script>

<script lang="ts" setup>
import {
  TextWithIconAndCount,
  ForkIcon,
  ArrowRightIcon,
  CorrectIcon,
  MobilePhoneIcon,
  BookIcon,
} from '@/components';

import RepoTabHeader from './RepoTabHeader.vue';
import ListItem from './ListItem.vue';

const notify = ref('all');
const refStarsMenu = ref<QMenu>();
const refWatchMenu = ref<QMenu>();

const props = defineProps({
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
});

const selectNotification = (value: string) => (notify.value = value);

const repo_url = computed(() => `/${props.username}/${props.repoName}`);
const profile_url = computed(() => `/${props.username}`);
const stars_count = computed(() => countsCalc(props.stars));
const watch_count = computed(() => countsCalc(props.watch));
const forks_count = computed(() => countsCalc(props.forks));
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
@import '@/styles/quasar.mediaquery.scss';
.subheader {
  background-color: $subheader;
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
  background: #1b1f2414;
  color: inherit;
}

.fa,
.custome-icon {
  color: $secondary-200;
}

.custome-icon {
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
</style>
