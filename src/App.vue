<template>
  <div id="app">
    <div class="tdesign-demo-item--layout">
      <t-layout>
        <!-- background-color="#06121e"  -->
        <t-header height="0.1px">
          <HeaderNav></HeaderNav>
          <!-- <t-head-menu theme="light" value="item1" height="78px">
          </t-head-menu> -->
        </t-header>
        <t-content style="background:#06121e;">
          <keep-alive include="DetailSearch,RankingList">
            <router-view ref="content"></router-view>
          </keep-alive>
        </t-content>
        <t-footer style="background:#0b1a2a; padding:2rem 6%;">
          <FooterView></FooterView>
          <div class="footer_bottom">
            Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved
          </div>
        </t-footer>
      </t-layout>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import FooterView from './components/FooterView.vue'
import { LoadingPlugin } from 'tdesign-vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterView
  },
  created () {
      // this.showAttach2();s
  },
  methods: {
    showAttach2() {
      const loadingAttachInstance = LoadingPlugin({
        attach: () => this.$refs.content,
        showOverlay: true,
        size: '20px',
      });
      const timer = setTimeout(() => {
        loadingAttachInstance.hide();
        clearTimeout(timer);
      }, 1000);
    }
  }

}
</script>

<style lang="less">
#app {
  // @--iq-primary: #e50914 #c9353f;
  // @--iq-primary-hover: #bf000a #b11f26;
  // @--iq-title-text: #23203c;
  // @--iq-body-text: #D1D0CF;
  // @--iq-bg1: #0b1a2a;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.5;
  color: #D1D0CF;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  padding: 0px;
}

.footer_bottom {
  border-top: 2px dashed #233A50;
  color: #D1D0CF;
  font-size: 14px;
  margin-top: 2rem;
  padding-top: 1.5rem;
}

::-webkit-scrollbar {
  // &:hover{
  //   width: 10px;
  // }
  /*滚动条整体样式*/
  width: 8px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background-color: rgb(168, 168, 168);
  // background-image: -webkit-linear-gradient(45deg,
  //     rgba(255, 255, 255, 0.1) 25%,
  //     transparent 25%,
  //     transparent 50%,
  //     rgba(255, 255, 255, 0.1) 50%,
  //     rgba(255, 255, 255, 0.1) 75%,
  //     transparent 75%,
  //     transparent);
}

#app::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
</style>

