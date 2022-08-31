<template>
    <div class="third-All">
        <div class="third-navigation">
            <div class="third-log">
                <div class="third-p">
                    <h2>即将上映</h2>
                </div>
                <div class="third-buttons">
                    <t-button  @click="left" class="third-button" :disabled="submissionFlag" v-preventReClick>&lt;</t-button>
                    &nbsp;
                    <t-button  @click="right" class="third-button" v-preventReClick>&gt;</t-button>
                </div> 
            </div>
        </div>

        <div @click="uLClick($event)" class="third-navigation-images" v-throttle="1000">
            <ul>
                <li v-for="(item,index) in images_third" :key="id"><img :src="item.img" alt="vmovie"></li>
            </ul>


        </div>
    </div>
</template> 
<script>
import cloneDeep from 'lodash/cloneDeep';
var _ = require('lodash');


export default {


    name: 'ThirdSwiperFirst',
    props: ["img_third", "msg"],
    data() {
        return {
            currentIndex: 0,
            theDirection: this.direction,
            moveNum: 0,
            numC: 2,
            images_third:[],
            AddNumber:0,
            submissionFlag:false, //   flase可点击  true禁止点击
        }
    },

    created(){
        console.log("111111",this.img_third);
    },

    mounted() {
        this.images_third=this.img_third;
        console.log("儿子1");
        // let list = document.querySelectorAll('.third-navigation-images li')
        // list[2].className = 'bor';
        // console.log(document.querySelectorAll('.third-navigation-images ul'));
        // console.log("父亲的",this.images_third);
    },
    updated(){
        let list = document.querySelectorAll('.third-navigation-images li')
        list[this.numC].className = 'bor';
    },



    methods: {

        // ul 父盒子
        uLClick(item) {
            console.log();
            if (item.clientX < 650) {  //左
                if(this.submissionFlag==false){   //  this.submissionFlag=true时，图片不可点击   this.submissionFlag=flase时,图片可以点击
                    this.left();
                }


                // let clsNum = --this.numC
                // this.rightS()
                // let list = document.querySelectorAll('.third-navigation-images li')
                // for (var i = 0; i < list.length; i++) {
                //     list[i].className = ''
                // }
                // list[clsNum].className = 'bor'
                // console.log(clsNum);
            }
            else if (item.clientX > 950) {  //右

                this.right();
                // let clsNum = ++this.numC
                // let bagUl = document.querySelector('.third-navigation-images ul')
                // // if (this.moveNum == -2320) {
                // //     this.moveNum = 0
                // //     bagUl.style.transition = 'none'
                // //     bagUl.style.transform = "translate(" + this.moveNum + "px,0)"
                // //     this.clsNum = 2
                // //     console.log(bagUl.style.transform);
                // // }
                // this.leftS()
                // let list = document.querySelectorAll('.third-navigation-images li')
                // for (var i = 0; i < list.length; i++) {
                //     list[i].className = ''
                // }
                // list[clsNum].className = 'bor'
                // console.log(clsNum);
            }
        },
        leftS() {
            let bagUl = document.querySelector('.third-navigation-images ul')
            let leftMove = -290;
            // let leftMove = -580;
            bagUl.style.transform = "translate(" + (this.moveNum + leftMove) + "px,0)"
            this.moveNum = this.moveNum + leftMove
            bagUl.style.transition = 1 + 's'
        },
        rightS() {
            let bagUl = document.querySelector('.third-navigation-images ul')
            let rightMove = +290;
            // let rightMove = -290;
            bagUl.style.transform = "translate(" + (this.moveNum + rightMove) + "px,0)"
            this.moveNum = this.moveNum + rightMove
            // console.log("SSSSSSSSSSSSSSS",this.moveNum);
        },

        


        left() {
            let clsNum = --this.numC;

            console.log(clsNum);
            this.rightS()
                let list = document.querySelectorAll('.third-navigation-images li')
                for (var i = 0; i < list.length; i++) {
                    list[i].className = ''
                }
                list[clsNum].className = 'bor';

            if(clsNum==0){  //到最左边的图片时
                this.submissionFlag=true;   //无法继续向左边点击
                let but=document.querySelectorAll('.third-button');
                console.log(but[0]);   
                but[0].style.background='rgb(165, 163, 163)';
                    
            }


            //调用兄弟的方法
            this.saveleft();

            //防抖函数


        },
        right() {

            let clsNum = ++this.numC;
            // console.log(this.numC);
            // this.numC=this.numC+2
            // let clsNum = this.numC;
            let bagUl = document.querySelector('.third-navigation-images ul')
            this.leftS()
            let list = document.querySelectorAll('.third-navigation-images li')
            for (var i = 0; i < list.length; i++) {
                list[i].className = ''
            }
            list[clsNum].className = 'bor';
            // console.log(clsNum);
            this.rightchange();

            

            if(clsNum!=0){
                console.log(document.querySelectorAll('.third-button')[0]);   
                this.submissionFlag=false;
                document.querySelectorAll('.third-button')[0].style.background='red'; //将按钮1 背景颜色设置为可使用
            }

            //调用ThirdSwiperSecond组件的方法
            this.saveright()


        },

        // leftchange(clsNum){

        // },
        rightchange(){
            //添加图片
                this.images_third.push(this.images_third[this.AddNumber]);
                this.AddNumber+=1;  //下次添加图片要是下一张，要不然会一直重复添加一张图片。
        },

        //延迟函数

        //兄弟组件的方法
        saveright(){
            this.$emit("saveright");
        },
        saveleft(){
            this.$emit("saveleft");
        }


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

                h2 {
                    // margin: 10px 0px 0px 100px;
                }
            }

            .third-buttons {
                .third-button {
                    width: 40px;
                    background-color: red;
                    border: none;
                    // background-color: rgb(165, 163, 163);
                }
                .third-button-disable{
                    width: 40px;
                    border: none;
                    background-color: rgb(165, 163, 163);
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
                height: auto;
            }
        }

    }

}



.bor {
    border: 5px solid red;
}
</style>