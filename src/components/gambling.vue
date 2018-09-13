<template>
  <div id="main">
    <div id="header">
      <el-header height="216">
        <div class="head-div">
          <div class="headImg"><img :src="icons[imgUrl]"></div>
          <div class="headLabel">
            <div class="activeIndex"><h3>{{activeIndex}}</h3></div>
            <!-- <div class="preResult"><span>{{preResult}}</span></div> -->
            <div class="preResult">
              <ul class="result-list">
                <li v-for="(item,index) in preResult" class="bjpk-ran bjpk-ranNo-5 orangeShishiC">{{item}}</li>
              </ul>
            </div>
            <div class="preBocaiPeriods"><p class="qicip">第 <span>{{preBocaiPeriods}}</span> 期</p></div>
          </div>        </div>
      </el-header>
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#6c3092"
          text-color="#ffd04b"
          active-text-color="#ffd04b">

          <el-menu-item v-for="(item,index) in bocaiTypeList" :key="index" :index="item.bocaiName"  @click="getOdds(item)">{{item.bocaiName}}</el-menu-item>
          <!-- <el-menu-item index="2">幸运飞艇</el-menu-item>
          <el-menu-item index="3">北京PK拾</el-menu-item>
          <el-menu-item index="4">北京快乐8</el-menu-item>
          <el-menu-item index="5">六合彩</el-menu-item>
          <el-menu-item index="6">广东快乐十分</el-menu-item>
          <el-menu-item index="7">广东11选5</el-menu-item>
          <el-menu-item index="8">PC蛋蛋</el-menu-item>
        <el-submenu index="9">
          <template slot="title">更多</template>
          <el-menu-item index="2-1">天津时时彩</el-menu-item>
          <el-menu-item index="2-2">安徽快3</el-menu-item>
          <el-menu-item index="2-3">山东11选5</el-menu-item>
          <el-menu-item index="2-3">江苏快3</el-menu-item>
          <el-menu-item index="2-3">江西11选5</el-menu-item>
          <el-menu-item index="2-3">重庆幸运农场</el-menu-item>
          <el-menu-item index="2-3">新疆时时彩</el-menu-item>
        </el-submenu> -->
      </el-menu>
    </div>
    
    <el-main>
      <div id="content">
      <left-panel></left-panel>
      <div id="routerMain">
        <router-view></router-view>
      </div>
      </div>
    </el-main>

    <el-footer height="97">
      <div>
        <p>
          <a href="javascript:;">游戏规则</a>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">联络我们</a>
          <a href="javascript:;">合作伙伴</a>
          <a href="javascript:;">存款帮助</a>
          <a href="javascript:;">取款帮助</a>
          <a href="javascript:;">常见问题</a>
          <a href="javascript:;">责任博彩</a>
        </p> 
        <p class="golden">比特娱乐城所提供的产品和服务，是由澳门政府 Macau,China Special Economic Zone. 授权和监管</p>
        <p class="golden">Copyright © 比特娱乐城 Reserved</p>
      </div>
    </el-footer>
  </div>
</template>

<script>

import LeftPanel from '@/components/common/leftpanel';
import PageFooter from '@/components/common/pagefooter';
import {mapState,mapGetters} from 'vuex';

export default {
  components: {
    LeftPanel,
    PageFooter
  },
  data() {
    return {
      imgUrl: 0,
      activeIndex: '重庆时时彩',
      preBocaiPeriods: '',
      preResult: '',
      bocaiTypeList: [],
      preResult: '',
      icons:[
            require('@/assets/img/chongqindubo.png'),
            require('@/assets/img/luckyairship.png')
          ]
    }
  },
  async created() {
    this.getBocai();
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.bocaiTypeList = res.bocaiTypeList;
          }
    },
    async getOdds(item) {
      let path = '';
        switch (item.bocaiName) {
          case '重庆时时彩':
            path = 'chongqindubo';
            this.imgUrl = 0;
            break;
          case '幸运飞艇':
            path = 'luckyairship';
            this.imgUrl = 1;
            break;
        }
      bus.$emit('getbocaiTypeId', item.bocaiId); 
      bus.$emit('getbocaiTypeName', item.bocaiName); 
      this.$router.push({name: path});
    }
  },
  mounted() {
      bus.$on('getpreResult', (data) => {
        this.preResult = data;
      });
      bus.$on('getpreBocaiPeriods', (data) => {
        this.preBocaiPeriods = data;
      })
  },
  updated() {
  }
};
</script>
<style scoped>
  #content {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    background-color: #6c3092;
  }
  #routerMain {
    height: 100%;
  }

  .head-div >div {
    float: left;
    height: 116px;
  }
  .headLabel {
    color: #fff;
    width: 420px;
  }
  .headLabel h3 {
    color: #ff5722;
  }
  .headLabel .activeIndex,.headLabel .preBocaiPeriods {
    margin: 10px 0px 10px -20px;
  }
  .headLabel .preResult {
    margin: 15px 0px 15px 20px;
  }
  .head-div {
    padding: 1.5% 27.7%;
    width: 600px;
    height: 116px;
  }
  .headImg >img {
    height: 70px;
    margin-top: 23px;
  }
  .headImg {
    margin-left: 40px;
  }
  .game-result ul {
    margin: 10px 10px 0;
  }
  .bjpk-ran {
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin: 0px 5px;
  }
  .bjpk-ran, .bjpk-ran-s {
    display: inline-block;
    color: #fff;
    border-radius: 50px;
    font-family: Microsoft YaHei,Verdana,SimSun,Arial,Helvetica,sans-serif;
    font-size: 14px;
    text-shadow: #555 1px 0 0, #555 0 1px 0, #555 -1px 0 0, #555 0 -1px 0;
  }
  .bjpk-ranNo-1 {
    background-color: #ffd64c;
  }
  .orangeShishiC {
    background-color: #f96a2a;
  }
  .game-result li {
    width: 24px;
    height: 26px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin-left: 8px;
    display: inline-block;
    vertical-align: middle;
  }
  .preBocaiPeriods .qicip {
    color: #6c3092;
  }
</style>
<style lang="less">
#main {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #6c3092;

  #header {
    border-bottom: solid 2px #ffd04b;

    .el-menu--horizontal {
      background-color: rgb(60, 37, 109);
      font-size: 14px;
      width: 1100px;
      margin: 0 auto;
      border-bottom: solid 0px #ffd04b;
    }

    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
      border-bottom: 0px solid #6C3092;
    }

    .el-menu-item.is-active {
      background: url(./../../static/img/gold-light-btn-shading.png) bottom no-repeat transparent;
      background-size: 100% 100%;
      color: #ffea00;
      cursor: point;
      border-bottom: 0px solid #6c3092;
    }

    .el-menu-item:hover {
      color: #fff !important;
    }

    .el-menu-item {
      padding: 0 32px;
    }

  }

  .el-menu--horizontal>.el-menu-item {
    border-bottom: 0px solid transparent;
  }
      
    header {
        top: 0;
        left: 0;
        right: 0;
        height: 156px;
        background: url(./../../static/img/header.jpg) bottom no-repeat transparent;
    }

    .el-header {
      padding: 0px;
    }


  footer {
    background-color: #361d3d;
    color: #fff;
    font-size: 12px;
    padding-bottom: 10px;
  }
  footer div {
      width: 1100px;
      text-align: center;
      margin: 0 auto;
      padding-top: 20px;
  }
  footer p {
      height: 24px;
      line-height: 24px;
      padding-bottom: 5px;
  }
  footer p a {
      color: #fff;
      padding: 0 10px;
      font-size: 13px;
  }

  .el-main {
    padding: 0px;
  }

}

@import "../assets/less/common.less";

</style>