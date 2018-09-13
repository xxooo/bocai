const mutations = {
  updatebocaiCategoryList(state,v){
    state.bocaiCategoryList = v;
  },
  updateoddsList(state,v){
    state.oddsList = v;
  },
  updatecashBalance(state,v) {
  	state.cashBalance = v;
  },
  updatepreResult(state,v){
  	state.preResult = v;
  }
}

export default mutations
