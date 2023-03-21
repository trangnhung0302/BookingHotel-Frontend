import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Profile from './pages/Profile.vue';
import Booking from './pages/Booking.vue';
import Service from './pages/Service.vue';
import History from './pages/History.vue';
import UserLayout from './layout/UserLayout.vue';
import AdminLayout from './layout/AdminLayout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: UserLayout,
      children: [
        { path: '/', meta: { title: 'LTWEB8', hideForAuth: true }, name: 'landing', component: Index },
        { path: '/login', meta: { title: 'Login', hideForAuth: true }, name: 'login', component: Login },
        { path: '/register', meta: { title: 'Register', hideForAuth: true }, name: 'register', component: Register },
        { path: '/profile', meta: { title: 'Profile', hideForAuth: true }, name: 'profile', component: Profile },
        { path: '/booking', meta: { title: 'Booking', hideForAuth: true }, name: 'booking', component: Booking },
        { path: '/service', meta: {title: 'Service', hideForAuth: true }, name: 'service', component: Service },
        { path: '/history', meta: {title: 'History', hideForAuth: true }, name: 'history', component: History },
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        // { path: '/', meta: { title: 'login', hideForAuth: true }, name: 'admin', component: AdminLogin },
        // { path: '/login', meta: { title: 'login', hideForAuth: true }, name: 'admin login', component: AdminLogin },
      ]
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

const DEFAULT_TITLE = 'Booking Hotel';

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});

export default router;
