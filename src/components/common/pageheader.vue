<template>
	<div id="header">
    <header>
      <div class="header">
        <img src="" alt="" width="200" height="73" class="logo"> 
        <div class="head-r">
        </div>
      </div>
    </header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#3C256D"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">重庆时时彩</el-menu-item>
        <el-menu-item index="2">幸运飞艇</el-menu-item>
        <el-menu-item index="3">北京PK拾</el-menu-item>
        <el-menu-item index="4">北京快乐8</el-menu-item>
        <el-menu-item index="5">六合彩</el-menu-item>
        <el-menu-item index="6">广东快乐十分</el-menu-item>
        <el-menu-item index="7">广东11选5</el-menu-item>
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
        </el-submenu>
      </el-menu>
    </div>
</template>


<script>
  import { mapGetters } from 'vuex';
	import $cookie from './../../common/cookie.js';

	export default {
		props: {
		},
		data() {
			return {
        activeIndex: '1',
        activeIndex2: '1'
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
		}
	}
</script>

<style scoped>

header {
    top: 0;
    left: 0;
    right: 0;
    height: 156px;
    background: url(./../../../static/img/header.jpg) bottom no-repeat transparent;
}

</style>
<style lang="less">
#header {
  border-bottom: solid 2px #ffd04b;

  .el-menu-item {
    padding: 0 32px;
  }

  .el-menu--horizontal {
    background-color: rgb(60, 37, 109);
    font-size: 14px;
    width: 1100px;
    margin: 0 auto;
    border-bottom: solid 0px #ffd04b;
  }

  .el-menu-item.is-active {
    background: url(./../../../static/img/gold-light-btn-shading.png) bottom no-repeat transparent;
    background-size: 100% 100%;
    color: #ffea00;
    cursor: default;
    border-bottom: 0px solid #3C256D;
  }

}

</style>
