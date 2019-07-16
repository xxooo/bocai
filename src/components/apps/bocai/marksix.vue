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
              <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
            </div>


            <template v-if="showOdds == '特码'">

                <div>
                  <div class="order-table">
                      <p class="te_btn">
                        <button class="temaAclass active" @click="showtemaAtoB('temaAclass',true)">特码A</button> 
                        <button class="temaBclass" @click="showtemaAtoB('temaBclass',false)">特码B</button>
                      </p>
                      <table v-if="showtemaAorB">
                        <tr>
                          <th colspan="10">{{temaAData.name}}</th>
                        </tr>
                        <tr>
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th>
                        </tr>

                          <tr v-for="(itemPa,index) in temaAData.list">
                            <template v-for="(item,index) in itemPa" >
                              <td class="tdLeft ordersTdOver" width="8%" :class="'temaAData'+item.oddsId" @click="orderTd(temaAData,item,'temaAData')" @mouseenter="overShow(item,'temaAData')" @mouseleave="outHide(item,'temaAData')"><div class="ball-icon" >{{item.oddsName}}</div></td>

                              <td class="tdRight" :class="'temaAData'+item.oddsId" @click="orderTd(temaAData,item,'temaAData')" @mouseenter="overShow(item,'temaAData')" @mouseleave="outHide(item,'temaAData')">
                                <ul>
                                  <li><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(temaAData,item,'temaAData',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                      </table>
                      <table v-else>
                        <tr>
                          <th colspan="10">{{temaBData.name}}</th>
                        </tr>
                        <tr>
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th>
                        </tr>

                          <tr v-for="(itemPa,index) in temaBData.list">
                            <template v-for="(item,index) in itemPa">
                              <td class="tdLeft ordersTdOver" width="8%" :class="'temaBData'+item.oddsId" @click="orderTd(temaBData,item,'temaBData')" @mouseenter="overShow(item,'temaBData')" @mouseleave="outHide(item,'temaBData')"><div class="ball-icon" >{{item.oddsName}}</div></td>

                              <td class="tdRight" :class="'temaBData'+item.oddsId" @click="orderTd(temaBData,item,'temaBData')" @mouseenter="overShow(item,'temaBData')" @mouseleave="outHide(item,'temaBData')">
                                <ul>
                                  <li><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(temaBData,item,'temaBData',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                      </table>

                      <table>
                        <tr>
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                          <th>号码</th> 
                          <th>赔率</th> 
                        </tr>

                          <tr v-for="(itemPa,index) in temaABallData.list.slice(0,4)">
                            <template v-for="(item,index) in itemPa" >
                              <td  class="tdLeft ordersTdOver" :class="'temaABallData'+item.oddsId" @click="orderTd(temaABallData,item,'temaABallData')" @mouseenter="overShow(item,'temaABallData')" @mouseleave="outHide(item,'temaABallData')">{{item.oddsName}}</td>

                              <td class="tdRight" :class="'temaABallData'+item.oddsId" @click="orderTd(temaABallData,item,'temaABallData')" @mouseenter="overShow(item,'temaABallData')" @mouseleave="outHide(item,'temaABallData')">
                                <ul>
                                  <li><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(temaABallData,item,'temaABallData',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                          <tr>
                            <template v-for="(item,index) in temaABallData.list[4]">
                              <td  class="tdLeft ordersTdOver"></td>
                              <td class="tdRight"></td>                   
                              <td  class="tdLeft ordersTdOver"></td>
                              <td class="tdRight"></td>  
                              <td  class="tdLeft ordersTdOver"></td>
                              <td class="tdRight"></td>  
                              <td  class="tdLeft ordersTdOver" width="8%" :class="'temaABallData'+item.oddsId" @click="orderTd(temaABallData,item,'temaABallData')" @mouseenter="overShow(item,'temaABallData')" @mouseleave="outHide(item,'temaABallData')">{{item.oddsName}}</td>

                              <td class="tdRight" :class="'temaABallData'+item.oddsId" @click="orderTd(temaABallData,item,'temaABallData')" @mouseenter="overShow(item,'temaABallData')" @mouseleave="outHide(item,'temaABallData')">
                                <ul>
                                  <li><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(temaABallData,item,'temaABallData',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                      </table>

                  </div>
                </div>

            </template>

            <div class="order-info">
              <bet-quick :orderDataList="orderDataList" :canOrder="canOrder" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
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
import ClockTime from '@/components/apps/bocai/components/clockTime';
import FooterBocai from '@/components/apps/bocai/components/footerBocai';
import { mapGetters } from 'vuex';

export default {
  components: {
    ClockTime,
    BetQuick,
    FooterBocai
  },
  data () {
    return {
      curBocaiTypeId: '8808',
      curactiveIndex: '六合彩',
      bocaiCategoryList: [],
      oddsList: [],
      activeIndex: '',
      showOdds: '',
      submenu: '更多',
      longhuhe_lmp: {},
      yiwuqiu_lmp: [],
      qianhousan_lmp: [],
      orderDataList: [],
      normalPay: false,
      bocaiCategory: {},
      kuaixuanList: ['0','1','2','3','4','5','6','7','8','9'],
      shishiZiDatas: {},
      shishiZiDatasList: [],
      kuaixuanTouList:[],
      kuaixuanWeiList:[],
      tempList:[],
      selectedZiTd:[],
      canOrder: true,

      temaAData: {},
      temaBData: {},
      temaABallData: {},
      showtemaAorB: true
    }
  },
  computed: {
    ...mapGetters({
        userInfo: 'getuserInfo',
        isOpenOdds: 'getisOpenOdds'
      })
  },
  created() {
    this.getOdds(this.curBocaiTypeId);
  },
  mounted(){
      bus.$on('setNewOddsList', (data) => {
        this.normalPay = false;
        this.oddsList = data;
        this.shuaiXuanDatas(data);
      });
  },
  methods: {
    showtemaAtoB(classa,ifture) {
      $('.'+classa).addClass('active').siblings().removeClass('active');
      this.showtemaAorB = ifture;
      this.allQingkong();
    },
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

      if(this.isOpenOdds) {

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
                      bocaiOdds: item.odds,//1.90//赔率
                      dewaterId: item.dewaterId
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
                    bocaiOdds: item.odds,//1.90//赔率
                    dewaterId: item.dewaterId
                  };

                  this.orderDataList.push(obj);
                }
          }
        }
      }

    }
      
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
              bocaiOdds: item.odds,//1.90//赔率
              dewaterId: item.dewaterId
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

          const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+this.curBocaiTypeId+`&bocaiCategoryId=`+item.id).then((res) => {
            that.$handelResponse(res, (result) => {
            loading.close();
              that.showOdds = item.name;
              that.bocaiCategory = item;
              if(result.code===200){
                that.oddsList = result.oddsList;
                
                that.orderDataList = [];
                that.normalPay = false;
                bus.$emit('getnormalPay', false); 

                that.shuaiXuanDatas(result.oddsList);

              }
            })
          });
    },
    async getnotice() {
      let res = await this.$get(`${window.url}/api/notice`);

          if(res.code===200){

            bus.$emit('getmessage', res.data);
          } else {
          }

    },
    async getOddsCategory(item,index) {

      bus.$emit('getbocaiCategoryId', item.id);

      this.getnotice();

      if(index*1 > 9) {
        this.submenu = item.name;
      } else {
        this.submenu = '更多';
      }

      this.resetOddsCategory(item);

    },
    async getOdds(id) {

      let that = this;
          const loading = this.$loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+id).then((res) => {
            that.$handelResponse(res, (result) => {
            loading.close();
              if(result.code===200){
                bus.$emit('curactiveIndex', this.curactiveIndex);
                that.bocaiCategoryList = result.bocaiCategoryList;
                that.oddsList = result.oddsList;
                that.showOdds = result.bocaiCategoryList[0].name;
                that.bocaiCategory = result.bocaiCategoryList[0];

                bus.$emit('getbocaiCategoryId', result.bocaiCategoryList[0].id);
                that.activeIndex = that.bocaiCategoryList[0].name;
                that.shuaiXuanDatas(result.oddsList);

                store.commit('updatebocaiTypeId',that.curBocaiTypeId);
                bus.$emit('getbocaiTypeName', that.curactiveIndex); 

              }
            })
          });

    },
    shuaiXuanDatas(dataList) {


// 0: {name: "特码", id: 8816}
// 1: {name: "特肖", id: 8935}
// 2: {name: "特码头尾数", id: 8948}
// 3: {name: "两面", id: 8965}
// 4: {name: "色波", id: 8967}
// 5: {name: "七色波", id: 8971}
// 6: {name: "正码", id: 8973}
// 7: {name: "正码特", id: 8976}
// 8: {name: "正码1~6", id: 8983}
// 9: {name: "平特一肖尾数", id: 8990}
// 10: {name: "五行", id: 8993}
// 11: {name: "合肖", id: 8995}
// 12: {name: "正肖", id: 8997}
// 13: {name: "总肖", id: 8999}
// 14: {name: "自选不中", id: 9001}
// 15: {name: "连肖", id: 9003}
// 16: {name: "连尾", id: 9020}
// 17: {name: "连码", id: 9021}
// 18: {name: "过关", id: 9023}
// 19: {name: "生肖两面", id: 9030}

      if(this.showOdds == '特码') {

        for(let m in dataList) {
          if(dataList[m].name == '特码A') {
            dataList[m].list = _.chunk(dataList[m].list,5);
            this.temaAData = dataList[m];
          }
          if(dataList[m].name == '特码B') {
            dataList[m].list = _.chunk(dataList[m].list,5);
            this.temaBData = dataList[m];
          }
          if(dataList[m].name == '特码A特码B共有') {

            dataList[m].list = _.chunk(dataList[m].list,4);

            let arr1 = [];
            let arr2 = [];
            let arr3 = [];
            let arr4 = [];

            for(let n in dataList[m].list) {
              if(+n < 4) {
                arr1.push(dataList[m].list[n][0]);
                arr2.push(dataList[m].list[n][1]);
                arr3.push(dataList[m].list[n][2]);
                arr4.push(dataList[m].list[n][3]);
              }
            }


            this.temaABallData.id = dataList[m].id;
            this.temaABallData.name = dataList[m].name;
            this.temaABallData.list = [];
            this.temaABallData.list.push(arr1);
            this.temaABallData.list.push(arr2);
            this.temaABallData.list.push(arr3);
            this.temaABallData.list.push(arr4);
            this.temaABallData.list.push(dataList[m].list[4]);
          }
        }
      }

    }

  }
}

</script>

<style scoped>


</style>
