import baseRoutes from './base'

import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
  }
}

export default [
  {
    path: '/',
    name: 'ContentContainer',
    component: async () => import('@/views/ContentContainer.vue'),
    meta: {
      authRequired: true,
    },
    children: baseRoutes,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: async () => import('@/views/Fallback.vue'),
    meta: {
      authRequired: true,
    },
  },
] as RouteRecordRaw[]
