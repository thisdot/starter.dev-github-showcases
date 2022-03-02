<template>
  <div class="repo-card">
    <div class="repo-card_left">
      <h3 class="repo-card_left_name-tag text-h6">
        <a href="" class="repo-name">
          {{ repoName }}
        </a>
        <span class="repo-tag">
          {{ visibilityTag }}
        </span>
      </h3>
      <div v-if="description" class="repo-card_left_description">
        {{ description }}
      </div>

      <div class="repo-card_left_topics" v-if="topics && topics.length">
        <a
          v-for="(topic, i) in topics"
          :href="topic.url"
          class="topic-tag"
          :key="i"
        >
          {{ topic.name }}
        </a>
      </div>
      <div class="repo-card_left_lang-lastupd">
        <p class="lang-color">
          <span
            class="color"
            :style="{ backgroundColor: mainLanguage.color }"
          ></span>
          <span class="language">
            {{ mainLanguage.language }}
          </span>
        </p>
        <span v-if="stars" class="stars-count">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="allSvg"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          <span>
            {{ stars }}
          </span>
        </span>
        <span class="lastupdate">
          Updated
          {{ lastUpdated }}
        </span>
      </div>
    </div>
    <div class="repo-card_right">
      <button class="repo-card_right_starIncrement git-btn btn btn-sm">
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="allSvg"
        >
          <path
            fill-rule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        <span>Star</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Lang {
  language: string;
  color: string;
}
interface Topics {
  name: string;
  url: string;
}

export default defineComponent({
  name: 'RepoCard',
  props: {
    repoName: {
      type: String,
      default: '',
      required: true,
    },
    visibilityTag: {
      type: String,
      default: 'Public',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
    mainLanguage: {
      type: Object as PropType<Lang>,
      required: true,
    },
    topics: {
      type: Array as PropType<Topics[]>,
      default: () => [],
      required: false,
    },
    stars: {
      type: Number,
      default: 0,
      required: false,
    },
    forks: {
      type: Number,
      default: 0,
      required: false,
    },
    lastUpdated: {
      type: Date,
      required: false,
    },
  },
});
</script>

<style lang="scss">
@import '../../App.css';

.repo-card {
  background-color: #ffffff;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid;
  border-color: rgba(229, 231, 235, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  font-family: var(--font-family);
  color: #57606a;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }

  & > &_left {
    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }

    .repo-card_left_name-tag,
    .repo-card_left_lang-lastupd {
      display: flex;
      align-items: center;
    }

    .repo-card_left_name-tag {
      & > .repo-name {
        margin-right: 1rem;
        color: #0969da;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      & > .repo-tag {
        display: inline-block;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        padding: 0px 7px;
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-radius: 2em;
        color: #57606a;
        border-color: var(--color-border-muted);
      }
    }

    .repo-card_left_description {
      width: 74.55%;
    }

    .repo-card_left_topics {
      & > .topic-tag {
        display: inline-block;
        padding: 0 7px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        border: 1px solid transparent;
        border-radius: 2em;
        padding-right: 10px;
        padding-left: 10px;
        line-height: 22px;
        color: var(--color-accent-fg);
        background-color: var(--color-accent-subtle);
        border: 1px solid var(--color-topic-tag-border, transparent);
        text-decoration: none;

        &:hover {
          color: #ffffff;
          background-color: var(--color-accent-fg);
        }
        &:not(:last-child) {
          margin: 0 0.125em 0.333em 0;
        }
      }
    }

    .repo-card_left_lang-lastupd {
      color: #57606a;
      font-size: 12px !important;

      & > *:not(:last-child) {
        margin-right: 10px;
      }

      & > .lang-color {
        display: flex;
        align-items: center;
        & > .color {
          position: relative;
          top: 1px;
          display: inline-block;
          width: 12px;
          height: 12px;
          border: 1px solid var(--color-primer-border-contrast);
          border-radius: 50%;
          margin-right: 10px;
        }
      }

      & > .stars-count {
        cursor: pointer;
        & > svg {
          margin-right: 1px;
        }
        &:hover {
          & > * {
            color: var(--color-accent-fg);
          }
        }
      }
    }
  }

  & > &_right {
    display: flex;

    & > .repo-card_right_starIncrement {
      & > svg {
        margin-right: 4px;
        &:hover {
          color: var(--color-accent-fg);
        }
      }
    }
  }
}
</style>
