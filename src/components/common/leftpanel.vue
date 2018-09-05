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
        </div>
        <div class="tabmenu">
          <a>最近注单</a>
        </div>
        <div class="tabmenu">
          <a>公告</a>
        </div>
        <div class="tabmenu">
          <a>长龙排行榜</a>
        </div> 
        <div class="cont">
          <div class="sum">
            <div data-v-1c2d87c0="" class="table">
              <table data-v-1c2d87c0="">
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">第四名 龙</a></td> 
                  <td data-v-1c2d87c0="" class="period">5 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">第五名 双</a></td> 
                  <td data-v-1c2d87c0="" class="period">3 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">第七名 小</a></td> 
                  <td data-v-1c2d87c0="" class="period">3 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">第八名 单</a></td>
                  <td data-v-1c2d87c0="" class="period">3 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">冠亚军和 大</a></td> 
                  <td data-v-1c2d87c0="" class="period">3 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">冠军 大</a></td> 
                  <td data-v-1c2d87c0="" class="period">2 期</td>
                </tr>
                <tr data-v-1c2d87c0=""><td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">冠军 龙</a></td> 
                  <td data-v-1c2d87c0="" class="period">2 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">亚军 单</a></td> 
                  <td data-v-1c2d87c0="" class="period">2 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">亚军 虎</a></td> 
                  <td data-v-1c2d87c0="" class="period">2 期</td>
                </tr>
                <tr data-v-1c2d87c0="">
                  <td data-v-1c2d87c0="" class="type"></td> 
                  <td data-v-1c2d87c0="" class="name"><a data-v-1c2d87c0="" href="javascript:;">第三名 双</a></td> 
                  <td data-v-1c2d87c0="" class="period">2 期</td>
                </tr>
              </table>
            </div>
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
    margin-left: 10px;
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

.tabmenu {
  display: inline-block;
  float: left;
  width: 120px;
  height: 32px;
  color: #944e03;
  background: url(./../../../static/img/gold-btn-spirit_mo.png);
}

.tabmenu:hover {
  background: url(./../../../static/img/gold-btn-spirit_hover.png);
  color: #fff;
}

.tabmenu a {
  width: 100%;
  height: 32px;
  line-height: 32px;
}

#leftpanel .leftList .long-dragon .cont .table {
    background: #f8f8f8;
    margin: 8px 0;
    padding-bottom: 1px;
}

#leftpanel .leftList .long-dragon .cont .table table {
    width: 100%;
    line-height: 26px;
}

#leftpanel .leftList .long-dragon .cont .table table tr {
    border-top: 1px solid #eee;
}

#leftpanel.leftList .long-dragon .cont .table table tr td {
    padding: 1px 0;
    font-size: 13px;
}

#leftpanel .leftList .long-dragon .cont .table table tr td.type {
    width: 6px;
}

#leftpanel .leftList .long-dragon .cont .table table tr td.name {
    width: 130px;
    padding-left: 6px;
}

#leftpanel .leftList .long-dragon .cont .table table tr td.name a {
    color: #694909;
    text-decoration: none;
    float: left;
}

#leftpanel .leftList .long-dragon .cont .table table tr td.period {
    width: 80px;
    padding-right: 12px;
    text-align: right;
    color: #f42222;
}

</style>

