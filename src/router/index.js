import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 一级路由
import Register from '@/components/fun/Register'
import Login from '@/components/fun/Login'
import Main from '@/components/fun/Main'



// 二级路由
import A1 from '@/components/fun/aaa/A1'
import A2 from '@/components/fun/aaa/A2'
import A3 from '@/components/fun/aaa/A3'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/login',
      component: Login
    },{
      path:'/main',
      component:Main,
      children: [
        {
          path: 'a1',
          component: A1
        },
        {
          path: 'a2',
          component: A2
        },
        {
          path: 'a3',
          component: A3
        }
      ]
    }
  ]
})
