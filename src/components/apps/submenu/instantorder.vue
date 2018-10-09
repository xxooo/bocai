<template>
  <div class="content-main">
    <div class="right">
      <div id="submenuDiv">
        <div class="box">
          <div class="header">
            <p>即时注单</p>
          </div> 
          <div class="default-list">
            <p class="tar">
              <a class="refresh l"><i class="icon-refresh"></i>刷新</a>
                页数：
                <select><option value="1">1</option></select>
                / 1 页 共 0 条记录
            </p> 
            <table>
              <thead>
                <tr>
                  <th>编号</th> 
                  <th>注单号/投注日期</th> 
                  <th>投注类型</th> 
                  <th>内容</th> 
                  <th>投注额</th> 
                  <th>可赢金额</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <td>1</td> 
                  <td>
                    <p>29493652182</p> 
                    <p>2018-10-09 11:37:05</p>
                  </td> 
                  <td>
                    <p>六合彩</p> 
                    <p>2018115 期</p>
                  </td> 
                  <td>
                    <p>
                    <span class="odds-font">特码A 11</span>
                              @
                    <span class="odds-font">40.84</span>
                    </p>
                  </td> 
                  <td>22.00</td> 
                  <td>876.48</td>
                </tr>
              </tbody> 
              <tr class="tab-footer">
                <td colspan="4" class="tar">此页面统计：</td> 
                <td>22.00</td> 
                <td>876.48</td>
              </tr> 
              <tr class="tab-footer">
                <td colspan="4" class="tar">总计：</td> 
                <td>22.00</td> 
                <td>876.48</td>
              </tr>
            </table>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="nowOrder.pageSize"
                layout="total, prev, pager, next"
                :total="nowOrder.totalCount*1">
              </el-pagination>
            </div>
          </div> 
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
      nowOrder: {},
      currentPage: 1
    }
  },
  created() {
      this.getnowOrder();
  },
  computed: {
  },
  methods: {
    handleSizeChange(data) {
      console.log('handleSizeChange',data);
    },
    handleCurrentChange(data) {
      console.log('handleCurrentChange',data);
    },
    async getnowOrder() {
      let res = await this.$get(`${window.url}/api/nowOrder`);

          if(res.code===200){
            this.nowOrder = res.page;
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
  #submenuDiv {
    margin-top: 20px;

    .box {
        width: 770px;
        background-color: #fff;
        min-height: 400px;
    }
    .header {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 700;
    }
    .default-list {
        padding: 8px 10px;
    }
    .tar {
        text-align: right;
    }
    .refresh {
        cursor: pointer;
        color: #b55233;
    }
    .default-list table {
        margin-top: 5px;
        width: 100%;
    }
    .default-list table thead {
        background-color: #8b7b5f;
        font-weight: 700;
    }
    .default-list table tr {
        line-height: 30px;
        border-bottom: 1px solid #cecece;
    }
    .default-list table td, .default-list table th {
        text-align: center;
        line-height: 30px;
        border: 1px solid #b08d64;
    }
    .default-list table tr th {
        color: #f2f1f0;
    }
    .default-list table td p, .default-list table th p {
        line-height: 18px;
    }
    .odds-font {
        color: #d63e35;
        font-weight: 700;
    }
    table > tr {
        vertical-align: middle;
    }
    .default-list table tr {
        line-height: 30px;
        border-bottom: 1px solid #cecece;
    }
    .default-list table td.tar, .default-list table th.tar {
        text-align: right;
    }
  }
</style>