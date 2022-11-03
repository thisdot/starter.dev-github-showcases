<script lang="ts">
  import { Repo24 } from 'svelte-octicons';
</script>

<ul>
  <li class="active-tab">
    <a href="/">
      <Repo24 class="icon" />
      <span>Repositories</span>
    </a>
  </li>
</ul>

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      display: inline-block;
      text-decoration: none;
      line-height: 24px;
      padding: 16px;
      color: rgb(75, 85, 99);
    }

    span {
      vertical-align: middle;
    }

    li {
      display: inline-block;
    }

    .active-tab {
      border-bottom: 2px solid;
      border-color: rgba(245, 158, 11, 1);

      span {
        font-weight: 600;
        color: black;

        &.icon {
          color: rgb(75, 85, 99);
        }
      }

      &:hover,
      &:focus {
        border-color: rgb(209, 213, 219);
      }
    }
  }

  .icon {
    display: inline-block;
    margin-right: 4px;
  }
</style>
