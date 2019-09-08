<template>
  <div class="box">
    <div class="reg-title">
      会员注册
    </div>
    <div class="reg-info">
      <div>
        <table>
          <tbody>
            <tr>
              <td width="120px" class="tar"><i class="red">*</i> 会员帐号：</td>
              <td><input type="text" name="name" id="name" v-model="username"></td>
              <td class="tipclass">帐号必须为6-15位字母和数字组合</td>
            </tr>

            <tr>
              <td class="tar"><i class="red">*</i> 登录密码：</td>
              <td><input type="password" name="password" id="password" v-model="password"></td>
              <td class="tipclass">密码必须为6-15位字母和数字组合</td>
            </tr>

            <tr>
              <td class="tar"><i class="red">*</i> 确认密码：</td>
              <td><input type="password" name="rePassword" id="repassword" v-model="passwordAgin"></td>
              <td class="tipclass">确认您的登录密码，请输入和以上一致的密码</td>
            </tr>

            <tr>
              <td class="tar"><i class="red">*</i> 验证码：</td>
              <td><input type="text" name="code" id="yanzhengma" v-model="yanzhengma"></td>
              <td class="tipclass">
                <img class="yanzhengimg22"  @click="getyanzheng" :src="'data:image/png;base64,'+tupian">
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <p>
        * <input type="checkbox" checked="checked" v-model="ifAgreen" style="vertical-align: middle" id="checkbox" onchange="disableInput();">
        <label for="checkbox">我已届满18岁合法博彩年龄﹐且同意各项开户条约。</label>
      </p>
      <p class="top25">
        <el-button class="reg-btn" size="mini" id="submit-btn" @click="register()">立即注册</el-button>
        <el-button type="reset" size="mini" class="reg-btn" @click="reset()">重新填写</el-button>
        <el-button class="reg-btn" size="mini" @click="backHome">返回首页</el-button>
      </p>
    </div>
  </div>
</template>

<script>
  import cookieParser from './../assets/js/cookie';

  export default {
    data () {
      let vm = this;
      return {
        password: '',
        username: '',
        passwordAgin: '',
        tupian: '',
        yanzhengma: '',
        yanzhengMa: '',
        ifAgreen: true
      }
    },
    created() {
      this.getyanzheng();

      console.log('path',this.$route);
    },
    computed: {
      aUserId() {
        return this.$route.query.pid || 0
      },
      handicap() {
        return this.$route.query.handicap || ''
      }
    },
    methods: {
      backHome() {
        this.$router.push({name: 'login'});
      },
      reset() {
        this.password = '';
        this.username = '';
        this.passwordAgin = '';
        this.yanzhengma = '';
        this.ifAgreen = true;
      },
      async register() {

        let that = this;

        if(this.password != this.passwordAgin) {
          this.$alertMessage('两次密码不一致', '温馨提示');
        } else if(this.username == '') {
          this.$alertMessage('用户名不能为空', '温馨提示');
        } else if(this.yanzhengma != this.yanzhengMa) {
          this.$alertMessage('验证码不正确', '温馨提示');
        } else if(this.yanzhengma == '') {
          this.$alertMessage('校验码不能为空', '温馨提示');
        } else {
          let obj = {
            username: this.username,
            password: this.password,
            pid: +this.aUserId,
            handicap: this.handicap
          };

          let ret = await this.$post(`${window.url}/api/register`, obj);
          if(ret.code === 200) {
            that.$router.push({name: 'login'});
          } else {
            that.$router.push({name: 'register'});
          }
        }
      },
      async getyanzheng() {
        let res = await this.$get(`${window.url}/api/captcha.jpg`);

        if(res.code===200){
          this.tupian = res.tupian;
          this.yanzhengMa = res.yanzhengma;
        }
      }
    }
  }
</script>

<style scoped>
.box {
    width: 830px;
    margin: 10% auto 0;
    border-radius: 10px;
    box-shadow: 0px -2px 1px #3c270d, 8px 8px 5px #2d140c;
}
.reg-title {
    text-align: center;
    background-color: #80674b;
    border-bottom: 1px solid #753c2a;
    border-radius: 10px 10px 0 0;
    line-height: 50px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
}
.reg-info {
    padding: 30px;
    background-color: #f2e5ce;
    border-left: 5px solid #80674b;
    border-right: 5px solid #80674b;
    border-bottom: 5px solid #80674b;
    border-radius: 0 0 10px 10px;
    color: #511E02;
}
tr {
    height: 44px;
}
.tar {
    text-align: right;
}
input:-internal-autofill-selected {
    background-color: rgb(232, 240, 254) !important;
    background-image: none !important;
    color: rgb(0, 0, 0) !important;
}
table input {
    height: 22px;
    line-height: 22px;
    padding: 2px 4px 0px 4px;
    border: 1px solid #984e21;
    background: #FBFBFB;
    width: 320px;
    margin-right: 20px;
}
td.tipclass {
    text-align: left;
}
.yanzhengimg22 {
    width: 60px;
    height: 25px;
}
.top25 {
  padding-top: 25px;
}
</style>
<style lang="less"></style>

