<template>
	<div class="betQuick">
    <div class="beishu">
      <div class="beishuBtn" :class="[isTop+'10',isTop]" @click="orderMul(isTop,10)"><a>10</a></div>
      <div class="beishuBtn" :class="[isTop+'50',isTop]" @click="orderMul(isTop,50)"><a>50</a></div>
      <div class="beishuBtn" :class="[isTop+'100',isTop]" @click="orderMul(isTop,100)"><a>100</a></div>
      <div class="beishuBtn" :class="[isTop+'500',isTop]" @click="orderMul(isTop,500)"><a>500</a></div>
      <div class="beishuBtn" :class="[isTop+'1000',isTop]" @click="orderMul(isTop,1000)"><a>1000</a></div>
      <div class="beishuBtn" :class="[isTop+'5000',isTop]" @click="orderMul(isTop,5000)"><a>5000</a></div>
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
            <tr>
              <td class="combine-td"><p>龙虎和 虎</p></td> 
              <td class="odds-font">1.983</td> 
              <td><input type="text" class="betValue"></td> 
              <td><button class="btn-delete">删除</button></td>
            </tr>
            <tr class="tab-footer">
              <td>组数：<span>2</span></td> 
              <td colspan="3">总金额：<span>246</span></td>
            </tr>
          </table>
        </div>
      </div> 

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false" size="medium">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false" size="medium">确 定</el-button>
      </span>
    </el-dialog>


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
      },
      isTop: {
        type: String
      }
		},
		data() {
			return {
        money: '',
        radio10: '1',
        mul: 1,
        orderOddsVisible: false
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

        this.orderOddsVisible = true;
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
      orderMul(isTop,mul) {
        
        if($('.'+isTop+mul).hasClass('selected')) {
          $('.'+isTop+mul).removeClass('selected');
          this.mul = 1;
        } else {
          $(".beishuBtn."+isTop).removeClass('selected');
          $('.'+isTop+mul).addClass('selected');
          this.mul = mul;
        }
        


      //   $("div.content *").not(".keep"); // 表示content类的div下除keep类以外的所有元素；另外，注意*表示所有元素


      //   if($('.'+ids+item.oddsId).hasClass('selected')){
      //   $('.'+ids+item.oddsId).removeClass('selected');

      //   _.remove(this.orderDatas.list, function(n) {
      //     return n.bocaiOddName == item.oddsName;
      //   });

      // } else {
      //   $('.'+ids+item.oddsId).addClass('selected');
      //   let obj = {
      //     bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
      //     bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
      //     bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
      //     bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
      //     bocaiValue:"",//投注内容,六合彩连肖/连尾
      //     betsMoney:0,//10000,//当前赔率投注金额
      //     bocaiOdds: item.odds//1.90//赔率
      //   };

      //   this.orderDatas.list.push(obj);
      // }


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
