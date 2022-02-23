<template>
  <div class="relative">
    <div tabindex="0" class="github_details" v-if="dropdownType === 'type'">
      <q-btn-dropdown
        label="Type"
        flat
        class="no-shadow repo_star_button search_b"
        tabindex="-2"
      >
        <q-list class="dropdown-x search_dropdown-x">
          <q-item class="close_container">
            <strong>Select type</strong>
            <button
              v-close-popup
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
                class="allSvgx"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup class="row items-center m-list"
            >All</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Public</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Private</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Sources</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Forks</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Archived</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Mirrors</q-item
          >
        </q-list>
      </q-btn-dropdown>
    </div>
    <div tabindex="0" class="github_details" v-if="dropdownType === 'language'">
      <q-btn-dropdown
        label="Language"
        flat
        class="no-shadow repo_star_button search_b"
        tabindex="-3"
      >
        <q-list class="dropdown-x search_dropdown-x">
          <q-item class="close_container">
            <strong>Select Language</strong>
            <button
              v-close-popup
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
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup class="row items-center m-list"
            >All</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Js</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Vue</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >CSS</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >HTML</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >PHP</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Object-C</q-item
          >
          <q-item clickable v-close-popup class="row items-center">Ruby</q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div tabindex="0" class="github_details" v-if="dropdownType === 'sort'">
      <q-btn-dropdown
        label="Sort"
        flat
        class="no-shadow repo_star_button search_b"
        tabindex="-4"
      >
        <q-list class="dropdown-x search_dropdown-x">
          <q-item class="flexbox close_container">
            <strong>Sort By</strong>
            <button
              v-close-popup
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
              >
                <path
                  fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup class="row items-center m-list"
            >Last Updated</q-item
          >
          <q-item clickable v-close-popup class="row items-center m-list"
            >Stars</q-item
          >
        </q-list>
      </q-btn-dropdown>
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
});
</script>

<style lang="scss">
@import '~/src/App.css';

.repo_star_button {
  & .q-btn__content {
    width: 100% !important;
    justify-content: space-between !important;

    @media (min-width: 1024px) {
      width: unset;
      justify-content: center !important;
    }
  }
}

.github_details {
  margin-top: 10px;
  @media (min-width: 1024px) {
    margin-top: unset;
  }
  & button {
    display: flex;
    width: 100%;
  }
}
.close_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;

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
.search_dropdown-x {
  width: 100%;

  @media (min-width: 1024px) {
    width: 300px;
  }
}

.m-list {
  border-bottom: 1px solid var(--color-border);
}
</style>
