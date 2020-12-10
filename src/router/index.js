import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
