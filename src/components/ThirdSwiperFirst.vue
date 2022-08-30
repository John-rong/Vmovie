<template>
    <div class="third-All">
        <div class="third-navigation">
            <div class="third-log">
                <div class="third-p">
                    <h2>高分电影</h2>
                </div>
                <div class="third-buttons">
                    <t-button theme="danger" @click="left" class="third-button">&lt;</t-button>
                    &nbsp;
                    <t-button theme="danger" @click="right" class="third-button">&gt;</t-button>
                </div>
            </div>
        </div>

        <div @click="uLClick($event)" class="third-navigation-images">
            <ul>
                <li v-for="(item,index) in images_third" :key="index"><img :src="item.src" alt="vmovie"></li>
            </ul>
        </div>
    </div>
</template> 
<script>

export default {
    name: 'ThirdSwiperFirst',
    props: ["img_third", "msg"],
    data() {
        return {
            currentIndex: 0,
            theDirection: this.direction,
            moveNum: 0,
            numC: 2,
            images_third:[]
        }
    },

    mounted() {

        this.images_third=this.img_third;
        // let list = document.querySelectorAll('.third-navigation-images li')
        // list[2].className = 'bor';

        console.log("父亲的",this.images_third);
    },

    methods: {

        // ul 父盒子
        uLClick(item) {
            console.log();
            if (item.clientX < 650) {

                let clsNum = --this.numC
                this.rightS()
                let list = document.querySelectorAll('.third-navigation-images li')
                for (var i = 0; i < list.length; i++) {
                    list[i].className = ''
                }
                list[clsNum].className = 'bor'
                console.log(clsNum);
            }
            else if (item.clientX > 950) {
                let clsNum = ++this.numC
                // let bagUl = document.querySelector('.third-navigation-images ul')
                // if (this.moveNum == -2320) {
                //     this.moveNum = 0
                //     bagUl.style.transition = 'none'
                //     bagUl.style.transform = "translate(" + this.moveNum + "px,0)"
                //     this.clsNum = 2
                //     console.log(bagUl.style.transform);
                // }
                this.leftS()
                let list = document.querySelectorAll('.third-navigation-images li')
                for (let i = 0; i < list.length; i++) {
                    list[i].className = '';
                }
                list[clsNum].className = 'bor';
                console.log(clsNum);
                this.rightchange(clsNum);
            }
        },
        leftS() {
            let bagUl = document.querySelector('.third-navigation-images ul')
            let leftMove = -290
            bagUl.style.transform = "translate(" + (this.moveNum + leftMove) + "px,0)"
            this.moveNum = this.moveNum + leftMove
            bagUl.style.transition = 1 + 's'
        },
        rightS() {
            let bagUl = document.querySelector('.third-navigation-images ul')
            let rightMove = +290;
            bagUl.style.transform = "translate(" + (this.moveNum + rightMove) + "px,0)"
            this.moveNum = this.moveNum + rightMove
        },


        left() {
            // this.leftchange();
            let clsNum = --this.numC;
            this.rightS()
            let list = document.querySelectorAll('.third-navigation-images li')
            for (var i = 0; i < list.length; i++) {
                list[i].className = ''
            }
            list[clsNum].className = 'bor';
            
        },
        right() {
            let clsNum = ++this.numC
            // let bagUl = document.querySelector('.third-navigation-images ul')
            this.leftS()
            let list = document.querySelectorAll('.third-navigation-images li')
            for (var i = 0; i < list.length; i++) {
                list[i].className = ''
            }
            list[clsNum].className = 'bor'
            console.log(clsNum);
            this.rightchange(clsNum);
        },

        leftchange(){
            // const imgs=this.images_third;
            // let len=imgs.length;
            // console.log("@@@@@@前",this.images_third);

            // this.images_third.pop(); 
            // imgs.unshift(this.images_third[this.images_third.length-1]);
            // this.images_third=imgs;
            // this.images_third.unshift(this.images_third[this.images_third.length-1]);

            // console.log("SSSSSSSSS后",imgs);
            
        },
        rightchange(clsNum){
            if(clsNum>2){
                this.images_third.push(this.images_third[clsNum-2]);
            }
            // this.images_third.push(imgs[0]);

            // console.log("SSSSSSSSS后",clsNum);
        },

    },


}


</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



.third-All {
    margin: 0px 0%;

    .third-navigation {
            margin: 0px 6%;
            padding: 0 10px 0 0;
        .third-log {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px 0 0;

            .third-p {
                color: rgb(255, 255, 255);

                // h2 {
                //     // margin: 10px 0px 0px 100px;
                // }
            }

            .third-buttons {
                .third-button {
                    width: 40px;
                    background-color: red;
                }
            }
        }
    }
}

.third-navigation-images {
    width: 86.3%;
    transform: translate(7%, 0);
    height: 230px;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    // border: 1px solid rgb(243, 243, 243);
    position: relative;
    overflow: hidden;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        transition: opacity 5s;
        transition: 1s;

        /* Opera */
        li {

            transition: all 1s;
            width: 280px;
            height: 170px;
            list-style: none;
            flex-shrink: 0;
            border-radius: 10px;
            margin-left: 10px;
            overflow: hidden;

            img {
                cursor:pointer;
                width: 100%;
                height: 100%;
            }
        }

    }

}



.bor {
    border: 5px solid red;
}
</style>