<template>
  <div class="w-full border rounded-lg relative bg-white">
    <RepositoryCard
      name="name-of-the-repo"
      :is-private="false"
      description="this is a description"
      :meta="{
        language: 'typescript',
        updatedAt: new Date(),
        forkCount: 2,
        stargazerCount: 4,
      }"
    />
  </div>
</template>

<script lang="ts">
export default {};
</script>
