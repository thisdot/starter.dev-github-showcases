<template>
  <Loading>
    <h1 class="text-h5 text-weight-bold text-dark">
      Redirecting you shortly. Please wait...
    </h1>
  </Loading>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RedirectPage',
});
</script>

<script lang="ts" setup>
import { watchEffect } from 'vue';
import { Loading } from '@/components';
import { useAuth, useNav } from '@/composables';

const { getToken } = useAuth();
const { goToExternal } = useNav();

const redirectToHome = async () => {
  await getToken();

  goToExternal('/', 500);
};

watchEffect(() => {
  redirectToHome();
});
</script>
