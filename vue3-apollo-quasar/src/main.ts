import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';

// Store - Global state management
import { createPinia } from 'pinia';

// Quasar
import { Quasar, useQuasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

//
import { setupGraphQL } from './init';

const pinia = createPinia();

//* GraphQL setup

createApp({
  setup() {
    setupGraphQL();
    const $q = useQuasar();

    const iconPath = '@/assets/';
    const myIcons: { [key: string]: string } = {
      'app:bookicon': 'book.svg',
    };

    $q.iconMapFn = (iconName) => {
      const icon = myIcons[iconName];
      if (icon !== void 0) {
        return { icon: iconPath + icon };
      }
      return void 0;
    };
  },
  render: () => h(App),
})
  .use(Quasar, quasarUserOptions)
  .use(pinia)
  .use(router)
  .mount('#app');
