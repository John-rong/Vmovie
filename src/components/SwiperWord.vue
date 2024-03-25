<template>
    <div>
        <!-- <div class="channel-logo"> <img class="logo_img" src="../assets/vlogo.png" alt="logo"></div> -->
        <h1 class="big-title">{{ filmMsg.imgFilm }}</h1>
        <div> <span class="badge badge-secondary">{{ filmMsg.filmScore }}+</span>
            <span class="badge">{{ filmMsg.filmTime }}</span>
        </div>
        <p class="word-detail">{{ filmMsg.filmDetail }}</p>
        <t-button @click="tovisible()" style="background:#e50914;border: none;height: 40px;border-radius: 50px;"
            shape="round" variant="base"><i class='bx bx-play'></i>立即播放</t-button>
    </div>
</template>

<script>
export default {
    name: 'SwiperWord',
    methods: {
        tovisible() {
            this.swiperFn()
        }
    },
    props: ['filmMsg', 'swiperFn']
}
</script>

<style lang="less">
.word-item {
    text-align: left;
    color: aliceblue;
    position: relative;
    top: -100%;
    z-index: 98;
    margin: 25vh 0px;
}

.channel-logo {
    border-left: 5px solid #e50914;
    border-right: 5px solid #e50914;
    background: rgba(255, 55, 65, 0.2);
    padding: 10px 10px 10px 15px;
    width: 185px;
    position: relative;
    overflow: hidden;
}

.channel-logo .logo_img {
    width: 55%;
}

.big-title {
    margin: 30px 0;
    font-size: 4rem;
    line-height: initial;
    background: url('../assets/mesh2.png');
    background-repeat: repeat-x;
    background-position: 100% 100%;
    color: transparent;
    /* -webkit-font-smoothing: antialiased; */
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.badge-secondary {
    margin-right: 0.5rem;
    color: #fff;
    background-color: #6c757d;
}

.word-detail {
    margin: 2rem 0px;
    width: 90%;
    line-height: 2;
    color: rgb(223, 223, 223);
    word-break: break-all;
}

.word-items-leave-active {
    transition: all .3s ease;
}

.word-items-enter-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.word-items-enter,
.word-items-leave-to

/* .slide-fade-leave-active for below version 2.1.8 */
    {
    transform: translateX(10px);
    opacity: 0;
}
</style>