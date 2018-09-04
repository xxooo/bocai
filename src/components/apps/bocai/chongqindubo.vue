<template>
  <div id="chongqindubo" class="content-main">
    
    <div class="right">
      <div>
        <div>
          <div id="submenu">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-subnav"
              mode="horizontal"
              @select="handleSelect"
              background-color="#572f5f"
              text-color="#ffd04b"
              active-text-color="#ffd04b">
              <el-menu-item index="1">两面盘</el-menu-item>
              <el-menu-item index="2">1-20名</el-menu-item>
              <el-menu-item index="3">冠亚组合</el-menu-item>
              <!-- <el-menu-item index="4">北京快乐8</el-menu-item>
              <el-menu-item index="5">六合彩</el-menu-item>
              <el-menu-item index="6">广东快乐十分</el-menu-item>
              <el-menu-item index="7">广东11选5</el-menu-item>
              <el-menu-item index="8">PC蛋蛋</el-menu-item>
              <el-menu-item index="8">PC蛋蛋</el-menu-item>
              <el-menu-item index="8">PC蛋蛋</el-menu-item>
              <el-submenu index="9">
                <template slot="title">更多</template>
                <el-menu-item index="2-1">天津时时彩</el-menu-item>
                <el-menu-item index="2-2">安徽快3</el-menu-item>
                <el-menu-item index="2-3">山东11选5</el-menu-item>
                <el-menu-item index="2-3">江苏快3</el-menu-item>
                <el-menu-item index="2-3">江西11选5</el-menu-item>
                <el-menu-item index="2-3">重庆幸运农场</el-menu-item>
                <el-menu-item index="2-3">新疆时时彩</el-menu-item>
              </el-submenu> -->
            </el-menu>
          </div>
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
                <p>第<span class="qiciSpan">123456</span>期</p>
                <p>距离下期开盘</p>
              </div>
              <clock-times></clock-times>
            </div>
          </div>
        </div>
        <div class="bet_box">
          <div class="orders">
            <div class="order-info">
              <bet-quick></bet-quick>
            </div>

            <div class="order-table">
              
            </div>
          </div>

        </div>
      </div>
    </div>
    <p style="clear: both;"></p>
  </div>
</template>

<script>
import ClockTimes from '@/components/apps/bocai/components/clockTimes';
import BetQuick from '@/components/apps/bocai/components/betQuick';

export default {
  components: {
    ClockTimes,
    BetQuick
  },
  data () {
    return {
      activeName: 'second',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
.right {
    position: relative;
}

.bet_box {
    width: 830px;
    overflow-x: hidden;
}

.orders {
    padding: 6px 0;
}

</style>
