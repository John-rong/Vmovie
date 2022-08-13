<template>
<div>
    <ThirdSwiperFirst :img_third="img_third" :msg="msg"></ThirdSwiperFirst>
   <ThirdSwiperSecond></ThirdSwiperSecond>

</div>


</template>


<script>
    import ThirdSwiperFirst from '../components/ThirdSwiperFirst.vue'
    import ThirdSwiperSecond from '../components/ThirdSwiperSecond.vue'
export default {
    name:'ThirdSwiper',
    components:{ThirdSwiperFirst,ThirdSwiperSecond},
    data(){
        return{
            msg:"信息",
            img_third:[
                {
                    idex: 0,
                    src: require("../assets/slider1.jpg"),
                },
                {
                    idex: 1,
                    src: require("../assets/slider2.jpg"),
                },
                {
                    idex: 2,
                    src: require("../assets/film1.jpg"),
                },
                {
                    idex: 3,
                    src: require("../assets/film2.jpg"),
                },
                {
                    idex: 4,
                    src: require("../assets/film3.png"),
                },
                {
                    idex: 5,
                    src: require("../assets/mesh2.png"),
                },
                {
                    idex: 6,
                   src: require("../assets/film2.jpg"),
                }

            ],
        }
    }
}
</script>

<style>

</style>