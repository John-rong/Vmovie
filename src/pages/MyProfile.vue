<template>
    <div class="MyProfile">
        <DetailTop>
            <h1>个人资料</h1>
        </DetailTop>
        <t-row justify="center" align="top" class="MyProfile-all">
            <t-col class="MyProfile-left" :sm="10" :md="10" :lg="3" :xl="3">
                <div class="sign-user">
                    <img :src="profileInfo.headImg" alt="user">
                    <h4>大漂亮</h4>
                    <p>这个人很神秘，什么都没有写...这个人很神秘，什么都没有写...这个人很神秘，什么都没有写...</p>
                    <a href="#"><i class='bx bxs-edit-alt'></i>编辑</a>
                </div>
            </t-col>
            <t-col class="MyProfile-right" :sm="10" :md="10" :lg="4" :xl="4">
                <div class="sign-user">
                    <h5>个人资料</h5>
                    <hr />
                    <div class="sign-content">
                        <span>邮箱</span>
                        <p>{{ profileInfo.loginName }}</p>
                        <span>账号</span>
                        <p>{{ profileInfo.name }}</p>
                        <span>用户名</span>
                        <p>大漂亮</p>
                        <span>性别</span>
                        <p>女</p>
                        <span>出生日期</span>
                        <p>2002.10.10</p>
                        <span>注册时间</span>
                        <p>2022-08-04</p>
                    </div>
                    <h5>设置</h5>
                    <hr />
                    <div class="sign-content">
                        <a href="#"><i class='bx bxs-edit-alt'></i>编辑</a>
                        <a href="#" @click="outLogin"><i class='bx bx-log-out-circle'></i>退出登录</a>
                    </div>
                </div>
            </t-col>
        </t-row>
    </div>
</template>

<script>
import DetailTop from '@/components/DetailTop.vue';
import { mapState } from 'vuex'
export default {
    name: 'MyProfile',
    components: { DetailTop },
    data() {
        return {
            profileInfo: {}
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    mounted() {
        this.getProfileInfo();
    },
    methods: {
        //获取用户信息
        getProfileInfo() {
            this.profileInfo = this.userInfo
        },
        //退出登录
        async outLogin() {
            const msg = this.$message.info('退出中');
            try {
                //退出成功
                await this.$store.dispatch('userLogout');
                //回到首页
                this.$router.push('/HomePage')
                const timer = setTimeout(() => {
                    this.$message.close(msg);
                    this.$message.success('已退出登录！');
                    this.visible = false;
                    clearTimeout(timer);
                }, 500);
            } catch (error) {
                console.log(error)
                this.$message.error('退出登录失败...');
            }
        }
    }
}
</script>

<style lang="less" scoped>
.MyProfile-all {
    margin: 50px 6%;
    color: white;

    a {
        color: #e50914;
        text-decoration: none;
        display: block;
    }

    h4 {
        font-size: 1.3rem;
    }

    h5 {
        font-size: 1.2rem;
        margin: 30px 0px 10px 0px;
        padding: 0px;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
        color: #bebebe;
    }

    hr {
        border: 1px dashed #233A50;
    }

    .MyProfile-left {
        margin: 1vw;

        img {
            width: 50%;
            border-radius: 50%;
        }
    }

    .MyProfile-right {
        margin: 1vw;
        text-align: left;
    }

    .sign-user {
        position: relative;
        background: #0B1A2A;
        backdrop-filter: blur(10px);
        padding: 25px;
        box-shadow: 0px 0 20px 0 rgb(0 0 0 / 50%);
        display: block;
        margin: 0 auto;
        border-radius: 10px;
    }

    .sign-content {
        padding: 0px 20px;
        margin-bottom: 40px;
    }
}
</style>