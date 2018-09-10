<template>
	<div class="betQuick">
    <div class="beishu">
      <div class="beishuBtn" @click="orderMul(10)"><a>10</a></div>
      <div class="beishuBtn" @click="orderMul(50)"><a>50</a></div>
      <div class="beishuBtn" @click="orderMul(100)"><a>100</a></div>
      <div class="beishuBtn" @click="orderMul(500)"><a>500</a></div>
      <div class="beishuBtn" @click="orderMul(1000)"><a>1000</a></div>
      <div class="beishuBtn" @click="orderMul(5000)"><a>5000</a></div>
    </div>
    <div class="betRight">
      <div class="betRTop" :class="istype ? '' : 'onlybet' ">
        <el-input v-model="money" size="mini" placeholder="请输入金额"></el-input>
        <el-button type="primary"size="mini" plain @click="orderOdds()">下 注</el-button>
        <el-button type="danger" size="mini">重 置</el-button>
      </div>
      <div class="betRBottom" v-if="istype">
        <label>投注类型:</label>
        <el-radio-group v-model="radio10" size="mini">
          <el-radio label="1" border>快捷</el-radio>
          <el-radio label="2" border>一般</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex';

	export default {
		props: {
      istype: {
        type: Boolean
      },
      orderDatas: {
        type: Object
      },
      bocaiInfoData: {
        type: Object
      }
		},
		data() {
			return {
        money: '',
        radio10: '1',
        mul: 1
			}
		},
    components: {
		},
		async created() {
    },
    computed:{
      ...mapGetters({
      })
    },
    mounted(){
    },
		methods: {
      orderOdds() {
        console.log('orderDatas',this.orderDatas);
        console.log('bocaiInfoData',this.bocaiInfoData);
        // companyIsOpenSet: "",//该会员上级公司对该期博彩的封盘状态。状态：0删除，1封盘，2开盘。只有开盘才能投注。
            // bocaiPeriodsId: "1480",//该博彩期数ID
            // preOpenPrizeTime: 1535094708000,//上一期开奖时间
            // isOpenSet: "",//管理员对于当期博彩的开关设置
            // preBocaiPeriods": "30763817",//上期博彩期数
            // closetime: null,//当期关盘时间
            // preClosetime: null,//上一期关盘时间
            // bocaiPeriods: "30763818",//当期博彩期数
            // advanceTimeSet: "",//提前多少分钟开盘，只用于六合彩
            // openTimeSet: "",//该博彩的每天开盘时间，到时候才开始博彩投注
            // openPrizeTime": 1535094708000,//当期开奖时间
            // openTime: 1535094633000,//当期的开盘时间
            // preResult: "07,02,04,10,01,03,08,09,05,06",//上一期结果
            // closeTimeSet: ""//提前多少秒封盘

        // let orderPaData = {
        //       periodsId: bocaiPeriodsId,
        //       bocaiTypeId: id,
        //       bocaiTypeName: this.curBocaiName,
        //       bocaiCategory1Id: 0,
        //       bocaiCategory1Name: '',
        //       orderBetMoneySum: '',
        //       cuserId: 
        //     }


      },
      orderMul(mul) {
        this.mul = mul;
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

.beishuBtn:last-child
{ 
  width: 68.8px;
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
}

</style>
