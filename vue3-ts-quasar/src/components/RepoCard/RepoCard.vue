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
        <span class="lastupdate">
          Updated
          {{ lastUpdated }}
        </span>
      </div>
    </div>
    <div class="repo-card_right">
      <!-- <button class="repo-card_right_starIncrement">
        <span>Start</span>
        <i class="fa fa-star"></i>
      </button> -->
    </div>
  </div>
</template>

<script src="./card.ts" lang="ts"></script>

<style src="./repocard.style.css"></style>
