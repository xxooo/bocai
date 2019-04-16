<template>
	<el-dialog
    title="注意，来自管理员的消息"
    :visible.sync="centerDialogVisible"
    width="30%"
    :close-on-click-modal = 'false'
    :show-close = 'false'
    :close-on-press-escape = 'false'
    center>
    <span>{{messageinfo}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="closeNotice()">确 定</el-button>
    </span>
  </el-dialog>
</template>


<script>
  //import { mapGetters } from 'vuex';

	export default {
		props: {
		},
		data() {
			return {
        centerDialogVisible: false,
        messageinfo: '',
        messageid: ''
			}
		},
    components: {
		},
		created() {
    },
    computed:{
    },
    mounted(){
      bus.$on('getmessage', (data) => {

        this.messageinfo = data.content;
        this.messageid = data.id;
        this.centerDialogVisible = true;
      });
    },
    beforeDestroy() {
    },
		methods: {
      async closeNotice() {
        let res = await this.$get(`${window.url}/api/closeNotice?id=`+this.messageid);
        this.centerDialogVisible = false;
      }
		}
	}

</script>

<style scoped>
</style>

<style lang="less">

</style>
