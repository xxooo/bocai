<template>
  <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">

          <div class="header">
            <p>下注历史概要</p>
          </div> 
          <div class="default-list">
            <div>
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
                    <td style="line-height: 26px;"><span>{{item.createDateStr}}</span></td> 
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
                    <td style="line-height: 26px;"><span>{{item.createDateStr}}</span></td> 
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
      nowOrder: {},
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