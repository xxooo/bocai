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
              <div class="shengyuTime">
                
              </div>
            </div>
          </div>
        </div>
        <div class="bet_box">
          <div class="win_info">
        <ul>
          <li>● 01. 使用本公司网站的客户，请留意阁下所在的国家或居住地的相关法律规定，如有疑问应就相关问题，寻求当地法律意见。</li>
          <li>● 02. 若发生遭黑客入侵破坏行为或不可抗拒之灾害导致网站故障或资料损坏、资料丢失等情况，我们将以本公司之后备资料为最后处理依据；为确保各方利益，请各会员投注后打印资料。本公司不会接受没有打印资料的投诉。</li>
          <li>● 03. 为避免纠纷，各会员在投注之后，务必进入下注明细检查。若发现任何异常，请立即与代理商联系查证，一切投注将以本公司资料库的资料为准，不得异议。如出现特殊网络情况或线路不稳定导致不能下注或下注失败。本公司概不负责。</li>
          <li>● 04. 开奖结果以官方公布的结果为准。</li>
          <li>● 05. 如遇到官方停止销售或者开奖结果不确定的情况，本公司将对相关注单进行无效处理，并且返还下注本金。</li>
          <li>● 06. 我们将竭力提供准确而可靠的开奖统计等资料，但并不保证资料绝对无误，统计资料只供参考，并非是对客户行为的指引，本公司也不接受关于统计数据产生错误而引起的相关投诉。</li>
          <li>● 07. 本公司拥有一切判决及注消任何涉嫌以非正常方式下注之权利，在进行更深入调查期间将停止发放与其有关之任何彩金。客户有责任确保自己的帐户及密码保密，如果客户怀疑自己的资料被盗用，应立即通知本公司，并须更改其个人详细资料。所有被盗用帐号之损失将由客户自行负责。</li>
          <li>管理层 敬啟</li>
          <li>我了解以及同意下注列明的协定和规则。</li>
          <li class="user_winbu">
            <div>
              <el-button type="primary" @click="$router.push({name: 'chongqindubo'})">同  意</el-button>
              <el-button type="primary">不同意</el-button>
            </div>
          </li>
        </ul>
      </div>
      <div class="win_info">
        <ul>
          <li>● 01. 使用本公司网站的客户，请留意阁下所在的国家或居住地的相关法律规定，如有疑问应就相关问题，寻求当地法律意见。</li>
          <li>● 02. 若发生遭黑客入侵破坏行为或不可抗拒之灾害导致网站故障或资料损坏、资料丢失等情况，我们将以本公司之后备资料为最后处理依据；为确保各方利益，请各会员投注后打印资料。本公司不会接受没有打印资料的投诉。</li>
          <li>● 03. 为避免纠纷，各会员在投注之后，务必进入下注明细检查。若发现任何异常，请立即与代理商联系查证，一切投注将以本公司资料库的资料为准，不得异议。如出现特殊网络情况或线路不稳定导致不能下注或下注失败。本公司概不负责。</li>
          <li>● 04. 开奖结果以官方公布的结果为准。</li>
          <li>● 05. 如遇到官方停止销售或者开奖结果不确定的情况，本公司将对相关注单进行无效处理，并且返还下注本金。</li>
          <li>● 06. 我们将竭力提供准确而可靠的开奖统计等资料，但并不保证资料绝对无误，统计资料只供参考，并非是对客户行为的指引，本公司也不接受关于统计数据产生错误而引起的相关投诉。</li>
          <li>● 07. 本公司拥有一切判决及注消任何涉嫌以非正常方式下注之权利，在进行更深入调查期间将停止发放与其有关之任何彩金。客户有责任确保自己的帐户及密码保密，如果客户怀疑自己的资料被盗用，应立即通知本公司，并须更改其个人详细资料。所有被盗用帐号之损失将由客户自行负责。</li>
          <li>管理层 敬啟</li>
          <li>我了解以及同意下注列明的协定和规则。</li>
          <li class="user_winbu">
            <div>
              <el-button type="primary" @click="$router.push({name: 'chongqindubo'})">同  意</el-button>
              <el-button type="primary">不同意</el-button>
            </div>
          </li>
        </ul>
      </div>
      <div class="win_info">
        <ul>
          <li>● 01. 使用本公司网站的客户，请留意阁下所在的国家或居住地的相关法律规定，如有疑问应就相关问题，寻求当地法律意见。</li>
          <li>● 02. 若发生遭黑客入侵破坏行为或不可抗拒之灾害导致网站故障或资料损坏、资料丢失等情况，我们将以本公司之后备资料为最后处理依据；为确保各方利益，请各会员投注后打印资料。本公司不会接受没有打印资料的投诉。</li>
          <li>● 03. 为避免纠纷，各会员在投注之后，务必进入下注明细检查。若发现任何异常，请立即与代理商联系查证，一切投注将以本公司资料库的资料为准，不得异议。如出现特殊网络情况或线路不稳定导致不能下注或下注失败。本公司概不负责。</li>
          <li>● 04. 开奖结果以官方公布的结果为准。</li>
          <li>● 05. 如遇到官方停止销售或者开奖结果不确定的情况，本公司将对相关注单进行无效处理，并且返还下注本金。</li>
          <li>● 06. 我们将竭力提供准确而可靠的开奖统计等资料，但并不保证资料绝对无误，统计资料只供参考，并非是对客户行为的指引，本公司也不接受关于统计数据产生错误而引起的相关投诉。</li>
          <li>● 07. 本公司拥有一切判决及注消任何涉嫌以非正常方式下注之权利，在进行更深入调查期间将停止发放与其有关之任何彩金。客户有责任确保自己的帐户及密码保密，如果客户怀疑自己的资料被盗用，应立即通知本公司，并须更改其个人详细资料。所有被盗用帐号之损失将由客户自行负责。</li>
          <li>管理层 敬啟</li>
          <li>我了解以及同意下注列明的协定和规则。</li>
          <li class="user_winbu">
            <div>
              <el-button type="primary" @click="$router.push({name: 'chongqindubo'})">同  意</el-button>
              <el-button type="primary">不同意</el-button>
            </div>
          </li>
        </ul>
      </div>
      <div class="win_info">
        <ul>
          <li>● 01. 使用本公司网站的客户，请留意阁下所在的国家或居住地的相关法律规定，如有疑问应就相关问题，寻求当地法律意见。</li>
          <li>● 02. 若发生遭黑客入侵破坏行为或不可抗拒之灾害导致网站故障或资料损坏、资料丢失等情况，我们将以本公司之后备资料为最后处理依据；为确保各方利益，请各会员投注后打印资料。本公司不会接受没有打印资料的投诉。</li>
          <li>● 03. 为避免纠纷，各会员在投注之后，务必进入下注明细检查。若发现任何异常，请立即与代理商联系查证，一切投注将以本公司资料库的资料为准，不得异议。如出现特殊网络情况或线路不稳定导致不能下注或下注失败。本公司概不负责。</li>
          <li>● 04. 开奖结果以官方公布的结果为准。</li>
          <li>● 05. 如遇到官方停止销售或者开奖结果不确定的情况，本公司将对相关注单进行无效处理，并且返还下注本金。</li>
          <li>● 06. 我们将竭力提供准确而可靠的开奖统计等资料，但并不保证资料绝对无误，统计资料只供参考，并非是对客户行为的指引，本公司也不接受关于统计数据产生错误而引起的相关投诉。</li>
          <li>● 07. 本公司拥有一切判决及注消任何涉嫌以非正常方式下注之权利，在进行更深入调查期间将停止发放与其有关之任何彩金。客户有责任确保自己的帐户及密码保密，如果客户怀疑自己的资料被盗用，应立即通知本公司，并须更改其个人详细资料。所有被盗用帐号之损失将由客户自行负责。</li>
          <li>管理层 敬啟</li>
          <li>我了解以及同意下注列明的协定和规则。</li>
          <li class="user_winbu">
            <div>
              <el-button type="primary" @click="$router.push({name: 'chongqindubo'})">同  意</el-button>
              <el-button type="primary">不同意</el-button>
            </div>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
    <p style="clear: both;"></p>
  </div>
</template>

<script>
export default {
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

</style>
