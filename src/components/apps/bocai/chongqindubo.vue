<template>
  <div id="chongqindubo" class="content-main duboBodyClass">
    
    <div class="right">
      <div>
        <div>
          <div id="submenu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-subnav"
              mode="horizontal"
              @select="handleSelect"
              background-color="#572f5f"
              text-color="#ffd04b"
              active-text-color="#fff">
              <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item,index)" v-if="index*1 < 11">{{item.name}}</el-menu-item>
              <el-submenu v-if="bocaiCategoryList.length*1 > 11" key="submenu" index="submenu">
                <template slot="title">{{submenu}}</template>
                <el-menu-item v-for="(item,index) in bocaiCategoryList" :key="index" :index="item.name" @click="getOddsCategory(item,index)" v-if="index*1 > 10">{{item.name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          
          <clock-time></clock-time>
        </div>
        <div class="bet_box">
          <div class="orders">
            <div class="order-info">
              <bet-quick :orderDataList="orderDataList" :bocaiCategory="bocaiCategory" v-on:childByReset="childByReset" v-on:childByChangePay="childByChangePay"></bet-quick>
            </div>

            <template v-if="showOdds == '两面盘'">

                <div class="oodsBodyDiv">
                  <div class="order-table">
                      <table>
                        <tr>
                          <th colspan="8">{{longhuhe_lmp.name}}</th>
                        </tr>
                          <tr>
                            <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 < 4">
                              <td class="tdLeft ordersTdOver" width="8%" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">{{item.oddsName}}</td>
                              <td class="tdRight" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">
                                <ul>
                                  <li ><span class="odds-font">{{item.odds}}</span></li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                          <tr>
                            <template v-for="(item,index) in longhuhe_lmp.list" v-if="index*1 > 3">
                              <td class="tdLeft" width="8%" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')">{{item.oddsName}}</td>
                              <td class="tdRight" :class="'longhuhe_lmp'+item.oddsId" @click="orderTd(longhuhe_lmp,item,'longhuhe_lmp')" @mouseenter="overShow(item,'longhuhe_lmp')" @mouseleave="outHide(item,'longhuhe_lmp')"> 
                                <ul>
                                  <li>
                                    <span class="odds-font">{{item.odds}}</span>
                                  </li>
                                  <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(longhuhe_lmp,item,'longhuhe_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                                </ul>
                              </td>
                            </template>
                          </tr>
                      </table>
                  </div>
                </div>

              <div class="qiu15_body oodsBodyDiv">
                <div class="eball">
                    <div class="order-table">
                      <table>
                        <tr>
                          <th colspan="2">{{diyiqiu_lmp.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in diyiqiu_lmp.list">
                          <td class="tdLeft" :class="'diyiqiu_lmp'+item.oddsId" @click="orderTd(diyiqiu_lmp,item,'diyiqiu_lmp')" @mouseenter="overShow(item,'diyiqiu_lmp')" @mouseleave="outHide(item,'diyiqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'diyiqiu_lmp'+item.oddsId" @click="orderTd(diyiqiu_lmp,item,'diyiqiu_lmp')" @mouseenter="overShow(item,'diyiqiu_lmp')" @mouseleave="outHide(item,'diyiqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(diyiqiu_lmp,item,'diyiqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
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
                          <th colspan="2">{{dierqiu_lmp.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in dierqiu_lmp.list">
                          <td class="tdLeft" :class="'dierqiu_lmp'+item.oddsId" @click="orderTd(dierqiu_lmp,item,'dierqiu_lmp')" @mouseenter="overShow(item,'dierqiu_lmp')" @mouseleave="outHide(item,'dierqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'dierqiu_lmp'+item.oddsId" @click="orderTd(dierqiu_lmp,item,'dierqiu_lmp')" @mouseenter="overShow(item,'dierqiu_lmp')" @mouseleave="outHide(item,'dierqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(dierqiu_lmp,item,'dierqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
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
                          <th colspan="2">{{disanqiu_lmp.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in disanqiu_lmp.list">
                          <td class="tdLeft" :class="'disanqiu_lmp'+item.oddsId" @click="orderTd(disanqiu_lmp,item,'disanqiu_lmp')" @mouseenter="overShow(item,'disanqiu_lmp')" @mouseleave="outHide(item,'disanqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'disanqiu_lmp'+item.oddsId" @click="orderTd(disanqiu_lmp,item,'disanqiu_lmp')" @mouseenter="overShow(item,'disanqiu_lmp')" @mouseleave="outHide(item,'disanqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(disanqiu_lmp,item,'disanqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
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
                          <th colspan="2">{{disiqiu_lmp.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in disiqiu_lmp.list">
                          <td class="tdLeft" :class="'disiqiu_lmp'+item.oddsId" @click="orderTd(disiqiu_lmp,item,'disiqiu_lmp')" @mouseenter="overShow(item,'disiqiu_lmp')" @mouseleave="outHide(item,'disiqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'disiqiu_lmp'+item.oddsId" @click="orderTd(disiqiu_lmp,item,'disiqiu_lmp')" @mouseenter="overShow(item,'disiqiu_lmp')" @mouseleave="outHide(item,'disiqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(disiqiu_lmp,item,'disiqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
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
                          <th colspan="2">{{diwuqiu_lmp.name}}</th>
                        </tr>
                        <tr v-for="(item,index) in diwuqiu_lmp.list">
                          <td class="tdLeft" :class="'diwuqiu_lmp'+item.oddsId" @click="orderTd(diwuqiu_lmp,item,'diwuqiu_lmp')" @mouseenter="overShow(item,'diwuqiu_lmp')" @mouseleave="outHide(item,'diwuqiu_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'diwuqiu_lmp'+item.oddsId" @click="orderTd(diwuqiu_lmp,item,'diwuqiu_lmp')" @mouseenter="overShow(item,'diwuqiu_lmp')" @mouseleave="outHide(item,'diwuqiu_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(diwuqiu_lmp,item,'diwuqiu_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                    </div>
                </div>
              </div>

              <div class="oodsBodyDiv">
                <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="10">{{qiansan_lmp.name}}</th>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in qiansan_lmp.list">
                          <td class="tdLeft" :class="'qiansan_lmp'+item.oddsId" @click="orderTd(qiansan_lmp,item,'qiansan_lmp')" @mouseenter="overShow(item,'qiansan_lmp')" @mouseleave="outHide(item,'qiansan_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'qiansan_lmp'+item.oddsId" @click="orderTd(qiansan_lmp,item,'qiansan_lmp')" @mouseenter="overShow(item,'qiansan_lmp')" @mouseleave="outHide(item,'qiansan_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(qiansan_lmp,item,'qiansan_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </template>
                      </tr>
                    </table>
                </div>
                <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="10">{{zhongsan_lmp.name}}</th>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in zhongsan_lmp.list">
                          <td class="tdLeft" :class="'zhongsan_lmp'+item.oddsId" @click="orderTd(zhongsan_lmp,item,'zhongsan_lmp')" @mouseenter="overShow(item,'zhongsan_lmp')" @mouseleave="outHide(item,'zhongsan_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'zhongsan_lmp'+item.oddsId" @click="orderTd(zhongsan_lmp,item,'zhongsan_lmp')" @mouseenter="overShow(item,'zhongsan_lmp')" @mouseleave="outHide(item,'zhongsan_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(zhongsan_lmp,item,'zhongsan_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </template>
                      </tr>
                    </table>
                </div>
                <div class="order-table">
                    <table>
                      <tr>
                        <th colspan="10">{{housan_lmp.name}}</th>
                      </tr>
                      <tr>
                        <template v-for="(item,index) in housan_lmp.list">
                          <td class="tdLeft" :class="'housan_lmp'+item.oddsId" @click="orderTd(housan_lmp,item,'housan_lmp')" @mouseenter="overShow(item,'housan_lmp')" @mouseleave="outHide(item,'housan_lmp')">{{item.oddsName}}</td>
                          <td class="tdRight" :class="'housan_lmp'+item.oddsId" @click="orderTd(housan_lmp,item,'housan_lmp')" @mouseenter="overShow(item,'housan_lmp')" @mouseleave="outHide(item,'housan_lmp')">
                            <ul>
                              <li>
                                <span class="odds-font">{{item.odds}}</span>
                              </li>
                              <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(housan_lmp,item,'housan_lmp',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                            </ul>
                          </td>
                        </template>
                      </tr>
                    </table>
                </div>
              </div>

            </template>

            <template v-if="showOdds == '1~5'">
              <div>
                <div class="qiu15_body oodsBodyDiv">
                  <div class="nball" v-for="(item_yiwu,index_yiwu) in oddsList">
                    <div class="order-table">
                      <table>
                        <tr><th colspan="2">{{item_yiwu.name}}</th></tr>
                        <tr v-for="(item,index) in item_yiwu.list">
                            <td v-if="isNaN(item.oddsName*1)" class="oddsNtd tdLeft" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')">{{item.oddsName}}</td>
                            <td v-else class="oddsNtd tdLeft" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')"><div class="ball-icon" >{{item.oddsName}}</div></td> 
                            <td class="oddsUltd" :class="'item_yiwu'+item.oddsId" @click="orderTd(item_yiwu,item,'item_yiwu')" @mouseenter="overShow(item,'item_yiwu')" @mouseleave="outHide(item,'item_yiwu')">
                              <ul>
                                <li><span class="odds-font" >{{item.odds}}</span></li>
                                <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(item_yiwu,item,'item_yiwu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                              </ul>
                            </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div> 
            </template>

            <template v-if="['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == showOdds)>-1">
              <div class="order-table yiziType oodsBodyDiv">
                <table class="title">
                  <tr>
                    <th v-for="(item,index) in oddsList" class="pointerDom yiziThAct" :class="['shishiZi'+index,index == '0' ? 'active' : '']" @click="shishiZiGet(item,index)">{{item.name}}</th> 
                  </tr>
                </table> 

                <table  class="kuaixuanTable" v-if="['二字','二定位'].findIndex((n) => n == this.showOdds)>-1">
                  <tr >
                    <td colspan="11">快选</td>
                  </tr> 
                  <tr>
                    <td style="background-color: rgb(228, 231, 241);">头</td> 
                    <td v-for="(item,index) in kuaixuanList" :class="'kuaixuantou'+item" @click="kuaixuanOdd(item,'tou')">{{item}}</td>
                  </tr> 
                  <tr>
                    <td style="background-color: rgb(228, 231, 241);">尾</td> 
                    <td v-for="(item,index) in kuaixuanList" :class="'kuaixuanwei'+item" @click="kuaixuanOdd(item,'wei')">{{item}}</td>
                  </tr> 
                </table>

                <table>
                  <tr>
                    <th>号码</th> 
                    <th>赔率</th> 
                    <th>号码</th> 
                    <th>赔率</th> 
                    <th>号码</th> 
                    <th>赔率</th> 
                    <th>号码</th> 
                    <th>赔率</th> 
                    <th>号码</th> 
                    <th>赔率</th>
                  </tr>     
                  <tr v-for="(itemPa,index) in shishiZiDatasList">
                    <template v-for="(item,index) in itemPa">
                      <td class="pointerDom" :class="'item_yizi'+item.oddsId" @click="orderTdYiZi(item,'item_yizi')" @mouseenter="overShow(item,'item_yizi')" @mouseleave="outHide(item,'item_yizi')">{{item.oddsName}}</td> 
                      <td class="pointerDom" :class="'item_yizi'+item.oddsId" @click="orderTdYiZi(item,'item_yizi')" @mouseenter="overShow(item,'item_yizi')" @mouseleave="outHide(item,'item_yizi')">
                        <ul>
                          <li><span class="odds-font">{{item.odds}}</span></li>
                          <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFuncYiZi(item,'item_yizi',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                        </ul>
                      </td> 
                    </template>
                  </tr> 
                </table>

              </div>
            </template>

            <template v-if="['和数'].findIndex((n) => n == showOdds)>-1">
              <div>
                <div class="order-table oodsBodyDiv">
                  <table>
                    <tr>
                      <th colspan="5">和数</th>
                    </tr> 
                    <tr v-for="(itemPa,index) in oddsList">
                      <td width="20%"><b>{{itemPa.name}}</b></td>
                      <template v-for="(item,index) in itemPa.list">
                        <td class="pointerDom" :class="'item_heshu'+item.oddsId" @click="orderTd(itemPa,item,'item_heshu')" @mouseenter="overShow(item,'item_heshu')" @mouseleave="outHide(item,'item_heshu')">{{item.oddsName}}</td> 
                        <td class="pointerDom" :class="'item_heshu'+item.oddsId" @click="orderTd(itemPa,item,'item_heshu')" @mouseenter="overShow(item,'item_heshu')" @mouseleave="outHide(item,'item_heshu')">
                          <ul>
                            <li><span class="odds-font">{{item.odds}}</span></li>
                            <li v-if="normalPay"><input type="text" v-model="item.normalMoney" v-on:input ="inputFunc(itemPa,item,'item_heshu',item.normalMoney)" onkeypress="return event.keyCode>=48&&event.keyCode<=57" onkeyup="value=value.replace(/[^\d]/g,'') " ng-pattern="/[^a-zA-Z]/"></li>
                          </ul>
                        </td>
                      </template>
                    </tr>
                  </table>
                </div>
              </div>
            </template>

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
import BetQuick from '@/components/apps/bocai/components/betQuick';
import ClockTime from '@/components/apps/bocai/components/clockTime';
// import {mapState,mapGetters} from 'vuex';

export default {
  components: {
    ClockTime,
    BetQuick
  },
  data () {
    return {
      curBocaiTypeId: '1',
      curBocaiName: '重庆时时彩',
      bocaiCategoryList: [],
      oddsList: [],
      activeIndex: '',
      showOdds: '',
      submenu: '更多',
      isOpenOdds: true,
      longhuhe_lmp: {},
      diyiqiu_lmp: {},
      dierqiu_lmp: {},
      disanqiu_lmp: {},
      disiqiu_lmp: {},
      diwuqiu_lmp: {},
      qiansan_lmp: {},
      zhongsan_lmp: {},
      housan_lmp:{},
      orderDataList: [],
      normalPay: false,
      bocaiCategory: {},
      kuaixuanList: ['0','1','2','3','4','5','6','7','8','9'],
      shishiZiDatas: {},
      shishiZiDatasList: [],
      kuaixuanTouList:[],
      kuaixuanWeiList:[],
      tempList:[],
      selectedZiTd:[]
    }
  },
  computed: {
    // ...mapGetters({
    // })
  },
  created() {
    this.getOdds(1);
  },
  mounted(){
      bus.$on('isOpenOdds', (data) => {
        this.isOpenOdds = data;
      });
  },
  methods: {
    kuaixuanOdd(item,type) {
      this.qingkong();
      let list = this.shishiZiDatas.list;

      console.log('item',item,'type',type);

      if($('.kuaixuan'+type+item).hasClass('active')){
        $('.kuaixuan'+type+item).removeClass('active');

        if(type == 'tou') {
          _.remove(this.kuaixuanTouList, function(n) {
            let m = {type,item};
            return JSON.stringify(n) == JSON.stringify(m);
          });
        } else {
          _.remove(this.kuaixuanWeiList, function(n) {
            let m = {type,item};
            return JSON.stringify(n) == JSON.stringify(m);
          });
        }

      } else {
        $('.kuaixuan'+type+item).addClass('active');
        if(type == 'tou') {
          this.kuaixuanTouList.push({type,item});
        } else {
          this.kuaixuanWeiList.push({type,item});
        }
      }

      let temlist = [];
      let temlistSub = [];

      console.log('this.kuaixuanTouList',this.kuaixuanTouList);
      console.log('this.kuaixuanWeiList',this.kuaixuanWeiList);

      if(this.kuaixuanTouList.length != 0 && this.kuaixuanWeiList.length != 0) {

        console.log('item111',item,'type',type);
        for(let n in list) {
          for(let m in this.kuaixuanTouList) {
            if(list[n].oddsName.charAt(0) == this.kuaixuanTouList[m].item) {
              temlist.push(list[n]);
            } 
          }
        }

        for(let n in temlist) {
            for(let m in this.kuaixuanWeiList) {
              if(temlist[n].oddsName.charAt(list[n].oddsName.length*1 - 1) == this.kuaixuanWeiList[m].item) {
                temlistSub.push(temlist[n]);
              } 
            }
          }
          
      } 
      if(this.kuaixuanTouList.length != 0 && this.kuaixuanWeiList.length == 0) {

        console.log('item222',item,'type',type);

        for(let n in list) {
          for(let m in this.kuaixuanTouList) {
            if(list[n].oddsName.charAt(0) == this.kuaixuanTouList[m].item) {
              temlistSub.push(list[n]);
            } 
          }
        }
      } 
      if(this.kuaixuanTouList.length == 0 && this.kuaixuanWeiList.length != 0) {

        console.log('item333',item,'type',type);

        for(let n in list) {
            for(let m in this.kuaixuanWeiList) {
              if(list[n].oddsName.charAt(list[n].oddsName.length*1 - 1) == this.kuaixuanWeiList[m].item) {
                temlistSub.push(list[n]);
              } 
            }
          }
      } 

      this.selectedZiTd = temlistSub;

      console.log('temlistSub',temlistSub);

      let oddsObj = this.shishiZiDatas;

      if(!this.normalPay) {
        for(let n in this.selectedZiTd ) {
          this.orderTd(oddsObj,this.selectedZiTd[n],'item_yizi');
        }
      } else {
        for(let n in this.shishiZiDatasList){
          for(let m in this.shishiZiDatasList[n]) {
            this.inputFuncYiZi(this.shishiZiDatasList[n][m],'item_yizi',this.shishiZiDatasList[n][m].normalMoney);
          }
        }
        for(let n in this.selectedZiTd ) {
          $('.item_yizi'+this.selectedZiTd[n].oddsId).addClass('selected');
        }
      }

      
          
    },
    qingkong() {
      $('.bet_box .orders td').removeClass('selected');
      this.orderDataList = [];
    },
    allQingkong() {
      $('.bet_box .orders td').removeClass('selected');
      this.orderDataList = [];
      $('.kuaixuanTable td').removeClass('active');
      this.kuaixuanTouList = [];
      this.kuaixuanWeiList = [];
    },
    shishiZiGet(item,index) {
      this.allQingkong();
      $('.yiziThAct').removeClass('active');
      $('.shishiZi'+index).addClass('active');
      this.shishiZiDatas = item;

      if(['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == this.showOdds)>-1) {
        this.shishiZiDatasList = [];
        for(var i=0;i<item.list.length;i=i+5){
          this.shishiZiDatasList.push(item.list.slice(i,i+5));
        }
      }

    },
    childByChangePay(data) {
      if(this.normalPay != data) {
        this.orderDataList = [];
        $('.bet_box .orders td').removeClass('selected');
        this.allQingkong();
      }
      this.normalPay = data;
    },
    childByReset(data) {
      this.resetOddsCategory(this.bocaiCategory);
      this.allQingkong();
    },
    outHide(item,ids) {
      $('.'+ids+item.oddsId).removeClass('overTd');
    },
    overShow(item,ids) {
      $('.'+ids+item.oddsId).addClass('overTd');
    },
    inputFuncYiZi(item,ids,pay) {
      let oddsObj = this.shishiZiDatas;

      this.inputFunc(oddsObj,item,ids,pay);
    },
    inputFunc(oddsObj,item,ids,pay) {

      let reg = /^[\u2E80-\u9FFF]+$/;
      if(reg.test(this.moneyOrder)){
        this.$alertMessage('请确认注单!', '温馨提示');
      } else {
        if(this.normalPay) {
          if(pay == '') {
            $('.'+ids+item.oddsId).removeClass('selected');
            _.remove(this.orderDataList, function(n) {
                    return n.bocaiOddName == item.oddsName;
                  });
          } else {

            $('.'+ids+item.oddsId).addClass('selected');
                let ifHas = false;
                for(let n in this.orderDataList) {
                  if(this.orderDataList[n].bocaiOddId == item.oddsId) {
                    ifHas = true;
                    let obj = {
                      bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
                      bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
                      bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
                      bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
                      bocaiValue:"",//投注内容,六合彩连肖/连尾
                      normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
                      orderNormal: this.normalPay,   //是快捷，还是一般投注
                      bocaiOdds: item.odds//1.90//赔率
                    };

                    this.orderDataList[n] = obj;
                  }
                }

                if(!ifHas) {
                  let obj = {
                    bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
                    bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
                    bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
                    bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
                    bocaiValue:"",//投注内容,六合彩连肖/连尾
                    normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
                    orderNormal: this.normalPay,   //是快捷，还是一般投注
                    bocaiOdds: item.odds//1.90//赔率
                  };

                  this.orderDataList.push(obj);
                }
          }
        }
      }

      
      
    },
    orderTdYiZi(item,ids) {
      let oddsObj = this.shishiZiDatas;

      this.orderTd(oddsObj,item,ids);
    },
    orderTd(oddsObj,item,ids) {

      if(this.isOpenOdds) {

        if(!this.normalPay) {
          if($('.'+ids+item.oddsId).hasClass('selected')){

              $('.'+ids+item.oddsId).removeClass('selected');
              _.remove(this.orderDataList, function(n) {
                return n.bocaiOddName == item.oddsName;
              });

          } else {
            $('.'+ids+item.oddsId).addClass('selected');

            let obj = {
              bocaiCategory2Id: oddsObj.id,//8225,//投注博彩分类2ID
              bocaiCategory2Name: oddsObj.name,//"混合",//投注博彩分类2名称
              bocaiOddId: item.oddsId,//5543,//投注博彩赔率ID
              bocaiOddName: item.oddsName,//"大",//投注博彩赔率名称
              bocaiValue:"",//投注内容,六合彩连肖/连尾
              normalMoney: item.normalMoney,//10000,//一般模式下，选择的金额
              orderNormal: this.normalPay,   //是快捷，还是一般投注
              bocaiOdds: item.odds//1.90//赔率
            };

            this.orderDataList.push(obj);
          }
        }
        
      }
      
    },
    handleSelect(key, keyPath) {
        //console.log(key, keyPath);
    },
    async resetOddsCategory(item) {

      let that = this;

          NProgress.start();
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+1+`&bocaiCategoryId=`+item.id).then((res) => {
            that.$handelResponse(res, (result) => {
              NProgress.done();
              that.showOdds = item.name;
              that.bocaiCategory = item;
              if(result.code===200){
                that.oddsList = result.oddsList;
                that.shuaiXuanDatas(result.oddsList);
                that.orderDataList = [];
                that.normalPay = false;
                bus.$emit('getnormalPay', false); 

                this.shishiZiDatas = result.oddsList[0];

                if(['二字','一字','三字','二定位','三定位','组选三','组选六','跨度'].findIndex((n) => n == this.showOdds)>-1) {
                  let arry = [];

                  for(var i=0;i<this.shishiZiDatas.list.length;i=i+5){
                    arry.push(this.shishiZiDatas.list.slice(i,i+5));
                  }

                  this.shishiZiDatasList = arry;

                  $('.yiziThAct').removeClass('active');
                  $('.shishiZi0').addClass('active');
                }

              }
            })
          });
    },
    async getOddsCategory(item,index) {

      if(index*1 > 9) {
        this.submenu = item.name;
      } else {
        this.submenu = '更多';
      }

      this.resetOddsCategory(item);

    },
    async getOdds(id) {

      let that = this;
          //NProgress.start();
          await that.$get(`${window.url}/api/getOdds?bocaiTypeId=`+id).then((res) => {
            that.$handelResponse(res, (result) => {
              //NProgress.done();
              if(result.code===200){

                that.bocaiCategoryList = result.bocaiCategoryList;
                that.oddsList = result.oddsList;
                that.showOdds = result.bocaiCategoryList[0].name;
                that.bocaiCategory = result.bocaiCategoryList[0];
                that.activeIndex = that.bocaiCategoryList[0].name;
                that.shuaiXuanDatas(result.oddsList);

              }

            })
          });

    },
    shuaiXuanDatas(dataList) {
      for(let n in dataList) {
        if(this.showOdds == '两面盘') {
          if(dataList[n].name == '总和-龙虎和') {
            this.longhuhe_lmp = dataList[n];
          } else if(dataList[n].name == '第一球') {
            this.diyiqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第二球') {
            this.dierqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第三球') {
            this.disanqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第四球') {
            this.disiqiu_lmp = dataList[n];
          } else if(dataList[n].name == '第五球') {
            this.diwuqiu_lmp = dataList[n];
          } else if(dataList[n].name == '前三') {
            this.qiansan_lmp = dataList[n];
          } else if(dataList[n].name == '中三') {
            this.zhongsan_lmp = dataList[n];
          } else if(dataList[n].name == '后三') {
            this.housan_lmp = dataList[n];
          }
        }
      }
    }

  }
}

</script>

<style scoped>


</style>
