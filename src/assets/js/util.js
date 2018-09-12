import cookie from 'js-cookie';
import qs from 'qs';
import $cookie from './cookie.js';

let notify = function(title, msg, type, position = 'bottom-right'){
    this.$notify({
        title: title,
        message: msg,
        type: type,
        duration: 1000,
        position: position
    });
};

let currUser;


export default {
    install: function (Vue, options) {


        Vue.prototype.$success = function(msg){
            notify.call(this, '成功', (msg || '操作成功!'), 'success');
        };

        Vue.prototype.$warning = function(msg){
            notify.call(this, '警告', (msg || '操作有误!'), 'warning');
        };

        Vue.prototype.$error = function(msg){
            notify.call(this, '错误', (msg || '操作失败!'), 'error');
        };

        Vue.prototype.$c_confirm = function(

            successHandler, 
            title = '提示',
            msg = '确定删除?',
            ){
            let that = this;
            that.$confirm(msg, title, {
                confirmButtonText: '确认',
                cancelButtonText: '取消'
            }).then(async () => {
                await successHandler();
            }).catch(() => {});
        };

        Vue.prototype.$alertMessage = function(content,title){
            this.$alert(content, title, {
            confirmButtonText: '确定',
            callback: action => {

            }
          });
        };

        Vue.prototype.$currUser = async function(){
            currUser = currUser || JSON.parse(cookie.get('currUser'));
            if(currUser) return currUser;
            let res = await this.$get(`${window.account}/user/profile`);
            cookie.setCookie("currUser", res.result)
            currUser = res.result;

            let roleCodes = currUser.roleCodes;
            currUser.isAdmin = roleCodes.indexOf('platform-admin') != -1;

            return currUser;
        };

        Vue.prototype.$download = function(src){
            let query = {}, uri;
            if(src.indexOf('?') != -1){
                let segment = src.split('?');
                uri = segment[0];
                query = qs.parse(src.split('?')[1]);
            }
            query.access_token = cookie.get('accesstoken');
            
            src = (uri || src)  + '?' + qs.stringify(query);
            document.querySelector('#frm-download').setAttribute('src', src);
        };

        let $fileupload;
        Vue.prototype.$upload = function(opts){
            opts = {
                url: ''
            };
            !$fileupload && ($fileupload = document.querySelector('#file-upload'));

            $fileupload.addEventListener('change', function(){
            });
            $fileupload.click();
        };
    }
};










