import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import System from '@/components/System'
import Role from '@/components/Role'
import Base from '@/components/Base'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/home/:type',
        name: 'user',
        component: User
      }]
    }

  ]
})
