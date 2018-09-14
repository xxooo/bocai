<template>
	<div class="title-content">
    <div class="wanfaBtn">
        <el-button type="primary" size="mini">玩法规则</el-button>
    </div>
    <div class="winCurrent">
      <span>当前彩种输赢:</span>
      <span class="red">0.00</span>
    </div>
    <div class="kaipangTime">
      <div class="qiciDiv">
        <p>第 <span class="qiciSpan">{{bocaiInfoData.bocaiPeriods}}</span> 期</p>
        <p>距离下期开盘</p>              
      </div>
      <div id="clockTimes">
        <center>
          <span id="clock">{{timeLeft}}</span>
        </center>
      </div>
    </div>    
  </div>
</template>


<script>
  import { mapGetters } from 'vuex';

	export default {
		props: {
      orderDataList: {
        type: Array
      },
      bocaiCategory: {
        type: Object
      }
		},
		data() {
			return {
        timeLeft:'',
        bocaiInfoData: {}
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
      bus.$on('getclockTime', (data) => {
        this.gettimeLeft();
      });
      bus.$on('getbocaiTypeList', (data) => {
        this.bocaiInfo(data[0].bocaiId);
      });
    },
		methods: {
      async bocaiInfo(id) {
        let res = await this.$get(`${window.url}/api/bocaiInfo?bocaiTypeId=`+id);

            if(res.code===200){
              this.bocaiInfoData = res.data;
              bus.$emit('getbocaiInfoData', res.data); 

              bus.$emit('getpreResult', res.data.preResult == '' ? '等待开奖中' : res.data.preResult.split(','));   //"preResult": 
              bus.$emit('getpreBocaiPeriods', res.data.preBocaiPeriods);   //"preBocaiPeriods": "30763817",//上期博彩期数    

              bus.$emit('getclockTime', res.data.openPrizeTime); 
              //this.gettimeLeft();
            }

      },
      clockTime() {
        this.$emit('clockTime', '');
      },
      gettimeLeft(priTime) {
        var hourtime="24:00:00";
        var endTime =new Date(new Date().toLocaleDateString()+" "+hourtime);

        var now = new Date();

        var nowYear=now.getFullYear();
        var nowMonth=now.getMonth()+1;
        var nowDay=now.getDate();

        var leftTime = this.bocaiInfoData.openPrizeTime - now.getTime();

        var ms = parseInt(leftTime % 1000).toString();
        leftTime = parseInt(leftTime / 1000);
        var o = Math.floor(leftTime / 3600);
        var d = Math.floor(o / 24);
        var m = Math.floor(leftTime / 60 % 60);
        var s = leftTime % 60;

        this.timeLeft = o + ":" + m + ":" + s;

        setTimeout(this.gettimeLeft, 100);

        //openPrizeTime
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
