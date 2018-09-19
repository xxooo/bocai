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

          <el-menu-item v-for="(item,index) in bocaiTypeList" :key="index" :index="item.bocaiName"  @click="getOdds(item,index)" v-if="index*1 < 8">{{item.bocaiName}}</el-menu-item>
          <el-submenu v-if="bocaiTypeList.length*1 > 8" key="submenu" index="submenu">
            <template slot="title">{{submenu}}</template>
            <el-menu-item v-for="(item,index) in bocaiTypeList" :key="index" :index="item.bocaiName"  @click="getOdds(item,index)" v-if="index*1 > 7">{{item.bocaiName}}</el-menu-item>
          </el-submenu>

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
// import {mapState,mapGetters} from 'vuex';

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
      bocaiTypeId: '1',
      bocaiTypeList: [],
      submenu: '更多',
      preResult: '',
      icons:[
            require('@/assets/img/chongqindubo.png'),
            require('@/assets/img/luckyairship.png')
          ]
    }
  },
  async created() {
    this.getBocai();
    this.refreshTime();
  },
  computed: {
    // ...mapGetters({
    // })
  },
  methods: {
    async refreshTime() {
      let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+this.bocaiTypeId);

            if(res.code===200){

              //if("companyIsOpenSet": "",//该会员上级公司对该期博彩的封盘状态。状态：0删除，1封盘，2开盘。只有开盘才能投注。)
               //if("isOpenSet": "",//管理员对于当期博彩的开关设置) 

              bus.$emit('getbocaiInfoData', res.data);

              this.preResult = res.data.preResult == '' ? '等待开奖中' : res.data.preResult.split(',');   //"preResult": 
              this.preBocaiPeriods = res.data.preBocaiPeriods;  //"preBocaiPeriods": "30763817",//上期博彩期数    

            }

            //console.log('refreshbocaiInfo',window.refreshTime);
            setTimeout(this.refreshTime, window.refreshTime);
    },
    async bocaiInfo() {

        let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+this.bocaiTypeId);

            if(res.code===200){

              //if("companyIsOpenSet": "",//该会员上级公司对该期博彩的封盘状态。状态：0删除，1封盘，2开盘。只有开盘才能投注。)
               //if("isOpenSet": "",//管理员对于当期博彩的开关设置) 

              bus.$emit('getbocaiInfoData', res.data);

              this.preResult = res.data.preResult == '' ? '等待开奖中' : res.data.preResult.split(',');   //"preResult": 
              this.preBocaiPeriods = res.data.preBocaiPeriods;  //"preBocaiPeriods": "30763817",//上期博彩期数    

            }

    },
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.bocaiTypeList = res.bocaiTypeList;
            bus.$emit('getbocaiTypeId', res.bocaiTypeList[0].bocaiId); 
            bus.$emit('getbocaiTypeName', res.bocaiTypeList[0].bocaiName); 
          }
    },
    async getOdds(item,index) {

      if(index*1 > 7) {
        this.submenu = item.name;
      } else {
        this.submenu = '更多';
      }

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
      this.bocaiTypeId = item.bocaiId;
      this.bocaiInfo();
      this.$router.push({name: path});
    }
  },
  mounted() {
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
    margin: 15px 7%;
  }
  .head-div {
    height: 116px;
    width: 600px;
    margin: 0 auto;
    padding-top: 1.1%;
    position: relative;
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
        background: url(../../static/img/header.jpg) bottom no-repeat transparent;
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