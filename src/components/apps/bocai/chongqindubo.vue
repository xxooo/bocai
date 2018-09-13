<template>
  <div id="chongqindubo" class="content-main">
    
    <div class="right">
      <div>
        <div>
          <div id="submenu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-subnav"
              mode="horizontal"
              @select="handleSelect"
              background-color="#572f5f"
              text-color="#ffd04b"
              active-text-color="#fff">
              <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item)">{{item.name}}</el-menu-item>
              <!-- <el-menu-item index="4">北京快乐8</el-menu-item>
              <el-menu-item index="5">六合彩</el-menu-item>
              <el-menu-item index="6">广东快乐十分</el-menu-item>
              <el-menu-item index="7">广东11选5</el-menu-item>
              <el-menu-item index="8">PC蛋蛋</el-menu-item>
              <el-menu-item index="8">PC蛋蛋</el-menu-item>
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
          <div class="title-content">
            <div class="wanfaBtn">
              <el-button type="primary" size="mini">玩法规则</el-button>
            </div>
            <div class="winCurrent">
              <span>当前彩种输赢:</span>
              <span class="red">0.00</span>
            </div>
            <div class="kaipangTime">
              <div class="qiciDiv">
                <p>第 <span class="qiciSpan">{{bocaiInfoData.bocaiPeriods}}</span> 期</p>
                <p>距离下期开盘</p>
              </div>
              <!-- <clock-times :bocaiInfoData='bocaiInfoData' v-on:childByTime="childByTime"></clock-times> -->
              <div id="clockTimes">
                <center>
                <span id="clock">{{timeLeft}}</span>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div class="bet_box">
          <div class="orders">
            <div class="order-info">
              <bet-quick :istype="topbet" :orderDataList="orderDataList" :bocaiInfoData="bocaiInfoData" :bocaiCategory="bocaiCategory" v-on:childByValue="childByValue2"></bet-quick>
            </div>

            <template v-if="showOdds == '两面盘'">

              <div>
                <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="8">{{longhuhe_lmp.name}}</th>
                      </tr>
                        <tr>
                          <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 < 4">
                            <td class="tdLeft ordersTdOver" width="8%" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">{{item.oddsName}}</td>
                            <td class="tdRight" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">
                              <ul>
                                <li>
                                  <span class="odds-font">{{item.odds}}</span>
                                </li>
                              </ul>
                            </td>
                          </template>
                        </tr>
                        <tr>
                          <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 > 3">
                            <td class="tdLeft" width="8%" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">{{item.oddsName}}</td>
                            <td class="tdRight" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')"> 
                              <ul>
                                <li>
                                  <span class="odds-font">{{item.odds}}</span>
                                </li>
                              </ul>
                            </td>
                          </template>
                        </tr>
                    </table>
                </div>
              </div>

            <div class="qiu15_body">
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">{{diyiqiu_lmp.name}}</th>
                      </tr>
                      <tr v-for="(item,index) in diyiqiu_lmp.list">
                        <td class="tdLeft" :class="'diyiqiu_lmp'+item.oddsId" @click="orderTd(diyiqiu_lmp,item,'diyiqiu_lmp')" @mouseenter="overShow(item,'diyiqiu_lmp')" @mouseleave="outHide(item,'diyiqiu_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" :class="'diyiqiu_lmp'+item.oddsId" @click="orderTd(diyiqiu_lmp,item,'diyiqiu_lmp')" @mouseenter="overShow(item,'diyiqiu_lmp')" @mouseleave="outHide(item,'diyiqiu_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">{{dierqiu_lmp.name}}</th>
                      </tr>
                      <tr v-for="(item,index) in dierqiu_lmp.list">
                        <td class="tdLeft" :class="'dierqiu_lmp'+item.oddsId" @click="orderTd(dierqiu_lmp,item,'dierqiu_lmp')" @mouseenter="overShow(item,'dierqiu_lmp')" @mouseleave="outHide(item,'dierqiu_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" :class="'dierqiu_lmp'+item.oddsId" @click="orderTd(dierqiu_lmp,item,'dierqiu_lmp')" @mouseenter="overShow(item,'dierqiu_lmp')" @mouseleave="outHide(item,'dierqiu_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">{{disanqiu_lmp.name}}</th>
                      </tr>
                      <tr v-for="(item,index) in disanqiu_lmp.list">
                        <td class="tdLeft" :class="'disanqiu_lmp'+item.oddsId" @click="orderTd(disanqiu_lmp,item,'disanqiu_lmp')" @mouseenter="overShow(item,'disanqiu_lmp')" @mouseleave="outHide(item,'disanqiu_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" :class="'disanqiu_lmp'+item.oddsId" @click="orderTd(disanqiu_lmp,item,'disanqiu_lmp')" @mouseenter="overShow(item,'disanqiu_lmp')" @mouseleave="outHide(item,'disanqiu_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">{{disiqiu_lmp.name}}</th>
                      </tr>
                      <tr v-for="(item,index) in disiqiu_lmp.list">
                        <td class="tdLeft" :class="'disiqiu_lmp'+item.oddsId" @click="orderTd(disiqiu_lmp,item,'disiqiu_lmp')" @mouseenter="overShow(item,'disiqiu_lmp')" @mouseleave="outHide(item,'disiqiu_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" :class="'disiqiu_lmp'+item.oddsId" @click="orderTd(disiqiu_lmp,item,'disiqiu_lmp')" @mouseenter="overShow(item,'disiqiu_lmp')" @mouseleave="outHide(item,'disiqiu_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">{{diwuqiu_lmp.name}}</th>
                      </tr>
                      <tr v-for="(item,index) in diwuqiu_lmp.list">
                        <td class="tdLeft" :class="'diwuqiu_lmp'+item.oddsId" @click="orderTd(diwuqiu_lmp,item,'diwuqiu_lmp')" @mouseenter="overShow(item,'diwuqiu_lmp')" @mouseleave="outHide(item,'diwuqiu_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" :class="'diwuqiu_lmp'+item.oddsId" @click="orderTd(diwuqiu_lmp,item,'diwuqiu_lmp')" @mouseenter="overShow(item,'diwuqiu_lmp')" @mouseleave="outHide(item,'diwuqiu_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
            </div>

            <div>
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">{{qiansan_lmp.name}}</th>
                    </tr>
                    <tr>
                      <template v-for="(item,index) in qiansan_lmp.list">
                        <td class="tdLeft" style="width: 10%;" :class="'qiansan_lmp'+item.oddsId" @click="orderTd(qiansan_lmp,item,'qiansan_lmp')" @mouseenter="overShow(item,'qiansan_lmp')" @mouseleave="outHide(item,'qiansan_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" style="width: 10%;" :class="'qiansan_lmp'+item.oddsId" @click="orderTd(qiansan_lmp,item,'qiansan_lmp')" @mouseenter="overShow(item,'qiansan_lmp')" @mouseleave="outHide(item,'qiansan_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </template>
                    </tr>
                  </table>
              </div>
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">{{zhongsan_lmp.name}}</th>
                    </tr>
                    <tr>
                      <template v-for="(item,index) in zhongsan_lmp.list">
                        <td class="tdLeft" style="width: 10%;" :class="'zhongsan_lmp'+item.oddsId" @click="orderTd(zhongsan_lmp,item,'zhongsan_lmp')" @mouseenter="overShow(item,'zhongsan_lmp')" @mouseleave="outHide(item,'zhongsan_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" style="width: 10%;" :class="'zhongsan_lmp'+item.oddsId" @click="orderTd(zhongsan_lmp,item,'zhongsan_lmp')" @mouseenter="overShow(item,'zhongsan_lmp')" @mouseleave="outHide(item,'zhongsan_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </template>
                    </tr>
                  </table>
              </div>
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">{{housan_lmp.name}}</th>
                    </tr>
                    <tr>
                      <template v-for="(item,index) in housan_lmp.list">
                        <td class="tdLeft" style="width: 10%;" :class="'housan_lmp'+item.oddsId" @click="orderTd(housan_lmp,item,'housan_lmp')" @mouseenter="overShow(item,'housan_lmp')" @mouseleave="outHide(item,'housan_lmp')">{{item.oddsName}}</td>
                        <td class="tdRight" style="width: 10%;" :class="'housan_lmp'+item.oddsId" @click="orderTd(housan_lmp,item,'housan_lmp')" @mouseenter="overShow(item,'housan_lmp')" @mouseleave="outHide(item,'housan_lmp')">
                          <ul>
                            <li>
                              <span class="odds-font">{{item.odds}}</span>
                            </li>
                          </ul>
                        </td>
                      </template>
                    </tr>
                  </table>
              </div>
            </div>

          </template>

          <template v-if="showOdds == '1~5'">
            <div>
              <div class="qiu15_body">
                <div class="nball" v-for="(item_yiwu,index_yiwu) in oddsList">
                  <div class="order-table">
                    <table>
                      <tr><th colspan="2">{{item_yiwu.name}}</th></tr>
                      <tr v-for="(item,index) in item_yiwu.list">
                          <td v-if="isNaN(item.oddsName*1)" class="oddsNtd tdLeft" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')">{{item.oddsName}}</td>
                          <td v-else class="oddsNtd tdLeft" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')"><div class="ball-icon" >{{item.oddsName}}</div></td> 
                          <td class="oddsUltd" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')"><ul><li><span class="odds-font" >{{item.odds}}</span></li></ul></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div> 
          </template>

          </div>

          <div>
            <div class="bead-table">
              <table class="bead-ball">
                <tr>
                  <th class="active">第一球</th>
                  <th class="">第二球</th>
                  <th class="">第三球</th>
                  <th class="">第四球</th>
                  <th class="">第五球</th>
                </tr>
              </table>
              <table>
                <tr class="td-head">
                  <td>0</td> 
                  <td data-v-21ddc614="">1</td> 
                  <td data-v-21ddc614="">2</td> 
                  <td data-v-21ddc614="">3</td> 
                  <td data-v-21ddc614="">4</td> 
                  <td data-v-21ddc614="">5</td> 
                  <td data-v-21ddc614="">6</td> 
                  <td data-v-21ddc614="">7</td> 
                  <td data-v-21ddc614="">8</td> 
                  <td data-v-21ddc614="">9</td>
                </tr> 
                <tr data-v-21ddc614="">
                  <td data-v-21ddc614="">9</td>
                  <td data-v-21ddc614="">10</td>
                  <td data-v-21ddc614="">8</td>
                  <td data-v-21ddc614="">16</td>
                  <td data-v-21ddc614="">15</td>
                  <td data-v-21ddc614="">10</td>
                  <td data-v-21ddc614="">12</td>
                  <td data-v-21ddc614="">12</td>
                  <td data-v-21ddc614="">13</td>
                  <td data-v-21ddc614="">19</td>
                </tr>
              </table>
              <table data-v-21ddc614="" width="100%" class="bead-ball">
                <tr data-v-21ddc614="">
                  <th data-v-21ddc614="" class="active">第一球</th> 
                  <th data-v-21ddc614="" class="">大小</th> 
                  <th data-v-21ddc614="" class="">单双</th> 
                  <th data-v-21ddc614="" class="">总和大小</th> 
                  <th data-v-21ddc614="" class="">总和单双</th> 
                  <th data-v-21ddc614="" class="">龙虎和</th>
                </tr>
              </table>
              <table data-v-21ddc614="">
                <tr data-v-21ddc614="">
                  <td data-v-21ddc614="" width="4%" class="bead-list">
                    <p data-v-21ddc614="">4</p>
                  </td>
                  <td data-v-21ddc614="" width="4%" class="bead-list">
                    <p data-v-21ddc614="">3</p>
                  </td>
                  <td data-v-21ddc614="" width="4%" class="bead-list">
                    <p data-v-21ddc614="">4</p>
                  </td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">6</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">1</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">3</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">9</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">6</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">2</p><p data-v-21ddc614="">2</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">1</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">8</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">5</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">2</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">0</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">7</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">1</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">2</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">8</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">6</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">5</p><p data-v-21ddc614="">5</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">0</p></td>
                </tr>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
    <p style="clear: both;"></p>
  </div>
</template>

<script>
import BetQuick from '@/components/apps/bocai/components/betQuick';
import {mapState,mapGetters} from 'vuex';

export default {
  components: {
    BetQuick
  },
  data () {
    return {
      curBocaiTypeId: 1,
      curBocaiName: '重庆时时彩',
      activeName: 'second',
      botbet: false,
      topbet: true,
      bocaiCategoryList: [],
      oddsList: [],
      activeIndex: '',
      showOdds: '',
      longhuhe_lmp: {},
      diyiqiu_lmp: {},
      dierqiu_lmp: {},
      disanqiu_lmp: {},
      disiqiu_lmp: {},
      diwuqiu_lmp: {},
      qiansan_lmp: {},
      zhongsan_lmp: {},
      housan_lmp:{},
      orderDataList: [],
      bocaiInfoData: {},
      timeLeft:'',
      bocaiCategory: {}
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  created() {
    this.getOdds(this.curBocaiTypeId);
    this.bocaiInfo(this.curBocaiTypeId);
    //this.gettimeLeft();
  },
  methods: {
    childByValue2(data) {
      this.orderDataList = [];
    },
    getNowFormatDate() {
        var date = new Date();

       // console.log('date',date);


        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    },
    getLocalTime(nS) {     
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
    },
    gettimeLeft() {
        var hourtime="24:00:00";
        var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);

        var now = new Date();

        var nowYear=now.getFullYear();
        var nowMonth=now.getMonth()+1;
        var nowDay=now.getDate();

        //var leftTime = endTime.getTime() - now.getTime();
        //console.log('this.bocaiInfoData.openPrizeTime',this.bocaiInfoData.openPrizeTime);
        let timessss = this.getNowFormatDate();
        //console.log('this.bocaiInfoData.openPrizeTime',this.bocaiInfoData.openPrizeTime);
        //console.log('this.bocaiInfoData.openPrizeTime',this.getLocalTime(this.bocaiInfoData.openPrizeTime));
        //console.log('timessss',timessss);
        //console.log('now.getTime()',now.getTime());

        var leftTime = this.bocaiInfoData.openPrizeTime - now.getTime();

        //onsole.log('leftTime',leftTime);
        var ms = parseInt(leftTime % 1000).toString();
        leftTime = parseInt(leftTime / 1000);
        var o = Math.floor(leftTime / 3600);
        var d = Math.floor(o / 24);
        var m = Math.floor(leftTime / 60 % 60);
        var s = leftTime % 60;

        this.timeLeft = o + ":" + m + ":" + s;

        setTimeout(this.gettimeLeft, 100);

        //openPrizeTime
    },
    childByTime(childByTime) {
      console.log('childByTime',childByTime);
    },
    outHide(item,ids) {
      $('.'+ids+item.oddsId).removeClass('overTd');
    },
    overShow(item,ids) {
      $('.'+ids+item.oddsId).addClass('overTd');
    },
    orderTd(oddsObj,item,ids) {

      if($('.'+ids+item.oddsId).hasClass('selected')){
        $('.'+ids+item.oddsId).removeClass('selected');

        _.remove(this.orderDataList, function(n) {
          return n.bocaiOddName == item.oddsName;
        });

      } else {
        $('.'+ids+item.oddsId).addClass('selected');
        let obj = {
          bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
          bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
          bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
          bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
          bocaiValue:"",//投注内容,六合彩连肖/连尾
          normalMoney:0,//10000,//一般模式下，选择的金额
          orderNormal: false,   //是快捷，还是一般投注
          bocaiOdds: item.odds//1.90//赔率
        };

        this.orderDataList.push(obj);
      }
    },
    handleSelect(key, keyPath) {
        //console.log(key, keyPath);
    },
    async getOddsCategory(item) {

      let that = this;

          NProgress.start();
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+1+`&bocaiCategoryId=`+item.id).then((res) => {
            that.$handelResponse(res, (result) => {
              NProgress.done();
              that.showOdds = item.name;
              that.bocaiCategory = item;
              if(result.code===200){
                that.oddsList = result.oddsList;
                that.shuaiXuanDatas(result.oddsList);
              }

            })
          });
    },
    async getOdds(id) {

      let that = this;

          NProgress.start();
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+id).then((res) => {
            that.$handelResponse(res, (result) => {
              NProgress.done();
              if(result.code===200){
                that.bocaiCategoryList = result.bocaiCategoryList;
                that.oddsList = result.oddsList;
                that.showOdds = result.bocaiCategoryList[0].name;
                that.bocaiCategory = result.bocaiCategoryList[0];
                that.activeIndex = that.bocaiCategoryList[0].name;
                that.shuaiXuanDatas(result.oddsList);

                bus.$emit('getbocaiTypeId', this.curBocaiTypeId); 
                bus.$emit('getbocaiTypeName', this.curBocaiName); 

              }

            })
          });

    },
    async bocaiInfo(id) {
      let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+id);

          if(res.code===200){
            this.bocaiInfoData = res.data;
 			      let str = "07,02,04,10,01,03,08,09,05,06";
            // bus.$emit('getpreResult', str.split(','));   //"preResult": "07,02,04,10,01,03,08,09,05,06",//上一期结果
            // bus.$emit('getpreBocaiPeriods', "30763817");   //"preBocaiPeriods": "30763817",//上期博彩期数  
            bus.$emit('getpreResult', res.data.preResult == '' ? '等待开奖中' : res.data.preResult.split(','));   //"preResult": "07,02,04,10,01,03,08,09,05,06",//上一期结果
            bus.$emit('getpreBocaiPeriods', res.data.preBocaiPeriods);   //"preBocaiPeriods": "30763817",//上期博彩期数            
            this.gettimeLeft();
          }

    },
    shuaiXuanDatas(dataList) {
      for(let n in dataList) {
        if(this.showOdds == '两面盘') {
          if(dataList[n].name == '总和-龙虎和') {
            this.longhuhe_lmp = dataList[n];
          } else if(dataList[n].name == '第一球') {
            this.diyiqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第二球') {
            this.dierqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第三球') {
            this.disanqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第四球') {
            this.disiqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第五球') {
            this.diwuqiu_lmp = dataList[n];
          } else if(dataList[n].name == '前三') {
            this.qiansan_lmp = dataList[n];
          } else if(dataList[n].name == '中三') {
            this.zhongsan_lmp = dataList[n];
          } else if(dataList[n].name == '后三') {
            this.housan_lmp = dataList[n];
          }
        }
      }
    }

  }
}

</script>

<style scoped>
.right {
    position: relative;
}

.bet_box {
    width: 830px;
    overflow-x: hidden;
}

.orders {
    padding: 6px 0;
}

.bet_box .orders td.overTd {
  background-color: #ffe59b;
}
.bet_box .orders td.selected {
  background-color: #ffd04b;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.order-table table {
    font-size: 12px;
    width: 100%;
    border-collapse: collapse;
    border-top: none;
    margin-bottom: 10px;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

table > tr {
    vertical-align: middle;
}

address, button, caption, cite, code, dfn, em, input, optgroup, option, select, strong, textarea, th, var {
    font: inherit;
}

caption, th {
    text-align: left;
}

.order-table th {
    line-height: 1.8;
    background-color: #ccb0da;
    text-align: center;
    border-bottom: none;
    color: #511e02;
    font-weight: 700;
    height: 30px;
    font-size: 14px;
    border: 1px solid #b2b1b9;
}

.order-table td {
    position: relative;
    overflow: hidden;
    background-clip: padding-box;
    color: #511e02;
    height: 30px;
    min-width: 24px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #bbb;
    background-color: #f9f8f9;
}

td.tdLeft {
  cursor: pointer;
}

td.tdLeft {
  color: #511e02;
  font-weight: 700;
}

.qiu15_body td.tdLeft:nth-child(1) {
    width: 40px;
}

td.tdRight {
    cursor: pointer;
    position: relative;
}

.tdRight ul {
    height: 100%;
    overflow: hidden;
}

.tdRight ul li {
    padding: 7px 0;
    display: inline-block;
    width: 40%;
    margin: 0;
}

.tdRight ul li:only-child {
    width: 100%;
}

.odds-font {
    color: #d63e35;
    font-weight: 700;
}

.tdRight span {
    cursor: pointer;
    display: inline-block;
}

.tdHover {
  background: #fcf1b4;
}

.tdClick {
  background: #faf014;
}

.eball {
    display: inline-block;
    width: 162px;
    margin-right: 0px;
}

.bead-table {
    padding: 0;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.bead-table table {
    border-radius: 5px 5px 0 0;
    background-color: #fefdfc;
}

.bead-table table {
    width: 100%;
    border-collapse: collapse;
    border-top: none;
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
}

.bead-table .bead-ball {
    margin-bottom: 0;
    margin-top: 5px;
}

.bead-table .bead-ball th {
    text-align: center;
    cursor: pointer;
    color: #511e02;
    font-size: 13px;
    font-weight: 700;
    background-color: #ffd04b;
}

.bead-table .bead-ball th:first-child {
    border-top-left-radius: 5px;
}

.bead-table .bead-ball th.active {
    color: #fdfcfa;
    cursor: default;
    background-color: #ff9800;
}
.bead-table .bead-ball th+th {
    border-left: 1px solid #b299d8;
}
.bead-table table td {
    text-align: center;
    border: 1px solid #bbb;
}
.td-head td {
    width: 10%;
}
.bead-table table .td-head td {
    color: #35406d;
    font-weight: 700;
}
.bead-table table td.bead-list {
    vertical-align: top;
    line-height: 20px;
    width: 4%;
}
.bead-table table td.bead-list:nth-child(2n+1) {
    background-color: #f8f8fd;
}
.bead-table .bead-ball th:last-child {
    border-top-right-radius: 5px;
    border-right: none;
}
.nball .order-table .ball-icon {
    background-color: #0433de;
    color: #fff;
    width: 25px;
    height: 25px;
    margin: 2.5px 7.5px;
    line-height: 27.5px;
    border-radius: 30px;
}
.nball {
    display: inline-block;
    width: 162px;
    margin-right: 4px;
}
.nball .order-table td.oddsNtd{
    cursor: pointer;
}
.nball .order-table td.oddsNtd{
    color: #511e02;
    font-weight: 700;
}
.nball .order-table td.oddsUltd{
    cursor: pointer;
    position: relative;
}
.nball .order-table ul {
    height: 100%;
    overflow: hidden;
}
.nball .order-table ul li {
    padding: 7px 0;
    display: inline-block;
    width: 40%;
    margin: 0;
}
.nball .order-table ul li {
    padding: 7px 0;
    display: inline-block;
    width: 40%;
    margin: 0;
}
.nball .order-table ul li:only-child {
    width: 100%;
}
.nball .order-table span {
    cursor: pointer;
    display: inline-block;
}

</style>
