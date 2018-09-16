<template>
  <div id="leftpanel">
    <div class="leftList">
      <div id="userInfo" class="userInfo">
        <p class="title">
          账户信息
          <a title="刷新" class="refresh" @click="getcUserInfo()">
            <i class="icon-refresh"></i>
          </a>
        </p> 
        <div class="info">
          <div class="info-box">
            <p><label>账户：</label><span>{{userInfo.username}}</span>({{userInfo.handicap}}盘)</p> 
            <p><label>现金余额：</label>{{userInfo.cashBalance}}</p> 
            <p><label>锁定金额：</label><span style="color: #f42222;">{{userInfo.lockBalance}}</span></p> 
            <p><label>已下金额：</label><span style="color: #f42222;">{{userInfo.alreadyBalance}}</span></p>
          </div> 
          <p class="login-out">
            <el-button type="primary" size="mini" @click="$router.push({name: 'login'})">登出</el-button>
            <el-button type="primary" size="mini">修改密码</el-button>
          </p>
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
      userInfo: {}
    };
  },
  computed: {
    ...mapGetters({
    })
  },
  async created() {
    this.getcUserInfo();
  },
  mounted(){
      bus.$on('getcUserInfo', (data) => {
        this.getcUserInfo();
      });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async getcUserInfo() {
      let res = await this.$get(`${window.url}/api/cUserInfo`);

      if(res.code===200){
        store.commit('updatecashBalance',res.data.cashBalance);

        this.userInfo = res.data;

        bus.$emit('getcuserId', res.data.id);

        // "currentPage": 0,
        // "pageSize": 10,
        // "startDate": null,
        // "endDate": null,
        // "id": "51",//用户ID
        // "username": "aydwhuiyuan1",//用户注册名称
        // "nickname": "ydwhuiyuan1",//用户昵称
        // "password": "",
        // "cashBalance": 20421200,//可用金额
        // "lockBalance": 0,//锁定金额
        // "alreadyBalance": 800,//已下注金额
        // "ruleId": 13,
        // "bankName": "1111",
        // "bankNum": "1111",
        // "bankUserName": "1111",
        // "phone": "1111",
        // "weixin": "1111",
        // "zhifubao": "1111",
        // "putForwardPassword": "1234",
        // "cashCredit": 0,
        // "creditType": null,
        // "quota": 0,
        // "handicap": "a",//用户盘口：a,b,c,d
        // "companyid": "159",
        // "pid": "164",
        // "userClass": "1-2-159-160-163-164-51",
        // "isFrozen": 0,
        // "tingyaShouya": 0,
        // "userType": 1,
        // "status": 1,
        // "createDate": 1532001115000,
        // "updateDate": 1534748779000,
        // "lockingQuota": null,
        // "isOnline": 1,
        // "quotaInfo": null,
        // "aUserOccupied": null,
        // "isHide": 1,
        // "bindingIp": "192.168.1.75",
        // "loginIp": "0:0:0:0:0:0:0:1",
        // "loginWebsite": null,
        // "teamId": 1,
        // "loginTime": 1533883022000,
        // "systemStr": null,
        // "phandicapA": null,
        // "phandicapB": null,
        // "phandicapC": null,
        // "phandicapD": null,
        // "pAllotOccupied": null,
        // "pCashCredit": null,
        // "pnickname": null,
        // "pusername": null,
        // "pquota": null

      }
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
    width: 94%;
    text-align: left;
    margin: 0 auto 10px;
    background-color: #cb87f7;
    border-radius: 5px;
    color: #ffd04b;
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

