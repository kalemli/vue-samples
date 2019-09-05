import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('./views/Tables.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('./views/Calculator.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
