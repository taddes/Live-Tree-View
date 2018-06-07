import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddFactory from '@/components/AddFactory'
import EditFactory from '@/components/EditFactory'

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
    },
    {
      path: '/edit-factory/:factory_slug',
      name: 'EditFactory',
      component: EditFactory
    }
  ]
})
