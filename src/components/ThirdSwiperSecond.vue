<template>
  <div class="img-wrap">
    <!-- 模态框 -->
    <!-- <t-dialog destroyOnClose :footer="false" placement="center" closeOnEscKeydown closeOnOverlayClick
      preventScrollThrough showOverlay :visible.sync="visible" width="1000" height="500">
      <video width="100%" autoplay controls>
        <source :src="visibleUrl" type="video/mp4">
      </video>
    </t-dialog> -->

    <div class="wrap" v-for="(item, index) in images_thirdsecond" :key="item.id">
      <!-- 轮播图 -->
      <transition :name="imgAnime">
        <img class="img-depth" v-show="curIdx === index" :key="item.id" v-lazy="item.img" />
      </transition>
      <!-- 轮播图文字 -->
      <t-row class="word-item">
        <t-col flex="6%">
        </t-col>
        <t-col :xs="10" :sm="10" :md="5" :lg="5" :xl="5">
          <transition appear name="animate__animated animate__fadeInLeft"
            enter-active-class="animate__fadeInLeft animate__slow"
            leave-active-class="animate__fadeOut animate__faster">
            <div v-show="curIdx === index">
              <div class="channel-logo"> <img class="logo_img" src="../assets/vlogo.png" alt="logo"></div>
              <h1 class="big-title">{{ item.nm }}</h1>
              <div>
                <!-- <span class="badge badge-secondary">  55  </span> -->
                <span class="badge">{{ item.filmTime }}</span>
              </div>
              <p class="word-detail"></p>
              <!-- <t-button @click="tovisible(item.videoUrl)" style="background:#e50914;border: none;height: 40px;border-radius: 50px;" shape="round"
                variant="base"><i class='bx bx-play'></i>立即播放</t-button> -->

            </div>
          </transition>
        </t-col>
        <t-col :xs="1" :sm="1" :md="4" :lg="4" :xl="4">
        </t-col>
        <t-col flex="6%">
        </t-col>
      </t-row>
      <!-- <transition appear name="animate__animated animate__fadeInLeft"
        enter-active-class="animate__fadeInLeft animate__slow"
        leave-active-class="animate__fadeOut animate__faster">
        <SwiperWord v-show="curIdx === index" :filmMsg="item"></SwiperWord>
      </transition> -->
      <div @click="tovisible(item.videoUrl)">
      </div>
    </div>


    <!-- 小飞机按钮 -->
    <!-- <div class="left-btn" @click="imgChange(-1)" v-throttle="1200">
      <div class="slick-nav prev-arrow slick-arrow" :class="{ animate: leftAnimate }" style=""><i></i></div>
    </div>
    <div class="right-btn" @click="imgChange(1)" v-throttle="1200">
      <div class="slick-nav next-arrow slick-arrow" :class="{ animate: rightAnimate }" style=""><i></i></div>
    </div> -->


  </div>
</template>

<script>
export default {
  name: "FirstSwiper",
  props: ["img_third", "msg"],
  data() {
    return {
      // imgs: [
      //   {
      //     idx: 0,
      //     src: require("../assets/film2.jpg"),
      //     imgFilm: '人生大事',
      //     filmScore: 9.5,
      //     filmTime: '112分钟',
      //     filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
      //     videoUrl:'https://vod.pipi.cn/fec9203cvodtransbj1251246104/9afed78b387702302563905208/v.f42905.mp4'
      //   },
      //   {
      //     idx: 1,
      //     src: require("../assets/film3.png"),
      //     imgFilm: '侏罗纪世界3',
      //     filmScore: 8.0,
      //     filmTime: '147分钟',
      //     filmDetail: '影片为《侏罗纪世界》系列的完结篇，故事的开篇设定在纳布拉尔岛被摧毁的四年后。如今，恐龙在世界各地与人类共同生活、共同捕猎。这一脆弱的平衡将重塑未来，并最终决定人类能否与史上最可怕生物共享这颗星球，并继续站在食物链的顶端。',
      //     videoUrl:'https://vod.pipi.cn/fec9203cvodtransbj1251246104/3d5cfd24387702301752506160/v.f42905.mp4'
      //   },
      //   {
      //     idx: 2,
      //     src: require("../assets/mesh.png"),
      //     imgFilm: '测试',
      //     filmScore: 9.5,
      //     filmTime: '112分钟',
      //     filmDetail: '这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
      //     videoUrl:'https://vod.pipi.cn/fec9203cvodtransbj1251246104/9afed78b387702302563905208/v.f42905.mp4'
      //   }
      // ],
      curIdx: 0,
      timer: null,
      imgAnime: "img-play-right",
      leftAnimate: false,
      rightAnimate: false,
      visible: false,
      visibleUrl: '',
      images_thirdsecond: [],
    };
  },

  mounted() {
    this.images_thirdsecond = JSON.parse(JSON.stringify(this.img_third));

    for (let i = 0; i < 2; i++) {
      this.images_thirdsecond.push(this.images_thirdsecond[i]);
    }
    this.images_thirdsecond.splice(0, 2);


  },
  methods: {


    imgChange(v) {
      if (v == -1) {
        this.leftAnimate = true;
        setTimeout(() => {
          this.leftAnimate = false;
        }, 1200);
      } else {
        this.rightAnimate = true;
        setTimeout(() => {
          this.rightAnimate = false;
        }, 1200);
      }


      this.imgAnime = v === -1 ? "img-play-left" : "img-play-right";
      let l = this.images_thirdsecond.length;
      this.curIdx = ((this.curIdx + v) % l + l) % l;
    },
    tovisible(url) {
      this.visibleUrl = url;
      this.visible = true;
    }
  }
}
</script>

<style lang="less" scoped>
.img-wrap {
  @media screen and (max-width : 992px) {
    display: none;
  }

  margin: 0 auto;
  background-color: #0f2133;
  box-sizing: border-box;
  width: 85.5%;
  height:700px;
  position: relative;
  overflow: hidden;
  left: -1%;

  margin-bottom: 50px;

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
  object-fit: cover;
  // position: relative;
  top: -95%;
}

.wrap:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  background: linear-gradient(90deg, rgba(20, 20, 20, 1) 0%, rgba(36, 36, 36, 1) 35%, rgba(83, 100, 141, 0) 50%);
  z-index: 1;
  /* border-radius: 10px 0 0 10px; */
}

.wrap:before {
  /* background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 1) 35%, rgba(83, 100, 141, 0) 100%); */
  background: linear-gradient(90deg, rgb(0 0 0) 0%, rgb(18 18 18 / 32%) 15%, rgb(53 53 53 / 0%) 30%);
  /* width: 100%; */
  z-index: 1;
}



/* right=左to右 */
.img-play-right-enter-active,
.img-play-right-leave-active,
.img-play-left-enter-active,
.img-play-left-leave-active {
  transition: all .6s;
}

/* 左to右和右to左的类名呈现一个reverse的关系 */
.img-play-right-enter,
.img-play-left-leave-to {
  transform: translateX(100%);
}

.img-play-right-enter-to,
.img-play-left-leave {
  transform: translateX(0);
}

.img-play-right-leave,
.img-play-left-enter-to {
  transform: translateX(0);
}

.img-play-right-leave-to,
.img-play-left-enter {
  transform: translateX(-100%);
}

.left-btn,
.right-btn {
  user-select: none;
  position: absolute;
  /* width: 32px; */
  /* height: 32px; */
  border-radius: 50%;
  /* background-color: rgba(0,0,0,.2); */
  top: 50%;
  margin-top: -12px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  line-height: 29px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  z-index: 99;
}

.left-btn {
  left: 16px;
}

.right-btn {
  right: 16px;
}

.word-item {
  text-align: left;
  color: aliceblue;
  position: relative;
  top: -130%;
  left: -4%;
  z-index: 98;

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

  writing-mode: vertical-lr;
  height: 60vh;
  font-size: 3rem;
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

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.badge-secondary {
  margin-right: 0.5rem;
  color: #fff;
  background-color: #6c757d;
}

.word-detail {
  margin: 2rem 0px;
  width: 90%;
  line-height: 2;
  color: rgb(223, 223, 223);
}

.word-items-leave-active {
  transition: all .3s ease;
}

.word-items-enter-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.word-items-enter,
.word-items-leave-to

/* .slide-fade-leave-active for below version 2.1.8 */
  {
  transform: translateX(10px);
  opacity: 0;
}


/* 左右箭头 */
.slide {
  position: relative;
  -webkit-transition: 1s;
  transition: 1s;
}

.slick-nav {
  --active: #fff;
  --border: rgba(255, 255, 255, .12);
  width: 44px;
  height: 44px;
  position: absolute;
  cursor: pointer;
  top: calc(50% - 44px);
}

.slick-nav.prev-arrow {
  left: 2%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  z-index: 999;
}

.slick-nav.next-arrow {
  left: auto;
  right: 2%;
}

.slick-nav i {
  display: block;
  position: absolute;
  margin: -10px 0 0 -10px;
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;
}

.slick-nav i:before,
.slick-nav i:after {
  content: '';
  width: 9.89px;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  background: white;
  margin: -1px 0 0 -5px;
  display: block;
  -webkit-transform-origin: 9px 50%;
  transform-origin: 9px 50%;
}

.slick-nav i:before {
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}

.slick-nav i:after {
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}

.slick-nav.animate svg {
  color: #fff;
  -webkit-animation: stroke 1s ease forwards .3s;
  animation: stroke 1s ease forwards .3s;
}

.slick-nav.animate i {
  -webkit-animation: arrow 1.2s ease forwards;
  animation: arrow 1.2s ease forwards;
}

.slick-nav.animate i:before {
  -webkit-animation: arrowUp 1.2s ease forwards;
  animation: arrowUp 1.2s ease forwards;
}

.slick-nav.animate i:after {
  -webkit-animation: arrowDown 1.2s ease forwards;
  animation: arrowDown 1.2s ease forwards;
}

@keyframes arrow {

  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  23% {
    -webkit-transform: translateX(17px);
    transform: translateX(17px);
    opacity: 1;
  }

  24%,
  80% {
    -webkit-transform: translateX(-22px);
    transform: translateX(-22px);
    opacity: 0;
  }

  81% {
    opacity: 1;
    -webkit-transform: translateX(-22px);
    transform: translateX(-22px);
  }
}


@keyframes arrowUp {

  0%,
  100% {
    -webkit-transform: rotate(-40deg) scaleX(1);
    transform: rotate(-40deg) scaleX(1);
  }

  20%,
  80% {
    -webkit-transform: rotate(0deg) scaleX(0.1);
    transform: rotate(0deg) scaleX(0.1);
  }
}

@keyframes arrowDown {

  0%,
  100% {
    -webkit-transform: rotate(40deg) scaleX(1);
    transform: rotate(40deg) scaleX(1);
  }

  20%,
  80% {
    -webkit-transform: rotate(0deg) scaleX(0.1);
    transform: rotate(0deg) scaleX(0.1);
  }
}
</style>





<!--  
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
          <t-col :xs="10" :sm="10" :md="5" :lg="5" :xl="5">
            <transition appear>
              <div class="channel-logo"> <img class="logo_img" src="../assets/vlogo.png" alt="logo"></div>
              <h1 class="big-title">{{msg1}}</h1>
              <div> <span class="badge badge-secondary">{{msg1}}+</span><span class="badge">{{msg2}}</span></div>
              <p class="word-detail">{{msg3}}</p>
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
-->
