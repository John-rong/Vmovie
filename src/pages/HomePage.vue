<template>
  <div>
    <FirstSwiper></FirstSwiper>
    <FilmItem></FilmItem>
    <SecondSwiper></SecondSwiper>
    <ThirdSwiper></ThirdSwiper>
  </div>
</template>

<script>
import FirstSwiper from '@/components/FirstSwiper.vue';
import FilmItem from '@/components/FilmItem.vue';
import ThirdSwiper from '@/components/ThirdSwiper.vue';
import SecondSwiper from '@/components/SecondSwiper.vue';
export default {
    name: "HomePage",
    components: { FirstSwiper, FilmItem, ThirdSwiper, SecondSwiper },
    mounted(){
      //获取用户信息 （token）
      // this.$store.dispatch('userInfo')
    }
}
</script>

<style>

</style>