import Vue from 'vue';
import App from './App';
import router from './router.js';
import store from './vuex/store';

import _ from 'lodash';
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import '../theme/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import config from './common/config.js';
Vue.use(config);
import util from './common/util.js';
Vue.use(util);
import cookie from './common/cookie';
import request from './common/request.js';
Vue.use(request);

Vue.config.productionTip = false;

window.router = router;
window.store = store;
window.axios = axios;
window._ = _;
window.cookie = cookie;
window.ENV = ENV;

(async function () {

    router.beforeEach((to, from, next) => {

    	let token = cookie.getCookie('token');

      console.log(token);

      let uurl = window.location.href;

      console.log(uurl);

	    if(!token) {
        console.log('no token');
        cookie.setCookie("accesstoken", '65cc1b03448644588546841861f3fe40');
        // router.push({
        //   name: 'login',
        // });
	    }
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
