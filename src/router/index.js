import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Dashboard from '@/components/Dashboard'
// import Chart from '@/components/Chart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      props: true
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      props: true
    }
    // {
    //   path: '/chart',
    //   name: 'Chart',
    //   component: Chart
    // }
  ]
})
