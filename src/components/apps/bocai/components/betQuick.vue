<template>
	<div class="betQuick">
    <div class="beishu">
      <div class="beishuBtn beishuBtn10" @click="orderMul(10)"><a>10</a></div>
      <div class="beishuBtn beishuBtn50" @click="orderMul(50)"><a>50</a></div>
      <div class="beishuBtn beishuBtn100" @click="orderMul(100)"><a>100</a></div>
      <div class="beishuBtn beishuBtn500" @click="orderMul(500)"><a>500</a></div>
      <div class="beishuBtn beishuBtn1000" @click="orderMul(1000)"><a>1000</a></div>
      <div class="beishuBtn beishuBtn5000" @click="orderMul(5000)"><a>5000</a></div>
    </div>
    <div class="betRight">
      <div class="betRTop">
        <el-input v-model.number="moneyOrder" size="mini" placeholder="请输入金额" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></el-input>
        <el-button type="primary"size="mini" plain @click="orderOdds()">下 注</el-button>
        <el-button type="danger" size="mini" @click="orderOdds()">重 置</el-button>
      </div>
      <div class="betRBottom">
        <label>投注类型:</label>
        <el-radio-group v-model="radio10" size="mini">
          <el-radio label="1" border>快捷</el-radio>
          <el-radio label="2" border>一般</el-radio>
        </el-radio-group>
      </div>
    </div>


    <el-dialog
      title="下注明细(请确认注单)"
      :visible.sync="orderOddsVisible"
      center>

      <div class="popup-body" style="max-height: 300px;">
        <div class="default-list">
          <table>
            <thead>
              <th>号码</th> 
              <th width="20%">赔率</th> 
              <th width="20%">金额</th> 
              <th width="15%">操作</th>
            </thead> 
            <tr v-for="(item,index) in orderList">
              <td class="combine-td"><p>{{item.oddNames}}</p></td> 
              <td class="odds-font">{{item.bocaiOdds}}</td> 
              <td><input type="text" class="betValue" v-model="item.betsMoney"></td> 
              <td><button class="btn-delete" @click="deleteOdd(index)">删除</button></td>
            </tr>
            <tr class="tab-footer">
              <td>组数：<span>{{orderList.length}}</span></td> 
              <td colspan="3">总金额：<span>{{totalMoney}}</span></td>
            </tr>
          </table>
        </div>
      </div> 

      <span slot="footer" class="dialog-footer">
        <el-button @click="orderOddsVisible = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="orderSub()" size="medium">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>


<script>
  import { mapGetters } from 'vuex';

	export default {
		props: {
      orderDataList: {
        type: Array
      },
      bocaiInfoData: {
        type: Object
      },
      bocaiCategory: {
        type: Object
      }
		},
		data() {
			return {
        moneyOrder: '',
        radio10: '1',
        mul: 1,
        orderOddsVisible: false,
        orderList: [],
        bocaiTypeId: '',
        bocaiTypeName: '',
        cuserId: '',
        orderDatas: {
          periodsId:'',//投注期数ID
          bocaiTypeId:'',//投注博彩ID
          bocaiTypeName:'',//投注博彩名称
          bocaiCategory1Id:'',//投注博彩分类1ID
          bocaiCategory1Name:'',//投注博彩分类1名称
          orderBetMoneySum:0,//投注总和
          cuserId:'',//当前登录ID
          list:[]
        }
			}
		},
    components: {
		},
		async created() {
    },
    computed:{
      ...mapGetters({
        cashBalance: 'getcashBalance'
      }),
      totalMoney() {
        let totalMoney = 0;
        for(let n in this.orderList) {
          totalMoney += this.orderList[n].betsMoney*1;
        }
        return totalMoney;
      }
    },
    mounted(){
      bus.$on('getbocaiTypeId', (data) => {
        this.bocaiTypeId = data;
      });
      bus.$on('getbocaiTypeName', (data) => {
        this.bocaiTypeName = data;
      });
      bus.$on('getcuserId', (data) => {
        this.cuserId = data;
      });
    },
		methods: {
      orderOdds() {

      },
      deleteOdd(index) {
        this.orderList.splice(index,1);
      },
      async orderSub() {
        if(this.totalMoney > this.cashBalance) {
          this.$alertMessage('您的余额不足!', '温馨提示');
        } else {

          console.log('orderDataList',this.orderDataList);
          console.log('bocaiInfoData',this.bocaiInfoData);

          this.orderDatas.periodsId = this.bocaiInfoData.bocaiPeriodsId;
          this.orderDatas.bocaiTypeId = this.bocaiTypeId;
          this.orderDatas.bocaiTypeName = this.bocaiTypeName;
          this.orderDatas.bocaiCategory1Id = this.bocaiCategory.id;
          this.orderDatas.bocaiCategory1Name = this.bocaiCategory.name;
          this.orderDatas.orderBetMoneySum = this.totalMoney;
          this.orderDatas.cuserId = this.cuserId;
          this.orderDatas.list = this.orderDataList;

          this.orderOddsVisible = false;
          
          let that = this;
          NProgress.start();
          await that.$post(`${window.url}/api/orderSub`,this.orderDatas).then((res) => {
            that.$handelResponse(res, (result) => {
              NProgress.done();
              if(result.code===200){
             
              }
            })
          });

        }
      },
      orderOdds() {

        this.orderList = [];

        if(this.orderDataList.length == 0) {
          this.$alertMessage('请确认注单!', '温馨提示');
        } else if(this.moneyOrder == ''){
          this.$alertMessage('请输入金额!', '温馨提示');
        } else {
          for(let n in this.orderDataList) {
          let obj = {
              oddNames: this.orderDataList[n].bocaiCategory2Name + '  ' + this.orderDataList[n].bocaiOddName,
              bocaiOdds: this.orderDataList[n].bocaiOdds,
              betsMoney: this.orderDataList[n].betsMoney == 0 ? this.moneyOrder*this.mul : this.orderDataList[n].betsMoney*this.mu
            }
            this.orderList.push(obj);
          }
          this.orderOddsVisible = true;
        }

      },
      orderMul(mul) {
        
        if($('.beishuBtn'+mul).hasClass('selected')) {
          $('.beishuBtn'+mul).removeClass('selected');
          this.mul = 1;
        } else {
          $(".beishuBtn").removeClass('selected');
          $('.beishuBtn'+mul).addClass('selected');
          this.mul = mul;
        }
      }
		}
	}

</script>

<style scoped>
.betQuick {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 14px;
    position: relative;
    height: 67px;
}

.betQuick div {
  display: inline-block;
  float: left;
  margin-left: 20px;
}

.beishu {
  width: 400px;
  height: 67px;
  background: url(./../../../../../static/img/casino-wt.png) bottom no-repeat transparent;
}

.betRight {
  width: 380px;
  margin-left: 50px;
}

.betRBottom label {
  color: #fff;
  float: left;
  padding: 5px 20px 0px 20px;
}

.betRBottom {
  margin-top: 10px;
}

.beishuBtn {
    width: 66.1px;
    height: 67px;
    margin: 0px !important;
    border-radius: 50px;
    cursor: pointer;
}

.beishuBtn a {
  height: 66px;
  line-height: 66px;
  font-weight: bold;
  padding-left: 2px;
}

.beishuBtn:hover {
  color: #ff9800;
}

.beishuBtn.selected {
  color: #ff9800;
  font-size: 16px;
}

.beishuBtn:last-child
{ 
  width: 68.8px;
}

.popup-body {
    overflow-y: auto;
    margin-left: 0px !important;
}

.default-list {
    padding: 8px 10px;
    margin-left: 0px !important;
}

.default-list table {
    margin-top: 5px;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

.default-list table thead {
    background-color: #d6d4de;
    font-weight: 700;
    color: #261238;
}
.default-list table td, .default-list table th {
    text-align: center;
    line-height: 30px;
    border: 1px solid #aca6c2;
    padding: 0 6px;
    position: relative;
}
.default-list table td p, .default-list table th p {
    line-height: 18px;
}
.odds-font {
    color: #d63e35;
    font-weight: 700;
}
.betValue {
    height: 16px;
    width: 60px;
    padding: 0 3px;
    line-height: 16px;
}
button.btn-delete {
    margin-left: 8px;
    width: 50px;
    height: 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    outline: none;
}
button.btn-delete {
    line-height: 16px;
    background: #d63e35;
}
.default-list table tr.tab-footer {
    background-color: #d6d4de;
    font-weight: 700;
    color: #261238;
}
</style>

<style lang="less">

.betQuick {
  .el-input {
    width: 120px;
    margin-right: 20px;
  }

  .el-radio.is-bordered.is-checked {
    background-color: #ffd04b;
  }

  .betRTop.onlybet {
    margin-top: 20px;
  }

  .el-dialog__header {
    padding: 20px 20px 10px;
    background-color: #ccb0da;
    border-radius: 5px 5px 0 0;
  }
  .el-dialog.el-dialog--center {
    width: 500px;
    color: #450400 !important;
    background-color: #fcfcfa;
    box-shadow: 0 2px 8px rgba(0,0,0,.33);
    font-family: Helvetica,Arial,sans-serif;
    border-radius: 5px;
  }
  .el-dialog--center .el-dialog__body {
    text-align: center;
    padding: 0px;
  }
}

</style>
