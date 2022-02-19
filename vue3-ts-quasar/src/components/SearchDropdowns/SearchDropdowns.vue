<template>
  <div class="relative">
    <div tabindex="0" class="github_details" v-if="dropdownType === 'type'">
      <details tabindex="-2">
        <summary class="flexbox repo_star_button search_by">
          <span>Type</span>
          <span class="drop_own_caret_dack"></span>
        </summary>
        <div class="dropdown search_dropdown">
          <div class="close_container">
            <strong>Select type</strong>
            <button
              @click="closeAll()"
              class="SelectMenu-closeButton"
              type="button"
              data-toggle-for="type-options"
            >
              <svg
                aria-label="Close menu"
                aria-hidden="false"
                role="img"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
                height="16"
                width="16"
                class="allSvg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </div>
          <p>All</p>
          <p>Public</p>
          <p>Private</p>
          <p>Sources</p>
          <p>Forks</p>
          <p>Archived</p>
          <p>Mirrors</p>
        </div>
      </details>
    </div>
    <div tabindex="0" class="github_details" v-if="dropdownType === 'language'">
      <details tabindex="-3">
        <summary class="flexbox repo_star_button search_by">
          <span>Language</span>
          <span class="drop_own_caret_dack"></span>
        </summary>
        <div class="dropdown search_dropdown">
          <div class="close_container">
            <strong>Select type</strong>
            <button
              @click="closeAll()"
              class="SelectMenu-closeButton"
              type="button"
              data-toggle-for="type-options"
            >
              <svg
                aria-label="Close menu"
                aria-hidden="false"
                role="img"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
                height="16"
                width="16"
                class="allSvg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </div>
          <p>All</p>
          <p>Js</p>
          <p>Vue</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>PHP</p>
          <p>Object-C</p>
          <p>Ruby</p>
        </div>
      </details>
    </div>
    <div tabindex="0" class="github_details" v-if="dropdownType === 'sort'">
      <details tabindex="-4">
        <summary class="repo_star_button search_by">
          <span>Sort</span>
          <span class="drop_own_caret_dack"></span>
        </summary>
        <div class="dropdown search_dropdown">
          <div class="flexbox close_container">
            <strong>Select type</strong>
            <button
              @click="closeAll()"
              class="SelectMenu-closeButton"
              type="button"
              data-toggle-for="type-options"
            >
              <svg
                aria-label="Close menu"
                aria-hidden="false"
                role="img"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
                height="16"
                width="16"
                class="allSvg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </div>
          <p>Last Updated</p>
          <p>Stars</p>
        </div>
      </details>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchDropdown',
  props: {
    dropdownType: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup() {
    function closeAll(value = null) {
      let Details = document.querySelectorAll('details');
      Details.forEach((detail) => {
        if (value !== detail) {
          detail.open = false;
        }
      });
    }

    return { closeAll };
  },
});
</script>

<style lang="scss">
@import '~/src/App.css';

.close_container {
  display: flex;
  justify-content: space-between;
  padding: 2px 10px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #fff !important;
      svg {
        color: var(--color-border) !important;
      }
    }
  }
}
.search_by {
  display: flex;
  justify-content: space-between;
}
</style>
