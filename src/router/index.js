import { createRouter, createWebHistory } from 'vue-router'
// import Tasks from '../views/Tasks.vue'
import New from '../views/New.vue'
import Task from '../views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: () => import('../views/Tasks.vue'),
  },
  {
    path: '/new_task',
    name: 'NewTask',
    component: New,
  },
  {
    path: '/task/:taskId',
    name: 'Task',
    props: true,
    component: Task,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes,
})

export default router
