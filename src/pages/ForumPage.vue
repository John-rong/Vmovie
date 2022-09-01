<template>
    <div class="forum-all">
        <detail-top>
            <h1>随便唠唠</h1>
        </detail-top>
        <t-row justify="center" align="top">

            <t-col :sm="10" :md="10" :lg="2" :xl="2" class="forum-left">
                <t-affix :offset-top="68" :offset-bottom="40" ref="affix">
                    <h3>发布 <i class='bx bx-up-arrow-alt'></i></h3>
                    <t-button block style="background:#a8070f;border: none;height: 40px;border-radius: 50px;"
                        shape="round" variant="base" @click="addForum">{{ nowstatus[0] }}
                    </t-button>

                    <div v-show="!isadd && !isdetail">
                        <h3>搜索 <i class='bx bx-search-alt'></i></h3>
                        <input v-model="searchName" @dblclick="toSearchlist" @keyup.enter="toSearchlist" type="text"
                            class="form-control" placeholder="搜索" autocomplete="off">
                        <h3>标签 <i class='bx bxs-bookmark-star'></i></h3>
                        <ul>
                            <li><a href="javascript:void(0)" @click="getForumfirst"> 全部 </a></li>
                            <li><a href="javascript:void(0)" @click="getForumfirst"> 刷新 </a></li>
                            <li><a href="javascript:void(0)" @click="getForumfirst"> 科幻 </a></li>
                        </ul>
                    </div>
                </t-affix>
            </t-col>

            <t-col :sm="10" :md="10" class="phone-forum-left">
                <h3>发布 <i class='bx bx-up-arrow-alt'></i></h3>
                <t-button block style="background:#a8070f;border: none;height: 40px;border-radius: 50px;" shape="round"
                    variant="base" @click="addForum">{{ nowstatus[0] }}
                </t-button>

                <div v-show="!isadd && !isdetail">
                    <h3>搜索 <i class='bx bx-search-alt'></i></h3>
                    <input v-model="searchName" @dblclick="toSearchlist" @keyup.enter="toSearchlist" type="text"
                        class="form-control" placeholder="搜索" autocomplete="off">
                    <h3>标签 <i class='bx bxs-bookmark-star'></i></h3>
                    <ul>
                        <li><a href="javascript:void(0)" @click="getForumfirst"> 全部 </a></li>
                        <li><a href="javascript:void(0)" @click="getForumfirst"> 刷新 </a></li>
                        <li><a href="javascript:void(0)" @click="getForumfirst"> 科幻 </a></li>
                    </ul>
                </div>
            </t-col>

            <t-col :sm="10" :md="10" :lg="7" :xl="7" class="forum-right">
                <div v-if="!isdetail">
                    <div class="forum-single" v-show="!isadd" v-for="(item, index) in forumList" :key="index">
                        <a href="" class="forum-single-img"><img :src="item.leftimg" alt="vmovie"></a>
                        <div class="forum-content">
                            <a href="">
                                <h4>{{ item.title }}</h4>
                            </a>
                            <p class="mt-2">{{ item.createdAt }}</p>
                            <div class="forum-main">
                                <p>{{ item.markdown }}</p>
                            </div>
                        </div>
                        <div>
                            <t-button block @click="todetail(item)"
                                style="background:#e50914;border: none;height:40px;border-radius: 50px;margin:32% 0px 110%;"
                                shape="round" variant="base">加入唠唠
                            </t-button>
                            <ul v-if="!islike" class="like-icon">
                                <li @click="islike = true; $message.success('吼吼，你的赞被偷走喽！')"><span><i
                                            class='bx bxs-like bx-xs'></i></span></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <t-button v-if="!isdetail" v-show="!isadd" @click="morelist" variant="text" theme="primary"
                    size="large">加载更多</t-button>
                <ForumDetail v-if="isdetail" :forumInfo="forumInfo"></ForumDetail>
                <ForumAdd v-show="isadd"></ForumAdd>
            </t-col>
        </t-row>

        <i class='bx bxs-to-top bx-md totop animate__animated animate__fadeInUp' v-if="istop" @click="totop"></i>
    </div>
</template>

<script>
import DetailTop from '@/components/DetailTop.vue'
import ForumAdd from '@/components/ForumAdd.vue';
import { reqForumlist, reqSearchForum } from '@/api';
import ForumDetail from '@/components/ForumDetail.vue';
export default {
    name: 'ForumPage',
    components: { DetailTop, ForumAdd, ForumDetail },
    data() {
        return {
            forumList: [],
            currentPage: 1,
            forumInfo: {},
            isadd: false,
            nowstatus: ['新建', '返回'],
            islike: false,
            isdetail: false,
            istop: false,
            searchName: ''
        }
    },
    mounted() {
        this.getForumlist();
        window.addEventListener('scroll', this.scrollY)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollY)
    },
    methods: {
        addForum() {
            this.nowstatus.reverse();
            if (!this.isdetail) this.isadd = !this.isadd;
            this.isdetail ? this.isdetail = false : this.isdetail = false;
        },
        async getForumlist() {
            try {
                const pageSize = 10;
                let currentPage = this.currentPage;
                let data = { currentPage, pageSize }

                const result = await reqForumlist(data);
                result.code == 200 ? this.forumList = result.data.rows : this.$message.warning('获取错误...');
            } catch (error) {
                this.$message.warning(error);
            }
        },
        async toSearchlist() {
            if (this.searchName.length == 0 || this.searchName.match(/^[ ]*$/)) {
                return this.$message.warning('搜索不能为空...');
            }

            try {
                const msg = this.$message.loading('正在搜索...');
                const pageSize = 20;
                let title = this.searchName;
                let currentPage = 1;
                let data = { currentPage, pageSize, title }

                const result = await reqSearchForum(data);
                this.$message.close(msg);
                if (result.code == 200) {
                    if (result.data.rows.length == 0) return this.$message.warning('没有找到噢，换一个试试吧...');
                    this.forumList = [];
                    result.data.rows.map((item) => {
                        this.forumList.push(item)
                    })
                } else {
                    this.$message.warning('获取错误...');
                }
            } catch (error) {
                this.$message.warning(error);
            }
        },
        async morelist() {
            const msg = this.$message('loading', '加载中');
            try {
                const pageSize = 10;
                let currentPage = ++this.currentPage;
                let data = { currentPage, pageSize }

                const result = await reqForumlist(data);
                this.$message.close(msg);
                if (result.code == 200) {
                    if (result.data.rows.length == 0) {
                        this.currentPage--;
                        return this.$message.warning('无更多数据...');
                    }
                    result.data.rows.map((item) => {
                        this.forumList.push(item)
                    })
                } else {
                    this.$message.warning('获取错误...');
                }
            } catch (error) {
                this.$message.warning(error);
            }
        },
        todetail(item) {
            this.nowstatus.reverse();
            this.forumInfo = item;
            this.isdetail = true;
        },
        getForumfirst() {
            this.currentPage = 1;
            this.getForumlist();
        },
        scrollY() {
            // let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let scrollTop = window.pageYOffset;
            if (scrollTop > 200) {
                this.istop = true;
            } else {
                this.istop = false;
            }
        },
        totop(){
            window.scrollTo(0,0)
        }

    }
}
</script>

<style lang="less" scoped>
.forum-all {
    color: white;
    text-align: left;

    h3 {
        color: white;
        font-size: 1.5rem;
        font-weight: normal;
        margin-left: 20px;
    }

    h4 {
        color: #fa183d;
        font-size: 2rem;
        line-height: 110%;
        line-break: anywhere;
    }

    a {
        color: rgb(193, 193, 193);
        text-decoration: none;
    }

    .forum-left {

        @media screen and (max-width : 992px) {
            display: none;
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

    .phone-forum-left {
        display: none;

        @media screen and (max-width : 992px) {
            display: block;
        }
    }

    .forum-right {
        margin: 30px;

        .forum-single {
            display: flex;
            color: white;
            background: #0B1A2A;
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 20px;

            .forum-single-img {
                width: 30%;
                height: 30%;
            }

            img {
                border-radius: 20px;
                width: 100%;
                height: 100%;
            }

            .forum-content {
                margin-left: 20px;
                width: 70%;

                .forum-main {
                    overflow: hidden;
                    height: 125px;
                }
            }

            .like-icon {
                padding: 0px;

                li {

                    width: 30px;
                    margin: 0px auto;
                    padding: 4px;
                    margin-bottom: 7px;
                    text-align: center;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.30);
                    display: flex;
                    align-items: center;
                }

                span {
                    position: relative;
                    display: block;
                    height: 30px;
                    width: 30px;
                    line-height: 26px;
                    font-size: 12px;
                    text-align: center;
                    background: white;
                    color: #e50914;
                    border-radius: 50%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.45s ease 0s;
                    cursor: pointer;
                }
            }

            .like-icon li:hover span {
                background: #e50914;
                color: white;
                transition: all 0.45s ease 0s;
                -webkit-transition: all 0.45s ease 0s;
                -moz-transition: all 0.45s ease 0s;
                -o-transition: all 0.45s ease 0s;
            }
        }
    }

    .totop {
        position: fixed;
        right: 2%;
        bottom: 4%;

        &:hover {
            color: #e50914;
        }
    }
}

</style>