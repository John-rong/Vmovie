<template>
    <div class="trailor-video">
        <a href="javascript:;" class="video-open playbtn">
            <svg data-v-35b3dccc="" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
                enable-background="new 0 0 213.7 213.7" xml:space="preserve" viewBox="0 0 221 221">
                <polygon data-v-35b3dccc="" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                    stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 " class="triangle"></polygon>
                <circle data-v-35b3dccc="" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                    stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3" class="circle"></circle>
                <polygon class='triangle' fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                    stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                <circle class='circle' fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"
                    stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
            </svg>
            <span class="w-trailor">观看预告片</span>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.trailor-video {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 99;
}

.playbtn {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 80px 120px;
    -webkit-transition: all 0.5s ease;

    .triangle {
        -webkit-transition: all 0.7s ease-in-out;
        stroke-dasharray: 240;
        stroke-dashoffset: 480;
        stroke: white;
        transform: translateY(0);
    }

    &:hover {
        .triangle {
            stroke-dashoffset: 0;
            opacity: 1;
            stroke: firebrick;
            animation: trailorPlay 0.7s ease-in-out;
        }

        .circle {
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }
}

.circle {
    stroke: firebrick;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    -webkit-transition: all 0.5s ease-in-out;
    opacity: 0.3;
}

.w-trailor {
    font-size: 17px;
    letter-spacing: 3.5px;
    font-weight: 600;
    color: white;
}
</style>