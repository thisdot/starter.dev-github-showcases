<template>
  <div class="relative">
    <div tabindex="0" class="github_details" v-if="dropdownType === 'type'">
      <q-btn-dropdown
        label="Type"
        flat
        class="no-shadow repo_star_button search_b"
        tabindex="-2"
      >
        <q-list class="dropdown-x search_dropdown-x" separator>
          <q-item class="close_container">
            <strong>Select type</strong>
            <button
              v-close-popup
              class="SelectMenu-closeButton"
              type="button"
              data-toggle-for="type-options"
            >
              <q-icon class="fa fa-times"></q-icon>
            </button>
          </q-item>
          <slot name="filtertype" />
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
        <q-list class="dropdown-x search_dropdown-x" separator>
          <q-item class="close_container">
            <strong>Select Language</strong>
            <button
              v-close-popup
              class="SelectMenu-closeButton"
              type="button"
              data-toggle-for="type-options"
            >
              <q-icon class="fa fa-times"></q-icon>
            </button>
          </q-item>
          <slot name="languages" />
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
        <q-list class="dropdown-x search_dropdown-x" separator>
          <q-item class="flexbox close_container">
            <strong>Select order</strong>
            <button
              v-close-popup
              class="SelectMenu-closeButton"
              type="button"
              data-toggle-for="type-options"
            >
              <q-icon class="fa fa-times"></q-icon>
            </button>
          </q-item>
          <slot name="sortby" />
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchDropdowns',
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
@import '../../App.css';
@import '@/styles/quasar.variables.scss';

.repo_star_button {
  & .q-btn__content {
    width: 100% !important;
    justify-content: space-between !important;

    @media (min-width: 1024px) {
      /* width: unset; */
      /* justify-content: center !important; */
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
        color: $secondary-300 !important;
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
</style>
