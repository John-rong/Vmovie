<template>
  <div class="box" @scroll="scrollY">
    <!-- 移动端菜单栏 -->
    <t-drawer :visible.sync="phoneVisible" placement="top" header="菜单" :footer="false" showInAttachedElement>
      <t-button theme="primary" @click="goHome" block class="phoneVisible">
        <i class='bx bxs-home' ></i>
        主页
      </t-button>
      <t-button theme="primary" @click="toDetail" block class="phoneVisible">
        <i class='bx bxs-game' ></i>
        狙击手
      </t-button>
      <t-button theme="primary" @click="toRanking" block class="phoneVisible">
        <i class='bx bxs-trophy' ></i>
        排行榜
      </t-button>
      <t-button theme="primary" @click="toForum" block class="phoneVisible">
        <i class='bx bxs-chat' ></i>
        唠唠
      </t-button>
    </t-drawer>

    <t-head-menu defaultValue="1-1" theme="dark" expandType="popup"
      class="nav_all animate__animated animate__fadeInDown" :class="{ 'nav_all_bg': isFixed }">
      <template #logo>
        <i class='bx bx-menu phone-submenu' @click="phoneVisible = true"></i>
        <img @click="goHome" class="logo_img" width="136" src="../assets/vlogo.png" alt="logo">
      </template>
      <t-submenu value="1" class="sub-menu">
        <template #title>
          <span>主页</span>
        </template>
        <!-- <t-menu-item value="1-1" @click="goHome">纯黑模式</t-menu-item> -->
        <t-menu-item value="1-1" @click="goHome">月夜模式</t-menu-item>
      </t-submenu>
      <t-submenu value="2" class="sub-menu">
        <template #title>
          <span>类型</span>
        </template>
        <t-menu-item value="2-1" @click="toDetail">喜剧</t-menu-item>
        <t-menu-item value="2-2" @click="toDetail">恐怖</t-menu-item>
        <t-menu-item value="2-3" @click="toDetail">科幻</t-menu-item>
        <t-menu-item value="2-4" @click="toDetail">冒险</t-menu-item>
        <t-menu-item value="2-5" @click="toDetail">爱情</t-menu-item>
      </t-submenu>
      <t-menu-item value="item1" class="sub-menu" @click="toRanking">排行榜</t-menu-item>
      <t-menu-item value="item2" class="sub-menu" @click="toForum">电影评价</t-menu-item>
      <t-menu-item value="item3" class="sub-menu" @click="tocontact">联系我们</t-menu-item>
      <template #operations>
        <a class="nav_lcon nav_search" @dblclick="toSearch" @keyup.enter="toSearch">
          <!-- <i class='bx bx-search bx-sm'></i> -->
          <div class="search">
            <div>
              <input type="text" id="mysearch" placeholder="  请输入...双击搜索" v-model="mySearch">
            </div>
          </div>
        </a>
        <a class="nav_lcon nav_message" @click="toMyProfile"><i class='bx bx-message-square-dots bx-sm'></i></a>
        <a v-if="!userImg" class="nav_lcon" @click="toLogin" ><i class='bx bx-user bx-sm'></i></a>
        <t-popconfirm v-else :visible="visible" theme="default" content="是否退出登录？" cancelBtn @visible-change="outLogin">
          <a class="nav_lcon nav_user"><img :src="userImg" class="nav_userImg" /></a>
        </t-popconfirm>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "HeaderNav",
  data() {
    return {
      //导航背景
      isFixed: false,
      //搜索值
      mySearch: '',
      //退出登录确认提示
      visible: false,
      phoneVisible: false,

    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollY)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollY)
  },
  computed: {
    ...mapState(['searchFilm']),
    userImg() {
      return this.$store.state.userInfo.headImg;
    }
  },
  methods: {
    scrollY() {
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let scrollTop = window.pageYOffset;
      if (scrollTop > 60) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    toLogin() {
      this.$router.push('/UserLogin');
    },
    async outLogin(val, context = {}) {
      //退出登录
      //1.发请求【清除token】
      //2.清除项目当中的数据【userinfo，token】
      //确认提示框  trigger 表示触发来源，可以根据触发来源自由控制 visible
      if (context && context.trigger === 'confirm') {
        const msg = this.$message.loading('退出中');
        try {
          //退出成功
          await this.$store.dispatch('userLogout');
          //回到首页
          this.$router.push('/HomePage')
          const timer = setTimeout(() => {
            this.$message.close(msg);
            this.$message.success('已退出登录！');
            this.visible = false;
            clearTimeout(timer);
          }, 500);
        } catch (error) {
          console.log(error)
          this.$message.error('退出登录失败...');
        }
      } else {
        this.visible = val;
      }
    },
    toSearch() {
      if (this.mySearch == null || this.mySearch == '') {
        this.$message('warning', '搜索不能为空！')
        return
      }
      this.$store.dispatch('searchName', this.mySearch);
      this.$router.push('/DetailSearch');
    },
    toDetail() {
      this.$router.push('/DetailPage');
    },
    toRanking() {
      this.$router.push('/RankingList')
    },
    toMyProfile() {
      this.$router.push('/MyProfile')
    },
    toForum() {
      this.$router.push('/ForumPage')
    },
    tocontact() {
      this.$router.push('/ForumPage')
      this.$message('success', '通过唠唠，联系我们噢！')
    },
    goHome() {
      this.$router.push('/HomePage');
    },
  }
}
</script>

<style lang="less" scoped>
.nav_all {
  padding: 3px 6%;
  position: fixed;
  left: 0px;
  right: 0px;
  // text-align: center;
  z-index: 100;
  background: transparent;
  // background-color: #0f2133;
  // display: flex;
  // justify-content:space-between;

  .phone-submenu {
    display: none;

    @media screen and (max-width : 992px) {
      display: block;
    }
  }

  .sub-menu {
    @media screen and (max-width : 992px) {
      display: none;
    }
  }
}

.phoneVisible{
  margin-top: 10px;
}

.nav_all_bg {
  background-color: #0f2133;
  transition: all .3s ease-in;
}

.nav_lcon {
  margin-top: 10%;
  padding: 0px 10px;
  color: var(--td-brand-color-1);

  &:hover {
    color: #e50914;
    transition: all .3s ease-in;
  }
}

.nav_user {
  margin: 0px;

  .nav_userImg {
    border-radius: 50%;
    width: 2.3vw;
    display: block;
    margin: auto 0px;

    @media screen and (max-width : 992px) {
      width: 8vw;
    }
  }
}

.search {
  display: block;

  &>div {
    display: inline-block;
    position: relative;
    top: -9px;

    &::after {
      content: "";
      background: white;
      width: 2.5px;
      height: 7px;
      position: absolute;
      top: 37px;
      right: -1px;
      transform: rotate(135deg);
    }

    &:hover::after {
      background: #e50914;
      transition: all .3s ease-in;
    }

    &>input {
      color: white;
      font-size: 8px;
      background: transparent;
      width: 5px;
      height: 5px;
      padding: 3.5px;
      border: solid 2.5px white;
      outline: none;
      border-radius: 35px;
      transition: width 0.8s;

      &:hover {
        border: solid 2.5px #e50914;
        transition: all .3s ease-in;
      }
    }
  }
}

/* 获得焦点时或输入时 */
.search>div>input:focus,
.search>div>input:not(:placeholder-shown) {
  width: 10vw;
  height: 7px;
}
</style>