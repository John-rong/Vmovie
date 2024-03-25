<template>
    <div>
        <t-space class="loading">
            <t-loading class="loading-icon" inheritColor showOverlay></t-loading>
        </t-space>
    </div>
</template>

<script>
export default {
    name: "LoadingComponent",
}
</script>

<style lang="less" scoped>
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