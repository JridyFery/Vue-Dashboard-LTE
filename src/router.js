import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Admin Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/AdminProfile'),
        },
        // Tables
        {
          name: 'Players',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/Players'),
        },
        {
          name: 'Pokemons',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/Pokemons'),
        },
      ],
    },
  ],
})
