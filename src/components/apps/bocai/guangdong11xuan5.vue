<template>
  <div id="chongqindubo" class="content-main duboBodyClass">
    
    <div class="right">
      <div>
        <div>
          <div id="submenu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-subnav"
              mode="horizontal"
              @select="handleSelect"
              text-color="#ebcb80"
              active-text-color="#f6e9c7">
              <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item,index)" v-if="index*1 < 11">{{item.name}}</el-menu-item>
              <el-submenu v-if="bocaiCategoryList.length*1 > 11" key="submenu" index="submenu">
                <template slot="title">{{submenu}}</template>
                <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item,index)" v-if="index*1 > 10">{{item.name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          
          <clock-time></clock-time>
        </div>
        <div class="bet_box">
          <div class="orders oodsBodyDiv">
            <div class="order-info">
              <bet-quick :orderDataList="orderDataList" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
            </div>

            <template v-if="showOdds == '两面盘'">

                <div class="oodsBodyDiv">
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
                                  <li ><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
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
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                      </table>
                  </div>
                </div>

              <div class="qiu15_body">

                <div class="eball" v-for="(itemPa,index) in yiwuqiu_lmp">
                    <div class="order-table">
                      <table>
                        <tr>
                          <th colspan="2">{{itemPa.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in itemPa.list">
                          <td class="tdLeft" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'yiwuqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                </div>

              </div>

            </template>


            <template v-if="showOdds == '单号'">
              <div class="qiu15_body lanqiu">
                <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">{{shishiZiDatas.name}}</th>
                    </tr> 
                    <tr v-for="(itemPa,index) in yizhongyiList">
                      <template v-for="(item,index) in itemPa">
                        <td class="oddsNtd tdLeft" :class="'yizhongyi'+item.oddsId" @click="orderTdYiZi(item,'yizhongyi')" @mouseenter="overShow(item,'yizhongyi')" @mouseleave="outHide(item,'yizhongyi')"><div class="ball-icon" >{{item.oddsName}}</div></td>
                          <td class="oddsUltd" :class="'yizhongyi'+item.oddsId" @click="orderTdYiZi(item,'yizhongyi')" @mouseenter="overShow(item,'yizhongyi')" @mouseleave="outHide(item,'yizhongyi')">
                            <ul>
                              <li><span class="odds-font" >{{item.odds}}</span></li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFuncYiZi(item,'yizhongyi',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                              </li>
                            </ul>
                          </td>
                      </template>
                    </tr> 
                  </table>
                </div>

                <div>
                  <div class="nball" v-for="(itemPa,index) in yiwuqiu_lmp">
                    <div class="order-table">
                      <table>
                        <tr><th colspan="2">{{itemPa.name}}</th></tr>
                        <tr v-for="(item,index) in itemPa.list">
                          <td class="oddsNtd tdLeft" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')"><div class="ball-icon" >{{item.oddsName}}</div></td>
                          <td class="oddsUltd" :class="'yiwuqiu_lmp'+item.oddsId" @click="orderTd(itemPa,item,'yiwuqiu_lmp')" @mouseenter="overShow(item,'yiwuqiu_lmp')" @mouseleave="outHide(item,'yiwuqiu_lmp')">
                            <ul>
                              <li><span class="odds-font" >{{item.odds}}</span></li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'yiwuqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/">
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                </div>

              </div> 
            </template>

            <template v-if="['连码'].findIndex((n) => n == showOdds)>-1">
              <div class="order-table">
                <table>
                  <!-- <tr>
                    <th v-for="item in oddsList.list">
                      <label>
                        <input type="radio" :value="item.oddsName">
                      </label>
                    </th> 
                  </tr> --> 
                  <tr>
                    <th v-for="item in oddsList[0].list">
                      <label>
                        <input type="radio" :value="item">
                      </label>
                    </th> 
                  </tr> 
                  <tr>
                    <td v-for="item in oddsList[0].list">{{item.oddsName}}</td>
                  </tr>
                  <tr>
                    <td v-for="item in oddsList[0].list">
                      <label><span class="odds-font">{{item.odds}}</span></label>
                    </td> 
                  </tr>
                </table> 

                <table class="tab2">
                  <tr>
                    <th colspan="12">号码</th>
                  </tr> 
                  <tr>
                    <template v-for="item in renxuanhaoma1">
                      <td width="8%">{{item}}</td> 
                      <td>
                        <label><input type="checkbox" :value="item"></label>
                      </td>

                      <th v-for="item in oddsList[0].list">
                      <label>
                        <input type="radio" :value="item">
                      </label>
                    </th> 
                    </template>
                  </tr> 
                  <tr>
                    <template v-for="item in renxuanhaoma2">
                      <td width="8%">{{item}}</td> 
                      <td>
                        <label><input type="checkbox" :value="item"></label>
                      </td>
                    </template>
                  </tr>
                </table>
              </div>
            </template>

            <template v-if="['直选'].findIndex((n) => n == showOdds)>-1">
              <div class="order-table">
                <table>
                  <tr>
                    <th v-for="item in oddsList">
                      <label>
                        <input type="radio" :value="item.name">
                      </label>
                    </th> 
                  </tr> 
                  <tr>
                    <td v-for="item in oddsList">{{item.list[0].oddsName}}</td>
                  </tr>
                  <tr>
                    <td v-for="item in oddsList">
                      <label><span class="odds-font">{{item.list[0].odds}}</span></label>
                    </td> 
                  </tr>
                </table> 

                <table class="tab2">
                  <tr>
                    <th colspan="12">第一球</th>
                  </tr> 
                  <tr>
                    <template v-for="item in renxuanhaoma1">
                      <td width="8%">{{item}}</td> 
                      <td>
                        <label><input type="checkbox" :value="item"></label>
                      </td>
                    </template>
                  </tr> 
                  <tr>
                    <template v-for="item in renxuanhaoma2">
                      <td width="8%">{{item}}</td> 
                      <td>
                        <label><input type="checkbox" :value="item"></label>
                      </td>
                    </template>
                  </tr>
                </table>

                <table class="tab2">
                  <tr>
                    <th colspan="12">第二球</th>
                  </tr> 
                  <tr>
                    <template v-for="item in renxuanhaoma1">
                      <td width="8%">{{item}}</td> 
                      <td>
                        <label><input type="checkbox" :value="item"></label>
                      </td>
                    </template>
                  </tr> 
                  <tr>
                    <template v-for="item in renxuanhaoma2">
                      <td width="8%">{{item}}</td> 
                      <td>
                        <label><input type="checkbox" :value="item"></label>
                      </td>
                    </template>
                  </tr>
                </table>
              </div>
            </template>

          </div>

          <div class="order-info">
            <bet-quick :orderDataList="orderDataList" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
          </div>

          <footer-Bocai :curBocaiTypeId="curBocaiTypeId"></footer-Bocai>


        </div>
      </div>
    </div>
    <p style="clear: both;"></p>
  </div>
</template>

<script>
import BetQuick from '@/components/apps/bocai/components/betQuick';
import ClockTime from '@/components/apps/bocai/components/clockTime';
import FooterBocai from '@/components/apps/bocai/components/footerBocai';

export default {
  components: {
    ClockTime,
    BetQuick,
    FooterBocai
  },
  data () {
    return {
      curBocaiTypeId: '8374',
      curactiveIndex: '广东11选5',
      bocaiCategoryList: [],
      oddsList: [],
      activeIndex: '',
      showOdds: '',
      submenu: '更多',
      isOpenOdds: true,
      longhuhe_lmp: {},
      yiwuqiu_lmp: [],
      qianhousan_lmp: [],
      orderDataList: [],
      normalPay: false,
      bocaiCategory: {},
      kuaixuanList: ['0','1','2','3','4','5','6','7','8','9'],
      renxuanhaoma1: ['1','2','3','4','5','6'],
      renxuanhaoma2: ['7','8','9','10','11'],
      shishiZiDatas: {},
      yizhongyiList: [],
      shishiZiDatasList: [],
      kuaixuanTouList:[],
      kuaixuanWeiList:[],
      tempList:[],
      selectedZiTd:[]
    }
  },
  computed: {
  },
  created() {
    this.getOdds(this.curBocaiTypeId);
  },
  mounted(){
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
  },
  methods: {
    qingkong() {
      $('.bet_box .orders td').removeClass('selected');
      this.orderDataList = [];
    },
    allQingkong() {
      $('.bet_box .orders td').removeClass('selected');
      this.orderDataList = [];
      $('.kuaixuanTable td').removeClass('active');
      this.kuaixuanTouList = [];
      this.kuaixuanWeiList = [];
    },
    shishiZiGet(item,index) {
      this.allQingkong();
      $('.yiziThAct').removeClass('active');
      $('.shishiZi'+index).addClass('active');
      this.shishiZiDatas = item;

      if(['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == this.showOdds)>-1) {
        this.shishiZiDatasList = [];
        for(var i=0;i<item.list.length;i=i+5){
          this.shishiZiDatasList.push(item.list.slice(i,i+5));
        }
      }

    },
    childByChangePay(data) {
      if(this.normalPay != data) {
        this.orderDataList = [];
        $('.bet_box .orders td').removeClass('selected');
        this.allQingkong();
      }
      this.normalPay = data;
    },
    childByReset(data) {
      this.resetOddsCategory(this.bocaiCategory);
      this.allQingkong();
    },
    outHide(item,ids) {
      $('.'+ids+item.oddsId).removeClass('overTd');
    },
    overShow(item,ids) {
      $('.'+ids+item.oddsId).addClass('overTd');
    },
    inputFuncYiZi(item,ids,pay) {
      let oddsObj = this.shishiZiDatas;

      this.inputFunc(oddsObj,item,ids,pay);
    },
    inputFunc(oddsObj,item,ids,pay) {

      let reg = /^[\u2E80-\u9FFF]+$/;
      if(reg.test(this.moneyOrder)){
        this.$alertMessage('请确认注单!', '温馨提示');
      } else {
        if(this.normalPay) {
          if(pay == '') {
            $('.'+ids+item.oddsId).removeClass('selected');
            _.remove(this.orderDataList, function(n) {
                    return n.bocaiOddName == item.oddsName;
                  });
          } else {

            $('.'+ids+item.oddsId).addClass('selected');
                let ifHas = false;
                for(let n in this.orderDataList) {
                  if(this.orderDataList[n].bocaiOddId == item.oddsId) {
                    ifHas = true;
                    let obj = {
                      bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
                      bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
                      bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
                      bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
                      bocaiValue:"",//投注内容,六合彩连肖/连尾
                      normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
                      orderNormal: this.normalPay,   //是快捷，还是一般投注
                      bocaiOdds: item.odds//1.90//赔率
                    };

                    this.orderDataList[n] = obj;
                  }
                }

                if(!ifHas) {
                  let obj = {
                    bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
                    bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
                    bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
                    bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
                    bocaiValue:"",//投注内容,六合彩连肖/连尾
                    normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
                    orderNormal: this.normalPay,   //是快捷，还是一般投注
                    bocaiOdds: item.odds//1.90//赔率
                  };

                  this.orderDataList.push(obj);
                }
          }
        }
      }
      
    },
    orderTdYiZi(item,ids) {
      let oddsObj = this.shishiZiDatas;

      this.orderTd(oddsObj,item,ids);
    },
    orderTd(oddsObj,item,ids) {

      if(this.isOpenOdds) {

        if(!this.normalPay) {
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
              normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
              orderNormal: this.normalPay,   //是快捷，还是一般投注
              bocaiOdds: item.odds//1.90//赔率
            };

            this.orderDataList.push(obj);
          }
        }
        
      }
      
    },
    handleSelect(key, keyPath) {
        //console.log(key, keyPath);
    },
    async resetOddsCategory(item) {

      let that = this;

          NProgress.start();
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.curBocaiTypeId+`&bocaiCategoryId=`+item.id).then((res) => {
            that.$handelResponse(res, (result) => {
              NProgress.done();
              that.showOdds = item.name;
              that.bocaiCategory = item;
              if(result.code===200){
                console.log('result.oddsList',result.oddsList);
                that.oddsList = result.oddsList;
                
                that.orderDataList = [];
                that.normalPay = false;
                bus.$emit('getnormalPay', false); 

                that.shuaiXuanDatas(result.oddsList);

              }
            })
          });
    },
    async getOddsCategory(item,index) {

      if(index*1 > 9) {
        this.submenu = item.name;
      } else {
        this.submenu = '更多';
      }

      this.resetOddsCategory(item);

    },
    async getOdds(id) {

      let that = this;
          //NProgress.start();
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+id).then((res) => {
            that.$handelResponse(res, (result) => {
              //NProgress.done();
              if(result.code===200){
                bus.$emit('curactiveIndex', this.curactiveIndex);
                that.bocaiCategoryList = result.bocaiCategoryList;
                that.oddsList = result.oddsList;
                that.showOdds = result.bocaiCategoryList[0].name;
                that.bocaiCategory = result.bocaiCategoryList[0];
                that.activeIndex = that.bocaiCategoryList[0].name;

                that.shuaiXuanDatas(result.oddsList);

                bus.$emit('getbocaiTypeId', that.curBocaiTypeId); 
                bus.$emit('getbocaiTypeName', that.curactiveIndex); 
                
              }
            })
          });

    },
    shuaiXuanDatas(dataList) {
      if(this.showOdds == '两面盘') {
        let yiwuqiuTemp = [];
        for(let m in dataList) {
          if(dataList[m].name == '总和') {
            this.longhuhe_lmp = dataList[m];
          }
          if(['第一球','第二球','第三球','第四球','第五球'].findIndex((n) => n == dataList[m].name)>-1) {
            yiwuqiuTemp.push(dataList[m]);
          }
        }
        this.yiwuqiu_lmp = yiwuqiuTemp;
      }

      if(['单号'].findIndex((n) => n == this.showOdds)>-1) {

        let yiwuqiuTemp = [];
        for(let m in dataList) {
          if(dataList[m].name == '一中一') {
            this.shishiZiDatas = dataList[m];
            let arry = [];

            for(var i=0;i<dataList[m].list.length;i=i+5){
              arry.push(dataList[m].list.slice(i,i+5));
            }

            this.yizhongyiList = arry;

            console.log('this.yizhongyiList',this.yizhongyiList);

          }
          if(['第一球','第二球','第三球','第四球','第五球'].findIndex((n) => n == dataList[m].name)>-1) {
            yiwuqiuTemp.push(dataList[m]);
          }
        }
        this.yiwuqiu_lmp = yiwuqiuTemp;
      }

      if(['连码','直选'].findIndex((n) => n == this.showOdds)>-1) {
        console.log('oddsList',this.oddsList);
      }

    }
  }
}

</script>

<style scoped>


</style>
