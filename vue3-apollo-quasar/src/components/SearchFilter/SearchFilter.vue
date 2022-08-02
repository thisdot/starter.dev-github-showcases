<template>
  <div class="repo_search_header q-pt-lg">
    <SearchInput />
    <SearchDropdowns dropdownType="type" v-if="!changingFilterType">
      <template v-slot:filtertype>
        <q-item
          clickable
          v-close-popup
          class="row items-center"
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
          class="row items-center"
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
          class="row items-center"
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
    <SearchDropdowns dropdownType="language" v-if="!changingLanguage">
      <template #languages>
        <q-item
          clickable
          @click="updateLanguageRef(defaultLanguage)"
          v-close-popup
          class="row items-center text-capitalize"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': filteredLanguage() !== defaultLanguage }"
          >
            <q-icon
              v-show="filteredLanguage() === defaultLanguage"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ defaultLanguage }}
        </q-item>
        <q-item
          v-for="(language, index) in languages"
          :key="index"
          clickable
          v-close-popup
          @click="updateLanguageRef(language.name)"
          class="row items-center text-capitalize"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': filteredLanguage() !== language.name }"
          >
            <q-icon
              v-show="filteredLanguage() === language.name"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ language.name }}
        </q-item>
      </template>
    </SearchDropdowns>
    <SearchDropdowns dropdownType="sort" v-if="!changingSortBy">
      <template v-slot:sortby>
        <q-item
          clickable
          v-close-popup
          class="row items-center"
          @click="updateSortByRef(SORT_OPTIONS.default)"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': sortBy() !== defaultSortBy }"
          >
            <q-icon
              v-show="sortBy() === defaultSortBy"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ SORT_OPTIONS.default }}
        </q-item>
        <q-item
          clickable
          v-close-popup
          class="row items-center"
          @click="updateSortByRef(SORT_OPTIONS.name)"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': sortBy() !== SORT_OPTIONS.name }"
          >
            <q-icon
              v-show="sortBy() === SORT_OPTIONS.name"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ SORT_OPTIONS.name }}
        </q-item>
        <q-item
          clickable
          v-close-popup
          class="row items-center"
          @click="updateSortByRef(SORT_OPTIONS.stars)"
        >
          <span
            class="text-h6"
            :class="{ 'q-mr-md': sortBy() !== SORT_OPTIONS.stars }"
          >
            <q-icon
              v-show="sortBy() === SORT_OPTIONS.stars"
              name="svguse:app-icons/correct.svg#correct"
            />
          </span>
          {{ SORT_OPTIONS.stars }}
        </q-item>
      </template>
    </SearchDropdowns>
    <div>
      <a href="https://github.com/new" class="flexbox new_repo">
        <q-icon
          class="text-h5 custom-icon"
          name="svguse:app-icons/book.svg#book"
        ></q-icon>
        <span class="new_repo_btn"> {{ repoBtnText }} </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { SearchDropdowns, SearchInput } from '@/components';
import { FILTER_TYPE_OPTIONS, defaultFilterType } from './data';
import { filterType } from '@/globals/filterType';
import { defaultSortBy, SORT_OPTIONS } from './data';
import { sortBy } from '@/globals/sortBy';
import { defaultLanguage } from './data';
import { filteredLanguage } from '@/globals/filteredLanguage';

export default defineComponent({
  name: 'SearchFilter',
  props: {
    repoBtnText: {
      type: String,
      default: 'New',
    },
    languages: {
      type: Array,
      default: () => [],
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
    const changingSortBy = ref(false);

    const updateSortByRef = (value) => {
      changingSortBy.value = true;
      sortBy(value);
      changingSortBy.value = false;
    };
    const changingLanguage = ref(false);
    const updateLanguageRef = (value) => {
      changingLanguage.value = true;

      filteredLanguage(value);
      changingLanguage.value = false;
    };

    return {
      defaultFilterType,
      FILTER_TYPE_OPTIONS,
      changingFilterType,
      updateFilterTypeRef,
      filterType,
      defaultSortBy,
      sortBy,
      SORT_OPTIONS,
      changingSortBy,
      updateSortByRef,
      defaultLanguage,
      updateLanguageRef,
      changingLanguage,
      filteredLanguage,
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
@import '@/styles/quasar.variables.scss';

.q-item {
  min-height: 2.5rem;
  max-height: 2.5rem;
}
.repo_search_header {
  display: flex;
  flex-flow: column;

  @media (min-width: 1024px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 4px;
    }
  }
  .custom-icon {
    transform: translate(0, 0.3rem);
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
