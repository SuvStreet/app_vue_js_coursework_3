import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: () => import('../views/Tasks.vue'),
  },
  {
    path: '/new_task',
    name: 'NewTask',
    component: () => import('../views/New.vue'),
  },
  {
    path: '/task/:taskId',
    name: 'Task',
    props: true,
    component: () => import('../views/Task.vue'),
  },
  {
    path: '/:notFound(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
})

export default router
