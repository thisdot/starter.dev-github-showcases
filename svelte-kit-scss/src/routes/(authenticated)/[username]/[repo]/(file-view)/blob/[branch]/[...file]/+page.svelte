<script lang="ts">
  import FileViewer from '$lib/components/FileViewer/FileViewer.svelte';
  import type { PageServerData } from './$types';
  import Prism from 'prismjs';
  import { browser } from '$app/environment';
  import { currentPageId } from '$lib/stores/current-page-id';
  import { PAGE_IDS } from '$lib/constants/page-ids';
  import LayoutPageContentRow from '$lib/components/shared/layouts/LayoutPageContentRow.svelte';

  export let data: PageServerData;
  const { fileContents, prismLanguage, language } = data;
  if (browser) {
    if (language && prismLanguage && !Prism.languages[language]) {
      Prism.languages[language] = prismLanguage;
    }
  }
  currentPageId.set(PAGE_IDS.REPOSITORY.CODE);
</script>

<LayoutPageContentRow marginBottom>
  <FileViewer {fileContents} />
</LayoutPageContentRow>
