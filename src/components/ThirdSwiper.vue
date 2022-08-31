<template>
<div>
    <ThirdSwiperFirst v-if="img_third.length>0" :img_third="img_third" :msg="msg" @saveright="saveright" @saveleft="saveleft"></ThirdSwiperFirst>
   <ThirdSwiperSecond  v-if="img_third.length>0" :img_third="img_third" ref="thirdswipersecond"  :msg="msg"></ThirdSwiperSecond>

</div>


</template>


<script>
    import { reqmovieInfoList } from '@/api'
    import ThirdSwiperFirst from '../components/ThirdSwiperFirst.vue'
    import ThirdSwiperSecond from '../components/ThirdSwiperSecond.vue'

export default {
    name:'ThirdSwiper',
    components:{ThirdSwiperFirst,ThirdSwiperSecond},
    data(){
        return{
            msg:"殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。",
            img_third:[

            ],
            
        }
    },

    created(){
        this.getmovielist();

    },

    mounted(){


    },



    methods:{
        saveright(){
            this.$refs.thirdswipersecond.imgChange(1);
        },
        saveleft(){
            this.$refs.thirdswipersecond.imgChange(-1);
        },
        async getmovielist(){
            let InfoList = await reqmovieInfoList();
            let arr = InfoList.movieList;
            if (arr.length !=0 || arr != undefined) {

                this.img_third=arr;
                console.log(arr);
                return 'ok';
            } else {
                return Promise.reject(new Error('faile'));
            }
        }

    }
}
</script>

<style>

</style>