import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'login', component: resolve => require(['@/components/login'],resolve)
    },
    {
      path: '/togambling', name: 'userAgreement', component: resolve => require(['@/components/userAgreement'],resolve)
    },
    {
      path: '/gambling', name: 'gambling', component: resolve => require(['@/components/gambling'],resolve),
      children: [
      { path: '/gambling/chongqindubo', name: 'chongqindubo',
        component: resolve => require(['@/components/apps/bocai/chongqindubo'],resolve), meta: { requiresAuth: true }},
      ]
    }
  ]
})
