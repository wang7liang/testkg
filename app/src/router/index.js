import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import HomePage from '@/components/HomePage'
import UserList from '@/components/UserList'
import OtherList from '@/components/OtherList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/main',
      name: 'home-page',
      component: HomePage,
      children: [
        {
          path: '',
          component: UserList
        },
        {
          path: 'users',
          component: UserList
        },
        {
          path: 'others',
          component: OtherList
        }
      ]
    }
  ]
})
