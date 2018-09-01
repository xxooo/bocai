import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'login', component: resolve => require(['@/components/login'],resolve)
    },
    {
      path: '/toindex', name: 'userAgreement', component: resolve => require(['@/components/userAgreement'],resolve)
    },
    {
      path: '/index', name: 'index', component: resolve => require(['@/components/index'],resolve)
    }
  ]
})
