<script lang="ts">
  import { ListUnordered16 } from 'svelte-octicons';
  import MarkdownIt from 'markdown-it';
  import sanitizeHtml from 'sanitize-html';
  import { Buffer } from 'buffer';

  export let readme: string;
  const md = new MarkdownIt();

  function encodeReadmeURI(text: string) {
    const encoded = text;
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    return sanitizeHtml(md.render(decoded), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'details', 'summary']),
      allowedAttributes: {
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
      },
    });
  }
</script>

{#if readme}
  <div id="readme">
    <div class="header">
      <span class="icon">
        <ListUnordered16 />
      </span>
      <span class="filename">README.md</span>
    </div>
    <div class="content">
      <span>
        {@html encodeReadmeURI(readme)}
      </span>
    </div>
  </div>
{/if}

<style lang="scss">
  @use 'src/lib/styles/variables.scss';

  .header {
    position: sticky;
    z-index: 3;
    top: 0;
    background-color: variables.$white;
    font-weight: 600;
    padding: 0.625rem;
    border: 1px solid variables.$gray300;
    border-radius: 0.25rem;

    .icon {
      margin-right: 0.5rem;
    }
  }

  .content {
    padding: 0.625rem;
    border: 1px solid variables.$gray300;
    border-radius: 0.25rem;
    border-top: none;
  }
</style>
