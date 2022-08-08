import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//* Layouts
import SiteLayout from '@/layouts/SiteLayout.vue';

//* Pages
import {
  Auth,
  Home,
  Profile,
  RepositoryDetails,
  Redirect,
  NotFound,
} from '../views';
import { requiresAuth, requiresNoAuth } from './utils';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SiteLayout,
    children: [
      { path: '', component: Home },
      {
        path: ':username',
        component: Profile,
        props: true,
      },
      {
        path: ':owner/:repo/',
        component: RepositoryDetails,
        props: true,
      },
    ],
    beforeEnter: requiresAuth,
  },
  { path: '/auth', component: Auth, beforeEnter: requiresNoAuth },
  { path: '/redirect', component: Redirect, beforeEnter: requiresNoAuth },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
