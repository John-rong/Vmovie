<template>
<div class="third-All">
    <div class="third-navigation">
        <div class="third-log">
            <div class="third-p"><h2>高分电影</h2></div>
                <div class="third-buttons">
                    <t-button theme="danger" @click="left" class="third-button">&lt;</t-button>
                    &nbsp;
                    <t-button theme="danger" @click="right" class="third-button">&gt;</t-button>
            </div>
        </div>
    </div>

    <div class="third-navigation-images">
        <div class="third-images">
                    <div class="third-img"><span ><img src="../assets/film2.jpg"></span></div>
                    <div class="third-img"><span ><img src="../assets/film2.jpg"></span></div>
                    <div class="third-img"><span ><img src="../assets/film2.jpg"></span><i class='bx bxs-down-arrow bx-lg' style="color:red;"></i></div>
                    <div class="third-img"><span ><img src="../assets/film2.jpg"></span></div>
                    <div class="third-img"><span ><img src="../assets/film2.jpg"></span></div>
                </div>

    </div>
</div>
</template>

<script>
export default {
    name:'ThirdSwiperFirst',
    props:["img_third","msg"],
    data() {
    return {
      currentIndex: 0,
    }
  },

    methods:{
            left(){
                console.log("msg");
            },
            right(){
                console.log("right");
            }
    },


}


</script>

<style lang="less" scoped>

*{
    box-sizing:border-box;
}

                   

.third-All{
            margin: 0px 6%;

        .third-navigation{
            .third-log{
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px 0 0;
                .third-p{
                    color:rgb(255, 255, 255);
                    h2{
                        // margin: 10px 0px 0px 100px;
                    }
                }
                    .third-buttons{
                        .third-button{
                            background-color: red;
                        }
                    }
            }
        }


        .third-navigation-images{
            width: 86vw;
            height: 260px;
            // background-color: aqua;
            // overflow: hidden;

            .third-images{
                width:100%;
                height: 100%;
                display: flex;
                
                // background-color: green;
                gap:10px;
                .third-img{
                        cursor:pointer;
                        width:300px;
                        height:200px;
                        border:5px solid rgb(255, 255, 255);       
                        border-radius:12px;   
                        // overflow: hidden;

                    &:hover{
                        border:5px solid red;  
                    

                    }


                    img{
                        width:100%;
                        height:100%;
                            i{
                               background-color: red;
                            }
                    }
                }
            }
        }

}
</style>