import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Card_FRIENDS from '../views/FRIENDS-intro-card.vue'
import Card_MY from '../views/MY-intro-card.vue'
import Edit from '../views/Edit-page.vue'


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
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/friends-card',
    name: 'friends-card',
    component:Card_FRIENDS
  },
  {
    path: '/my-card',
    name: 'my-card',
    component: Card_MY
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
