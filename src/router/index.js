import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutUser from '../shared/Users/Layout.vue'
import LayoutAdmin from '../shared/Admin/Layout.vue'
import Login from '../pages/Login/Index.vue'
import Register from '../pages/Register/Index.vue'
import Home from '../pages/Home/Index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      component: LayoutUser,
      children: [
        { path: '/', meta: { title: 'Home Page', hideForAuth: true }, name: 'home', component: Home },
        { path: '/login', meta: { title: 'Login', hideForAuth: true }, name: 'login', component: Login },
        { path: '/register', meta: { title: 'Register', hideForAuth: true }, name: 'register', component: Register }
      ]
    },

    {
      path: '/admin',
      component: LayoutAdmin,
      children: []
    }
  ]
})

const DEFAULT_TITLE = 'XXXXXXXXXX'

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
    document.body.scrollTop = document.documentElement.scrollTop = 0
  })
})

export default router
