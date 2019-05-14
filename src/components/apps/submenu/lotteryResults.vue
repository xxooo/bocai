<template>
  <div class="content-main" id="lotteryResults">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">
          <div class="header">
            <p>开奖结果</p>
          </div> 

          <div class="default-list" style="min-height: 316px;">
            <div class="">
              游戏类型：
              <el-select v-model="bocaiType" placeholder="请选择" size="mini" @change="changeboType">
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
                  value-format="yyyy-MM-dd"
                  @change="gettime"
                  v-model="openPrizeTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </span>
            </div> 

            <div>
              <!-- 重庆时时彩 极速时时彩-->
              <table v-if="[1,8815].findIndex((n) => n==bocaiType)>-1">
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
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="12" >
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><div class="ball-icon">{{item.num1}}</div></td>
                      <td><div class="ball-icon">{{item.num2}}</div></td>
                      <td><div class="ball-icon">{{item.num3}}</div></td>
                      <td><div class="ball-icon">{{item.num4}}</div></td>
                      <td><div class="ball-icon">{{item.num5}}</div></td> 
                      <td>{{item.zonghe}}</td> 
                      <td><span :class="item.zonghedaxiao == '大' ? 'red' : ''">{{item.zonghedaxiao}}</span></td> 
                      <td><span :class="item.zonghedanshuang == '双' ? 'red' : ''">{{item.zonghedanshuang}}</span></td> 
                      <td><span :class="item.longhu == '龙' ? 'red' : item.longhu == '虎' ? 'blue' : ''">{{item.longhu}}</span></td> 
                      <td><span>{{item.qiansan}}</span></td> 
                      <td><span>{{item.zhongsan}}</span></td> 
                      <td><span>{{item.housan}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>

              <!-- 山东11选5 -->
              <table v-if="bocaiType == '8811'">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="5">开出号码</th> 
                    <th colspan="4">总和</th> 
                    <th>龙虎</th> 
                    <th colspan="5">1~5大小</th> 
                    <th colspan="5">1~5单双</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="20" >
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><div class="ball-icon">{{item.num1}}</div></td>
                      <td><div class="ball-icon">{{item.num2}}</div></td>
                      <td><div class="ball-icon">{{item.num3}}</div></td>
                      <td><div class="ball-icon">{{item.num4}}</div></td>
                      <td><div class="ball-icon">{{item.num5}}</div></td> 
                      <td>{{item.zonghe}}</td> 
                      <td><span :class="item.zonghedaxiaohe == '大' ? 'red' : ''">{{item.zonghedaxiaohe}}</span></td> 
                      <td><span :class="item.zonghedanshuang == '双' ? 'red' : ''">{{item.zonghedanshuang}}</span></td> 
                      <td><span :class="item.zongheweidaweixiao == '尾大' ? 'red' : ''">{{item.zongheweidaweixiao}}</span></td> 
                      <td><span :class="item.longhu == '龙' ? 'red' : item.longhu == '虎' ? 'blue' : ''">{{item.longhu}}</span></td> 
                      <td><span :class="item.yidaxiaohe == '大' ? 'red' : item.yidaxiaohe == '小' ? 'blue' : ''">{{item.yidaxiaohe}}</span></td> 
                      <td><span :class="item.erdaxiaohe == '大' ? 'red' : item.erdaxiaohe == '小' ? 'blue' : ''">{{item.erdaxiaohe}}</span></td> 
                      <td><span :class="item.sandaxiaohe == '大' ? 'red' : item.sandaxiaohe == '小' ? 'blue' : ''">{{item.sandaxiaohe}}</span></td> 
                      <td><span :class="item.sidaxiaohe == '大' ? 'red' : item.sidaxiaohe == '小' ? 'blue' : ''">{{item.sidaxiaohe}}</span></td> 
                      <td><span :class="item.wudaxiaohe == '大' ? 'red' : item.wudaxiaohe == '小' ? 'blue' : ''">{{item.wudaxiaohe}}</span></td> 
                      <td><span :class="item.yidanshuang == '双' ? 'red' : item.yidanshuang == '单' ? 'blue' : ''">{{item.yidanshuang}}</span></td> 
                      <td><span :class="item.erdanshuang == '双' ? 'red' : item.erdanshuang == '单' ? 'blue' : ''">{{item.erdanshuang}}</span></td> 
                      <td><span :class="item.sandanshuang == '双' ? 'red' : item.sandanshuang == '单' ? 'blue' : ''">{{item.sandanshuang}}</span></td> 
                      <td><span :class="item.sidanshuang == '双' ? 'red' : item.sidanshuang == '单' ? 'blue' : ''">{{item.sidanshuang}}</span></td> 
                      <td><span :class="item.wudanshuang == '双' ? 'red' : item.wudanshuang == '单' ? 'blue' : ''">{{item.wudanshuang}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>

              <!-- 江苏快三 -->
              <table v-if="bocaiType == '8498'">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="3">开出号码</th> 
                    <th colspan="2">总和</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>

                    <template v-if="!item.result || item.result == ''">
                      <td colspan="5">
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><i :class="'jsk3-icon-'+item.num1" style="margin-top: 6px;"></i></td>
                      <td><i :class="'jsk3-icon-'+item.num2" style="margin-top: 6px;"></i></td>
                      <td><i :class="'jsk3-icon-'+item.num3" style="margin-top: 6px;"></i></td>
                      <td><span>{{item.zonghe}}</span></td> 
                      <td><span class="red">{{item.zonghedaxiao}}</span></td>
                    </template>
                  </tr>
                </tbody>
              </table>


              <!-- 北京PK10  幸运飞艇 急速赛车-->
              <table v-if="[8555,8806,9057].findIndex((n) => n==bocaiType)>-1">
                <thead>
                  <tr>
                    <th>期数</th> 
                    <th>开奖时间</th> 
                    <th colspan="10">开出号码</th> 
                    <th colspan="3">冠亚军和</th> 
                    <th colspan="5">1~5龙虎</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in resultList">
                    <td>{{item.periods}}</td> 
                    <td>{{$timestampToTime(item.openPrizetime)}}</td>
                    <template v-if="!item.result || item.result == ''">
                      <td colspan="18">
                        <span>暂未开奖</span>
                      </td>
                    </template>
                    <template v-else>
                      <td><div :class="'ball-fang ball-fang'+item.num1">{{item.num1}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num2">{{item.num2}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num3">{{item.num3}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num4">{{item.num4}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num5">{{item.num5}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num6">{{item.num6}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num7">{{item.num7}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num8">{{item.num8}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num9">{{item.num9}}</div></td> 
                      <td><div :class="'ball-fang ball-fang'+item.num10">{{item.num10}}</div></td> 
                      <td>{{item.guanyajunhe}}</td> 
                      <td><span :class="item.guanyajundaxiao == '大' ? 'red' : ''">{{item.guanyajundaxiao}}</span></td> 
                      <td><span :class="item.guanyajundanshuang == '双' ? 'red' : ''">{{item.guanyajundanshuang}}</span></td> 
                      <td><span :class="item.yilonghu == '龙' ? 'red' : item.yilonghu == '虎' ? 'blue' : ''">{{item.yilonghu}}</span></td> 
                      <td><span :class="item.erlonghu == '龙' ? 'red' : item.erlonghu == '虎' ? 'blue' : ''">{{item.erlonghu}}</span></td> 
                      <td><span :class="item.sanlonghu == '龙' ? 'red' : item.sanlonghu == '虎' ? 'blue' : ''">{{item.sanlonghu}}</span></td> 
                      <td><span :class="item.silonghu == '龙' ? 'red' : item.silonghu == '虎' ? 'blue' : ''">{{item.silonghu}}</span></td> 
                      <td><span :class="item.wulonghu == '龙' ? 'red' : item.wulonghu == '虎' ? 'blue' : ''">{{item.wulonghu}}</span></td> 
                    </template>
                  </tr>
                </tbody>
              </table>


              <!-- 快乐10 -->

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
      bocaiType: 1,
      bocaiTypeList: [],
      openPrizeTime: '',
      currentPage: 1,
      resultList: []
    }
  },
  created() {
    this.getBocai();
    this.openPrizeTime = this.$timestampToTimeRi(new Date());
    this.getPrizeResult();
  },
  computed: {
  },
  methods: {
    changeboType(data) {
      this.bocaiType = data;
      this.getPrizeResult();
    },
    gettime(data) {
      this.getPrizeResult();
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

          if(res.code===200){
            this.bocaiTypeList = res.bocaiTypeList;
          }
    },
    async getPrizeResult() { 

      console.log('openPrizeTime',this.openPrizeTime);

      let res = await this.$get(`${window.url}/api/openPrizeResult?bocaiTypeId=`+this.bocaiType+`&currentPage=1&pageSize=100&dayStr=`+this.openPrizeTime);
          if(res.code===200){

            for(let n in res.list) {

            }
            this.resultList = res.list;
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