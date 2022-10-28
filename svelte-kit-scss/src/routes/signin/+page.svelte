<script lang="ts">
  import { PUBLIC_CLIENT_REDIRECT_URL, PUBLIC_API_URL } from '$env/static/public'

  const onClick = () => {
    window.location.href = signInUrl();
  };

  const signInUrl = () => {
    const redirectUrl = getRedirectUrl();
    return `${PUBLIC_API_URL}/api/auth/signin?redirect_url=${redirectUrl}`;
  }

  /**
   * Determines the host of the page, and uses that to create a redirect url
   */
  const getRedirectUrl = () =>  {
    const prPreviewRegex = /pr-(?:\d+)+.(?:[a-z0-9]+)+.amplifyapp.com/;
    const currentUrlHost = window.location.href;
    const prMatch = prPreviewRegex.test(currentUrlHost);
    let redirectUrl: string;
    if (prMatch) {
      redirectUrl = `https://${currentUrlHost}/redirect`;
    } else {
      redirectUrl = PUBLIC_CLIENT_REDIRECT_URL;
    }
    return redirectUrl;
  }
</script>

<div class="page">
  <div class="form">
    <button type="submit" class="button" on:click={onClick}>Sign in with GitHub</button>
  </div>
</div>

<style lang="scss">
  @use 'src/lib/styles/variables';

  .page {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: variables.$black;
    color: variables.$gray500;
  }

  .form {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .button {
    width: 34%;
    padding: 1rem;
    border: 1px solid variables.$gray500;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 100%;
    background: variables.$black;
    color: variables.$gray500;
    cursor: pointer;

    &:hover {
      background: variables.$gray500;
      color: variables.$black;
    }
  }
</style>
