import Vue from 'vue'
import Vuex from 'vuex'
import holidays from './holidays'
import appeals from './appeals'
import '../main'
import { BootstrapVue, BPagination } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.component('b-pagination', BPagination)
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appeals: appeals,
    holidays: holidays
  }
})
