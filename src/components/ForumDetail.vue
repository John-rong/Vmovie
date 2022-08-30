<template>
    <div>
        <div class="forum-detail">
            <h4>{{  forumInfo.title  }}</h4>
            <p>邮箱：{{  forumInfo.username  }}</p>
            <p>时间：{{  forumInfo.createdAt  }}</p>
            <img :src="forumInfo.leftimg" alt="vmovie">
            <div class="forum-html" v-html="forumInfo.mdhtml"></div>
            <t-divider dashed></t-divider>
        </div>

        <div class="forum-detail">
            <h3>一起唠唠：</h3>

            <div class="comment" v-for="item in commentList" :key="item.id">
                <t-comment :avatar="item.leftimg" :author="item.nickname" :datetime="item.createdAt | formatData"
                    :content="item.content">
                    <template #actions>
                        <span key="chat">
                            <i class='bx bx-chat'></i>
                            <span @click="replylist(item.id)" class="action-text">回复</span>
                            <div v-if="replyid == item.id" class="comment-control">
                                <t-textarea autofocus autosize v-model="replyValue" :maxlength="1000"
                                    :suffix="suffix" />
                                <t-button @click="secondComment(item.id)">发送</t-button>
                            </div>
                        </span>
                    </template>

                    <template #reply>
                        <t-comment :datetime="reply.createdAt | formatData" :content="reply.content"
                            v-for="reply in item.replyList" :key="reply.id">
                            <template #author>
                                <span>{{  reply.nickname  }}</span>
                                <i class='bx bx-caret-right'></i>
                                <span>{{  item.nickname  }}</span>
                            </template>
                        </t-comment>
                    </template>
                </t-comment>
            </div>

            <p>来吧，写点儿什么 <i class='bx bx-pencil'></i></p>
            <div class="comment-control">
                <t-textarea autofocus autosize v-model="commentValue" :maxlength="1000" :suffix="suffix" />
                <t-button @click="firstComment">发送</t-button>
            </div>
        </div>
    </div>

</template>

<script>
import { reqComment, reqCommentlist } from '@/api';
import { mapState } from 'vuex'
export default {
    name: 'ForumDetail',
    data() {
        return {
            commentValue: '',
            replyValue:'',
            commentList: [],
            replyid: -1
        }
    },
    props: ['forumInfo'],
    computed: {
        ...mapState(['userInfo']),
        suffix() {
            return `${this.commentValue.length}/1000`;
        }
    },
    mounted() {
        window.scrollTo(0, 150);
        this.gethtml();
        this.getcommentList();
    },
    filters: {
        formatData(time) {
            const date = time.slice(0, 10);
            return date
        }
    },
    methods: {
        gethtml() {
            const newtext = this.forumInfo;
            console.log(newtext)
        },
        async getcommentList() {
            try {
                const commentid = this.forumInfo.commentid;
                const result = await reqCommentlist(commentid);
                if (result.code == 200) {
                    this.commentList = result.data.rows;
                }
            } catch (error) {
                this.$message.error(error);
            }
        },
        async postcomment(data,status) {
            const msg = this.$message('loading', '发送中');
            let arr = [];
            let fromData = '';
            for (const key in data) {
                arr.push(`${key}=${data[key]}`);
            }
            fromData += arr.join('&');

            const results = await reqComment(fromData);
            this.$message.close(msg);
            if (results.code == 200 && status == 0) {
                let replys = results.data
                replys.replyList=[]
                this.commentList.push(replys);
                return 'ok';
            }else if(results.code == 200 && status == 1){
                this.commentList.map(item =>{
                    if( item.id == data.comid) {
                        console.log(item);
                        item.replyList.push(results.data);
                    }
                })
                return 'ok';
            }else {
                return Promise.reject(new Error('发送失败'));
            }

        },
        async firstComment() {
            if (this.commentValue.length == 0 || this.commentValue.match(/^[ ]*$/)) {
                return this.$message.warning('评论不能为空...');
            }
            try {
                const data = this.commentdata();
                await this.postcomment(data,0);
            } catch (error) {
                this.$message.error(error);
            }
        },
        async secondComment(comid){
            if (this.replyValue.length == 0 || this.replyValue.match(/^[ ]*$/)) {
                return this.$message.warning('评论不能为空...');
            }
            try {
                const data = this.commentdata(comid);
                await this.postcomment(data,1);
                this.replyValue='';
            } catch (error) {
                this.$message.error(error);
            }
        },
        commentdata(comid){
            const { commentid } = this.forumInfo;
            const { nickname } = this.userInfo;
            const leftimg = this.userInfo.headImg;
            const content = this.commentValue;
            const data = { commentid, nickname, leftimg, content };
            if(comid){
                const content = this.replyValue;
                const data = { commentid, nickname, leftimg, content, comid };
                return data;
            }
            return data;
        },
        replylist(id){
            this.replyid = id;
        }
    },
    render() {
        return (
            <div domPropsInnerHtml={this.forumInfo}></div>
        )
    }
}
</script>

<style lang="less" scoped>
.forum-detail {
    color: white;
    background: #0B1A2A;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 20px;

    h4 {
        color: #fa183d;
        font-size: 4rem;
        padding: 20px 0px;
        margin: 0px auto;
    }

    h3 {
        color: rgb(193, 193, 193);
        font-size: 1.5rem;
    }

    img {
        width: 100%;
    }

    p {
        color: rgb(212, 212, 212);
        text-decoration: none;
    }

    .forum-html {
        font-size: 1rem;
    }

    .comment {
        margin-top: 2%;
        margin-bottom: 2%;
        background: rgb(232, 230, 230);
        border-radius: 30px;
        padding: 20px;
    }

    .comment-control {
        display: flex;
    }

    .action-text {
        margin: 0px 30px 0px 5px;
    }
}
</style>