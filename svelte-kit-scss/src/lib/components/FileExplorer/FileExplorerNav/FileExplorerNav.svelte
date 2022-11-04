<script>
  import { GitBranch16 } from 'svelte-octicons';
</script>

<nav class="file-explorer-container">
  <button class="btn">
    <GitBranch16 />
    <span class="btnText">main</span>
    <span class="btnCaret">&#9660;</span>
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

    :hover {
      background-color: variables.$gray200;
      --bg-opacity: 0.5;
    }
  }

  .btnText {
    font-weight: 600;
  }

  .btnCaret {
    font-size: 10px;
    margin-top: 0.125rem;
    margin-left: 0.375rem;
    color: variables.$gray600;
  }
</style>
