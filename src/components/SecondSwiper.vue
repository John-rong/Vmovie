<template>
    <div class="parallax-window">
        <t-row align="middle" justify="center" class="parallax-all">
            <t-col :xs="10" :sm="10" :md="4" :lg="4" :xl="4" class="parallaxt-details">
                <SwiperWord :filmMsg="filmMsg"></SwiperWord>
            </t-col>
            <t-col :xs="1" :sm="1" :md="8" :lg="8" :xl="8">
                <div class="parallax-img" @click="toDetail">
                    <img src="@/assets/f3.jpg" />
                </div>
            </t-col>
        </t-row>
    </div>
</template>

<script>
import SwiperWord from './SwiperWord.vue';
export default {
    name: "SecondSwiper",
    data() {
        return {
            filmMsg: {
                imgFilm: '狙击手',
                filmScore: 7.7,
                filmTime: '1小时36分钟',
                filmDetail: '影片根据抗美援朝战争“冷枪冷炮”运动中神枪手群体事迹改编。1952年冬至1953年初，中国人民志愿军与联合国军在朝鲜战场形成僵持，双方发起了低强度的密集狙击战，史称“冷枪冷炮运动”。在连长（张译 饰）带领下的狙击五班战士枪法过人，成为敌军的心头大患，班长刘文武（章宇 饰）更成为重点狙击对象。但正当敌军打响自己如意算盘之时，他们未料到，被他们当作诱饵的侦察兵亮亮（刘奕铁 饰）身上其实隐藏着更大的秘密......',
                videoUrl: 'https://vod.pipi.cn/fec9203cvodtransbj1251246104/9afed78b387702302563905208/v.f42905.mp4'
            }
        };
    },
    components: { SwiperWord },
    methods: {
        toDetail(){
            this.$router.push('/DetailPage')
        }
    }
}
</script>

<style lang="less" scoped>
.parallax-window {
    height: 100%;
    margin: 50px 0px 20px 0px;
    padding: 100px 6%;
    position: relative;
    background: url(../assets/f2.jpg) center center;
    background-size: cover;
    background-attachment: fixed;

    &::after {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(33, 33, 33, 0.7);
    }

    .parallax-all {
        margin: 50px 0px;
        text-align: left;
        color: aliceblue;
    }

    .parallaxt-details {
        z-index: 9;
        position: relative;
    }

    .parallax-img {
        z-index: 9;
        position: relative;

        img {
            width: 100%;
            box-shadow: 0px 20px 40px rgb(0 0 0 / 60%);
            border-radius: 10px;
        }

    }
}
</style>