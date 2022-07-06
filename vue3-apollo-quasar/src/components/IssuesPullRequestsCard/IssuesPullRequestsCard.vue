<template>
  <q-card flat class="card">
    <q-card-section class="row no-wrap q-pa-sm">
      <span :class="cardType">
        <span class="text-body1" :class="state">
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/issue.svg#issue"
            v-if="cardType === CARD_TYPES.ISSUE && state === STATES.OPEN"
          />
          <q-icon
            class="text-h6 custom custom-icon-icon"
            name="svguse:app-icons/closed-issue.svg#closed-issue"
            v-else-if="cardType === CARD_TYPES.ISSUE && state === STATES.CLOSED"
          />

          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/pull-request.svg#pull-request"
            v-if="cardType === CARD_TYPES.PULL_REQUEST && state === STATES.OPEN"
          />
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/closed-pull-request.svg#closed-pull-request"
            v-else-if="
              cardType === CARD_TYPES.PULL_REQUEST && state === STATES.CLOSED
            "
          />
          <q-icon
            class="text-h6 custom-icon"
            name="svguse:app-icons/merged-pull-request.svg#merged-pull-request"
            v-else-if="
              cardType === CARD_TYPES.PULL_REQUEST && state === STATES.MERGED
            "
          />
        </span>
      </span>
      <div class="row column q-ml-sm col">
        <div>
          <a :href="url" class="text-body2 title">
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
            {{ getFriendlyDate(createdAt.toLocaleDateString()) }}
          </span>
        </div>
      </div>

      <div>
        <span class="comment">
          <a :href="url" class="text-caption">
            <q-icon
              class="q-mx-xs text-h6 custom-icon"
              name="svguse:app-icons/comment.svg#comment"
            />
            <span>
              {{ commentCount }}
            </span>
          </a>
        </span>
      </div>
    </q-card-section>
    <slot />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import { CARD_TYPES, STATES } from './data';
import { useFormatter } from '@/composables';

const { getFriendlyDate } = useFormatter();

export default defineComponent({
  name: 'IssuesPullRequestCard',
});
</script>

<script lang="ts" setup>
defineProps({
  cardType: {
    type: String,
    validator: (prop: string) => Object.values(CARD_TYPES).includes(prop),
    required: true,
  },
  state: {
    type: String,
    validator: (prop: string) => Object.values(STATES).includes(prop),
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
