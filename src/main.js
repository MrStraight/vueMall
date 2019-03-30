// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css' /* 初始化样式*/
import './assets/css/border.css' /* 解决高分辨率1像素边框问题 */
import './assets/font/iconfont.svg'
import './assets/font/iconfont.ttf'
import './assets/font/iconfont.eot'
import './assets/font/iconfont.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/* asdasdsadasd */