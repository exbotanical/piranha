export default [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: async () => import('@/views/Dashboard.vue'),
  },
  {
    name: 'Todos',
    path: '/todos',
    component: async () => import('@/views/Todos.vue'),
  },
]
