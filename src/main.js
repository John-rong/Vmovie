import Vue from 'vue'
import App from './App.vue'

import less from 'less'
Vue.use(less)

import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';

Vue.use(TDesign);

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
}).$mount('#app')
