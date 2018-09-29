import Vue from 'vue';
import Router from 'vue-router';
import cookie from './assets/js/cookie';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/', name: 'index', component: r => require.ensure([], () => r(require('./App')), 'index'),redirect: '/login'
    },
    {
      path: '/login', name: 'login', component: r => require.ensure([], () => r(require('@/components/login')), 'login')
    },
    {
      path: '/togambling', 
      name: 'userAgreement',
      meta: {
            requireAuth: true,   
        },
      component: r => require.ensure([], () => r(require('@/components/userAgreement')), 'userAgreement')
    },
    {
      path: '/gambling', name: 'gambling', component: r => require.ensure([], () => r(require('@/components/gambling')), 'gambling'),
      children: [
        { path: '/gambling/chongqindubo', name: 'chongqindubo',
          meta: {                                
              requireAuth: true,
          },
          component: r => require.ensure([], () => r(require('@/components/apps/bocai/chongqindubo')), 'chongqindubo'), meta: { requiresAuth: true }
        },
        { path: '/gambling/luckyairship', name: 'luckyairship',
          meta: {
              requireAuth: true,
          },
          component: r => require.ensure([], () => r(require('@/components/apps/bocai/luckyairship')), 'luckyairship'), meta: { requiresAuth: true }
        },
        { path: '/gambling/shandong11xuan5', name: 'shandong11xuan5',
          meta: {
              requireAuth: true,
          },
          component: r => require.ensure([], () => r(require('@/components/apps/bocai/shandong11xuan5')), 'shandong11xuan5'), meta: { requiresAuth: true }
        }
      ]
    }
  ]
});


router.beforeEach((to, from, next) => {

  let token = cookie.getCookie('accesstoken');

    if (to.matched.some(r => r.meta.requireAuth)) {
      NProgress.start();
        if (token) {
            next();
        }
        else {
            next({
                path: '/login'
            })
            NProgress.done();
        }
    }
    else {
        NProgress.start();  
        next();
    }
});

router.afterEach(transition => {
  NProgress.done()
})

export default router;