import Vue from 'vue';
import Router from 'vue-router';
import cookie from './assets/js/cookie';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/', name: 'index', component: resolve => require(['./App'],resolve),redirect: '/login'
    },
    {
      path: '/login', name: 'login', component: resolve => require(['@/components/login'],resolve)
    },
    {
      path: '/togambling', 
      name: 'userAgreement',
      meta: {
            requireAuth: true,
        },
      component: resolve => require(['@/components/userAgreement'],resolve)
    },
    {
      path: '/gambling', name: 'gambling', component: resolve => require(['@/components/gambling'],resolve),
      children: [
        { path: '/gambling/chongqindubo', name: 'chongqindubo',
          meta: {
              requireAuth: true,
          },
          component: resolve => require(['@/components/apps/bocai/chongqindubo'],resolve), meta: { requiresAuth: true }
        },
        { path: '/gambling/luckyairship', name: 'luckyairship',
          meta: {
              requireAuth: true,
          },
          component: resolve => require(['@/components/apps/bocai/luckyairship'],resolve), meta: { requiresAuth: true }
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