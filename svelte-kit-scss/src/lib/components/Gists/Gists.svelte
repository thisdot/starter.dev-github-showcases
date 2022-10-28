<script lang="ts">
    export let gists = [
        {
            url: "https://gist.github.com/3232acaa90f23a7c673447c0de52618d",
            fileName: "README-Template.md"
        },
        {
            url: "https://gist.github.com/a16441e36ca466e14459bfcaadcc01fc",
            fileName: "bp-xprofile-countries-list.php"
        },
        {
            url: "https://gist.github.com/d5f20d0d9a30eef92edd14833d74aa86",
            fileName: "resume.md"
        }
    ]
</script>

<div class="container">
    <h3>Gists</h3>
    {#if gists.length > 0}
        <ul>
            {#each gists as gist}
                <li>
                    <a class="link" href="{gist.url}" target="_blank" rel="noreferrer">
                        { gist.fileName }
                    </a>
                </li>
            {/each}
        </ul>
    {:else}
        <p>User does not have any gists</p>
    {/if}
</div>

<style lang="scss">
    @use '../../styles/variables.scss';

    .container {
        padding: 2rem 0;
        border-top: 1px solid variables.$gray300;
        border-bottom: 1px solid variables.$gray300;
        ul {
          list-style: none;
          padding: 0;
        }
        h3 {
          font-weight: 600;
        }
        a.link {
          color: variables.$black;
          &:hover {
            color: variables.$blue300;
          }
        }
    }
</style>