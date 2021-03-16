// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Indicator } from 'mint-ui';    //引入loading
import Moment from 'moment'

Vue.config.productionTip = false

// import Loading from '@/components/loading'
// Vue.component('Loading',Loading);

import lyb from '@/components/comment/lyb'
Vue.component("lyb",lyb)

// 引入 Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入自己写的css
import '../static/golbal.css'


//配置公共url
axios.defaults.baseURL = "http://w1.ncrjyzy.com/"
//配置axios
Vue.prototype.$axios = axios;



// 请求数据拦截器
axios.interceptors.request.use(config => {
  // console.log("拦截器")
  Indicator.open('加载中...');
  return config
})
// 响应数据拦截器
axios.interceptors.response.use(response => {
  Indicator.close();
  return response
})



//自定义moment全局过滤器
Vue.filter('converTime',function(data,formatStr){
  return Moment(data).format(formatStr);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
