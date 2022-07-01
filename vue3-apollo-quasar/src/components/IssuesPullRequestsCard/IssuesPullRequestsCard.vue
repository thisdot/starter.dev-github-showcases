<template>
  <q-card flat>
    <q-card-section class="row no-wrap q-pa-sm">
      <span :class="cardType">
        <q-icon class="text-body1" :class="state">
          <IssuesIcon v-if="cardType === 'issue' && state === 'open'" />
          <ClosedIssuesIcon
            v-else-if="cardType === 'issue' && state === 'closed'"
          />

          <PullRequestsIcon
            v-if="cardType === 'pullrequest' && state === 'open'"
          />
          <MergedPullRequestsIcon
            v-else-if="cardType === 'pullrequest' && state === 'merged'"
          />
          <ClosedPullRequestsIcon
            v-else-if="cardType === 'pullrequest' && state === 'closed'"
          />
        </q-icon>
      </span>
      <div class="row column q-ml-sm col">
        <a :href="url" class="text-body1 title">
          {{ title }}
        </a>

        <p class="text-caption description">
          <span>#{{ number }}</span>
          <span class="q-mx-xs">by</span>
          <span>{{ author }}</span>
          <span class="q-mx-xs">was</span>
          <span>{{ state }}</span>
          <span class="q-mx-xs">
            {{ getFriendlyDate(createdAt.toLocaleDateString()) }}
          </span>
        </p>
      </div>

      <div>
        <span class="comment">
          <a :href="url" class="text-caption">
            <q-icon class="q-mx-xs text-body1">
              <CommentIcon />
            </q-icon>
            <span>
              {{ commentCount }}
            </span>
          </a>
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import { cardTypes, states } from './data';
import { useFormatter } from '@/composables';

const { getFriendlyDate } = useFormatter();

export default defineComponent({
  name: 'IssuesPullRequestCard',
});
</script>

<script lang="ts" setup>
import {
  IssuesIcon,
  PullRequestsIcon,
  ClosedPullRequestsIcon,
  ClosedIssuesIcon,
  MergedPullRequestsIcon,
  CommentIcon,
} from '@/components';

defineProps({
  cardType: {
    type: String,
    validator: (prop: string) => cardTypes.includes(prop),
    required: true,
  },
  state: {
    type: String,
    validator: (prop: string) => states.includes(prop),
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
    type: Date,
    required: true,
  },
});
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

a,
.comment a {
  color: $dark-800;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: $primary;
  }
  transition: all 0.2s ease-in-out;
}

.title {
  width: fit-content;
}

.description,
.comment a {
  color: $secondary-200;
}
</style>
