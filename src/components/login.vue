<template>
  <div id="login">
    
    <div class="wrap">
      <!--header-->
      <div class="header" id="header">
        <div class="header-box">
          <!-- <div class="logo">
            <img src="/logo" width="208" height="75">
          </div> -->
          <!-- <img class="header-title" src="/static/img/sb/header_title.png" alt=""> -->
          <!-- <ul id="nav">
            <li>
              <a href="javascript:;" onclick="clickBet()" class="a1">即时注单</a>
              <a href="javascript:;" onclick="clickBet()" class="a2">下注历史</a>
              <a href="javascript:;" onclick="clickBet()" class="a3">开奖结果</a>
            </li>
            <li>
              <a href="javascript:;" onclick="clickBet()" class="a4">个人咨讯</a>
              <a href="javascript:;" onclick="clickBet()" class="a5">游戏规则</a>
              <a href="javascript:;" onclick="clickBet()" class="a6">修改密码</a>
            </li>
          </ul> -->
        </div>
      </div>
      <!--banner-->
      <div class="banner" id="banner">
        <!-- <ul id="list" style="left: -2698px; width: 6745px;">
          <li class="img banner3"></li>
          <li class="img banner1"></li>
          <li class="img banner2"></li>
          <li class="img banner3"></li>
          <li class="img banner1"></li>
        </ul> -->
        <!-- <div id="buttons">
          <span index="1" class="on"></span>
          <span index="2" class=""></span>
          <span index="3" class=""></span>
        </div>
        <a href="javascript:;" id="prev" class="arrow">&lt;</a>
        <a href="javascript:;" id="next" class="arrow">&gt;</a> -->
      </div>
      <!--login-->
      <div id="login_box">
        <!-- <div class="login_logo">
          <img src="/logo" alt="logo" height="63" width="175">
        </div> -->
        <div class="box">
          <form action="" method="post" enctype="application/x-www-form-urlencoded">
            <p><label id="label1" for="name">帐　号：</label><input id="name" class="name" name="name" type="text" placeholder="请输入帐号"></p>
            <p><label id="label2" for="password">密　码：</label><input id="password" name="password" type="password" placeholder="请输入密码"></p>
            <p class="code">
              <label id="label3" for="code">验证码：</label><input id="code" name="code" type="text" placeholder="验证码">
              <!-- <img src="/code?0.03919337389555588" id="codeImg" alt="验证码" onclick="this.src='/code?'+Math.random()" title="点击更新验证码"> -->
            </p>

            <p class="btn">
              <el-button type="primary" @click="login()">登 录</el-button>
              <a class="reg" href="javascript:;" >立即注册</a>
              <a class="test" href="javascript:;" >免费试用</a>
            </p>
          </form>
        </div>
      </div>
      <!--game-->
      <!-- <div class="game-box" id="game-box">
        <ul>
          <li>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/PC蛋蛋.png" alt="PC蛋蛋">
              </span>
              <div class="text">
                <h2>PC蛋蛋</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/北京PK拾.png" alt="北京pk拾">
              </span>
              <div class="text">
                <h2>北京pk拾</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/重庆时时彩.png" alt="重庆时时彩">
              </span>
              <div class="text">
                <h2>重庆时时彩</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/幸运飞艇.png" alt="幸运飞艇">
              </span>
              <div class="text">
                <h2>幸运飞艇</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/广东11选5.png" alt="广东11选5">
              </span>
              <div class="text">
                <h2>广东11选5</h2>
              </div>
            </div>
          </li>
          <li>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/广东快乐十分.png" alt="广东快乐十分">
              </span>
              <div class="text">
                <h2>广东快乐十分</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
               <span class="img">
                <img src="/static/img/game/江苏快3.png" alt="江苏快3">
              </span>
              <div class="text">
                <h2>江苏快3</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
              <span class="img">
                <img src="/static/img/game/重庆幸运农场.png" alt="重庆幸运农场">
              </span>
              <div class="text">
                <h2>重庆幸运农场</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
               <span class="img">
                <img src="/static/img/game/北京快乐8.png" alt="北京快乐8">
              </span>
              <div class="text">
                <h2>北京快乐8</h2>
              </div>
            </div>
            <div class="game game-item" onclick="clickBet()">
               <span class="img">
                <img src="/static/img/sk/game/六合彩.png" alt="六合彩">
              </span>
              <div class="text">
                <h2>六合彩</h2>
              </div>
            </div>
          </li>
        </ul>
      </div> -->
      <!--在线客服-->
      <!-- <div class="service" id="service" style="top: -84px;">
        </div> -->
      <!--底部介绍-->
      <!-- <div class="introduce" id="introduce">
        <div class="nav">
          <ul>
            <li>
              <span class="tag tag1"></span>
              <h2>产品优势</h2>
              <p>热门游戏产品一网打尽</p>
            </li>
            <li>
              <span class="tag tag2"></span>
              <h2>服务优势</h2>
              <p>信誉保证 丰富经验的团队</p>
            </li>
            <li>
              <span class="tag tag3"></span>
              <h2>品牌优势</h2>
              <p>公平公正 安全有保障</p>
            </li>
            <li>
              <span class="tag tag4"></span>
              <h2>技术优势</h2>
              <p>全程担保会员每一笔存取款</p>
            </li>
          </ul>
        </div>
        <ul class="section">
          <li id="p">
            <div class="p-title">
              <img src="/logo" width="200" height="72">
              <h2>彩票游戏</h2>
              <p>彩票游戏、快乐彩、六合彩、时时彩等，彩票游戏丰富，所有赛果依据官方开奖结果，带给您一夜致富的机会及空前的游戏体验！</p>
            </div>
          </li>
          <li id="r">
            <h2>大家选择我们娱乐城的理由</h2>
            <div>
              <p><i>1</i>游戏种类,全网最多</p>
              <p><i>2</i>轨迹娱乐城 娱乐场官方直营</p>
              <p><i>3</i>取款1000万3分锺火速到账</p>
              <p><i>4</i>资金安全,客户零投诉</p>
              <p><i>5</i>保障隐私,资料信息多重加密</p>
            </div>
          </li>
          <li id="d">
            <h2>24小时数据</h2>
            <div id="data-box">
              <div class="font" id="d1">
                存款到账时间 <span>23秒</span>
              </div>
              <div class="font" id="d2">
                取款到账时间 <span>2分钟</span>
              </div>
              <div class="accumulate">
                <p>累积注单量 <span id="d3">235,162 注</span></p>
                <p>累积派彩量 <span id="d4">112,273235,16 元</span></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer" id="footer">
        <div>
          <p class="icon"></p>
          <p>致富之路 秒存秒提 信誉首选</p>
          <p>Copyright © 2006 - 2017 All Rights Reserved</p>
        </div>
      </div> -->
    </div>

  </div>
</template>

<script>
import cookieParser from './../assets/js/cookie';

export default {
  data () {
    return {

    }
  },
  created() {

    if (window.ENV == 'dev') {

      console.log('研发自动登录');

    } else {
      //普通用户登录
       //this.$router.push({name: 'login'});
    }
  },
  methods: {
    async login() {

      let obj = {
        password: 'a111111',
        username: 'aydwhuiyuan1'
      };

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
</style>
