<script lang="ts">
  import ButtonText from '$lib/components/shared/buttons/ButtonText.svelte';
  import { ChevronDown16 } from 'svelte-octicons';
  export let text: string;
</script>

<ButtonText {text}>
  <ChevronDown16 slot="right" />
</ButtonText>
