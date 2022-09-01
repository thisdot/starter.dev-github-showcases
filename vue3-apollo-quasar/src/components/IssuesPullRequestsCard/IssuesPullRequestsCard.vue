<template>
  <q-item class="block q-pa-none">
    <q-card flat class="card">
      <q-card-section class="row no-wrap q-pa-sm">
        <span :class="cardType">
          <span class="text-body1" :class="state">
            <q-icon
              class="text-h6 custom-icon"
              name="svguse:/app-icons/issue.svg#issue"
              v-if="isOpenIssue"
            />
            <q-icon
              class="text-h6 custom custom-icon-icon"
              name="svguse:/app-icons/closed-issue.svg#closed-issue"
              v-else-if="isClosedIssue"
            />

            <q-icon
              class="text-h6 custom-icon"
              name="svguse:/app-icons/pull-request.svg#pull-request"
              v-if="isOpenPullRequest"
            />
            <q-icon
              class="text-h6 custom-icon"
              name="svguse:/app-icons/closed-pull-request.svg#closed-pull-request"
              v-else-if="isClosedPullRequest"
            />
            <q-icon
              class="text-h6 custom-icon"
              name="svguse:/app-icons/merged-pull-request.svg#merged-pull-request"
              v-else-if="isMergedPullRequest"
            />
          </span>
        </span>
        <div class="row column q-ml-sm col">
          <div>
            <a :href="url" class="text-body2 title text-weight-medium">
              {{ title }}
            </a>
          </div>

          <div class="text-caption description">
            <span>#{{ number }}</span>
            <span class="q-mx-xs">by</span>
            <span>{{ author }}</span>
            <span class="q-mx-xs">was</span>
            <span>{{ state }}</span>
            <span class="q-mx-xs">
              {{ getFriendlyDate(date) }}
            </span>
          </div>
        </div>

        <div>
          <span class="comment" v-if="commentCount">
            <a :href="url" class="text-caption">
              <q-icon
                class="q-mx-xs text-h6 custom-icon"
                name="svguse:/app-icons/comment.svg#comment"
              />
              <span>
                {{ commentCount }}
              </span>
            </a>
          </span>
        </div>
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, defineProps, computed } from 'vue';
import { CARD_TYPE, STATE } from './data';
import { useFormatter } from '@/composables';

const { getFriendlyDate } = useFormatter();

export default defineComponent({
  name: 'IssuesPullRequestCard',
});
</script>

<script lang="ts" setup>
const props = defineProps({
  cardType: {
    type: String,
    validator: (prop: string) => Object.values(CARD_TYPE).includes(prop),
    required: true,
  },
  state: {
    type: String,
    validator: (prop: string) => Object.values(STATE).includes(prop),
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  commentCount: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  closedAt: {
    type: String,
    default: () => null,
  },
});

const date = computed(() =>
  props.closedAt ? props.closedAt : props.createdAt,
);

const isOpenIssue = computed(
  () => props.cardType === CARD_TYPE.ISSUE && props.state === STATE.OPEN,
);
const isClosedIssue = computed(
  () => props.cardType === CARD_TYPE.ISSUE && props.state === STATE.CLOSED,
);
const isOpenPullRequest = computed(
  () => props.cardType === CARD_TYPE.PULL_REQUEST && props.state === STATE.OPEN,
);
const isClosedPullRequest = computed(
  () =>
    props.cardType === CARD_TYPE.PULL_REQUEST && props.state === STATE.CLOSED,
);
const isMergedPullRequest = computed(
  () =>
    props.cardType === CARD_TYPE.PULL_REQUEST && props.state === STATE.MERGED,
);
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';

.issue .open,
.pullrequest .open {
  color: $success;
}

.issue .closed,
.pullrequest .merged {
  color: $purple-700;
}

.pullrequest .closed {
  color: $danger-800;
}

.description,
.comment a {
  color: $secondary-200;
}

a {
  color: $dark-800;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: $primary;
  }
  transition: all 0.2s ease-in-out;
}

.custom-icon {
  transform: translate(0, 0.1rem);
}

.card {
  &:hover {
    background: $primary-100;
  }
  transition: all 0.2s ease-in-out;
}
</style>
