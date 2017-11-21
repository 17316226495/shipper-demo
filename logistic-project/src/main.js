// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import "babel-polyfill";//可以使用es6转化成es5 而不用担心有些浏览器不兼容
//import 'element-ui/lib/theme-default/index.css';    // 引入对应的默认主题 element-ui的版本不一样引入的路径也不一样


Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
