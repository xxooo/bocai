<template>
  <div id="loginDiv">

  <section id="login" data-htmltype="pc" class="section-wrap scroll-section-0" section_index="0">

    <div class="section dis_txt_high" name="scroll-section-0" style="overflow: auto">
        <div class="login-main" id="login-content">
            <div id="login_form" name="section-content" class="dis_txt_high login-form animated animate-bounceInDown">
                <div class="login-form-bg rel">
                    <div class="input-area dis_txt_high">
                      <p class="title">会员登录</p>
                      <div class="info">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                          <el-form-item label="帐　号：" prop="username">
                            <el-input v-model="ruleForm.username" size="mini" placeholder="请输入帐号"></el-input>
                          </el-form-item>
                            <el-form-item label="密　码：" prop="password">
                            <el-input v-model="ruleForm.password" size="mini" placeholder="请输入密码"></el-input>
                          </el-form-item>
                          <el-form-item label="验证码：" prop="securitycode">
                            <el-input v-model="ruleForm.securitycode" size="mini" placeholder="验证码"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="login('ruleForm')">登录</el-button>
                            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                          </el-form-item>
                        </el-form>
                      </div>

                      

                        <!-- <label for="user_name" class="dis_txt_high">
                          <el-input v-model="username" size="mini" placeholder="用户名，只支持数字、字母、符号混合"></el-input>
                        </label>
                        <label for="password" class="dis_txt_high">
                          <el-input v-model="password" size="mini" type="password" placeholder="输入密码，由字母和数字组成6-16个字符"></el-input>
                        </label>
                        <label for="valid_code" class="dis_txt_high">
                            <input id="valid_code" name="valid_code" type="text" placeholder="验证码" maxlength="4" onkeyup="this.value=this.value.replace(/\D/g, '')">
                            <span class="code-area">
                                <img id="imgCode" src="/static/fx/images/code_img.png" title="点击刷新" alt="点击刷新" class="code-img" data-state="close">
                                <span class="code-font">验证码</span>
                            </span>
                        </label>
                        <label for="g_code" style="display: none" class="sprite dis_txt_high">
                            <input id="g_code" name="g_code" type="text" placeholder="谷歌身份验证">
                        </label>
                        <div id="btn_register" class="dis_txt_high btn btn-register" style="display:none">立即注册</div> -->

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
   <!--  <div class="wrap">
      <div id="login_box">
        <div class="box">
          <form action="" method="post" enctype="application/x-www-form-urlencoded">
            <p><label id="label1" for="name">帐　号：</label><input id="name" class="name" v-model="username"  type="text" placeholder="请输入帐号"></p>
            <p><label id="label2" for="password">密　码：</label><input id="password" v-model="password" type="password" placeholder="请输入密码"></p>

            <p class="btn">
              <el-button type="primary" @click="login()">登 录</el-button>
            </p>
          </form>
        </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import cookieParser from './../assets/js/cookie';

export default {
  data () {
    return {
      password: '',
      username: '',
      securitycode: '',
      ruleForm: {
          username: '',
          password: '',
          securitycode: ''
        },
        rules: {
          username: [
            { required: true, message: '必填', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '必填', trigger: 'blur' }
          ],
          securitycode: [
          ]
        }
    }
  },
  created() {

    if (window.ENV == 'dev') {

      //console.log('研发自动登录');

    } else {
      //普通用户登录
       //this.$router.push({name: 'login'});


    }
  },
  methods: {
    async login() {

      let obj = {
        username: this.ruleForm.username,
        password: this.ruleForm.password
      };

      // let obj = {
      //   password: 'a111111',
      //   username: 'aydwhuiyuan1'
      // };

      let ret = await this.$post(`${window.url}/api/login`, obj);
      if(ret.code === 200) {
        cookieParser.setCookie("accesstoken", ret.token);
        this.$router.push({name: 'userAgreement'});
      }

    }
  }
}
</script>

<style scoped>
#loginDiv {
    background: url(../../static/img/loginBg.jpg) center no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
#login {
    min-width: 1100px;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: visible;
}
.section {
    position: relative;
    width: 100%;
    height: 100%;
}
.login-main {
    height: 100%;
    min-height: 700px;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-main .login-form {
    position: relative;
    margin: 0 auto;
    width: 584px;
    min-height: 590px;
    text-align: left;
    white-space: normal;
    position: relative;
    z-index: 2;
}
.rel {
    position: relative;
}
.login-main .login-form .login-form-bg {
    width: 584px;
    height: 390px;
    padding-top: 20%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    background: url(../../static/img/middlebg.png) center no-repeat;
}
.login-main .login-form .input-area {
    width: 358px;
    height: 260px;
    border-radius: 6px;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #80664b;
}
.title {
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 700;
    position: relative;
    text-align: center;
    overflow: hidden;
    background: hsla(0,0%,100%,.2);
}
.info {
    background-size: 100% 100%;
    padding: 15px 5px;
    font-size: 13px;
    overflow-x: hidden;
    word-break: break-all;
    text-align: center;
}
/*#login_box {
    z-index: 3;
    width: 320px;
    position: absolute;
    top: 50%;
    left: 56%;
    margin: -180px 0 0 -250px;
    box-shadow: 0 0px 10px 0 rgba(12, 12, 12, 0.63);
    border-radius: 7px;
}
#login_box .box {
    width: 250px;
    margin: 24px auto;
}
#login_box .box input {
}*/
</style>
<style lang="less">
#login {
  .el-form-item__label {
     color: #EBCB80 !important;
  }
  .el-form-item {
    padding: 0px 20px 0px 0px;
    margin-bottom: 10px;
  }
  .el-form-item__content {
    margin-left: 0px; 
  }
}
</style>

