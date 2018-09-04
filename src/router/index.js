import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import operation from '@/components/operation'
import manageOrder from '@/components/market/manageOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/operation',
      name: 'operation',
      component: operation,
      children: [
        {
          path: 'manageOrder',
          name: 'manageOrder',
          component: manageOrder
        }
      ]
    }
  ]
})
