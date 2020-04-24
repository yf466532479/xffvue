import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
Vue.use(Router)

// const Home = () => import(/* webpackChunkName: "home" */ '@pages/home/Home')
// const Home = r => require.ensure([], () => r(require('@pages/home/Home')), 'home')
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
