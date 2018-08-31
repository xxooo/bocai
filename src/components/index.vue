<template>
  <div>
    <!-- <page-header ></page-header>
    <left-panel  ></left-panel> -->
    <div id="main">
        <router-view :user="user"></router-view>
        <!-- <page-footer></page-footer> -->
    </div>
  </div>
</template>

<script>

// import PageHeader from 'components/common/pageheader';
// import LeftPanel from 'components/common/leftpanel';
// import PageFooter from 'components/common/pagefooter';
import {mapState,mapGetters} from 'vuex';

export default {
  components: {
    // PageHeader,
    // LeftPanel,
    // PageFooter
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
</style>
