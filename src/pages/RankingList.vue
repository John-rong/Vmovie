<template>
  <div class="RankingList">
    <DetailTop>
      <h1>排行榜</h1>
    </DetailTop>

    <t-row justify="center" class="topRow" align="middle" v-for=" (item, index) in doubanTop" :key="index">
      <t-col :span="1" class="topNum">
        <div>{{ index + 1 }}</div>
      </t-col>
      <t-col class="topImg" :sm="3" :md="3" :lg="2" :xl="2">
        <a :href="item.url" target="_blank" v-lazy-container="{ selector: 'img' }">
          <img referrerpolicy="no-referrer" :data-src="item.cover" />
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
</template>

<script>
import DetailTop from '@/components/DetailTop.vue';
import { reqdbRanking } from '@/api';
export default {
  name: "RankingList",
  components: { DetailTop },
  data() {
    return {
      doubanTop: []
    }
  },
  mounted() {
    try {
      this.getdouban()
    } catch (error) {
      this.$message.error(error);
    }
  },
  methods: {
    async getdouban() {
      let ranking = [];
      ranking = await reqdbRanking();
      if (ranking.lenth != 0) {
        this.doubanTop = ranking.subjects;
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

    img {
      width: 95%;
      height: 95%;
    }
  }

  .topText {
    text-align: center;
    font-size: 20px;

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