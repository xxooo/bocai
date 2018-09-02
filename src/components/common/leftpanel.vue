<template>
  <div id="leftpanel">
    <div data-v-1c2d87c0="" class="leftList">
    <div data-v-1c2d87c0="" id="userInfo" class="userInfo">
      <p data-v-1c2d87c0="" class="title">
        账户信息
        <a data-v-1c2d87c0="" title="刷新" class="refresh">
        <i data-v-1c2d87c0="" class="icon-refresh"></i>
        </a>
      </p> 
      <div data-v-1c2d87c0="" class="info">
      <div data-v-1c2d87c0="" class="info-box">
      <p data-v-1c2d87c0="">
      <label data-v-1c2d87c0="">账户：</label>
      <span data-v-1c2d87c0="">as3</span>
            (A盘)</p> 
            <p data-v-1c2d87c0="">
            <label data-v-1c2d87c0="">现金余额：</label>4</p> 
            <p data-v-1c2d87c0=""><label data-v-1c2d87c0="">锁定金额：</label><span data-v-1c2d87c0="" style="color: rgb(225, 123, 52);">0</span></p> 
            <p data-v-1c2d87c0=""><label data-v-1c2d87c0="">已下金额：</label><span data-v-1c2d87c0="" style="color: rgb(225, 123, 52);">0</span></p>
      </div> 
        <p data-v-1c2d87c0="" class="login-out">  
          <el-button type="primary" size="mini">登出</el-button>
        </p>
    </div>
    </div> 
    <div data-v-1c2d87c0="" class="long-dragon">
    <div data-v-1c2d87c0="" class="tab">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理333</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div> 
    <div data-v-1c2d87c0="" class="cont">
    <ul data-v-1c2d87c0="">
    <li data-v-1c2d87c0="" class="active">连续开奖</li> 
    <li data-v-1c2d87c0="" class="">连续未开</li>
     <li data-v-1c2d87c0="">更多长龙</li>
     </ul> 
     <div data-v-1c2d87c0="" class="sum">
     <h2 data-v-1c2d87c0="">
     <span data-v-1c2d87c0="">￥</span>长龙投注GO</h2> 
     <p data-v-1c2d87c0="">统计至<span data-v-1c2d87c0="">701671期</span></p>
     </div>
      <div data-v-1c2d87c0="" class="table">
      <table data-v-1c2d87c0=""></table>
      </div>
      </div>
      </div>
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      activeName2: 'first'
    };
  },
  computed: {
    ...mapGetters({
    })
  },
  async created() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>

#leftpanel {
    background-size: 100% auto;
    width: 240px;
    float: left;
}

#leftpanel .leftList .long-dragon {
    background-color: #f8f8f8;
}
.long-dragon, .quick-bet {
    margin-top: 10px;
}

#leftpanel .leftList .title {
    position: relative;
    text-align: center;
    overflow: hidden;
    background: #53200f;
}

#leftpanel .leftList .userInfo .title {
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 700;
    color: #511e02;
    position: relative;
}

#leftpanel .leftList .userInfo .info {
    background: #f9f8f7;
    background-size: 100% 100%;
    padding: 15px 5px;
    font-size: 13px;
    color: #544a47;
    overflow-x: hidden;
    word-break: break-all;
    text-align: center;
    border: 1px solid #ffdf70;
}

#leftpanel .leftList .userInfo .info .info-box {
    width: 80%;
    text-align: left;
    margin: 0 auto;
    background-color: #310f80;
    border-radius: 5px;
    color: #d6cebf;
    font-weight: 700;
    padding: 5px 0;
}

#leftpanel .leftList .userInfo .info .info-box p {
    line-height: 30px;
}

#leftpanel .leftList .userInfo .info .info-box p label {
    display: inline-block;
    width: 6em;
    text-align: right;
    line-height: 24px;
}

#leftpanel .leftList .long-dragon .cont {
    width: 240px;
    background-color: #ffe37e;
}

</style>

