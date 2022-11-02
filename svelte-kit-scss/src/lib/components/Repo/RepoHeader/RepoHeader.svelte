<script lang="ts">
  // const repo:
</script>

<div class="wrapper">
  <!-- {#if repo } -->
  <div class="top">
    <!-- TODO Heading -->
    <!-- TODO Repo Info -->
  </div>
  <!-- TODO Repo Navigation -->
  <!-- {/if}  -->
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .wrapper {
    padding: 1.5rem 3rem 0;
    background-color: variables.$gray100;
    border-bottom: 1px solid variables.$gray300;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
  }
</style>
