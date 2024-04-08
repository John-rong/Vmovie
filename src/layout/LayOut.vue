<template>
    <div class="tdesign-demo-item--layout">
        <t-layout>
            <t-header height="0.1px">
                <HeaderNav></HeaderNav>
            </t-header>
            <!-- <t-space class="loading" v-show="isloading">
                    <t-loading :loading="isloading" class="loading-icon" inheritColor showOverlay></t-loading>
                </t-space> -->
            <!-- <t-content style="background:#06121e;">
                <keep-alive include="DetailSearch,RankingList">
                    <router-view ref="content"></router-view>
                </keep-alive>
            </t-content> -->
            <LayoutContent></LayoutContent>
            <t-footer style="background:#0b1a2a; padding:2rem 6%;">
                <FooterView></FooterView>
                <div class="footer_bottom">
                    Copyright @ 2022-{{ new Date().getFullYear() }} vmovie. All Rights Reserved
                </div>
            </t-footer>
        </t-layout>
    </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue'
import FooterView from '../components/FooterView.vue'
import { mapState } from 'vuex'
import LayoutContent from './LayoutContent.vue'

export default {
    name: 'LayOut',
    components: {
        HeaderNav,
        FooterView,
        LayoutContent
    },
    computed: {
        ...mapState(['isloading']),
    }

}
</script>

<style lang="less" scoped>
.footer_bottom {
    border-top: 2px dashed #233A50;
    color: #D1D0CF;
    font-size: 14px;
    margin-top: 2rem;
    padding-top: 1.5rem;
}

.loading {
    color: aliceblue;
    height: 100vh;
    width: 100vw;
    background-color: #06121e;

    .loading-icon {
        margin: 40vh auto;
        font-size: 46px;
    }
}
</style>

../components/forum/FooterView.vue../components/nav/HeaderNav.vue