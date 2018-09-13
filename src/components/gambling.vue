<template>
  <div id="main">
    <div id="header">
      <el-header height="216">
        <div class="head-div">
          <img :src="icons[1]">
          <span>{{preResult}}</span>
        </div>
      </el-header>
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#6c3092"
          text-color="#ffd04b"
          active-text-color="#ffd04b">

          <el-menu-item v-for="(item,index) in bocaiTypeList" :key="index" :index="item.bocaiName"  @click="getOdds(item.bocaiName)">{{item.bocaiName}}</el-menu-item>
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
      activeIndex: '重庆时时彩',
      bocaiTypeList: [],
      preResult: '',
      icons:[
            // require('@/assets/img/report/1.png'),
            // require('@/assets/img/report/2.png'),
            // require('@/assets/img/report/3.png')
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
      //console.log(key, keyPath);
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.bocaiTypeList = res.bocaiTypeList;
          }
    },
    async getOdds(bocaiName) {

      let path = '';
        switch (bocaiName) {
          case '重庆时时彩':
            path = 'chongqindubo';
            break;
          case '幸运飞艇':
            path = 'luckyairship';
            break;
        }

      this.$router.push({name: path});
    }
  },
  mounted() {
      var vm = this;
      // 用$on事件来接收参数
      bus.$on('val', (data) => {
        console.log(data);
        vm.preResult = data;
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