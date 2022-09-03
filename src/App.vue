<template>
  <div id="app">
    <LayOut></LayOut>
  </div>
</template>

<script>
import LayOut from './layout/LayOut.vue'

export default {
  name: 'App',
  components: {
    LayOut
  }

}
</script>

<style lang="less">
#app {
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

.loading {
  color: aliceblue;
  height: 100vh;
  background-color: #06121e;

  .loading-icon {
    margin: 40vh auto;
    font-size: 46px;
  }
}
</style>

