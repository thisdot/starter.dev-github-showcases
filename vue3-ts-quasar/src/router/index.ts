import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//* Layouts
import SiteLayout from '@/layouts/SiteLayout.vue';

//* Pages
import { Auth, Home, Redirect } from '../views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SiteLayout,
    children: [
      { path: '', component: Home },
      { path: 'auth', component: Auth },
      { path: 'redirect', component: Redirect },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
