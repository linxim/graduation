import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/page/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/login',
      component:resolve=>require(['../components/page/login/Login.vue'],resolve)
    },
    {
      path:'/register',
      component:resolve=>require(['../components/page/login/Register.vue'],resolve)
    },
    {
      path:'/cart',
      component:resolve=>require(['../components/b_system/cart.vue'],resolve)
    },
    {
      path:'/con_buy',
      component:resolve=>require(['../components/b_system/contrast/con_buy.vue'],resolve)
    },
    {
      path:'/fresh',
      component:resolve=>require(['../components/b_system/fresh/fresh.vue'],resolve)
    },
    {
      path:'/nav_cart',
      component:resolve=>require(['../components/page/nav_cart/nav_cart.vue'],resolve)
    }
  ]
})
