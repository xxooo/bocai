<template>
  <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">
          <div class="header">
            <p>即时注单</p>
          </div> 

          <div class="default-list" style="min-height: 316px;">
            <div class="gameNav">
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
      <input type="text" placeholder="请选择日期" data-v-b2b0972c="" class="flatpickr-input">
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
      <th data-v-5f57f8b9="">龙虎</th> 
      <th data-v-5f57f8b9="">前三</th> <th data-v-5f57f8b9="">中三</th> <th data-v-5f57f8b9="">后三</th></tr></thead> <!----> <tbody data-v-5f57f8b9=""><tr data-v-5f57f8b9=""><td data-v-5f57f8b9="">20181020029</td> <td data-v-5f57f8b9="">2018-10-20 10:50:00</td> <td data-v-5f57f8b9="" colspan="12"><span data-v-5f57f8b9="">暂未开奖</span></td></tr><tr data-v-5f57f8b9=""><td data-v-5f57f8b9="">20181020028</td> <td data-v-5f57f8b9="">2018-10-20 10:41:00</td> <td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">5</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">6</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">2</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">8</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">9</i></td> <td data-v-5f57f8b9="">
            30
          </td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">大</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">双</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="blue">虎</span></td> <td data-v-5f57f8b9=""><!----> <span data-v-5f57f8b9="">半顺</span> <!----> <!----> <!----></td> <td data-v-5f57f8b9=""><!----> <!----> <!----> <!----> <span data-v-5f57f8b9="">杂六</span></td> <td data-v-5f57f8b9=""><!----> <span data-v-5f57f8b9="">半顺</span> <!----> <!----> <!----></td></tr><tr data-v-5f57f8b9=""><td data-v-5f57f8b9="">20181020027</td> <td data-v-5f57f8b9="">2018-10-20 10:31:00</td> <td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">3</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">9</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">4</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">7</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">1</i></td> <td data-v-5f57f8b9="">
            24
          </td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">大</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">双</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">龙</span></td> <td data-v-5f57f8b9=""><!----> <span data-v-5f57f8b9="">半顺</span> <!----> <!----> <!----></td> <td data-v-5f57f8b9=""><!----> <!----> <!----> <!----> <span data-v-5f57f8b9="">杂六</span></td> <td data-v-5f57f8b9=""><!----> <!----> <!----> <!----> <span data-v-5f57f8b9="">杂六</span></td></tr><tr data-v-5f57f8b9=""><td data-v-5f57f8b9="">20181020026</td> <td data-v-5f57f8b9="">2018-10-20 10:21:00</td> <td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">8</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">6</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">8</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">2</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">0</i></td> <td data-v-5f57f8b9="">
            24
          </td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">大</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">双</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">龙</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="">对子</span> <!----> <!----> <!----> <!----></td> <td data-v-5f57f8b9=""><!----> <!----> <!----> <!----> <span data-v-5f57f8b9="">杂六</span></td> <td data-v-5f57f8b9=""><!----> <!----> <!----> <!----> <span data-v-5f57f8b9="">杂六</span></td></tr><tr data-v-5f57f8b9=""><td data-v-5f57f8b9="">20181020025</td> <td data-v-5f57f8b9="">2018-10-20 10:11:00</td> <td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">9</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">2</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">2</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">7</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">6</i></td> <td data-v-5f57f8b9="">
            26
          </td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">大</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">双</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">龙</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="">对子</span> <!----> <!----> <!----> <!----></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="">对子</span> <!----> <!----> <!----> <!----></td> <td data-v-5f57f8b9=""><!----> <span data-v-5f57f8b9="">半顺</span> <!----> <!----> <!----></td></tr><tr data-v-5f57f8b9=""><td data-v-5f57f8b9="">20181020024</td> <td data-v-5f57f8b9="">2018-10-20 10:01:00</td> <td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">5</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">7</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">2</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">3</i></td><td data-v-5f57f8b9=""><i data-v-5f57f8b9="" class="ball-icon">5</i></td> <td data-v-5f57f8b9="">
            22
          </td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="">小</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="red">双</span></td> <td data-v-5f57f8b9=""><span data-v-5f57f8b9="" class="">和</span></td> <td data-v-5f57f8b9=""><!----> <!----> <!----> <!----> <span data-v-5f57f8b9="">杂六</span></td> <td data-v-5f57f8b9=""><!----> <span data-v-5f57f8b9="">半顺</span> <!----> <!----> <!----></td> <td data-v-5f57f8b9=""><!----> <span data-v-5f57f8b9="">半顺</span> <!----> <!----> <!----></td></tr></tbody></table></div></div>

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
      currentPage: 1,
      totalbetsMoney: 0,
      totalwinMoney: 0,
      currentBetsMoney: 0,
      currentWinMoney: 0
    }
  },
  created() {
      this.getnowOrder2(this.currentPage,10000);
      this.getnowOrder(this.currentPage,10);
  },
  computed: {
  },
  methods: {
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