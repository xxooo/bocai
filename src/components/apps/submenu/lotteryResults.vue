<template>
  <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">
          <div class="header">
            <p>即时注单</p>
          </div> 

          <div class="default-list" style="min-height: 316px;">
            <div class="">
              游戏类型：
              <el-select v-model="bocaiTypeId" placeholder="请选择" size="mini" @change="changeboType">
                    <el-option label="全部" :value="''"></el-option>
                    <el-option
                      v-for="item in bocaiTypeList"
                      :key="item.value"
                      :label="item.bocaiName"
                      :value="item.bocaiId">
                    </el-option>
              </el-select> 

              <span>
                  日期：
                  <el-date-picker
                  size="mini"
                  value-format="yyyy-M-d"
                  @change="gettime"
                  v-model="openPrizeTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </span>
            </div> 
          <div>

          <table>
          <thead>
          <tr>
          <th>期数</th> 
          <th>开奖时间</th> 
          <th colspan="5">开出号码</th> 
          <th colspan="3">总和</th> 
          <th>龙虎</th> 
          <th>前三</th> 
          <th>中三</th> 
          <th>后三</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>20181020029</td> 
          <td>2018-10-20 10:50:00</td> 
          <td colspan="12">
          <span>暂未开奖</span>
          </td>
          </tr>
          <tr>
          <td>20181020028</td> 
          <td>2018-10-20 10:41:00</td> 
          <td><i class="ball-icon">5</i></td>
          <td><i class="ball-icon">6</i></td>
          <td><i class="ball-icon">2</i></td>
          <td><i class="ball-icon">8</i></td>
          <td><i class="ball-icon">9</i></td> 
          <td>30</td> 
          <td><span class="red">大</span></td> 
          <td><span class="red">双</span></td> 
          <td><span class="blue">虎</span></td> 
          <td><span>半顺</span></td> 
          <td><span>杂六</span></td> 
          <td><span>半顺</span></td>
          </tr>
          </tbody>
          </table></div></div>

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
      bocaiTypeList: [],
      openPrizeTime: new Date('yyyy,mth,dd'),

      nowOrder: {},
      currentPage: 1,
      totalbetsMoney: 0,
      totalwinMoney: 0,
      currentBetsMoney: 0,
      currentWinMoney: 0
    }
  },
  created() {
    this.getPrizeResult('1');
    this.getBocai();
  },
  computed: {
    openPrizeTime
  },
  methods: {
    gettime(data) {
      console.log(data);
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.bocaiTypeList = res.bocaiTypeList;
          }
    },
    async getPrizeResult(type) { 

      console.log('openPrizeTime',this.openPrizeTime);

      let res = await this.$get(`${window.url}/api/openPrizeResult?currentPage=`+cpage+`&pageSize=`+pages);

          if(res.code===200){

            for(let n in res.page.list) {
              let winMoney = res.page.list[n].odds*res.page.list[n].betsMoney*1;

              this.totalbetsMoney += res.page.list[n].betsMoney*1;
              this.totalwinMoney += winMoney*1;
            }
          }
    },


    // /api/openPrizeResult?bocaiTypeId=1&isOpen=2¤tPage=1&pageSize=100&dayStr=2018-10-20



    handleCurrentChange(data) {
      this.getnowOrder(data,10);
    },
    async getnowOrder(cpage,pages) { 
      this.currentBetsMoney = 0;
      this.currentWinMoney = 0;

      let res = await this.$get(`${window.url}/api/nowOrder?currentPage=`+cpage+`&pageSize=`+pages);

          if(res.code===200){
            this.nowOrder = res.page;

            for(let n in this.nowOrder.list) {
              console.log('this.nowOrder[n].createDate',this.nowOrder);
              this.nowOrder.list[n].createDate = this.$timestampToTime(this.nowOrder.list[n].createDate);
              this.nowOrder.list[n].winMoney = this.nowOrder.list[n].odds*this.nowOrder.list[n].betsMoney*1;

              this.currentBetsMoney += this.nowOrder.list[n].betsMoney*1;
              this.currentWinMoney += this.nowOrder.list[n].winMoney*1;
            }
          }
    },
    async getnowOrder2(cpage,pages) { 
      let res = await this.$get(`${window.url}/api/nowOrder?currentPage=`+cpage+`&pageSize=`+pages);

          if(res.code===200){

            for(let n in res.page.list) {
              let winMoney = res.page.list[n].odds*res.page.list[n].betsMoney*1;

              this.totalbetsMoney += res.page.list[n].betsMoney*1;
              this.totalwinMoney += winMoney*1;
            }
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