<template>
  <div class="repo-card">
    <div class="repo-card_left">
      <h3 class="repo-card_left_name-tag">
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

<script src="./card.ts" lang="ts"></script>

<style lang="scss" src="./repocard.scss"></style>
