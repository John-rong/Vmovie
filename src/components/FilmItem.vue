<template>
    <div class="Film-items">
        <h2>热映电影</h2>
        <t-row>
            <t-col v-for="i in 8" :key="i" :sm="12" :md="4" :lg="3" :xl="3">
                <div class="Film-item">
                    <a href="#">
                        <div class="block-images position-relative">
                            <div class="img-box">
                                <img src="../assets/film2.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="block-description">
                                <h2>人生大事</h2>
                                <div class="movie-time align-items-center">
                                    <div class="badge badge-secondary">09+</div>
                                    <span class="text-white">1h 45m</span>
                                </div>
                                <div class="hover-buttons">
                                    <span class="btn btn-hover">
                                        Play Now
                                    </span>
                                </div>
                            </div>
                            <div class="block-social-info">
                                <ul class="list-inline  music-play-lists">
                                    <li><span><i class='bx bxs-like bx-xs'></i></span></li>
                                    <li><span><i class='bx bxs-star bx-xs'></i></span></li>
                                    <li><span><i class='bx bxl-bitcoin bx-xs'></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </t-col>
        </t-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            filmItem: []
        }
    },
    mounted() {
        this.getFilm();
    },
    methods: {
        getFilm() {
            axios.get('https://m.maoyan.com/ajax/movieOnInfoList').then(
                response => {
                    console.log("ok", response)
                },
                error => {
                    console.log("请求乌拉", error);
                }
            );
        }
    }

}
</script>

<style lang="less" scoped>
.Film-items {
    color: white;
    text-align: left;
    padding: 3px 6%;
}

.Film-item {
    width: 100%;
    height: 100%;
    margin: 20px 10px 10px 0px;

    a {
        text-decoration: none;
    }

    .block-images {

        transition: all 0.45s ease 0s;
        overflow: hidden;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            width: 100%;
            height: 100%;
            opacity: 0;
            border-radius: 10px;
            border: 3px solid #fff;
        }


        .img-box {
            .img-fluid {
                width: 350px;
                border-radius: 10px;
            }
        }
    }

    .block-description {
        color: white;
        font-size: 1rem;
        position: absolute;
        left: 25px;
        top: 0;
        bottom: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
    }

    .block-social-info {
        position: absolute;
        top: 8px;
        left: auto;
        bottom: 0;
        right: 10px;
        z-index: 999;
        display: flex;
        align-items: center;
        opacity: 0;
    }

    &:hover .block-images::before {
        opacity: 1;
        z-index: 9;
    }

    &:hover .block-description {
        animation: fadeIn 0.6s ease-in-out;
        opacity: 1;
    }

    &:hover .block-social-info {
        animation: fadeIn 0.6s ease-in-out;
        opacity: 1;
    }

    .music-play-lists {
        li {
            padding: 4px;
            margin-bottom: 7px;
            text-align: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.30);
            display: flex;
            align-items: center;
        }

        span {
            position: relative;
            display: block;
            height: 30px;
            width: 30px;
            line-height: 26px;
            font-size: 12px;
            text-align: center;
            background: white;
            color: #e50914;
            border-radius: 50%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.45s ease 0s;
            cursor: pointer;
        }
    }

    .music-play-lists li:hover span {
        background: #e50914;
        color: white;
        transition: all 0.45s ease 0s;
        -webkit-transition: all 0.45s ease 0s;
        -moz-transition: all 0.45s ease 0s;
        -o-transition: all 0.45s ease 0s;
    }
}
</style>