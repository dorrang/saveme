import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import getStarted from '../views/get-started.vue'
import events from '../views/events.vue'
import account from '../views/my-account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/get-started',
    name: 'Get Started',
    component: getStarted
  },
  {
    path: '/events',
    name: 'Events',
    component: events
  },
  {
    path: '/account',
    name: 'Account',
    component: account
  }
]

const router = new VueRouter({
  routes
})

export default router
