<script lang="ts">
  import type { PageServerData } from './$types';
  import { ProfileType } from '$lib/interfaces';
  import ProfileAboutSection from '$lib/components/Profile/ProfileAboutSection/ProfileAboutSection.svelte';
  import ProfileNavSection from '$lib/components/Profile/ProfileNavSection/ProfileNavSection.svelte';
  import RepoControls from '$lib/components/shared/RepoControls/RepoControls.svelte';
  import OrgInfo from '$lib/components/Profile/OrgInfo/OrgInfo.svelte';
  import type { RepoFiltersState } from '$lib/components/shared/RepoControls/repo-filters-state';
  import type { FilterDropdownOption } from '$lib/components/shared/FilterDropdown/filter-option';
  import { debounce, filterReposUtil } from '$lib/helpers';
  import { LanguageFilters, RepositorySortFilters, TypeFilters } from '$lib/enums';
  import AllRepositoriesList from '$lib/components/RepositoryList/AllRepositoriesList/AllRepositoriesList.svelte';
  import type { RepositoryCardViewModel } from '$lib/components/RepositoryList/view-models';

  export let data: PageServerData;

  $: ({ profile, organizations, allRepositoriesListViewModel, repoLanguageList } = data);

  const DEBOUNCE_TIME = 2000;

  let hasActiveFilters = false;

  $: repositories = allRepositoriesListViewModel.repositories;

  //todo: refactor filtering. Navigation-based filtering
  let filteredRepos: RepositoryCardViewModel[] | undefined;

  // todo: refactor
  $: repositoriesToShow = filteredRepos || repositories;

  const filterRepos = (event: CustomEvent<RepoFiltersState>): void => {
    const { searchInput, type, language, sort } = event.detail;
    if (hasActiveFilters) {
      filteredRepos = filterReposUtil(
        repositories,
        searchInput,
        type?.value,
        language?.value,
        sort?.value
      );
    } else {
      filteredRepos = undefined;
    }
  };

  const debouncedFilterRepos = debounce<CustomEvent<RepoFiltersState>>(filterRepos, DEBOUNCE_TIME);

  let lastSearchTerm = '';

  const handleFiltersChange = (event: CustomEvent<RepoFiltersState>): void => {
    const { searchInput, type, language, sort } = event.detail || {};

    hasActiveFilters =
      type?.value !== TypeFilters.ALL ||
      language?.value !== LanguageFilters.ALL ||
      sort?.value !== RepositorySortFilters.UPDATED ||
      !!searchInput;

    if (event.detail.searchInput === lastSearchTerm) {
      filterRepos(event);
    } else {
      debouncedFilterRepos(event);
    }
    lastSearchTerm = event?.detail?.searchInput ?? '';
  };

  const typeFilters: FilterDropdownOption<TypeFilters>[] = [
    {
      label: 'All',
      value: TypeFilters.ALL,
    },
    {
      label: 'Forked',
      value: TypeFilters.FORKED,
    },
    {
      label: 'Archived',
      value: TypeFilters.ARCHIVED,
    },
  ];

  // todo: fix
  $: languageFilters = (
    [
      {
        label: 'All',
        value: LanguageFilters.ALL,
      },
    ] as FilterDropdownOption<string>[]
  ).concat(repoLanguageList);

  const sortFilters: FilterDropdownOption<RepositorySortFilters>[] = [
    {
      label: 'Last Updated',
      value: RepositorySortFilters.UPDATED,
    },
    {
      label: 'Name',
      value: RepositorySortFilters.NAME,
    },
    {
      label: 'Stars',
      value: RepositorySortFilters.STARS,
    },
  ];

  $: reposCount = filteredRepos?.length;

  const isOrg = profile?.type == ProfileType.Organization;
</script>

<div class="profile-container">
  <div class="profile-header">
    <div class="grid grid-cols-12 container">
      {#if isOrg}
        <OrgInfo />
        <nav class="col-span-12">
          <ProfileNavSection />
        </nav>
      {:else}
        <div class="col-span-3" />
        <nav class="col-span-9">
          <ProfileNavSection />
        </nav>
      {/if}
    </div>
  </div>

  <div class="grid grid-cols-12 profile-body container">
    {#if isOrg}
      <div class="col-span-12">
        <RepoControls
          {reposCount}
          {typeFilters}
          {languageFilters}
          {sortFilters}
          on:filtersChange={handleFiltersChange}
        />
        <!-- todo: refactor   -->
        <AllRepositoriesList model={{ repositories: repositoriesToShow }} />
      </div>
    {:else}
      <div class="subpage col-span-3">
        {#if profile}
          <ProfileAboutSection {profile} {organizations} />
        {/if}
      </div>
      <div class="col-span-9">
        <RepoControls
          {reposCount}
          {typeFilters}
          {languageFilters}
          {sortFilters}
          on:filtersChange={handleFiltersChange}
        />
        <!-- todo: refactor   -->
        <AllRepositoriesList model={{ repositories: repositoriesToShow }} />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .profile-container {
    padding-top: 2rem;
  }

  .profile-header {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: white;
    border-bottom: 1px solid #fcba03;
  }

  .profile-body {
    grid-template-rows: max-content 1fr;
    padding-top: 2rem;

    .subpage {
      grid-row: 1 / 3;
    }
  }

  .container {
    max-width: variables.$xl;
  }
</style>
