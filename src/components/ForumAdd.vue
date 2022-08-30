<template>
    <div class="forum-add">
        <h4>标题 / [电影名称]</h4>
        <t-input clearable v-model="filmName" :maxlength="30" :suffix="suffix" />
        <h4>主图</h4>
        <t-upload action="http://nfq2hztm.hk2.wknwct.top/api/uploder" :headers={token} v-model="file1"
            @fail="handleFail" theme="image" tips="请选择单张图片文件上传" accept="image/*" draggable>
        </t-upload>
        <h4>内容</h4>
        <p>markdown语法，想唠什么写什么（↓↓↓暂时无法上传图片），随便唠唠！</p>
        <div class="markdown">
            <div class="container">
                <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px;z-index: 1;" />
            </div>
        </div>

        <t-button block
            style="background:rgb(129 8 14);border: none;height:38px;border-radius: 50px; margin:50px 0px 0px 0px"
            shape="round" variant="base" @click="submitForum">发布
        </t-button>

        <span>未发布，刷新会消失噢</span>
    </div>
</template>

<script>
import store from '@/store';
// 导入markdown组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { reqForumAdd } from '@/api';
export default {
    name: 'ForumAdd',
    components: {
        mavonEditor,
    },
    data() {
        return {
            token: '',
            file1: [],    //传入的图片
            filmName: '', //唠嗑主题名
            content: '',   // 输入的markdown
            html: '',      // 及时转的html
            configs: {}
        }
    },
    mounted() {
        this.token = store.state.token;
    },
    computed: {
        suffix() {
            return `${this.filmName.length}/30`;
        }
    },
    methods: {
        handleFail({ file }) {
            this.$message.error(`文件 ${file.name} 上传失败`);
        },
        async submitForum() {

            if (this.content.length == 0 || this.filmName.length == 0 || this.filmName.match(/^[ ]*$/)) {
                return this.$message.warning('标题和内容不能为空...');
            }
            const msg = this.$message('loading', '发布中');

            let leftimg = '';
            let markdown = this.content;
            let mdhtml = this.html;
            const title = this.filmName;
            let formdata = {}

            try {
                if (this.file1[0]) {
                    leftimg = this.file1[0].response.url;
                    formdata = { leftimg, title, markdown, mdhtml }
                } else {
                    formdata = { title, markdown, mdhtml }
                }

                let arr = [];
                let data = '';
                for (const key in formdata) {
                    arr.push(`${key}=${formdata[key]}`)
                }
                data += arr.join('&');

                const result = await reqForumAdd(data);
                this.$message.close(msg);
                result.code == 200 ? this.$message.success('发布成功！'):this.$message.error('发布失败...');

            } catch (error) {
                this.$message.error(error);
                return
            }


        },
        // 将图片上传到服务器，返回地址替换到md中
        $imgAdd(pos) {

            // @imgAdd="$imgAdd"
            let formdata = new FormData();

            this.$upload.post('http://nfq2hztm.hk2.wknwct.top/api/uploder', formdata).then(res => {
                console.log(res.data);
                this.$refs.md.$img2Url(pos, res.data);
            }).catch(err => {
                console.log(err)
            })
        },
        // 所有操作都会被解析重新渲染
        change(value, render) {
            // render 为 markdown 解析后的结果[html]
            this.html = render;
        }
    }
}
</script>

<style lang="less" scoped>
.forum-add {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 20px 60px;
    margin-bottom: 20px;

    h4 {
        font-size: 1.2rem;
        margin: 25px 0px 5px 0px;
    }

    p {
        margin: 0px;
        color: rgb(128, 128, 128);
    }

    span {
        display: block;
        text-align: center;
        color: rgba(130, 130, 130, 0.8);
    }
}
</style>