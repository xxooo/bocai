// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import _ from 'lodash';
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import config from './common/config.js'
Vue.use(config)
import util from './common/util.js'
Vue.use(util)
import cookie from './common/cookie'
import request from './common/request.js'
Vue.use(request)

Vue.config.productionTip = false

window.router = router;
window.store = store;
window.axios = axios;
window._ = _;
window.cookie = cookie;

(async function () {

    router.beforeEach((to, from, next) => {

    	// let token = cookie.getCookie('token');

	    // if(!token) {
	    //     window.location.href = `${window.login}/index.html?redirect_url=${window.location.href}`;
	    // }
	    // let opts = { headers: {token} };

	    // // access_token 每次都会写入
	    // let res = await axios.get(`${window.gateway}/account/common/access-token?appkey=${window.appkey}`,opts);
	    // cookie.setCookie("accesstoken", res.data.result);

	    // //获取用户信息
	    // let userRes = await axios.get(`${window.account}/user/profile`,{
	    //           headers: {
	    //               accesstoken:res.data.result,
	    //           }
	    // });
	    // cookie.setCookie("currUser", JSON.stringify(userRes.data.result))
	    // cookie.setCookie("account", userRes.data.result.account);

        NProgress.start();
        next();
    });

    

    router.afterEach(transition => {
      NProgress.done()
    })

    // 视图必须在获取到access_token 和语言后渲染
    window.getVue = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    });


})().catch(err => {
    console.error('geting access token error...', err);
});


// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
