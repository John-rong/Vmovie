<template>
    <div class="footer">
        <div class="tdesign-demo-block-column">
            <t-row align="top" :gutter="{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }">
                <t-col :sm="10" :md="10" :lg="3" :xl="3">
                    <div>
                        <img class="img" src="../assets/vlogo.png" title="一部好的电影，是生命在银幕上流淌" alt="vmovie">
                        <p class="mt-4">
                            And that's to never let anything stop you from chasing your dream from working or playing or
                            falling in love.
                        </p>
                        <div class="d-flex my-4">
                            <a href="#" class="s-icon">
                                <i class='bx bxl-facebook bx-md'></i>
                            </a>
                            <!-- <a href="#" class="s-icon">
                        <i class='bx bxl-linkedin bx-md'></i>
                    </a> -->
                            <a href="https://github.com/John-rong/Vmovie" target="_block" class="s-icon">
                                <i class='bx bxl-github bx-md'></i>
                            </a>
                            <a href="#" class="s-icon">
                                <i class='bx bxl-telegram bx-md'></i>
                            </a>
                        </div>
                    </div>
                </t-col>
                <t-col :sm="10" :md="10" :lg="3" :xl="3">
                    <div>
                        <h4 class="footer-title">快速连接</h4>
                        <ul class="f-link list-unstyled">
                            <li><a href="#">关于我们</a></li>
                            <li><a href="#">电影</a></li>
                            <li><a href="#">电影评价</a></li>
                            <li><a href="#">隐私策略</a></li>
                            <li><a href="#">条款&细则</a></li>
                            <li><a href="#">帮助</a></li>
                        </ul>
                    </div>
                </t-col>
                <t-col :sm="10" :md="10" :lg="3" :xl="3">
                    <div>
                        <h4 class="footer-title">重要链接</h4>
                        <ul class="f-link list-unstyled">
                            <li><a href="#">支持</a></li>
                            <li><a href="#">常见问题</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">最新消息</a></li>
                            <li><a href="#">计划</a></li>
                        </ul>
                    </div>
                </t-col>
                <t-col :sm="10" :md="10" :lg="3" :xl="3">
                    <div>
                        <h4 class="footer-title">订阅</h4>
                        <p>订阅我们的以获取最新的信息</p>
                        <div class="subscribe">
                            <form class="mt-4" action="#">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="请输入邮箱" autocomplete="off"
                                        required="">
                                </div>
                                <div class="item">
                                    <t-button block
                                        style="background:#e50914;border: none;height: 40px;border-radius: 50px;"
                                        shape="round" variant="base">无法订阅
                                    </t-button>
                                </div>
                                <!-- <button type="submit" class="btn btn-hover btn-block"></button> -->
                            </form>
                        </div>
                    </div>
                </t-col>
            </t-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterView"
}
</script>

<style lang="less" scoped>
.footer {
    box-sizing: border-box;
    text-align: left;

    h4 {
        margin: 10px 0px;
        font-size: 1.6em
    }

    p {
        color: #D1D0CF;
    }

    img {
        width: 75%;
    }

    ul {
        padding: 0px;

        &.f-link {
            li {
                list-style-type: none;
                margin-bottom: 4px;

                a {
                    margin-bottom: 4px;
                    color: #D1D0CF;
                    text-decoration: none;

                    &:hover {
                        color: #e50914;
                    }
                }
            }
        }
    }
}

.s-icon {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    margin-right: 12px;
    color: #ffffff;
    font-size: 20px;
    background: #233a50;
    transition: all 0.4s ease;
    margin-right: 1.2rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #e50914;
        transition: all 0.4s ease;
        transform: scale(.9);
        z-index: -1;
    }

    &:hover {
        box-shadow: 0 0 10px #e50914;
        text-shadow: 0 0 2px #e50914;
        color: #e50914;
        transition: all 0.4s ease;

        &:before {
            transform: scale(1.1);
            box-shadow: 0 0 15px #e50914;
        }
    }
}

.footer-title {
    color: #fa183d;
    margin-bottom: 16px;
}

.subscribe {
    input {
        border-radius: 50px;

        .item {
            margin-top: 10px;
            width: 100%;
        }
    }

    .form-control {
        box-sizing: border-box;
        margin: 10px 0px;
        width: 100%;
        height: 40px;
        line-height: 45px;
        background: transparent;
        border: 1px solid #D1D0CF;
        font-size: 14px;
        color: #6c757d;
        border-radius: 50px;
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>