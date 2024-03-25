<template>
    <div class="page-title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DetailTop'
}
</script>

<style lang="less" scoped>
.page-title {
    color: white;
    text-align: left;
    padding: 100px 0px 60px 0px;
    background: url(../assets/title.jpg);
    position: relative;
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        z-index: -1;
    }

    h1 {
        margin: 10px 7.5%;
        font-size: 2.8rem;
    }
    p{
        margin:20px 7.5%;
        color: rgb(186, 186, 186);
    }
}
</style>