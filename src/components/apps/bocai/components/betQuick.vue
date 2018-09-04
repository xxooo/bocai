<template>
	<div class="betQuick">
    <div class="beishu"></div>
    <div class="betRight">
      <div class="betRTop" :class="istype ? '' : 'onlybet' ">
        <el-input v-model="money" size="mini" placeholder="请输入金额"></el-input>
        <el-button type="primary"size="mini" plain>下 注</el-button>
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
      }
		},
		data() {
			return {
        money: '',
        radio10: '1'
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
