<template>
    <div>
        <DetailTop>
            <h1>电影详情</h1>
        </DetailTop>
        <div class="video-container">
            <video class="video" controls loop>
                <source src="https://vod.pipi.cn/fec9203cvodtransbj1251246104/1394d71b387702295817614871/v.f42905.mp4"
                    type="video/mp4">
            </video>
            <div class="video-word">
                <h4 class="big-title1" @click="watch(filmItems.nm)">{{filmItems.nm}}<span class="badge badge-secondary">{{filmItems.sc}}+</span></h4>
                <p>{{filmItems.dra}}
                </p>
                <div class="title">导演：<span> {{filmItems.dir}}</span></div>
                <div class="title">类型：<span> {{filmItems.cat}}</span></div>
                <div class="title">国家：<span> {{filmItems.fra}}</span></div>
                <div class="title">语言：<span> {{filmItems.oriLang}}</span></div>
                <div class="title">时长：<span> {{filmItems.version}}</span></div>
                <div class="title">时间（上映）：<span> {{filmItems.pubDesc}}</span></div>
            </div>
        </div>
        <FilmItem :filmNum=4></FilmItem>
    </div>
</template>

<script>
import { jujishouMovie } from '@/api';
import DetailTop from '@/components/DetailTop.vue';
import FilmItem from '@/components/FilmItem.vue';
export default {
    name: "DetailPage",
    components: { DetailTop, FilmItem },
    data() {
        return {
            filmItems: {}
        }
    },
    mounted() {
        try {
            this.getFilm();
        } catch (error) {
            this.$message.error('电影详情获取失败'+error);
        }
    },
    methods: {
        async getFilm() {
            let jujishouFilm = await jujishouMovie();
            if (jujishouFilm.code == 200) {
                this.filmItems = jujishouFilm.detailMovie
                return 'ok';
            } else {
                return Promise.reject(new Error('faile'));
            }
        },
        watch(imgFilm){
            this.$router.push({name:"DetailSearch",params:{filmName:imgFilm || undefined}})
        }
    }
}
</script>

<style lang="less" scoped>
.video-container {
    padding: 0px 8%;
    margin-bottom: 20px;
    text-align: left;
    border: 1px solid white;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, rgba(209, 208, 207, 0), rgba(209, 208, 207, 0.6), rgba(209, 208, 207, 0));


    .video {
        margin: 0px;
        padding: 0px;
        width: 100%;
    }

    .video-word {
        color: white;
        margin-bottom: 40px;

        p {
            margin: 30px 0px;
        }

        .big-title1 {
            margin: 20px 0;
            font-size: 2rem;
            line-height: initial;
            background: url('../assets/mesh2.png');
            background-repeat: repeat-x;
            background-position: 100% 100%;
            color: transparent;
            background-clip: text;
        }

        .badge-secondary {
            margin-left: 1rem;
            font-size: 0.5rem;
            color: #00faffe6;
            background-color: #6c757d;
        }

        .title {
            color: #e50914;
            font-size: 1.1rem;
            margin-top: 8px;

            span {
                color: white;
                font-size: 1rem;
            }
        }
    }
}
</style>