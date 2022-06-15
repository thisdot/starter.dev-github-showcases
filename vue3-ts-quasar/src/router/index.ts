import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//* Layouts
import SiteLayout from '@/layouts/SiteLayout.vue';

//* Pages
import { Auth, Home, Profile, Redirect, NotFound } from '../views';
import { PullRequests } from '@/components';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SiteLayout,
    children: [
      { path: '', component: Home },
      { path: 'auth', component: Auth },
      { path: 'redirect', component: Redirect },
      { path: ':username', component: Profile, props: true },
    ],
  },
  {
    path: '/pullrequests',
    component: PullRequests,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
