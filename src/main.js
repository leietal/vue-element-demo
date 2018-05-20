// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由器
import router from './router'
// element ui
import element from 'element-ui'
// element ui主题
import 'element-ui/lib/theme-chalk/index.css'
// 过滤器
import filters from './filters'
// 引入vuex store
import store from './store'

// 使用element主题
Vue.use(element)
// 添加全局的过滤器
for (const key in filters) {
  Vue.filter(key, filters[key]);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
