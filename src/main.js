/**
 * @Author: 飞帅
 * @Date: 2022-03-10 20:53:36
 * @LastEditTime: 2022-03-25 10:55:57
 * @LastEditors: feishuai
 * @Description: blog.feishuai521.cn`
 * @The copyright belongs to Fei Shuai
 */
import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
