<template>
  <div>
    <div class="third-wrap">
      <div class="wrap">
        <transition>
          <img class="img-depth" src="../assets/film2.jpg">
        </transition>

        <t-row class="third-item">
          <t-col flex="6%">
          </t-col>
          <!--  -->
          <t-col :xs="10" :sm="10" :md="5" :lg="5" :xl="5">
            <transition appear>
              <!-- <div class="channel-logo"> <img class="logo_img" src="../assets/vlogo.png" alt="logo"></div> -->
              <!-- <h1 class="big-title">{{msg1}}</h1> -->
              <!-- <div> <span class="badge badge-secondary">{{msg1}}+</span><span class="badge">{{msg2}}</span></div> -->
              <!-- <p class="word-detail">{{msg3}}</p> -->
              <t-button style="background:#e50914;border: none;height: 40px;border-radius: 50px;" shape="round"
                variant="base"><i class='bx bx-play'></i>立即播放</t-button>
            </transition>



          </t-col>
        </t-row>

      </div>
    </div>





  </div>
</template>

<script>
export default {
  name: 'ThirdSwiperSecond',
  data() {
    return {
      msg1: "信息1",
      msg2: "信息2",
      msg3: "信息3",
    }
  }
}
</script>

<style lang="less" scoped>
.third-wrap {
  margin: 0 6%;
  background-color: #0f2133;
  border: 3px solid rgb(255, 255, 255);
  box-sizing: border-box;
  width: 86vw;
  height: 65vh;
  position: relative;
  overflow: hidden;
  /* 隐藏突出部分 */

}

.wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

img {
  user-select: none;
  width: 100%;
  height: 100%;
}

.wrap:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  background: linear-gradient(90deg, rgba(20, 20, 20, 1) 0%, rgba(36, 36, 36, 1) 35%, rgba(83, 100, 141, 0) 100%);
  z-index: 1;
  /* border-radius: 10px 0 0 10px; */
}

.wrap:before {
  /* background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 1) 35%, rgba(83, 100, 141, 0) 100%); */
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 1%, rgb(16 16 16) 35%, rgba(83, 100, 141, 0) 100%);
  /* width: 100%; */
  z-index: 1;
}

.channel-logo {
  border-left: 5px solid #e50914;
  border-right: 5px solid #e50914;
  background: rgba(255, 55, 65, 0.2);
  padding: 10px 10px 10px 15px;
  width: 185px;
  position: relative;
  overflow: hidden;
}

.channel-logo .logo_img {
  width: 55%;
}

.big-title {
  margin: 30px 0;
  font-size: 4rem;
  line-height: initial;
  background: url('../assets/mesh2.png');
  background-repeat: repeat-x;
  background-position: 100% 100%;
  color: transparent;
  /* -webkit-font-smoothing: antialiased; */
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.word-detail {
  margin: 2rem 0px;
  width: 90%;
  line-height: 2;
  color: rgb(223, 223, 223);
}
</style>