<template>
  <div class="repo_search_header">
    <SearchInput />
    <SearchDropdowns dropdownType="type" v-if="!changingFilterType">
      <template v-slot:filtertype>
        <q-item
          clickable
          v-close-popup
          class="row items-center m-list"
          @click="updateFilterTypeRef(FILTER_TYPE_OPTIONS.default)"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': filterType() !== defaultFilterType }"
          >
            <q-icon
              v-show="filterType() === defaultFilterType"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ defaultFilterType }}</q-item
        >
        <q-item
          clickable
          v-close-popup
          class="row items-center m-list"
          @click="updateFilterTypeRef(FILTER_TYPE_OPTIONS.forks)"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': filterType() !== FILTER_TYPE_OPTIONS.forks }"
          >
            <q-icon
              v-show="filterType() === FILTER_TYPE_OPTIONS.forks"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ FILTER_TYPE_OPTIONS.forks }}</q-item
        >
        <q-item
          clickable
          v-close-popup
          class="row items-center m-list"
          @click="updateFilterTypeRef(FILTER_TYPE_OPTIONS.archived)"
        >
          <span
            class="text-h6"
            :class="{
              'q-mr-md': filterType() !== FILTER_TYPE_OPTIONS.archived,
            }"
          >
            <q-icon
              v-show="filterType() === FILTER_TYPE_OPTIONS.archived"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ FILTER_TYPE_OPTIONS.archived }}</q-item
        >
      </template>
    </SearchDropdowns>
    <SearchDropdowns dropdownType="language" />
    <SearchDropdowns dropdownType="sort" />
    <div>
      <a href="https://github.com/new" class="flexbox new_repo">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          height="16"
          width="16"
          class="allSvg"
        >
          <path
            fill-rule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        <span class="new_repo_btn"> {{ repoBtnText }} </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { SearchDropdowns, SearchInput } from '@/components';
import { FILTER_TYPE_OPTIONS, defaultFilterType } from './data';
import { filterType } from '@/globals/filtertype';

export default defineComponent({
  name: 'SearchFilter',
  props: {
    repoBtnText: {
      type: String,
      default: 'New',
    },
  },
  components: {
    SearchInput,
    SearchDropdowns,
  },
  setup() {
    const changingFilterType = ref(false);

    const updateFilterTypeRef = (value) => {
      changingFilterType.value = true;
      filterType(value);
      changingFilterType.value = false;
    };

    return {
      defaultFilterType,
      FILTER_TYPE_OPTIONS,
      changingFilterType,
      updateFilterTypeRef,
      filterType,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../App.css';

.q-item {
  min-height: 2.5rem;
  max-height: 2.5rem;
}
.repo_search_header {
  display: flex;
  flex-flow: column;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);

  @media (min-width: 1024px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 4px;
    }
  }

  .new_repo {
    background-color: #2ea44f;
    color: #fff;
    display: flex;
    position: relative;
    padding: 7px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #fff;
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
      width: unset;
      justify-content: space-between;
    }
    margin-left: unset;
    text-decoration: none;

    margin-top: 10px;

    @media (min-width: 1024px) {
      margin-top: unset;
    }

    .new_repo_btn {
      padding-left: 5px;
    }

    svg {
      fill: #fff;
    }

    @media (min-width: 1024px) {
      margin-left: 10px;
    }
  }
}
</style>
