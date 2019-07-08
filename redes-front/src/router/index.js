import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import LightBulbsMotion from '../components/LightBulbsMotion'
import NewLightBulb from '../components/NewLightBulb'
import EditLightBulb from '../components/EditLightBulb'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rooms/light_bulbs/',
      name: 'LightBulbs',
      component: LightBulbsMotion
    },
    {
      path: '/rooms/light_bulb/create',
      name: 'NewLightBulb',
      component: NewLightBulb
    },
    {
      path: '/rooms/light_bulb/:id',
      name: 'EditLightBulb',
      component: EditLightBulb
    }
  ]
})
