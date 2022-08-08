<template>
  <div>
    <DetailTop>
      <h1>搜索</h1>
    </DetailTop>
    <h2>搜索内容:{{ this.searchFilm }}</h2>
    <t-row justify="center" align="middle" class="history">
      <t-col :sm="10" :md="10" :lg="6" :xl="6">
        历史记录:
        <a href="#" v-for=" (item, index) in historyList" :key="index" @click="searchHistory(item)">{{ item }}</a>
        <i class='bx bx-x-circle' @click="clearHistory"></i>
      </t-col>
    </t-row>
  </div>
</template>

<script>
import DetailTop from '@/components/DetailTop.vue'
import { mapState } from 'vuex';
export default {
  name: "DetailSearch",
  data() {
    return {
      search: '',
      historyList: []
    };
  },
  components: { DetailTop },
  mounted() {
    this.setLocalHistory();
  },
  computed: {
    ...mapState(['searchFilm'])
  },
  watch: {
    searchFilm() {
      this.setLocalHistory();
    }
  },
  methods: {
    setLocalHistory() {
      //先判断
      this.getLocalKey();
      // 搜索历史
      // 没有搜索记录，把搜索值push进数组首位，存入本地
      if (!this.historyList.includes(this.searchFilm)) {
        this.historyList.unshift(this.searchFilm);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      } else {
        //有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
        let i = this.historyList.indexOf(this.searchFilm);
        this.historyList.splice(i, 1);
        this.historyList.unshift(this.searchFilm);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      }
      // this.$forceUpdate()
    },
    //判断 localStorage中 是否有 historyList
    getLocalKey() {
      //如果本地存储的数据historyList有值，直接赋值给data中的historyList
      if (JSON.parse(localStorage.getItem("historyList"))) {
        this.historyList = JSON.parse(localStorage.getItem("historyList"));
      } else {
        this.historyList = [];
      }
    },
    searchHistory(name) {
      this.$store.dispatch('searchName', name);
    },
    //清空历史搜索记录
    clearHistory() {
      this.$message('success', { content: '已清空！', duration: 1500 });
      localStorage.removeItem('historyList');
      this.historyList = [];
    }
  }
}
</script>

<style lang="less" scoped>
h2 {
  color: white;
}

.history {
  margin: 10px 0px;
  color: rgb(122, 122, 122);

  a {
    color: rgb(150, 150, 150);
    margin: 0px 10px;
    display: block;

    &:hover {
      color: #ac0810;
      transition: all .3s ease-in;
    }
  }
}
</style>