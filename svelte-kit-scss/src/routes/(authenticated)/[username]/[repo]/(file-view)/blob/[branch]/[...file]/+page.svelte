<script lang="ts">
  import FileViewer from '$lib/components/FileViewer/FileViewer.svelte';
  import type { PageServerData } from './$types';
  import Prism from 'prismjs';
  import { browser } from '$app/environment';

  export let data: PageServerData;
  const { fileContents, prismLanguage, language } = data;
  if (browser) {
    if (language && prismLanguage && !Prism.languages[language]) {
      Prism.languages[language] = prismLanguage;
    }
  }
</script>

<div class="file-view-page">
  <FileViewer {fileContents} />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';
  .file-view-page {
    padding: 2rem 1rem;
  }
</style>
