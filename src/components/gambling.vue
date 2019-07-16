<template>
  <div id="main">
    <div id="header">
      <el-header height="216">
        <div class="headerFather">
          <div class="fenghuangimg"></div>
          <div class="head-div">
            <div class="centerDiv">
              <div class="headImg">
                <img :src="icons[imgUrl]">
                <div class="preBocaiPeriods"><p class="qicip">-第 <span>{{bocaiInfoData.preBocaiPeriods}}</span> 期-</p></div>
              </div>
              <div class="headLabel" :class="'headLabel'+preResult.length">
                <div class="activeIndex"><h3>{{bocaiName}}</h3></div>
                <div class="preResult">
                  <!-- <ul v-if="hasResult" class="result-list">
                    <li v-for="(item,index) in preResult" :class="'loadanimot'+index" class="bjpk-ran bjpk-ranNo-5 orangeShishiC bounce animated"></li>
                  </ul> -->
                  <ul class="result-list">
                    <li v-for="(item,index) in preResult" :class="['loadanimot'+index,'sizeNum'+preResult.length]" class="bjpk-ran bjpk-ranNo-5 orangeShishiC"></li>
                  </ul>
                </div>
              </div>
              <div class="history_num">
                <div class="btn-group">
                  <a id="show_history" class="active"><span>近期开奖</span></a>
                </div>
                <div class="history_run_num">
                  <ul>
                    <li v-for="item in resultList" :title="item.result">{{item.periods}}<span>{{item.result ? item.result : '暂未开奖'}}</span></li>
                  </ul>
                </div>                                 
              </div>
            </div>
          </div>
          <div class="rightMenu">
            <ul>
              <li @click="goRightMenu('instantorder')">即时注单</li>
              <li @click="goRightMenu('bettingHistory')">下注历史</li>
              <li @click="goRightMenu('personalinfo')">个人资讯</li>
              <li v-if="userInfo.cashCredit == 0" @click="goRightMenu('caiwumanager')">财务管理</li>
              <li @click="goRightMenu('lotteryResults')">开奖结果</li>
              <li @click="goRightMenu('gameRule')">游戏规则</li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-menu
          :default-active="bocaiName"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#1e140d"
          text-color="#ebcb80"
          active-text-color="#f6e9c7">

          <el-menu-item v-for="(item,index) in bocaiTypeList" :key="index" :index="item.bocaiName"  @click="getOdds(item,index)" v-if="index*1 < 8">{{item.bocaiName}}</el-menu-item>
          <el-submenu v-if="bocaiTypeList.length*1 > 8" key="submenu" index="submenu">
            <template slot="title">{{subbocaiName}}</template>
            <el-menu-item v-for="(item,index) in bocaiTypeList" :key="index" :index="item.bocaiName"  @click="getOdds(item,index)" v-if="index*1 > 7">{{item.bocaiName}}</el-menu-item>
          </el-submenu>

      </el-menu>
    </div>
    
    <el-main>
      <div id="content">
      <left-panel></left-panel>
      <div id="routerMain" v-if="bocaiTypeList.length != 0">
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

    <message-dialog></message-dialog>

  </div>
</template>

<script>

import LeftPanel from '@/components/common/leftpanel';
import PageFooter from '@/components/common/pagefooter';
import MessageDialog from '@/components/common/messagedialog';
import { mapGetters } from 'vuex';

export default {
  components: {
    LeftPanel,
    PageFooter,
    MessageDialog
  },
  data() {
    return {
      min : 0, //生成的最小的数字，比如200
      max : 9, //生成的最大的数字，比如500
      imgUrl: 0,
      t1: null, //轮询  博彩信息
      t2: null, //轮询  动画
      resultList: [],
      preResult: '',
      submenu: '',
      icons:[
            require('@/assets/img/chongqindubo.png'),
            require('@/assets/img/luckyairship.png'),
            require('@/assets/img/beijingpk10.png'),
            require('@/assets/img/shandong11xuan5.png'),
            require('@/assets/img/guangdong11xuan5.png'),
            require('@/assets/img/jiangxi11xuan5.png'),
            require('@/assets/img/pcdandan.png'),
            require('@/assets/img/jiangsukuaisan.png'),
            require('@/assets/img/beijingkuaile8.png'),
            require('@/assets/img/jisusaiche.png'),
            require('@/assets/img/jisudubo.png'),
            require('@/assets/img/marksix.png')
          ],
      messageinfo: '',
      centerDialogVisible: false

    }
  },
  async created() {

    this.getbocaoName();

    if(this.bocaiTypeList.length == 0) {
      //console.log('????111111?');
      this.getbocai();
    } else {
      //console.log('????2222?');
      this.bocaiInfo();
    }

    this.myTimer();

    this.openPrizeTime = this.$timestampToTimeRi(new Date());

    this.getcUserInfo();

    //只循环一个
    this.getBocaiInfo5sOnce();

  },
  computed: {
    ...mapGetters({
      userInfo: 'getuserInfo',
      bocaiTypeList: 'getbocaiTypeList',
      bocaiTypeId: 'getbocaiTypeId',
      bocaiName: 'getbocaiName',
      hasResult: 'gethasResult',
      bocaiInfoData: 'getbocaiInfoData',
      bocaiCategory: 'getbocaiCategory'
    }),
    bocaiPathName: function() {
      return this.$route.name
    },
    subbocaiName() {
      let num = 0;

      for(let n in this.bocaiTypeList) {
        if(this.bocaiName == this.bocaiTypeList[n].bocaiName) {
          num = n;
        }
      }

      return +num > 7 ? this.bocaiName : '更多';
    }
  },
  beforeDestroy: function() {
      this.clearTime();
  },
  methods: {
    async getbocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

      if(res.code===200){
        store.commit('updatebocaiTypeList',res.bocaiTypeList);

        this.bocaiInfo();
      }
    },
    clearTime() {
      if (this.t1) {
        clearTimeout(this.t1)
      }
      if (this.t2) {
        clearTimeout(this.t2)
      }
    },
    async getcUserInfo() {
      let res = await this.$get(`${window.url}/api/cUserInfo?num=10`);

      if(res.code===200){
        store.commit('updateuserInfo',res.data);
      }
    },
    goRightMenu(path) {
      this.getnotice();
      this.$router.push({name: path});
    },
    myTimer() {

      if(!this.hasResult) {
        for(let n in this.preResult) {
          let kk = parseInt(Math.random() * (this.max - this.min + 1) +this. min);
          $('.loadanimot'+n).html(kk);
          $('.loadanimot'+n).removeClass('bounce animated');
        }
      } else {
        //这里无限循环...

        for(let n in this.preResult) {
          let kk = this.preResult[n];
          $('.loadanimot'+n).html(kk);
          $('.loadanimot'+n).addClass('bounce animated');
        }
      }
      this.t2 = setTimeout(this.myTimer, 100);
    },
    async bocaiInfo() {

      if(this.bocaiTypeId != '') {
        let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+this.bocaiTypeId);

            if(res.code===200){

               store.commit('updatebocaiInfoData',res.data);

               if(res.data.companyIsOpenSet == 2) {
                if(res.data.isOpenSet == 1) {


                  if(res.data.preResult == '') {

                    if([8555,8806,9057].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待开奖中等待开奖中';
                    } else if([8223,8498].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待中';
                    } else if([8266].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待开奖中等待开奖中等待开奖中等待开奖中';
                    } else if([8808].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待开奖中等待';
                    } else {
                      this.preResult = '等待开奖中';
                    }

                    store.commit('updatehasResult',false);

                  } else {

                    this.preResult = res.data.preResult.split(',');

                    store.commit('updatehasResult',true);

                  }

                  this.getPrizeResultNew();
                  bus.$emit('getchanglong', '');
                  store.commit('updateisOpenOdds',true);

                } else {
                  store.commit('updateisOpenOdds',false);
                }

              } else {
                store.commit('updateisOpenOdds',false);
              }

        }
      }

    },
    async getPrizeResultNew() { 

      console.log('getPrizeResultNew');

      if(this.bocaiTypeId != '') {
        let res = await this.$get(`${window.url}/api/openPrizeResult?bocaiTypeId=`+this.bocaiTypeId+`&currentPage=1&pageSize=5&dayStr=`+this.openPrizeTime);
          if(res.code===200){
            this.resultList = res.list.slice(0,5);
            for(let n in this.resultList) {
              if(this.resultList[n].result) {
                this.resultList[n].result = this.resultList[n].result.replace(/,/g,'');   
              }
            }
          }
      }


    },
    async getBocaiInfo5sOnce() { 
      //console.log('5秒调一次','this.preResult',this.preResult,'this.iskaipaning',this.iskaipaning);

       if(!this.hasResult && this.isOpenOdds) {

        if(this.bocaiTypeId != '') {
          let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+this.bocaiTypeId);

            if(res.code===200){

              store.commit('updatebocaiInfoData',res.data);

               if(res.data.companyIsOpenSet == 2) {
                if(res.data.isOpenSet == 1) {


                  if(res.data.preResult == '') {

                    if([8555,8806,9057].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待开奖中等待开奖中';
                    } else if([8223,8498].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待中';
                    } else if([8266].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待开奖中等待开奖中等待开奖中等待开奖中';
                    } else if([8808].findIndex((n) => n==this.bocaiTypeId)>-1) {
                      this.preResult = '等待开奖中等待';
                    } else {
                      this.preResult = '等待开奖中';
                    }

                    store.commit('updatehasResult',false);

                  } else {

                    this.preResult = res.data.preResult.split(',');

                    store.commit('updatehasResult',true);

                    this.getPrizeResultNew();
                    bus.$emit('getchanglong', '');


                  }

                  store.commit('updateisOpenOdds',true);

                } else {
                  store.commit('updateisOpenOdds',false);
                }

              } else {
                store.commit('updateisOpenOdds',false);
              }

            }
        }

      }

        this.t1 = setTimeout(this.getBocaiInfo5sOnce, window.refreshTimeFast);
    },
    getbocaoName() {

      let typeid = '';
      let name = '';

      let path = '';
        switch (this.bocaiPathName) {
          case 'chongqindubo':
            typeid = '1';
            this.imgUrl = 0;
            name = '重庆时时彩';
            break;
          case 'luckyairship':
            typeid = '8555';
            this.imgUrl = 1;
            name = '幸运飞艇';
            break;
          case 'beijingpk10':
            typeid = '8806';
            this.imgUrl = 2;
            name = '北京PK拾';
            break;
          case 'shandong11xuan5':
            typeid = '8811';
            this.imgUrl = 3;
            name = '山东11选5';
            break;
          case 'guangdong11xuan5':
            typeid = '8374';
            this.imgUrl = 4;
            name = '广东11选5';
            break;
          case 'jiangxi11xuan5':
            typeid = '8813';
            this.imgUrl = 5;
            name = '极速时时彩';
            break;
          case 'pcdandan':
            typeid = '8223';
            this.imgUrl = 6;
            name = 'PC蛋蛋';
            break;
          case 'jiangsukuaisan':
            typeid = '8498';
            this.imgUrl = 7;
            name = '江苏快3';
            break;
          case 'beijingkuaile8':
            typeid = '8266';
            this.imgUrl = 8;
            name = '北京快乐8';
            break;
          case 'jisusaiche':
            typeid = '9057';
            this.imgUrl = 9;
            name = '极速赛车';
            break;
          case 'jisudubo':
            typeid = '8815';
            this.imgUrl = 10;
            name = '极速时时彩';
            break;
          case 'marksix':
            typeid = '8808';
            this.imgUrl = 11;
            name = '六合彩';
            break;
        }

        store.commit('updatebocaiName',name);

        store.commit('updatebocaiTypeId', typeid);

        //this.getPrizeResult();
        //this.refreshTime();

    },
    async getnotice() {

      //console.log('yy---getnotice');

      let res = await this.$get(`${window.url}/api/notice`);

          if(res.code===200){

            bus.$emit('getmessage', res.data);
          } else {
          }

    },
    async getOdds(item,index) {

      console.log('item---getnotice',item);
      //console.log('item---index',index);

      if(['重庆时时彩','幸运飞艇','北京PK拾','山东11选5','广东11选5','江西11选5','PC蛋蛋','江苏快3','北京快乐8','极速赛车','极速时时彩','六合彩'].findIndex((n) => n==item.bocaiName)>-1) {

        store.commit('updatebocaiName',item.bocaiName);

        this.getnotice();

        if(index*1 > 7) {
         // console.log(item); 
          this.submenu = item.bocaiName;
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
            case '北京PK拾':
              path = 'beijingpk10';
              this.imgUrl = 2;
              break;
            case '山东11选5':
              path = 'shandong11xuan5';
              this.imgUrl = 3;
              break;
            case '广东11选5':
              path = 'guangdong11xuan5';
              this.imgUrl = 4;
              break;
            case '江西11选5':
              path = 'jiangxi11xuan5';
              this.imgUrl = 5;
              break;
            case 'PC蛋蛋':
              path = 'pcdandan';
              this.imgUrl = 6;
              break;
            case '江苏快3':
              path = 'jiangsukuaisan';
              this.imgUrl = 7;
              break;
            case '北京快乐8':
              path = 'beijingkuaile8';
              this.imgUrl = 8;
              break;
            case '极速赛车':
              path = 'jisusaiche';
              this.imgUrl = 9;
              break;
            case '极速时时彩':
              path = 'jisudubo';
              this.imgUrl = 10;
              break;
            case '六合彩':
              path = 'marksix';
              this.imgUrl = 11;
              break;
          }

        store.commit('updatebocaiTypeId',item.bocaiId);

        this.bocaiInfo();

        //this.clearTime();

        this.$router.push({name: path});

      } else {
        this.$warning('此博彩还未完成,请耐心等待! 谢谢');
      }

      
    },
    //切换菠菜获取菠菜二级菜单并调数据接口
    async getOddsInfo() {

      let that = this;

          // const loading = this.$loading({
          //       lock: true,
          //       background: 'rgba(0, 0, 0, 0.7)'
          //     });

          if(this.bocaiTypeId!='') {
            await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.bocaiTypeId).then((res) => {
            that.$handelResponse(res, (result) => {

              // loading.close();
              if(result.code===200){

                that.bocaiCategoryList = result.bocaiCategoryList;


                store.commit('updatebocaiCategory',result.bocaiCategoryList[0]);

                //获取菠菜数据
                this.getOddsCategory(result.bocaiCategoryList[0]);

                //获取菠菜信息
                this.bocaiInfo();

              }
            })
          });
          }

          

    }

  },
  mounted() {
    bus.$on('getbocaiInfo', (data) => {
        this.bocaiInfo();
    });
    bus.$on('getcUserInfo', (data) => {
      this.getcUserInfo();
    });
    bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
    });
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

  .centerDiv >div {
    float: left;
    height: 136px;
  }
  .headLabel {
    color: #fff;
    width: 380px;
  }
  .headLabel.headLabel10 {
    width: 300px;
    margin: 0px 20px;
  }
  .headLabel h3 {
    color: #805933;
  }
  .headLabel .activeIndex,.headLabel .preBocaiPeriods {
    margin: 10px 0px 10px -20px;
  }
  .headLabel .preResult {
    margin: 20px 0;
  }

  .headLabel.headLabel10 .preResult {
    margin: 0;
  }

  .head-div {
    height: 140px;
    width: 800px;
    padding-top: 1.1%;
    margin: 0 auto;
    background: url(../../static/img/caibaobg.png) center no-repeat;
    background-size: 100% 100%;
    display:inline-block;
  }
  .centerDiv {
    height: 140px;
    width: 700px;
    margin: 0 auto;
    position: relative;
    background: url(../../static/img/kaijiangbg.png) center no-repeat;
    background-size: 100% 100%;
  }
  .history_num {
    width: 160px;
    text-align: left;
  }
  .history_num li {
    color: #ff9800;
  }
  .history_num li span {
    color: #805933;
    padding: 0 10px;
  }
  .history_num .btn-group {
    text-align: left;
    color: #805933;
    margin: 10px 5px 2px;
  }
  .fenghuangimg {
    height: 155px;
    width: 210px;
    position: absolute;
    margin-left: 2%;
    background: url(../../static/img/logo.png) center no-repeat;
    background-size: 100% 100%;
  }
  .rightMenu {
    background: #3d270d;
    border: 1px solid #8f541b;
    border-radius: 6px;
    margin-top: 5px;
    margin-left: 50px;
    float: right;
    height: 144px;
    width: 80px;
    display: inline-block;
    position: absolute;
  }
  .rightMenu li {
    margin: 2.7px;
  }
  .rightMenu li:hover {
    color: #f6e9c7;
  }
  .headImg >img {
    height: 70px;
    margin-top: 25px;
  }
  .headImg {
    margin-left: 10px;
    width: 146px;
  }
  .game-result ul {
    margin: 10px 10px 0;
  }
  /*.bjpk-ran {
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin: 0px 3px;
  }*/
  .bjpk-ran.sizeNum5 {
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin: 0px 3px;
  }
  .bjpk-ran.sizeNum10 {
    width: 45px;
    height: 45px;
    line-height: 45px;
    margin: 0px 3px;
  }
  .bjpk-ran.sizeNum3 {
    width: 80px;
    height: 80px;
    line-height: 80px;
    margin: 0px 3px;
  }
  .bjpk-ran.sizeNum20 {
    width: 26px;
    height: 26px;
    line-height: 26px;
    margin: 0px 3px;
    font-size: 16px !important;
  }
  .bjpk-ran.sizeNum21 {
    width: 26px;
    height: 26px;
    line-height: 26px;
    margin: 0px 3px;
    font-size: 16px !important;
  }
  .bjpk-ran, .bjpk-ran-s {
    display: inline-block;
    color: #fff;
    border-radius: 50px;
    font-family: Microsoft YaHei,Verdana,SimSun,Arial,Helvetica,sans-serif;
    font-size: 28px;
  }
  .bjpk-ranNo-1 {
    background-color: #ffd64c;
  }
  .orangeShishiC {
    background: url(../../static/img/num_bg.png) center no-repeat;
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
    color: #80664b;
  }
  .preBocaiPeriods .qicip span {
    color: #ff9800;
  }
  .headerFather {
    width: 1200px;
    margin: 0 auto;
  }
</style>
<style lang="less">
#main {
    width: 100%;
    height: 100%;
    position: relative;

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
      font-size: 18px;
    }

    .el-menu-item.is-active {
      background-size: 100% 100%;
      color: #ffea00;
      cursor: point;
      border-bottom: 0px solid #6c3092;
    }

    .el-menu-item:hover {
      color: #f6e9c7 !important;
    }

    .el-menu-item {
      padding: 0 18px;
      font-family: SourceHanSansSC-Medium;
      font-size: 18px;
      letter-spacing: 0;
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
        background: url(../../static/img/header.png) center no-repeat;
        background-size: 100% 100%;
    }

    .el-header {
      padding: 0px;
    }


  footer {
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

</style>