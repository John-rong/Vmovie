//引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
//引入路由组件
import routes from './routes'
//引入store
import store from '@/store';
//引入消息提示
import { MessagePlugin } from 'tdesign-vue'

//解决编程时导航报错问题
//先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push | replace
VueRouter.prototype.push = function (location, resolve, reject) {
    //第一个参数：告诉原来的push，跳转的目标位置和传递了哪些参数
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    //第一个参数：告诉原来的push，跳转的目标位置和传递了哪些参数
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

//对外暴露VueRouter实例
let router = new VueRouter({
    //配置路由 (省略v)
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        console.log('滚动条', to, from, savedPosition);
        return { y: 0 }//滚动条在最上方
    }
});

//全局守卫，前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    //to:跳转的路由信息
    //from:从哪个路由来
    //next:放行函数 next()放行 next(path)放行到指定路由

    //登录才有token
    let token = store.state.token;
    //用户信息
    let name = store.state.userInfo.name
    //用户已经登录
    if (token) {
        //阻止登录用户去login 停留在首页
        if (to.path === '/UserLogin') {
            next('/HomePage')
        } else {
            //存在用户信息 直接放行
            if (name) {
                next();
            } else {
                //不存在用户信息，派发action让仓库存储信息
                try {
                    //获取用户信息成功
                    await store.dispatch('userInfo');
                } catch (error) {
                    //token失效了 清除token 重新登陆
                    MessagePlugin.warning('登录失效，请重新登录...');
                    await store.dispatch('userLogout');
                    next('/UserLogin');
                }
                next();
            }
        }
    } else {
        //未登录 主页和login和搜索放行
        if (to.path === '/HomePage' || to.path === '/UserLogin' || to.path === '/DetailSearch') {
            next();
        } else {
            MessagePlugin.info('请先进行登录...');
            // alert('请先进行登录！')
            next('/UserLogin');
        }
    }
});

export default router;