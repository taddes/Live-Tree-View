import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddFactory from '@/components/AddFactory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-factory',
      name: 'AddFactory',
      component: AddFactory
    }
  ]
})
