<template>
    <div class="MyProfile">
        <DetailTop>
            <h1>个人资料</h1>
        </DetailTop>
        <t-row justify="center" align="top" class="MyProfile-all">
            <t-col class="MyProfile-left" :sm="10" :md="10" :lg="3" :xl="3">
                <div class="sign-user">
                    <img :src="profileInfo.headImg" alt="user">
                    <t-upload v-show="isupData" action="http://nfq2hztm.hk2.wknwct.top/api/uploder" :headers={token}
                        v-model="imgfile" @fail="handleFail" theme="image" tips="请选择单张图片文件上传" accept="image/*"
                        draggable>
                    </t-upload>
                    <h4>{{ profileInfo.nickname }}</h4>
                    <p>{{ profileInfo.introduction }}</p>
                    <t-input v-show="isupData" clearable v-model="formData.introduction" :maxlength="80"
                        :suffix="suffix" />
                    <a href="#"><i class='bx bx-calendar-check'></i>签到</a>
                </div>
            </t-col>
            <t-col class="MyProfile-right" :sm="10" :md="10" :lg="4" :xl="4">
                <div class="sign-user">
                    <h5>个人资料</h5>
                    <hr />
                    <div class="sign-content">
                        <span>邮箱</span>
                        <p>{{ profileInfo.username }}</p>
                        <span>账号</span>
                        <p>{{ profileInfo.username }}</p>
                        <span>昵称</span>
                        <p v-show="!isupData">{{ profileInfo.nickname }}</p>
                        <t-input v-show="isupData" v-model="formData.nickname"></t-input>
                        <span>性别</span>
                        <p v-show="!isupData">{{ profileInfo.sex }}</p>
                        <t-radio-group v-show="isupData" v-model="formData.sex">
                            <t-radio value="男"><span class="sign-content-sex">男</span></t-radio>
                            <t-radio value="女"><span class="sign-content-sex">女</span></t-radio>
                        </t-radio-group>
                        <span>出生日期</span>
                        <p v-show="!isupData">{{ profileInfo.birthday }}</p>
                        <t-date-picker v-show="isupData" clearable v-model="formData.birthday" />
                        <span>注册时间</span>
                        <p>{{ profileInfo.createdAt }}</p>
                    </div>
                    <h5>设置</h5>
                    <hr />
                    <div class="sign-content">
                        <a href="javascript:void(0);" v-show="!isupData" @click="upData"><i
                                class='bx bxs-edit-alt'></i>编辑</a>
                        <t-button v-show="isupData" theme="primary" @click="toupData">提交</t-button>
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
import { reqUpUserInfo } from '@/api';
import store from '@/store';
export default {
    name: 'MyProfile',
    components: { DetailTop },
    data() {
        return {
            profileInfo: {},
            isupData: false,
            imgfile: [],
            token:'',
            formData: {
                nickname: '',
                sex: '',
                birthday: '',
                introduction: '',
                headImg: ''
            }
        }
    },
    computed: {
        ...mapState(['userInfo']),
        suffix() {
            return `${this.formData.introduction.length}/80`;
        }
    },
    mounted() {
        this.getProfileInfo();
        this.token = store.state.token;
    },
    methods: {
        //获取用户信息
        getProfileInfo() {
            this.profileInfo = this.userInfo
        },
        //重新获取用户信息
        async getupData() {
            try {
                //获取用户信息成功
                await store.dispatch('userInfo');
            } catch (error) {
                //token失效了 清除token 重新登陆
                this.$message.warning('登录失效，请重新登录...');
                console.log(error)
            }
        },
        //切换编辑状态
        upData() {
            this.isupData = true;
        },
        //更新信息
        async toupData() {
            const msg = this.$message('loading', '更新中');
            let data = {};
            if (this.imgfile[0]) this.formData.headImg = this.imgfile[0].response.url;
            for (const key in this.formData) {
                //判断不 为空和全为空格
                if (this.formData[key] && !this.formData[key].match(/^[ ]*$/)) {
                    data[key] = this.formData[key];
                }
            }
            if (Object.keys(data).length === 0) {
                this.isupData = false;
                const timer = setTimeout(() => {
                    this.$message.close(msg);
                    this.$message('warning', '无更新');
                    clearTimeout(timer);
                }, 500);
                return;
            }

            let arr = [];
            let fromData = '';
            for (const key in data) {
                arr.push(`${key}=${data[key]}`);
            }
            fromData += arr.join('&');

            let result = await reqUpUserInfo(fromData);
            if (result.code == 200) {
                const timer = setTimeout(() => {
                    this.$message.close(msg);
                    this.$message('success', '已更新');
                    clearTimeout(timer);
                }, 500);
            } else {
                const timer = setTimeout(() => {
                    this.$message.close(msg);
                    this.$message('error', result.msg.toString())
                    clearTimeout(timer);
                }, 500);
            }
            await this.getupData();
            this.getProfileInfo();
            this.isupData = false;
        },
        //退出登录
        async outLogin() {
            const msg = this.$message.loading('退出中');
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
        },
        handleFail({ file }) {
            this.$message.error(`文件 ${file.name} 上传失败`);
        },
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

        .sign-content-sex {
            color: white;
        }

        span {
            display: block;
        }
    }
}
</style>