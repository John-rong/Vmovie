<template>
    <div class="move">
        <div class="all">
            <h2 @click="reserve">重置</h2>
            <span style="text-align: right;">请将红<span style="color:red">方块</span>拖拽到
                        <span >【此处】</span>
            </span>
            <div class="item" @mousedown.stop="move($event)" :style="{ left: sonLeft + 'px', top: sonTop + 'px' }"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sonLeft: 10,
            sonTop: 300,
        };
    },
    methods: {
        // 元素拖动事件
        move(e) {
            let element = e.currentTarget;

            //算出鼠标相对元素的位置
            let disX = e.clientX - element.offsetLeft;
            let disY = e.clientY - element.offsetTop;

            document.onmousemove = e => {
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;

                if( left>=800 && left<=900  && top<=100 ){
                    left+=Math.floor(Math.random()*100+50);
                    top+=50;
                }

                //移动当前元素
                this.sonLeft = left;
                this.sonTop = top;


            };
            document.onmouseup = () => {
                //鼠标弹起来的时候不再移动
                document.onmousemove = null;
                //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
                document.onmouseup = null;
            };
        },
        reserve(){
                this.sonLeft = 10;
                this.sonTop = 300;
        }
    },
};
</script>

<style lang="less" scoped>

.all {
    position: relative;
    width: 100%;
    height: 700px;
    background-color: white;
}

.item {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 60px;
    height: 60px;
    background-color: rgb(255, 77, 0);
}
h2{
    color: rgb(0, 131, 87);
}
</style>
