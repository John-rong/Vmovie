import Vue from 'vue'
import App from './App.vue'

//引入less
import less from 'less'
Vue.use(less)

//引入TDesign
import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';
Vue.use(TDesign);

//引入路由
import router from '@/router'

//引入仓库
import store from '@/store'

//引入图片懒加载
import VueLazyload from 'vue-lazyload'
const loadimage = require('./assets/loader-circle-regular-24.png')
const errorimage = require('./assets/vlogo.png')
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 3
})

//自定义指令-防止按钮连续点击
Vue.directive('throttle',{
  inserted(el,binding){
    el.addEventListener('click',()=>{
      el.style.pointerEvents='none';
      if(!el.disabled){
        setTimeout(() => {
          el.style.pointerEvents='auto';
        }, binding.value||100);
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
