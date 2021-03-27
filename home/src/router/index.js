import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/Home.vue'
import Life from 'views/Life.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/life',
    name: 'Life',
    component: Life
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
