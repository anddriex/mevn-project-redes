import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import LightBulbsMotion from '../components/LightBulbsMotion'
import NewLightBulb from '../components/NewLightBulb'
import EditLightBulb from '../components/EditLightBulb'
import Doors from '../components/Doors'
import NewDoor from '../components/NewDoor'
import EditDoor from '../components/EditDoor'

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
    },
    {
      path: '/rooms/doors/',
      name: 'Doors',
      component: Doors
    },
    {
      path: '/rooms/door/create',
      name: 'NewDoor',
      component: NewDoor
    },
    {
      path: '/rooms/door/:id',
      name: 'EditDoor',
      component: EditDoor
    }
  ]
})
