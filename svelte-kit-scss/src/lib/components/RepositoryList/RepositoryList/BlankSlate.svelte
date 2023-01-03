<script lang="ts">
  export let heading: string;
</script>

<div class="blank-slate">
  <h2 class="heading">
    {heading}
  </h2>
</div>

<style lang="scss">
  .blank-slate {
    padding: 2em;
    .heading {
      text-align: center;
      font-size: 1.5em;
      font-weight: 600;
    }
  }
</style>
