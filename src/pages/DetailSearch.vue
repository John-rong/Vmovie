<template>
  <div>
    <DetailTop>
      <h1>搜索</h1>
    </DetailTop>
    <!-- <h2>搜索内容:{{ this.searchFilm }}</h2> -->
    <iframe class="iframe-height" :src="`https://z1.m1907.top/?eps=0&jx=${this.searchFilm}`" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <!-- <div class="iframe-box">
      <iframe :src="`https://svip.bljiex.cc/?v=${this.searchFilm}`" @load="removeAd" name="video-vip" width="100%" class="iframe-height" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
    </div> -->
    <t-row justify="center" align="middle" class="history">
      <t-col :sm="10" :md="10" :lg="6" :xl="6" class="history">
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
    // this.getparams();
    this.setLocalHistory();
    this.getparams();
    this.$message('success', { content: '已开启超级加速🚀', duration: 1500,placement: 'bottom' });
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
    removeAd(){
      // let iframeBox = document.getElementById("video-vip");
      // let _obj=iframeBox.contentWindow || iframeBox.contentDocument;
      // let doc=_obj.document;
      // let _box=doc.getElementById("section");
      // console.log(_box);
      // _box.remove();
    },
    getparams(){
      if(this.$route.params.filmName){
        this.$store.dispatch('searchName', this.$route.params.filmName);
      }
      console.log(this.searchFilm)
      if(!this.searchFilm){
        if(this.historyList[0]){
          this.$store.dispatch('searchName', this.historyList[0]);
        }else{
          this.$store.dispatch('searchName', this.historyList[1]);
        }
      }
    },
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

.iframe-box{
  position: relative;
}
.iframe-height{
  height: 700px;
  @media screen and (max-width : 992px) {
    height: 350px;
  }
}
.history {
  color: rgb(122, 122, 122);
  margin: 0px;
  
  // @media screen and (max-width : 760px) {
  //     background: rgb(6, 18, 30);
  //     padding-top: 100px;
  //     margin-top: -110px;
  // }
  a {

    color: rgb(150, 150, 150);
    background: rgb(6, 18, 30);
    display: block;

    &:hover {
      color: #ac0810;
      transition: all .3s ease-in;
    }
  }
}
</style>