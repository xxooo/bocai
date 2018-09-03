<template>
  <div id="leftpanel">
    <div class="leftList">
      <div id="userInfo" class="userInfo">
        <p class="title">
          账户信息
          <a title="刷新" class="refresh">
            <i class="icon-refresh"></i>
          </a>
        </p> 
        <div class="info">
          <div class="info-box">
            <p><label>账户：</label><span>as3</span>(A盘)</p> 
            <p><label>现金余额：</label>4</p> 
            <p><label>锁定金额：</label><span style="color: rgb(225, 123, 52);">0</span></p> 
            <p><label>已下金额：</label><span style="color: rgb(225, 123, 52);">0</span></p>
          </div> 
          <p class="login-out"><el-button type="primary" size="mini">登出</el-button></p>
        </div>
        <div id="subnav">
          <ul>
            <li><a href="#">即时注单</a></li>
            <li><a href="#">下注历史</a></li>
            <li><a href="#">个人资讯</a></li>
            <li><a href="#">财务管理</a></li>
          </ul> 
        </div>
      </div> 
      <div class="long-dragon">
        <div class="tabmenu">
          <a>最新结果</a>
          <a>最近注单</a>
        </div>
        <div class="tabmenu">
          <a>公告</a>
          <a>长龙排行榜</a>
        </div> 
        <div class="cont">
          <div class="sum">
           
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
    margin-top: 40px;
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
    background: #9b63b7;
}

#leftpanel .leftList .userInfo .title {
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 700;
    color: #ffd04b;
    position: relative;
}

#leftpanel .leftList .userInfo .info {
    background: #ae70d4;
    background-size: 100% 100%;
    padding: 15px 5px;
    font-size: 13px;
    color: #fff;
    overflow-x: hidden;
    word-break: break-all;
    text-align: center;
}

#leftpanel .leftList .userInfo .info .info-box {
    width: 80%;
    text-align: left;
    margin: 0 auto;
    background-color: #cb87f7;
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

