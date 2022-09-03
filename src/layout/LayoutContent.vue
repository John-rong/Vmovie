<template>
    <t-content style="background:#06121e;">
        <keep-alive include="DetailSearch,RankingList">
            <router-view ref="content"></router-view>
        </keep-alive>
    </t-content>
</template>

<script>
// import store from '@/store'
export default {
    name: 'LayoutContent',
    // created() {
    //     store.dispatch('endLoading');
    // },
    // mounted() {
    //     const timer = setTimeout(() => {
    //         store.dispatch('beginLoading');
    //         clearTimeout(timer);
    //     }, 2000);
        
    // }
}
</script>

<style>
</style>