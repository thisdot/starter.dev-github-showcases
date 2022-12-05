<script lang="ts">
  import { Eye16, RepoForked16, Star16 } from 'svelte-octicons';

  export let watchCount = 0,
    starCount = 0,
    forkCount = 0;
</script>

<div class="info">
  <div class="info__counter">
    <div class="info__counter__icon">
      <span class="icon">
        <Eye16 />
      </span>
      Watch
    </div>
    <div class="info__counter__count">
      {watchCount}
    </div>
  </div>
  <div class="info__counter">
    <div class="info__counter__icon">
      <span class="icon">
        <Star16 />
      </span>
      Star
    </div>
    <div class="info__counter__count">
      {starCount}
    </div>
  </div>
  <div class="info__counter">
    <div class="info__counter__icon">
      <span class="icon">
        <RepoForked16 />
      </span>
      Fork
    </div>
    <div class="info__counter__count">
      {forkCount}
    </div>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .info {
    display: flex;
    gap: 0.9rem;
    &__counter {
      display: flex;
      border: 2px solid variables.$gray200;
      border-radius: 0.5rem;
      font-size: 0.9rem;
      &__icon {
        display: flex;
        align-items: center;
        line-height: 0.5rem;
        padding: 0.125rem 0.9rem;
        gap: 0.5rem;
        border-right: 2px solid variables.$gray200;
      }
      &__count {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        background-color: variables.$white;
        padding: 0.125rem 0.9rem;
      }
    }
  }
</style>
