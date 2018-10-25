<template>
  <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">

          <div class="header">
            <p>下注历史概要</p>
          </div> 
          <div class="default-list">

            <div v-if="!ifshowBetInfo">
              <p>
                游戏：
                <el-select v-model="bocaiTypeId" placeholder="请选择" size="mini" @change="changeboType">
                  <el-option label="全部" :value="''"></el-option>
                  <el-option
                    v-for="item in bocaiTypeList"
                    :key="item.value"
                    :label="item.bocaiName"
                    :value="item.bocaiId">
                  </el-option>
                </el-select>
                <a class="refresh r">刷新</a>
              </p> 
              <table class="sum_tab">
                <caption><i class="icon-calendar"></i> 本周</caption> 
                <thead>
                  <tr>
                    <th>日期</th> 
                    <th>投注额</th> 
                    <th>派彩结果</th> 
                    <th>注数</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-if="nowWeekPage.length*1 == '0'">
                    <td style="line-height: 26px;" colspan="4">{{"暂无数据"}}</td> 
                  </tr>
                  <tr v-else v-for="item in nowWeekPage">
                    <td style="line-height: 26px;"><a title="历史详情" class="link" @click="goBetInfo(item.createDateStr)">{{item.createDateStr}}</a></td>
                    <!-- <td style="line-height: 26px;"><span>{{item.createDateStr}}</span></td> --> 
                    <td style="line-height: 26px;">{{item.betsMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.winnerMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.orderCount}}</td>
                  </tr>
                </tbody> 
                <tr class="tab-footer">
                  <td>总计：</td> 
                  <td>{{betsAllNow}}</td> 
                  <td>{{winnerAllNow}}</td> 
                  <td>{{orderAllNow}}</td>
                </tr>
              </table>

              <table class="sum_tab">
                <caption><i class="icon-calendar"></i> 上周</caption> 
                <thead>
                  <tr>
                    <th>日期</th> 
                    <th>投注额</th> 
                    <th>派彩结果</th> 
                    <th>注数</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-if="afterWeekPage.length*1 == '0'">
                    <td style="line-height: 26px;" colspan="4">{{"暂无数据"}}</td> 
                  </tr>
                  <tr v-else v-for="item in afterWeekPage">
                    <!-- <td style="line-height: 26px;"><span>{{item.createDateStr}}</span></td>  -->
                    <td style="line-height: 26px;"><a title="历史详情" class="link" @click="getbetInfo(item.createDateStr)">{{item.createDateStr}}</a></td>
                    <td style="line-height: 26px;">{{item.betsMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.winnerMoneySum}}</td> 
                    <td style="line-height: 26px;">{{item.orderCount}}</td>
                  </tr>
                </tbody> 
                <tr class="tab-footer">
                  <td>总计：</td> 
                  <td>{{betsAllAfter}}</td> 
                  <td>{{winnerAllAfter}}</td> 
                  <td>{{orderAllAfter}}</td>
                </tr>
              </table>
            </div>

            <div v-else>
              <p><a class="back" @click="ifshowBetInfo = false">返回</a></p> 
              <table>
                <thead>
                  <tr>
                    <th>编号</th> 
                    <th>注单号/投注日期</th> 
                    <th>投注类型</th> 
                    <th>内容</th> 
                    <th>投注额</th> 
                    <th>可赢金额</th> 
                    <th>派彩</th> 
                    <th>注单状态</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-for="(item,index) in betInfo.list">
                    <td>{{index*1 +1}}</td> 
                    <td><p>{{item.orderNum}}</p> <p>{{$timestampToTime(item.createDate)}}</p></td> 
                    <td><p>{{item.bocaiTypeName}}</p> <p>{{item.periods}} 期</p></td> 
                    <td><p><span class="odds-font">{{item.bocaiCategory2Name}} {{item.bocaiOddName}}</span>@<span class="odds-font">{{item.bocaiOdds}}</span></p></td> 
                    <td>{{item.betsMoney}}</td> 
                    <td>{{item.betsMoney}}</td> 
                    <td class="red">{{item.betsMoney}}</td> 
                    <td><span>{{item.status=='1'?'已结算' : '未结算'}}</span></td>
                  </tr>


                 <!--  "id": "29230",//ID号
                "orderNum": "20181023184757781",//注单号
                "cuserId": null,
                "periodsId": null,
                "bocaiTypeId": null,
                "bocaiTypeName": "重庆时时彩",//投注类型-博彩名称
                "bocaiCategory1Id": null,
                "bocaiCategory1Name": "两面盘",
                "bocaiCategory2Id": null,
                "bocaiCategory2Name": "总和-龙虎和",//内容-博彩一级分类
                "bocaiOddId": null,
                "bocaiOddName": "总和小",//内容-博彩二级分类
                "bocaiValue": "",
                "type": null,
                "status": 1,//注单状态，0:未结算，1:已结算
                "betsMoney": 100,//投注额
                #可赢金额=(投注额*赔率)-投注额
                #派彩要根据winnerStatus进行判断
                #如果是已中奖：派彩=  可赢金额
                #如果是未中奖：派彩=  -投注额（负的投注额）
                #如果是和：派彩=0
                "winnerStatus": 1,//中奖状态0:未中奖,1:已中奖,2:和奖
                "winnerMoney": 200,
                "createDate": 1540291678000,//投注日期
                "createDateStr": null,
                "updateDate": null,
                "isShow": null,
                "isMustbe": null,
                "nickname": "ydwhuiyuan1",
                "username": "aydwhuiyuan1",
                "bindingIp": "",
                "loginIp": "0:0:0:0:0:0:0:1",
                "bocaiOdds": 2,//内容-赔率
                "periods": "20181023077",//期数
                "odds": null,
                "idList": null -->


                </tbody> 
                <tr class="tab-footer">
                  <td colspan="4" class="tar">此页面统计：</td> 
                  <td>200.00</td> 
                  <td>1796.60</td> 
                  <td>-200.00</td> 
                  <td>&nbsp;</td>
                </tr> 
                <tr class="tab-footer">
                  <td colspan="4" class="tar">总计：</td> 
                  <td>200.00</td> 
                  <td>1796.60</td> 
                  <td>-200.00</td> 
                  <td>&nbsp;</td>
                </tr>
              </table> 

              <div class="block" v-if="betInfo.totalPage > 1">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="betInfo.pageSize"
                    layout="total, prev, pager, next"
                    :total="betInfo.totalCount*1">
                  </el-pagination>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      betInfo: {},
      currentPage: 1,
      dayStr: '',
      ifshowBetInfo: false,
      totalbetsMoney: '',
      totalwinMoney: '',
      bocaiTypeList: [],
      bocaiTypeId: '',
      afterWeekPage: [],
      nowWeekPage: [],
      betsAllNow: '',
      winnerAllNow: '',
      orderAllNow: '',
      betsAllAfter: '',
      winnerAllAfter: '',
      orderAllAfter: ''
    }
  },
  created() {
    this.hisOrder(this.bocaiTypeId);
    this.getBocai();
  },
  computed: {
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currentPage = cpage;
      this.getbetInfo();
    },
    goBetInfo(daytime) {
      this.dayStr = daytime;

      this.getbetInfo();
    },
    async getbetInfo() {

      let res = await this.$get(`${window.url}/api/hisOrderInfo?currentPage=`+this.currentPage+`&pageSize=10&dayStr=`+this.dayStr);
      if(res.code===200){
        this.betInfo = res.page;

        for(let n in this.betInfo.list) {
          this.totalbetsMoney += this.betInfo.list[n].betsMoney*1;
          this.totalwinMoney += this.betInfo.list[n].betsMoney*this.betInfo.list[n].bocaiOdds*1 - this.betInfo.list[n].betsMoney*1;
          
        }


      }

      this.ifshowBetInfo = true;

    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.bocaiTypeList = res.bocaiTypeList;
          }
    },
    changeboType(data) {
      this.hisOrder(data);
    },
    async hisOrder(id) {

      this.betsAllNow = '';
      this.winnerAllNow = '';
      this.orderAllNow = '';
      this.betsAllAfter = '';
      this.winnerAllAfter = '';
      this.orderAllAfter = '';

      let res = await this.$get(`${window.url}/api/hisOrder?bocaiTypeId=`+id);

        if(res.code===200){
            this.nowWeekPage = res.page.nowWeekPage;

            for(let n in res.page.nowWeekPage) {
              this.betsAllNow += res.page.nowWeekPage[n].betsMoneySum*1;
              this.winnerAllNow += res.page.nowWeekPage[n].winnerMoneySum*1;
              this.orderAllNow += res.page.nowWeekPage[n].orderCount*1;
            }

            this.afterWeekPage = res.page.afterWeekPage;

            for(let n in res.page.afterWeekPage) {
              this.betsAllAfter += res.page.afterWeekPage[n].betsMoneySum*1;
              this.winnerAllAfter += res.page.afterWeekPage[n].winnerMoneySum*1;
              this.orderAllAfter += res.page.afterWeekPage[n].orderCount*1;
            }

            console.log('afterWeekPage.length*1',this.afterWeekPage.length*1);
            console.log('nowWeekPage.length*1',this.nowWeekPage.length*1);
        } 
    }
  },
  mounted() {
  },
  updated() {
  }
};
</script>
<style scoped>
</style>
<style lang="less">
  
</style>