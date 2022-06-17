<template>
  <div class="flex mt-4 text-xs text-gray-600 space-x-4">
    <div v-if="language">
      <span
        class="w-3 h-3 inline-block rounded-full mr-1 relative top-0.5"
        :style="{ backgroundColor: languageColor || '#ccc' }"
      >
      </span>
      {{ language }}
    </div>

    <div v-if="stargazerCount || forkCount" class="space-x-4">
      <span
        v-if="stargazerCount"
        class="hover:cursor-pointer hover:text-blue-600"
      >
        <StarIcon custom-class="w-4 h-4 inline mb-0.5" /> {{ stargazerCount }}
      </span>

      <span v-if="forkCount" class="hover:cursor-pointer hover:text-blue-600">
        <GitBranchIcon custom-class="w-4 h-4 inline mb-0.5" /> {{ forkCount }}
      </span>
    </div>

    <!-- <div>
        Updated{' '}
        {formatDistance(new Date(updatedAt), Date.now(), {
          addSuffix: true,
        })}
      </div> -->
  </div>
</template>
<script lang="ts">
export default {
  props: {
    language: {
      type: String,
      required: false,
      default: null,
    },
    languageColor: {
      type: String,
      required: false,
      default: null,
    },
    stargazerCount: {
      type: Number,
      required: true,
      default: 0,
    },
    forkCount: {
      type: Number,
      required: true,
      default: 0,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: new Date(),
    },
  },
}
</script>
