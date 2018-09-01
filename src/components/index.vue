<template>
  <div id="main">
    <page-header ></page-header>
    <div id="content">
      <left-panel  ></left-panel>
      <router-view>wfwefawefwef</router-view>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>

import PageHeader from '@/components/common/pageheader';
import LeftPanel from '@/components/common/leftpanel';
import PageFooter from '@/components/common/pagefooter';
import {mapState,mapGetters} from 'vuex';

export default {
  components: {
    PageHeader,
    LeftPanel,
    PageFooter
  },
  data() {
    return {
      user:{}
    }
  },
  async created() {
  },
  computed: {
    ...mapGetters({
    })
  },
  methods: {
  },
  mounted() {
  },
  updated() {
  }
};
</script>
<style lang="less">
#main {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #3c256d;
}
@import "../assets/less/common.less";
</style>