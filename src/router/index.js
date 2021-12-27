import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import New from '../views/New.vue'

const routes = [
  {
    path: '/',
    name: 'taskList',
    component: Tasks
  },
  {
    path: '/new_task',
    name: 'newTask',
    component: New
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
