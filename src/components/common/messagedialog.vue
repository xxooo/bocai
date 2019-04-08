<template>
	<el-dialog
    title="注意，来自管理员的消息"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <span>{{messageinfo}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
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
        messageinfo: ''
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
        this.centerDialogVisible = true;
      });
    },
    beforeDestroy() {
    },
		methods: {
		}
	}

</script>

<style scoped>
</style>

<style lang="less">

</style>
