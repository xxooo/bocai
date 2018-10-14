<template>
  <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">

          <div class="header">
            <p>财务管理</p>
          </div> 

          <div class="bank-info">
            <ul class="tab">
              <a class="active bankInfo" @click="bankInfo">银行信息</a> 
              <a class="rechargeInfo" @click="rechargeInfo">充值</a> 
              <a class="forwardInfo" @click="forwardInfo">申请提现</a> 
              <a class="historyInfo" @click="historyInfo">历史记录</a>
            </ul> 

            <div class="table" v-if="tabNum == '1'">
              <table class="bank-table">
                <tr>
                  <th>银行名称：</th> 
                  <td>
                  <input type="text" v-model="bankInfoObj.bankName" placeholder="请输入银行名称"></td>
                </tr> 
                <tr>
                  <th>银行卡号：</th> 
                  <td>
                  <input type="text" v-model="bankInfoObj.bankNum" placeholder="请输入银行卡号"></td>
                </tr> 
                <tr>
                  <th>卡主姓名：</th> 
                  <td>
                  <input type="text" v-model="bankInfoObj.bankNum" placeholder="请输入卡主姓名"> 
                  <span class="red">（设置后不能修改）</span>
                </td>
                </tr> 
                <tr>
                  <th>手机号码：</th> 
                  <td><input type="text" v-model="bankInfoObj.bankNum" placeholder="请输入手机号码"></td>
                </tr> 
                <tr>
                  <th>微信支付账号：</th> 
                  <td>
                  <input type="text" v-model="bankInfoObj.bankNum" placeholder="请输入微信账号"> <span class="red">（设置后不能修改）</span>
                  </td>
                </tr> 
                <tr>
                  <th>支付宝账号：</th> 
                  <td>
                  <input type="text" v-model="bankInfoObj.bankNum" placeholder="请输入支付宝账号"> <span class="red">（设置后不能修改）</span>
                  </td>
                </tr> 
                <tr>
                  <th>提现密码：</th>
                  <td v-if="bankInfoObj.putForwardPassword != ''"><a @click="chanPassType">修改密码</a></td>
                  <td v-if="passType">
                    <p>
                      旧密码：
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select>
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select> 
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select> 
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select>  
                    </p>
                    <p>
                      新密码：
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select>
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select> 
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select> 
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select>  
                    </p> 
                  </td>
                  <td v-if="bankInfoObj.putForwardPassword == ''">
                    <p>
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select>
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select> 
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select> 
                      <select>
                        <option v-for="item in mima" :value="item">{{item}}</option>
                      </select>  
                    </p>
                  </td>
                </tr>
              </table> 
              <i class="icon-credit-card"></i> 
            </div>

            <div class="table" v-if="tabNum == '2'">
              <div class="pay">
                <p class="contact">
                  <a class="payRecord r">
                    <i class="icon-credit-card"></i> 
                    充值记录
                  </a>
                </p> 
                <table class="recharge-type">
                  <tr>
                    <th width="250">充值方式</th> 
                    <th>收款人信息</th>
                  </tr> 
                  <tr>
                    <td>
                      <label for="wx">
                        <input type="radio" name="wx" id="wx" value="1"> 
                        <img src="/static/img/WXPAY.6f192a3.png" alt="">
                      </label> 
                      <label for="wx">
                        <input type="radio" name="wx" id="wx" value="1"> 
                        <img src="/static/img/alipay.8999215.jpg" alt="">
                      </label>
                      <label for="wx">
                        <input type="radio" name="wx" id="wx" value="1"> 
                        <img src="/static/img/unionpay.a124865.jpg" alt="">
                      </label>
                    </td> 
                    <td>
                      <p>
                        <a>如充值异常，请刷新二维码</a>
                      </p> 
                      <img src="/static/img/onError.gif" alt="" width="120" height="120" title="点击图片刷新" style="cursor: pointer;">
                    </td>
                  </tr> 
                  <tr>
                    <td style="border-right: none;">
                      <p>
                        <span class="red">*</span>
                        充值金额：
                      </p> 
                      <input type="text" placeholder="请输入金额" style="height: 30px;">
                    </td> 
                    <td class="remark" style="border-left: none;">
                      <span><i class="red">*</i>备注：</span> 
                      <span style="color: rgb(157, 157, 157); font-size: 11px;">(付款账号,姓名等信息)</span>
                      <br data-v-5787ec6f=""> 
                      <textarea placeholder="格式如：账号 123，张三" cols="30"></textarea>
                    </td>
                  </tr>
                </table>
              </div>

              <div class="pay">
                <p class="contact">
                  <a href="javascript:;" class="r"><i class="icon-reply"></i> 返回</a>
                  <span>
                    状态：
                    <select>
                      <option value="true">已处理</option> 
                      <option value="false">未处理</option>
                    </select>
                  </span>
                </p> 
                <table class="payRecord">
                  <tr>
                    <th>充值方式</th> 
                    <th>充值金额</th> 
                    <th>状态</th> 
                    <th>申请时间</th>
                  </tr> 
                  <tr>
                    <td colspan="5">暂无数据</td>
                  </tr>
                </table>
              </div>

            </div>

            <div class="table" v-if="tabNum == '3'">
              <div class="shqitixian">
                <p class="grey">* 当前可取余额：<b style="color: green;">0.00</b></p> 
                <div>
                  <div class="r">
                    状态：
                    <select>
                      <option value="true">已处理</option> 
                      <option value="false">未处理</option>
                    </select>
                  </div>
                  提现金额： 
                  <input type="text" placeholder="请输入金额" style="width: 80px;"> 
                  <select style="margin-right: 5px;">
                    <option v-for="item in payType" :value="item.value">{{item.label}}</option> 
                  </select> 
                  <span style="margin-right: 5px;">
                    提现密码：<input data-v-5787ec6f="" type="text" style="width: 50px;">
                  </span> 
                  <button style="width: 60px;">确定</button>
                </div> 
                <table class="ask-table">
                  <tr>
                    <th>提现方式</th> 
                    <th>提现金额</th> 
                    <th>状态</th> 
                    <th>申请时间</th>
                  </tr> 
                  <tr>
                    <td colspan="5">暂无数据</td>
                  </tr>
                </table>
              </div>

            </div>

            <div class="table" v-if="tabNum == '4'">
              <div class="cash-history">
                筛选:
                <select class="mgr10">
                  <option value="1,2">全部</option> 
                  <option value="1">充值</option> 
                  <option value="2">提现</option>
                </select>
                日期区间：
                <input type="text" placeholder="开始时间" class="flatpickr-input" readonly="readonly">
                至
                <input type="text" placeholder="结束时间" class="flatpickr-input" readonly="readonly">
                <button class="tabBtn btn btn-blue">查询</button> 
                <table class="ask-table">
                  <tr>
                    <th width="40">方式</th> 
                    <th width="80">金额</th> 
                    <th width="80">余额</th> 
                    <th>备注</th> 
                    <th width="120">时间</th>
                  </tr> 
                  <tr>
                    <td colspan="5">暂无数据</td>
                  </tr>
                </table>
              </div> 

           </div>

          </div>

          <p class="btn-box">
            <el-button type="primary" size="mini" @click="submit">确 定</el-button>
            <el-button type="primary" size="mini" @click="">取 消</el-button>
          </p>

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
      bankInfoObj: {},
      tabNum: '1',
      passType: false,
      mima: ['--','0','1','2','3','4','5','6','7','8','9'],
      payType: [
                {value: '1',label: '微信'},
                {value: '2',label: '支付宝'},
                {value: '3',label: '银行卡'},
                {value: '4',label: '现金'}
              ]

    }
  },
  created() {
    this.bankInfo();
  },
  computed: {
  },
  methods: {
    async submit() {
      if(this.tabNum == '1') {

        
        
      } else if(this.tabNum == '2') {

      }
    },
    chanPassType() {
      this.passType = true;
    },
    async historyInfo() {
      $('.historyInfo').addClass('active').siblings().removeClass('active');

      let res = await this.$get(`${window.url}/api/bankInfo`);

      if(res.code===200){
        this.bankInfoObj = res.data;
      }

      this.tabNum = '4';
    },
    async forwardInfo() {
      $('.forwardInfo').addClass('active').siblings().removeClass('active');

      let res = await this.$get(`${window.url}/api/bankInfo`);

      if(res.code===200){
        this.bankInfoObj = res.data;
      }

      this.tabNum = '3';
    },
    async rechargeInfo() {
      $('.rechargeInfo').addClass('active').siblings().removeClass('active');

      let res = await this.$get(`${window.url}/api/bankInfo`);

      if(res.code===200){
        this.bankInfoObj = res.data;
      }

      this.tabNum = '2';
    },
    async bankInfo() {
      $('.bankInfo').addClass('active').siblings().removeClass('active');

      let res = await this.$get(`${window.url}/api/bankInfo`);

      if(res.code===200){
        this.bankInfoObj = res.data;
      }

      this.tabNum = '1';
    },
    getcuserInfo(item) {
      this.cbocai = item.bocaiName;
      this.cUserdewater(item.bocaiId);
      $('.bocai'+item.bocaiId).addClass('active').siblings().removeClass('active');
    },
    async getBocai() {
      let res = await this.$get(`${window.url}/api/getBocai`);

      if(res.code===200){
        this.bocaiTypeList = res.bocaiTypeList;
      }
    },
    changeboType(data) {
      this.cUserdewater(data);
    },
    async cUserdewater(id) {

      let res = await this.$get(`${window.url}/api/cUserdewater?bocaiTypeId=`+id);

        if(res.code===200){
            this.cUserdeList = res.data;

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