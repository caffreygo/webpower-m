import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    subSucc: false,
    subFail: false,
    subDial: false,
    menuShow: false,
    footerEmail: false,
    linkText: '',
    fromLink: '',
    emailText: '',
    loading: false,
    formsubSucc: false,
    formsubFail: false,
  },
  mutations:{
    // subSuccFn(state){
    //     state.subSucc = state.subSucc?false:true;
    // }
  }
})