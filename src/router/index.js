import { createRouter, createWebHistory } from 'vue-router'
import homedashboard from '../views/homedashboard.vue'
import team from '../views/team.vue'
import about from '../views/about.vue'
import todo from '../views/todo.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import reset from '../views/reset.vue'

const routes = [
  {
    path: '/',
    name: 'homedashboard',
    component: homedashboard
  },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },  
  {
    path: '/reset',
    name: 'reset',
    component: reset
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router