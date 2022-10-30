export default [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: async () => import('@/views/Dashboard.vue'),
    meta: {
      label: 'Dashboard',
      iconId: 'house',
    },
  },
  {
    name: 'Board',
    path: '/board',
    component: async () => import('@/views/Board.vue'),
    meta: {
      label: 'Board',
      iconId: 'kanban',
    },
  },
  {
    name: 'Todos',
    path: '/todos',
    component: async () => import('@/views/Todos.vue'),
    meta: {
      label: 'Todos',
      iconId: 'checkbox-marked-outline',
    },
  },
]
