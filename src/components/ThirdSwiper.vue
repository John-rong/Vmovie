<template>
<div>
    <ThirdSwiperFirst :img_third="img_third" :msg="msg" @saveright="saveright" @saveleft="saveleft"></ThirdSwiperFirst>
   <ThirdSwiperSecond :img_third="img_third" ref="thirdswipersecond"></ThirdSwiperSecond>

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
                    idx: 0,
                    imgFilm: '人生大事',
                    filmScore: 9.5,
                    filmTime: '112分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                },
                {
                    idex: 1,
                    src: require("../assets/slider2.jpg"),
                    idx: 0,
                    imgFilm: '电影2',
                    filmScore: 9.5,
                    filmTime: '108分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                },
                {
                    idex: 2,
                    src: require("../assets/film1.jpg"),
                    idx: 0,
                    imgFilm: '电影3',
                    filmScore: 9.5,
                    filmTime: '131分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                },
                {
                    idex: 3,
                    src: require("../assets/film2.jpg"),
                    idx: 0,
                    imgFilm: '电影4',
                    filmScore: 9.5,
                    filmTime: '89分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                },
                {
                    idex: 4,
                    src: require("../assets/film3.png"),
                    idx: 0,
                    imgFilm: '电影5',
                    filmScore: 9.5,
                    filmTime: '102分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                },
                {
                    idex: 5,
                    src: require("../assets/mesh2.png"),
                    idx: 0,
                    imgFilm: '电影6',
                    filmScore: 9.5,
                    filmTime: '118分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                },
                {
                    idex: 6,
                   src: require("../assets/film2.jpg"),
                   idx: 0,
                   imgFilm: '电影7',
                    filmScore: 9.5,
                    filmTime: '98分钟',
                    filmDetail: '殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。',
                }

            ],
        }
    },
    methods:{
        saveright(){
            this.$refs.thirdswipersecond.imgChange(1);
        },
        saveleft(){
            this.$refs.thirdswipersecond.imgChange(-1);
        }
    }
}
</script>

<style>

</style>