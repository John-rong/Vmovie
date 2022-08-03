<template>
  <div id="app">
    <div class="tdesign-demo-item--layout">
      <t-layout>
        <!-- background-color="#06121e"  -->
        <t-header height="0.1px" >
          <HeaderNav></HeaderNav>
          <!-- <t-head-menu theme="light" value="item1" height="78px">
          </t-head-menu> -->
        </t-header>
        <t-content style="background:#06121e;">
          <router-view></router-view>
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

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterView
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
.footer_bottom{
  border-top:2px dashed #233A50;
  color: #D1D0CF;
  font-size: 14px;
  margin-top: 2rem;
  padding-top:1.5rem;
}
</style>

