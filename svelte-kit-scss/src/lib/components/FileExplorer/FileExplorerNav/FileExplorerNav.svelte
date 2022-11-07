<script>
  import { ChevronDown12, ChevronDown16, GitBranch16 } from 'svelte-octicons';
</script>

<nav class="file-explorer-container">
  <button class="btn">
    <GitBranch16 />
    <span class="btn-text">main</span>
    <ChevronDown16 />
  </button>
</nav>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .file-explorer-container {
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .btn {
    display: inline-flex;
    gap: 0.5rem;
    position: relative;
    padding: 0.45rem 1rem;
    background-color: variables.$gray50;
    color: variables.$gray700;
    align-items: center;
    border-radius: 0.375rem;
    border: solid 1px variables.$gray300;

    &:hover {
      background-color: variables.$gray200;
    }
  }

  .btn-text {
    font-weight: 600;
  }
</style>
