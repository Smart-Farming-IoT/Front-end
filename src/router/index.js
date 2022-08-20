import { createRouter, createWebHistory } from 'vue-router'
import homedashboard from '../views/homedashboard.vue'
import team from '../views/team.vue'
import about from '../views/about.vue'
import todo from '../views/todo.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import reset from '../views/reset.vue'
import profile from '../views/profile.vue'
import editprofile from '../views/editprofile.vue'

import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'homedashboard',
    component: homedashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/team',
    name: 'team',
    component: team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo,
    meta: {
      requiresAuth: true
    }
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
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },  
  {
    path: '/editprofile',
    name: 'editprofile',
    component: editprofile
  }, 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('1', to.path, from.path, auth.currentUser);
  if (to.path === '/login' && auth.currentUser) {
    next('/');
    return;
  }

  console.log('2', to.path, from.path, auth.currentUser);
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login');
    return;
  }

  console.log('3', to.path, from.path, auth.currentUser);
  next();
})

export default router