import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/Home.vue'
import Life from 'views/Life.vue'
import Mood from 'views/Mood.vue'
import Blog from 'views/Blog.vue'

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
  {
    path: '/mood',
    name: 'Mood',
    component: Mood
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
