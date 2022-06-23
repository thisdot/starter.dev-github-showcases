<template>
  <article class="p-4 border-b">
    <h3 class="mb-2 flex items-center">
      <nuxt-link to="/">
        <p class="text-xl text-blue-600 font-semibold hover:underline mr-3">
          {{ name }}
        </p>
      </nuxt-link>
      <PrivacyBadge :is-private="false" :custom-class="'relative bottom-0.5'" />
    </h3>

    <div>
      <p class="text-gray-600 text-sm max-w-prose -mb-1 -mt-1">
        {{ description }}
      </p>
    </div>

    <RepoMeta
      language="typeScript"
      :updated-at="new Date()"
      :fork-count="2"
      :stargazer-count="4"
    />
  </article>
</template>
<script lang="ts">
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
  },
}
</script>
