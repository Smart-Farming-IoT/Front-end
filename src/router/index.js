import { createRouter, createWebHistory } from 'vue-router'
import homedashboard from '../views/homedashboard.vue'
// import Sidebar from '../views/Sidebar.vue'
import team from '../views/team.vue'
import about from '../views/about.vue'
const routes = [
  {
    path: '/',
    name: 'homedashboard',
    component: homedashboard
  },
  // {
  //   path: '/',
  //   name: 'sidebar',
  //   component: Sidebar
  // },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router