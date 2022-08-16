<template>
  <div class="row items-center">
    <q-btn-dropdown
      v-model="showOptions"
      flat
      class="dropdown-btn rounded-border"
      :ripple="false"
    >
      <template #label>
        <div class="row items-center no-wrap">
          <q-icon
            left
            name="svguse:/app-icons/branch.svg#branch"
            class="branch-icon q-mr-xs"
          />
          <div class="text-center overflow-hidden ellipsis branch">
            {{ branchName }}
          </div>
        </div>
      </template>
      <q-list v-if="showOptions" class="branch-dropdown" separator>
        <q-item class="row justify-between items-center">
          <strong>Switch branches/tags</strong>
          <button
            v-close-popup
            class="bg-transparent no-border cursor-pointer"
            type="button"
          >
            <q-icon class="fa fa-times"></q-icon>
          </button>
        </q-item>
        <q-item class="block">
          <form>
            <AppInput
              v-model="searchRef"
              placeholder="Find a repository..."
              input-class="search-field q-py-xs q-px-sm rounded-borders"
              autofocus
            />
          </form>
        </q-item>
        <q-item
          clickable
          v-for="(branch, i) in sortedBranches"
          :key="i"
          class="row items-center"
          @click="selectBranch(branch.name)"
        >
          <span>
            {{ branch.name }}
          </span>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineProps, computed } from 'vue';

export default defineComponent({
  name: 'BranchMenu',
});
</script>

<script lang="ts" setup>
import { AppInput } from '@/components';
import { defaultBranch, branch } from '@/globals/branch';
const searchRef = ref('');
const branchName = ref(defaultBranch);
const showOptions = ref(false);
type Branches = {
  name: string;
  default: boolean;
};

const props = defineProps({
  branches: {
    type: Array as () => Branches[],
    default: () => [],
  },
});

const selectBranch = (value: string) => {
  branchName.value = value;
  branch(value);
  showOptions.value = false;
};

const sortedBranches = computed(() => {
  const all_branches = props.branches.slice();
  const default_branch = all_branches.find((res) => res.default);
  const other_branches = all_branches.filter((res) => !res.default);
  return [default_branch, ...other_branches];
});
</script>

<style lang="scss" scoped>
@import '@/styles/quasar.variables.scss';
.branch-icon {
  transform: translateY(0.2rem);
  color: $secondary-200;
}

.branch {
  max-width: 5rem;
  text-transform: none;
}

.dropdown-btn {
  color: $secondary;
  border: 1px solid $secondary-100;
}

.branch-dropdown {
  width: 100%;
  min-width: 270px;

  .search-field {
    width: 100%;
    border: 1px solid $secondary-100;
    &:focus {
      border-color: $primary-200;
    }
  }
}
</style>
