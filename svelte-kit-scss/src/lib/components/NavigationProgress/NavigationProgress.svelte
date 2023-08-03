<script lang="ts">
  import { navigating } from '$app/stores';
  import { navigationProgress, setNavigation } from '$lib/stores/navigation-progress';
  navigating.subscribe((navigation) => {
    setNavigation(navigation);
  });
  $: width = $navigationProgress * 100;
  $: done = $navigationProgress === 1;
</script>

<div class="navigation-progress">
  <div class="progress" style="width: {width}%;" class:done />
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .navigation-progress {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .progress {
      height: 4px;
      background: variables.$blue300;
      transition: width 300ms;
      &.done {
        display: none;
      }
    }
  }
</style>
