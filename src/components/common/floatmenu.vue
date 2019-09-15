<template>
  <div class="suspension">
	<div class="suspension-box">
		<a href="#" class="a a-service "><i class="i"></i></a>
		<a href="javascript:;" class="a a-service-phone "><i class="i"></i></a>
		<a href="javascript:;" class="a a-qrcode"><i class="i"></i></a>
		<a href="#" class="a a-cart"><i class="i"></i></a>
		<a href="javascript:;" class="a a-top"><i class="i"></i></a>
		<div class="d d-service">
			<i class="arrow"></i>
			<div class="inner-box">
				<div class="d-service-item clearfix">
					<a href="#" class="clearfix"><span class="circle"><i class="i-qq"></i></span><h3>咨询在线客服</h3></a>
				</div>
			</div>
		</div>
		<div class="d d-service-phone">
			<i class="arrow"></i>
			<div class="inner-box">
				<div class="d-service-item clearfix">
					<span class="circle"><i class="i-tel"></i></span>
					<div class="text">
						<p>服务热线</p>
						<p class="red number">4001-021-758</p>
					</div>
				</div>
				<div class="d-service-intro clearfix">
					<p><i></i>功能和特性</p>
					<p><i></i>价格和优惠</p>
					<p><i></i>获取内部资料</p>
				</div>
			</div>
		</div>
		<div class="d d-qrcode">
			<i class="arrow"></i>
			<div class="inner-box">
				<div class="qrcode-img"><img src="images/side_ewm.jpg" alt=""></div>
				<p>微信服务号</p>
			</div>
		</div>

	</div>
</div>
</template>
<script>

	/* ----- 侧边悬浮 ---- */
	$(document).on("mouseenter", ".suspension .a", function(){
		var _this = $(this);
		var s = $(".suspension");
		var isService = _this.hasClass("a-service");
		var isServicePhone = _this.hasClass("a-service-phone");
		var isQrcode = _this.hasClass("a-qrcode");
		if(isService){ s.find(".d-service").show().siblings(".d").hide();}
		if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
		if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
	});
	$(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
		$(".suspension").find(".d").hide();
	});
	$(document).on("mouseenter", ".suspension .a-top", function(){
		$(".suspension").find(".d").hide(); 
	});
	$(document).on("click", ".suspension .a-top", function(){
		$("html,body").animate({scrollTop: 0});
	});
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		var $top = $(".suspension .a-top");
		if(st > 400){
			$top.css({display: 'block'});
		}else{
			if ($top.is(":visible")) {
				$top.hide();
			}
		}
	});
	
import {mapGetters} from 'vuex';

export default {
  data() {
    let vm = this;
    return {
      showOpen: true,
      noOpenPrizeList: [],
      openPrizeList: [],
      orderOddsVisible: false,
      ruleForm: {
          oldPassWrod: '',
          newPassWord: '',
          newPassWordDb: ''
        },
        rules: {
          oldPassWrod: [
            { required: true, message: '请输入您的旧密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          newPassWord: [
            { required: true, message: '请输入您的新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
            {
              validator:function(rule, value, callback){
                let reg = /^[a-zA-Z]\w{5,15}$/;
                if(!reg.test(value)){
                  callback('密码以字母开头，长度在6~16之间，只能包含字母、数字和下划线');
                }
                callback();
              },
              trigger: 'blur'
            }
          ],
          newPassWordDb: [
            { required: true, message: '请再次输入新密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
            {
              validator:function(rule, value, callback){
                let reg = /^[a-zA-Z]\w{5,15}$/;
                if(!reg.test(value)){
                  callback('密码以字母开头，长度在6~16之间，只能包含字母、数字和下划线');
                }
                callback();
              },
              trigger: 'blur'
            },
            {
              validator:function(rule, value, callback){

                console.log('vm.ruleForm',vm.ruleForm);
                if(value != vm.ruleForm.newPassWord){
                  callback('新密码两次输入不一致!');
                }
                callback();
              },
              trigger: 'blur'
            }
          ]
        }

    };
  },
  computed: {
    ...mapGetters({
      userInfo: 'getuserInfo',
      bocaiTypeId: 'getbocaiTypeId'
    })
  },
  async created() {
  },
  mounted(){
      bus.$on('getchanglong', (data) => {
        this.getchanglong();
      });
  },
  methods: {
    async exit() {

      let ret = await this.$get(`${window.url}/api/exitLogin`);
              if(ret.code===200) {
                    this.$success('退出登录!');
                    
                  } else {
              }
      this.$router.push({name: 'login'});
    },
    openPrize() {
      this.showOpen = true;
      $('.openPrize').addClass('active').siblings().removeClass('active');
    },
    noOpenPrize() {
      this.showOpen = false;
      $('.noOpenPrize').addClass('active').siblings().removeClass('active');
    },
    async getchanglong() {

        this.openPrizeList = [];
        this.noOpenPrizeList = [];

          let that = this;
          await that.$get(`${window.url}/api/changlong?bocaiTypeId=`+this.bocaiTypeId+'&showNum=10').then((res) => {
            that.$handelResponse(res, (result) => {
              if(result.code===200){

                let openList = [];
                let noOpenList = [];

                for(let n in result.openPrizeMap) {
                  let obj = {};
                  obj.content = n;
                  obj.num = result.openPrizeMap[n];
                  openList.push(obj);
                }

                for(let n in result.noOpenPrizeMap) {
                  let obj = {};
                  obj.content = n;
                  obj.num = result.noOpenPrizeMap[n];
                  noOpenList.push(obj);
                }

                this.openPrizeList = openList;
                this.noOpenPrizeList = noOpenList;

                //console.log('this.openPrizeMap',this.openPrizeMap);
                //更新用户信息
                // bus.$emit('getcUserInfo', ''); 
                // that.orderDatas.list = [];
                // that.$success('下注成功！');
                // that.reset();
              }
            })
          });
    },
    async updatePassWord(formName) {
        let that = this;

          this.$refs[formName].validate(async (valid) => {

          if (valid) {

              let obj = {
                oldPassWrod: this.ruleForm.oldPassWrod,
                newPassWord: this.ruleForm.newPassWord
              }

              let ret = await this.$post(`${window.url}/api/rePassWord`, obj);
              if(ret.code===200) {
                    this.$success('修改密码成功!');
                    this.orderOddsVisible = false;
                  } else {
              }

              this.$refs[formName].resetFields();

          } else {

            return false;
          }
        });
    },
    toUpdatePass() {
      this.orderOddsVisible = true;
    }
  }
};
</script>
<style scoped>
h1, h2, h3, h4, h5, h6{font-weight:400;}
li{list-style:none;}
html, body, fieldset, img, iframe, abbr{border:0;}
img{vertical-align:top;}
a, button{cursor:pointer;}
a{color:#333;outline:none;text-decoration:none;}
a:focus{ color:#333;
     outline:none; 
     -moz-outline:none;
}  

.container{width:1200px;margin:0 auto;padding:0;}
.container:after{content:"";display:block;clear:both;}
.clearfix:after{content:"";display:block;clear:both;}
.fl{float:left;}
.fr{float:right;}
.tl{text-align:left;}
.tr{text-align:right;}
.tc{text-align:center;}
.color-white{color:white!important;}
.red{color:#fc8080!important;}
.fz12{font-size:12px;}
.fz14{font-size:14px;}
.wfs{width:100%;position:relative;}
.p_r{position:relative;}


/*悬浮链接*/
.suspension{position:fixed;z-index:55;right:0;bottom:85px;width:70px;height:240px;}
.suspension-box{position:relative;float:right;}
.suspension .a{display:block;width:44px;height:44px;background-color:#353535;margin-bottom:4px;cursor:pointer;outline:none;}
.suspension .a.active,
.suspension .a:hover{background:#F05352;}
.suspension .a .i{float:left;width:44px;height:44px;background-image:url(../images/side_icon.png);background-repeat:no-repeat;}
/* .suspension .a-service .i{background-position:0 0;} */
.suspension .a-service .i{width:20px;height:20px;margin-top:12px;margin-left:12px;background-image:url(../images/suspension-bg.png);background-repeat:no-repeat;background-position:0 0;}
.suspension .a-service-phone .i{width:20px;height:20px;margin-top:12px;margin-left:12px;background-image:url(../images/suspension-bg.png);background-repeat:no-repeat;background-position:-27px 0;}
.suspension .a-qrcode .i{background-position:-44px 0;}
.suspension .a-cart .i{background-position:-88px 0;}
.suspension .a-top .i{background-position:-132px 0;}
.suspension .a-top{background:#D2D3D6;display:none;}
.suspension .a-top:hover{background:#c0c1c3;}
.suspension .d{display:none;width:223px;background:#fff;position:absolute;right:67px;min-height:90px;border:1px solid #E0E1E5;border-radius:3px;box-shadow:0px 2px 5px 0px rgba(161, 163, 175, 0.11);}
.suspension .d .arrow{position:absolute;width:8px;height:12px;background:url(../images/side_bg_arrow.png) no-repeat;right:-8px;top:31px;}
.suspension .d-service{top:0;}
.suspension .d-service-phone{top:34px;}
.suspension .d-qrcode{top:78px;}
.suspension .d .inner-box{padding:8px 22px 12px;}
.suspension .d-service-item{border-bottom:1px solid #eee;padding:14px 0;}
.suspension .d-service .d-service-item{border-bottom:none;}
.suspension .d-service-item .circle{width:44px;height:44px;border-radius:50%;overflow:hidden;background:#F1F1F3;display:block;float:left;}
.suspension .d-service-item .i-qq{width:44px;height:44px;background:url(../images/side_con_icon03.png) no-repeat center 15px;display:block;transition:all .2s;border-radius:50%;overflow:hidden;}
.suspension .d-service-item:hover .i-qq{background-position:center 3px;}
.suspension .d-service-item .i-tel{width:44px;height:44px;background:url(../images/side_con_icon02.png) no-repeat center center;display:block;}
.suspension .d-service-item h3{float:left;width:112px;line-height:44px;font-size:15px;margin-left:12px;}
.suspension .d-service-item .text{float:left;width:112px;line-height:22px;font-size:15px;margin-left:12px;}
.suspension .d-service-item .text .number{font-family:Arial,"Microsoft Yahei","HanHei SC",PingHei,"PingFang SC","Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;}
.suspension .d-service-intro{padding-top:10px;}
.suspension .d-service-intro p{float:left;line-height:27px;font-size:12px;width:50%;white-space:nowrap;color:#888;}
.suspension .d-service-intro i{background:url(../images/side_con_icon01.png) no-repeat center center;height:27px;width:14px;margin-right:5px;vertical-align:top;display:inline-block;}
.suspension .d-qrcode{text-align:center;}
.suspension .d-qrcode .inner-box{padding:20px 0;}
.suspension .d-qrcode p{font-size:16px;color:#93959c;}

</style>
