/**
 * Created by hasee-pc on 2017/10/24.
 */
// store根文件
// 导入组件 vuex
import Vue from 'vue'
import Vuex from 'vuex'

import shipper from './modules/shipper'
import activities from './modules/activities'
import driver from './modules/driver'

// 需调用 Vue.use(Vuex) 才可以从根组件注入到子组件中 且子组件能通过 this.$store 访问到
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shipper,
    activities,
    driver,
  }
})
