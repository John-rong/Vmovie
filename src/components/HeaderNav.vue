<template>
  <div class="box" @scroll="scrollY">
    
    <t-head-menu defaultValue="1-1" theme="dark" expandType="popup" class="nav_all animate__animated animate__fadeInDown" :class="{'nav_all_bg':isFixed}">
      <template #logo>
        <img class="logo_img" width="136"  src="../assets/vlogo.png" alt="logo">
      </template>
      <t-submenu value="1">
        <template #title>
          <span>主页</span>
        </template>
        <t-menu-item value="1-1">纯黑模式</t-menu-item>
        <t-menu-item value="1-2">月夜模式</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>类型</span>
        </template>
        <t-menu-item value="2-1">子菜单2-1</t-menu-item>
        <t-menu-item value="2-2">子菜单2-2</t-menu-item>
        <t-menu-item value="2-3">子菜单2-3</t-menu-item>
      </t-submenu>
      <t-menu-item value="item1">电影评价</t-menu-item>
      <t-menu-item value="item2">共创共享</t-menu-item>
      <t-menu-item value="item3">联系我们</t-menu-item>
      <template #operations>
        <a class="nav_lcon nav_search" href="javascript:;"><i class='bx bx-search bx-sm'></i></a>
        <a class="nav_lcon nav_message" href="javascript:;"><i class='bx bx-message-square-dots bx-sm' ></i></a>
        <a class="nav_lcon nav_user" href="javascript:;"><i class='bx bx-user bx-sm' ></i></a><a></a>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
export default {
  data () {
      return {
          isFixed:false
      }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollY)
  },
  destroyed(){
    window.removeEventListener('scroll',this.scrollY)
  },
  methods:{
    scrollY(){
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let scrollTop = window.pageYOffset;
      if(scrollTop>120){
        this.isFixed=true;
      }else{
        this.isFixed=false;
      }
    }
  }
}
</script>

<style lang="less" scoped>

.nav_all{
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
}
.nav_all_bg{
    background-color: #0f2133;
    transition: all .3s ease-in;
}
.nav_lcon{
    margin-top:10%;
    padding: 0px 10px;
    color:var(--td-brand-color-1);
    &:hover{
        color:#e50914;
        transition: all .3s ease-in ;
    }
}
</style>