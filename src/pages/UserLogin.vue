<template>
    <div class="page-title-box">
        <DetailTop>
            <h1>{{ state }}</h1>
        </DetailTop>
        <t-row justify="center">
            <t-col :xs="10" :sm="10" :md="3" :lg="3" :xl="3">
                <div class="page-login">
                    <h1>{{ state }}<span>账号</span></h1>
                    <div  class="login">
                        <form action="#">
                            <div class="form-group">
                                <p>邮箱</p>
                                <input v-model="email" type="email" class="form-control" placeholder="请输入邮箱"
                                    autocomplete="off" required="">
                                <p>密码</p>
                                <input v-model="password" type="password" class="form-control" placeholder="请输入密码"
                                    autocomplete="off" required="">
                                <p v-show="!isLogin">确认密码</p>
                                <input v-show="!isLogin" v-model="password2" type="password" class="form-control"
                                    placeholder="请输入密码" autocomplete="off" required="">
                            </div>
                        </form>
                            <div class="item">
                                <t-button block
                                    style="font-size: 1.2rem; font-weight: 400; letter-spacing: 10px; background:#e50914;border: none;height: 40px;border-radius: 50px;"
                                    shape="round" variant="base" @click.prevent="submit">{{ state }}</t-button>
                                <p>{{ changeTitle[0] }}<t-button @click="change" variant="text" theme="danger">
                                        {{ changeTitle[1] }}</t-button>
                                </p>
                            </div>
                            <!-- <button type="submit" class="btn btn-hover btn-block"></button> -->
                    </div>
                </div>
            </t-col>
        </t-row>

    </div>

</template>

<script>
import DetailTop from '@/components/DetailTop.vue'
import { mapState } from 'vuex'
export default {
    name: 'UserLogin',
    components: { DetailTop },
    data() {
        return {
            isLogin: true,
            state: '登录',
            changeTitle: ['还没有注册？', '立即注册', '返回登录', '已完成注册！'],
            email: '',
            password: '',
            password2: ''
        }
    },
    methods: {
        //切换登录注册
        change() {
            this.isLogin ? this.isLogin = false : this.isLogin = true;
            if (this.isLogin) {
                this.state = '登录';
                this.changeTitle.reverse();
            } else {
                this.state = '注册';
                this.changeTitle.reverse();
            }
        },
        //用户注册
        async userRegister() {
            if(!this.email || !this.password || !this.password2)  return this.$message('error', '邮箱&密码 不能为空');
            try {
                //若为空 则不提交
                const { email, password, password2 } = this;
                (email && password == password2) && (await this.$store.dispatch('userRegister', { email, password }));
                this.$message('error', '邮箱有误或两次密码不一致...');
                this.change();
            } catch (error) {
                this.$message('error', '暂时无法注册...')
                this.change();
                console.log(error)
            }

        },
        //用户登录
        async userLogin() {
            if(!this.email || !this.password)  return this.$message('error', '邮箱&密码 不能为空');
            try {
                const { email, password } = this;
                const phone = this.email;
                (email && password) && (await this.$store.dispatch('userLogin', { phone, password }));
                this.$message('success', {content:'登录成功！',duration:1500});
                this.$router.push('/HomePage');
            } catch (error) {
                this.$message('error', '登录失败...');
                console.log(error);
            }
        },
        //提交登录/注册
        submit() {
            this.isLogin ? this.userLogin() : this.userRegister();
        }
    },
    computed: {
        ...mapState(['searchFilm'])
    }
}
</script>

<style lang="less" scoped>
.page-title-box {
    color: white;
    text-align: left;

    h1 {
        margin: 10px 7%;
        font-size: 3rem;
    }

    .page-title {
        padding: 100px 0px 60px 0px;
        background: url(../assets/title.jpg);
        position: relative;
        z-index: 2;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            z-index: -1;
        }
    }

    .page-login {
        padding: 20px 8%;
        position: relative;
        background: #0B1A2A;
        backdrop-filter: blur(10px);
        padding: 25px;
        box-shadow: 0px 0 20px 0 rgb(0 0 0 / 50%);
        display: block;
        margin: 5vh auto;
        border-radius: 10px;
        color: white;

        p {
            margin: 10px 0px;
            font-size: 1rem;
        }

        h1 {
            letter-spacing: 6px;
            padding: 5px 3%;
            font-size: 2rem;
            text-align: right;

            span {
                margin-left: 3px;
                font-size: 1rem;
                color: #dfdfdf;
            }
        }

        h2 {
            text-align: center;
            letter-spacing: 15px;
            margin-bottom: 6%;
        }

        .login {
            border-radius: 50px;

            .item {
                text-align: center;
                width: 90%;
                margin: 12% auto;

                p {
                    margin-top: 14px;
                }
            }

            .form-control {
                box-sizing: border-box;
                width: 100%;
                height: 45px;
                line-height: 45px;
                background: transparent;
                border: 1px solid #D1D0CF;
                font-size: 14px;
                color: #c6ced5;
                border-radius: 50px;
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }
}
</style>