<template>
  <article class="p-4 border-b">
    <h3 class="mb-2">
      <nuxt-link
        to="/"
        tag="a"
        class="text-xl text-blue-600 font-semibold hover:underline mr-3"
      >
        {{ name }}
      </nuxt-link>
      <PrivacyBadge
        :is-private="isPrivate"
        :custom-class="'relative bottom-0.5'"
      />
    </h3>

    <div>
      <p class="text-gray-600 text-sm max-w-prose -mb-1 -mt-1">
        {{ description }}
      </p>
    </div>

    <RepoMeta
      :language="meta.language"
      :updated-at="meta.updatedAt"
      :fork-count="meta.forkCount"
      :stargazer-count="meta.stargazerCount"
      :language-color="meta.languageColor"
    />
  </article>
</template>
<script lang="ts">
import { PropType } from 'vue';
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    isPrivate: {
      type: Boolean,
      required: true,
      default: false,
    },
    meta: {
      type: Object as PropType<{
        language: string;
        languageColor?: string;
        updatedAt: Date | string;
        forkCount: number;
        stargazerCount: number;
      }>,
      required: true,
      default: () => ({
        language: '',
        languageColor: undefined,
        updatedAt: new Date(),
        forkCount: 0,
        stargazerCount: 0,
      }),
    },
  },
};
</script>
