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
              <el-menu-item index="2" @click="getOddsCategory(3)">1-5</el-menu-item>
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
              <bet-quick :istype="topbet"></bet-quick>
            </div>

            <div>
              <!-- 表格类型1 -->
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="8">总和-龙虎和</th>
                    </tr>
                    <tr>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" width="8%">总和大</td>
                      <td class="tdRight">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
              </div>
            </div>

            <div>
              <!-- 表格类型2 -->
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">第一球</th>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">第一球</th>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">第一球</th>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">第一球</th>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
              <div class="eball">
                  <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="2">第一球</th>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="tdLeft">大</td>
                        <td class="tdRight">
                          <ul>
                            <li>
                              <span class="odds-font">1.99</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </div>
              </div>
            </div>

            <div>
              <!-- 表格类型3 -->
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">前三</th>
                    </tr>
                    <tr>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
              </div>
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">前三</th>
                    </tr>
                    <tr>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
              </div>
              <div class="order-table">
                  <table>
                    <tr>
                      <th colspan="10">前三</th>
                    </tr>
                    <tr>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                      <td class="tdLeft" style="width: 10%;">总和大</td>
                      <td class="tdRight" style="width: 10%;">
                        <ul>
                          <li>
                            <span class="odds-font">1.99</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
              </div>
            </div>

            <div class="order-info">
              <bet-quick :istype="botbet"></bet-quick>
            </div>
          </div>

          <div>
            <div class="bead-table">
              <table class="bead-ball">
                <tr>
                  <th class="active">第一球</th>
                  <th class="">第二球</th>
                  <th class="">第三球</th>
                  <th class="">第四球</th>
                  <th class="">第五球</th>
                </tr>
              </table>
              <table>
                <tr class="td-head">
                  <td>0</td> 
                  <td data-v-21ddc614="">1</td> 
                  <td data-v-21ddc614="">2</td> 
                  <td data-v-21ddc614="">3</td> 
                  <td data-v-21ddc614="">4</td> 
                  <td data-v-21ddc614="">5</td> 
                  <td data-v-21ddc614="">6</td> 
                  <td data-v-21ddc614="">7</td> 
                  <td data-v-21ddc614="">8</td> 
                  <td data-v-21ddc614="">9</td>
                </tr> 
                <tr data-v-21ddc614="">
                  <td data-v-21ddc614="">9</td>
                  <td data-v-21ddc614="">10</td>
                  <td data-v-21ddc614="">8</td>
                  <td data-v-21ddc614="">16</td>
                  <td data-v-21ddc614="">15</td>
                  <td data-v-21ddc614="">10</td>
                  <td data-v-21ddc614="">12</td>
                  <td data-v-21ddc614="">12</td>
                  <td data-v-21ddc614="">13</td>
                  <td data-v-21ddc614="">19</td>
                </tr>
              </table>
              <table data-v-21ddc614="" width="100%" class="bead-ball">
                <tr data-v-21ddc614="">
                  <th data-v-21ddc614="" class="active">第一球</th> 
                  <th data-v-21ddc614="" class="">大小</th> 
                  <th data-v-21ddc614="" class="">单双</th> 
                  <th data-v-21ddc614="" class="">总和大小</th> 
                  <th data-v-21ddc614="" class="">总和单双</th> 
                  <th data-v-21ddc614="" class="">龙虎和</th>
                </tr>
              </table>
              <table data-v-21ddc614="">
                <tr data-v-21ddc614="">
                  <td data-v-21ddc614="" width="4%" class="bead-list">
                    <p data-v-21ddc614="">4</p>
                  </td>
                  <td data-v-21ddc614="" width="4%" class="bead-list">
                    <p data-v-21ddc614="">3</p>
                  </td>
                  <td data-v-21ddc614="" width="4%" class="bead-list">
                    <p data-v-21ddc614="">4</p>
                  </td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">6</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">1</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">3</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">9</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">6</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">2</p><p data-v-21ddc614="">2</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">1</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">8</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">5</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">4</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">2</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">0</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">7</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">1</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">2</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">8</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">6</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">5</p><p data-v-21ddc614="">5</p></td>
                  <td data-v-21ddc614="" width="4%" class="bead-list"><p data-v-21ddc614="">0</p></td>
                </tr>
              </table>
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
      activeIndex2: '1',
      botbet: false,
      topbet: true
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
    },
    async getOddsCategory(id) {
      let prjData = await this.$get(`${window.url}/api/getOdds?bocaiTypeId=`+1+`&bocaiCategoryId=`+id);

          if(prjData.code===200){
            console.log('ok');
          }
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

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.order-table table {
    font-size: 12px;
    width: 100%;
    border-collapse: collapse;
    border-top: none;
    margin-bottom: 10px;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

table > tr {
    vertical-align: middle;
}

address, button, caption, cite, code, dfn, em, input, optgroup, option, select, strong, textarea, th, var {
    font: inherit;
}

caption, th {
    text-align: left;
}

.order-table th {
    line-height: 1.8;
    background-color: #ffd04b;
    text-align: center;
    border-bottom: none;
    color: #511e02;
    font-weight: 700;
    height: 30px;
    font-size: 14px;
    border: 1px solid #b2b1b9;
}

.order-table td {
    position: relative;
    overflow: hidden;
    background-clip: padding-box;
    color: #511e02;
    height: 30px;
    min-width: 24px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #bbb;
    background-color: #f9f8f9;
}

td.tdLeft {
  cursor: pointer;
}

td.tdLeft {
  color: #511e02;
  font-weight: 700;
}

.eball td.tdLeft:nth-child(1) {
    width: 40px;
}

td.tdRight {
    cursor: pointer;
    position: relative;
}

.tdRight ul {
    height: 100%;
    overflow: hidden;
}

.tdRight ul li {
    padding: 7px 0;
    display: inline-block;
    width: 40%;
    margin: 0;
}

.tdRight ul li:only-child {
    width: 100%;
}

.odds-font {
    color: #d63e35;
    font-weight: 700;
}

.tdRight span {
    cursor: pointer;
    display: inline-block;
}

.tdHover {
  background: #fcf1b4;
}

.tdClick {
  background: #faf014;
}

.eball {
    display: inline-block;
    width: 162px;
    margin-right: 0px;
}

.bead-table {
    padding: 0;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.bead-table table {
    border-radius: 5px 5px 0 0;
    background-color: #fefdfc;
}

.bead-table table {
    width: 100%;
    border-collapse: collapse;
    border-top: none;
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
}

.bead-table .bead-ball {
    margin-bottom: 0;
    margin-top: 5px;
}

.bead-table .bead-ball th {
    text-align: center;
    cursor: pointer;
    color: #511e02;
    font-size: 13px;
    font-weight: 700;
    background-color: #ffd04b;
}

.bead-table .bead-ball th:first-child {
    border-top-left-radius: 5px;
}

.bead-table .bead-ball th.active {
    color: #fdfcfa;
    cursor: default;
    background-color: #ff9800;
}
.bead-table .bead-ball th+th {
    border-left: 1px solid #b299d8;
}
.bead-table table td {
    text-align: center;
    border: 1px solid #bbb;
}
.td-head td {
    width: 10%;
}
.bead-table table .td-head td {
    color: #35406d;
    font-weight: 700;
}
.bead-table table td.bead-list {
    vertical-align: top;
    line-height: 20px;
    width: 4%;
}
.bead-table table td.bead-list:nth-child(2n+1) {
    background-color: #f8f8fd;
}

.bead-table .bead-ball th:last-child {
    border-top-right-radius: 5px;
    border-right: none;
}

</style>
