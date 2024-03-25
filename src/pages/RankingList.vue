<template>
  <div class="RankingList">
    <DetailTop>
      <h1>排行榜</h1>
      <p>——豆瓣热播电影排行榜</p>
    </DetailTop>

    <!-- <t-row justify="center" class="topRow" align="middle" v-for=" (item, index) in doubanTop" :key="index">
      <t-col :span="1" class="topNum">
        <div>{{ index + 1 }}</div>
      </t-col>
      <t-col class="topImg" :sm="3" :md="3" :lg="2" :xl="2">
        <a :href="item.url" target="_blank" v-lazy-container="{ selector: 'img' }">
          <img referrerpolicy="no-referrer" :data-src="item.cover" alt="vmovie"/>
        </a>
      </t-col>
      <t-col class="topText" :sm="4" :md="4" :lg="4" :xl="4">
        <a :href="item.url" target="_blank">
          <h2>{{ item.title }}</h2>
        </a>
      </t-col>
      <t-col :span="1"></t-col>
      <t-col class="topMark" :sm="1" :md="1" :lg="1" :xl="1">
        <div>{{ item.rate }}</div>
      </t-col>
    </t-row> -->


    <t-button block
      style="background:transparent;border: 1px solid rgba(194, 35, 24, 0.2 );height: 30px;border-radius: 10px;"
      shape="round" variant="base" @click="cutList"> 点击切换TOP100
    </t-button>

    <!-- 定高虚拟列表 -->
    <div class="virtual-box" ref="virtualList" v-show="isCutList">
      <!-- 占位元素 -->
      <div class="phantom" :style="{ height: listHeight + 'px' }"></div>
      <!-- 渲染区域 -->
      <div class="virtual-list" :style="{ transform: `translateY(${currentOffset}px)` }">
        <div class="virtual-list-item" :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
          v-for="(item) in visibleData" :key="item.nid">
          <t-row justify="center" class="topRowNew" align="middle">
            <t-col :span="1" class="topNum">
              <div>{{ item.nid + 1 }}</div>
            </t-col>
            <t-col class="topImg" :xs="5" :sm="2" :md="2" :lg="2" :xl="2">
              <a :href="item.url" target="_blank">
                <img referrerpolicy="no-referrer" :src="item.cover"
                  :onerror="`this.src ='${require('@/assets/vlogo.png')}' `" alt="vmovie" />
              </a>
            </t-col>
            <t-col class="topText" :xs="5" :sm="4" :md="4" :lg="4" :xl="4">
              <a :href="item.url" target="_blank">
                <h2>{{ item.title }}</h2>
              </a>
            </t-col>
            <t-col :span="1"></t-col>
            <t-col class="topMark" :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
              <div>{{ item.rate }}</div>
            </t-col>
          </t-row>
        </div>

      </div>
    </div>

    <div v-if="!isCutList">
      <t-row justify="center" class="topRow" align="middle" v-for=" (item, index) in doubanTop" :key="index">
        <t-col :span="1" class="topNum">
          <div>{{ index + 1 }}</div>
        </t-col>
        <t-col class="topImg" :sm="3" :md="3" :lg="2" :xl="2">
          <a :href="item.url" target="_blank" v-lazy-container="{ selector: 'img' }">
            <img referrerpolicy="no-referrer" :data-src="item.cover" alt="vmovie" />
          </a>
        </t-col>
        <t-col class="topText" :sm="4" :md="4" :lg="4" :xl="4">
          <a :href="item.url" target="_blank">
            <h2>{{ item.title }}</h2>
          </a>
        </t-col>
        <t-col :span="1"></t-col>
        <t-col class="topMark" :sm="1" :md="1" :lg="1" :xl="1">
          <div>{{ item.rate }}</div>
        </t-col>
      </t-row>

    </div>




    <!-- 不定高虚拟列表 -->
    <!-- <div class="virtual-box" ref="virtualList">
      <div class="phantom" :style="{ height: listHeight + 'px' }"></div>
      <div class="virtual-list" :style="{ transform: `translateY(${currentOffset}px)` }">
        <div class="virtual-list-item" ref="vItem" v-for="(item, index) in visibleData" :key="index" :id="item.nid">
          {{ item }}
        </div>
      </div>
    </div> -->


  </div>
</template>

<script>
import DetailTop from '@/components/DetailTop.vue';
import { reqdbRanking } from '@/api';
export default {
  name: "RankingList",
  components: { DetailTop },
  data() {
    return {
      isCutList: true,

      doubanTop: [],

      // 虚拟列表
      listData: [],
      itemHeight: 300,
      marginSize: 5,
      showListHeight: 0,
      start: 0,
      end: 5,
      currentOffset: 0,

      // 不定高虚拟列表
      preItemNum: 100,// 预估数量
      preItemSize: 50,// 预估高度
      /** 
       * 缓存列表
       * {
          index: 0,  // 对应listData的索引
          top: 0,  // 列表项顶部位置
          bottom: 50,  // 列表项底部位置
          height: 50,  // 列表项高度
         }
       */
      positions: []
    }
  },
  computed: {
    listHeight() {
      return this.listData.length * (this.itemHeight + this.marginSize) - this.marginSize;
      // return this.positions[this.positions.length - 1]?.bottom ?? 500;
    },
    visibleCount() {
      return Math.ceil(this.showListHeight / (this.itemHeight + this.marginSize));
      // return Math.ceil(this.showListHeight / this.preItemSize);
    },
    visibleData() {
      return this.listData.slice(this.start, this.end);
    },
    itemSize() {
      return this.itemHeight + this.marginSize;
    }
  },
  updated() {
    // this.$nextTick(() => {
    //   if (!this.$refs.vItem || !this.$refs.vItem.length) {
    //     console.log('没有获取到元素')
    //     return;
    //   }
    //   // 根据真实元素大小，修改对应的缓存列表
    //   this.updatePositions()
    //   // 更新完缓存列表后，重新赋值偏移量
    //   this.currentOffset = this.getCurrentOffset()
    // })
  },
  mounted() {

    // for (let i = 1; i <= 100; i++) {
    //   this.listData.push({ id: i, value: i + '字符内容'.repeat(Math.random() * 50) })
    // }


    //定高虚拟列表
    this.showListHeight = this.$refs.virtualList.clientHeight + (this.itemHeight + this.marginSize) * 2;
    this.start = 0;
    this.end = this.start + this.visibleCount;
    this.$refs.virtualList.addEventListener('scroll', (event) => {
      this.scrollEvent(event.target)
    });

    //不定高虚拟列表
    // this.showListHeight = this.$refs.virtualList.clientHeight;
    // this.start = 0;
    // this.end = this.start + this.visibleCount;
    // this.$refs.virtualList.addEventListener("scroll", (event) => this.scrollEvent(event.target));


    try {
      this.getdouban()
    } catch (error) {
      this.$message.error(error);
    }
  },
  methods: {
    // 不定高虚拟列表
    initPositions(listData, itemSize) {
      this.positions = listData.map((item, index) => {
        return {
          index,
          top: index * itemSize,
          bottom: (index + 1) * itemSize,
          height: itemSize,
          ...item
        }
      })
    },
    // 渲染后更新positions
    updatePositions() {
      let nodes = this.$refs.vItem;
      nodes.forEach((node) => {
        // 获取 真实DOM高度
        const { height } = node.getBoundingClientRect();
        // 根据 元素索引 获取 缓存列表对应的列表项
        const index = node.id - 1
        let oldHeight = this.positions[index]?.height;
        // dValue：真实高度与预估高度的差值 决定该列表项是否要更新
        let dValue = oldHeight - height;
        // 如果有高度差 !!dValue === true
        if (dValue) {
          // 更新对应列表项的 bottom 和 height
          this.positions[index].bottom = this.positions[index].bottom - dValue;
          this.positions[index].height = height;
          // 依次更新positions中后续元素的 top bottom
          for (let k = index + 1; k < this.positions.length; k++) {
            // console.log('dValue:', dValue, this.positions[index])
            this.positions[k].top = this.positions[k - 1].bottom;
            this.positions[k].bottom = this.positions[k].bottom - dValue;
          }
        }
      })
    },
    getCurrentOffset() {
      if (this.start >= 1) {
        return this.positions[this.start - 1].bottom
      } else {
        return 0;
      }
    },
    getStartIndex(scrollTop = 0) {
      return this.binarySearch(this.positions, scrollTop)
    },

    binarySearch(list, target) {
      const len = list.length
      let left = 0, right = len - 1
      let tempIndex = null

      while (left <= right) {
        let midIndex = (left + right) >> 1
        let midVal = list[midIndex].bottom

        if (midVal === target) {
          return midIndex
        } else if (midVal < target) {
          left = midIndex + 1
        } else {
          // list不一定存在与target相等的项，不断收缩右区间，寻找最匹配的项
          if (tempIndex === null || tempIndex > midIndex) {
            tempIndex = midIndex
          }
          right--
        }
      }
      // 如果没有搜索到完全匹配的项 就返回最匹配的项
      return tempIndex
    },

    scrollEvent(target) {

      // 不定高虚拟列表
      // this.start = this.getStartIndex(target.scrollTop)
      // this.end = this.start + this.visibleCount;
      // this.currentOffset = this.getCurrentOffset()
      // console.log('item：', this.start, this.end, this.currentOffset)

      // 定高虚拟列表
      this.start = Math.floor(target.scrollTop / (this.itemHeight + this.marginSize));
      this.end = this.start + this.visibleCount;
      this.currentOffset = target.scrollTop - (target.scrollTop % (this.itemHeight + this.marginSize));
    },
    cutList() {
      this.isCutList = !this.isCutList;
    },
    async getdouban() {
      let ranking = [];
      ranking = await reqdbRanking();
      if (ranking.lenth != 0) {
        this.doubanTop = ranking.subjects;
        // console.log('douban===:', this.doubanTop)
        this.listData = this.doubanTop.map((item, index) => {
          item.nid = index
          return item
        });
        this.initPositions(this.listData, this.itemSize);
        // console.log('mounted:', this.listData)
        return 'ok'
      } else {
        Promise.reject(new Error('faile'));
      }
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 3% 12%;
  font-weight: 450px;
  color: rgba(194, 35, 24, 0.851);

  span {
    font-weight: 200;
    margin-left: 20px;
    color: rgb(222, 222, 222);
  }
}

h2 {
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
}

.topRowNew {
  margin-top: 30px;
  margin-bottom: 3%;
  height: 100%;
  // content-visibility: auto;

  .topNum {
    font-size: 2rem;
    font-weight: bold;
    color: #e50914;
    left: -30px;
  }

  .topImg {
    // background: url(../assets/vlogo.png);
    // height: 100%;
    // min-height: 80px;

    img {
      width: 100%;
      // height: 95%;
    }
  }

  .topText {
    text-align: center;
    font-size: 18px;
    line-height: initial;
    margin-left: 10px;

    a {
      text-decoration: none;
      color: rgb(200, 200, 200);
    }
  }

  .topMark {
    color: #ffb400;
    vertical-align: top;
    font-weight: 500;
    font-size: 3rem;

    @media screen and (max-width: 768px) {
      left: 30px;
      bottom: 50px;
    }
  }
}

.virtual-box {
  position: relative;
  margin: 0 auto;
  height: 90vh;
  width: 80vw;
  // background-color: gray;  
  overflow: auto;

  .virtual-list {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;

    &-item {
      box-sizing: border-box;
      margin: 10px auto;
      width: 80%;
      border: 1px solid #000;
    }
  }


}

.topRow {
  margin-top: 30px;
  margin-bottom: 3%;

  .topNum {
    font-size: 2rem;
    font-weight: bold;
    color: #e50914;
  }

  .topImg {
    background: url(../assets/vlogo.png);
    height: 100%;
    padding: 40px;
    min-height: 150px;

    img {
      // width: 95%;
      height: 100%;
    }
  }

  .topText {
    text-align: center;
    font-size: 20px;
    line-height: initial;

    a {
      text-decoration: none;
      color: rgb(200, 200, 200);
    }
  }

  .topMark {
    color: #ffb400;
    vertical-align: top;
    font-weight: 500;
    font-size: 3rem;
  }
}
</style>