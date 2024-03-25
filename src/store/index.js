import { reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from '@/api';
import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
//对外暴露Store类的一个实例
//state：仓库存储数据的地方
const state = {
    searchFilm: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: '',
    isloading:false
}
//mutation：修改state的唯一手段
const mutations = {
    SEARCHNAME(state, name) {
        state.searchFilm = name;
    },
    //设置用户token
    USERLOGIN(state, token) {
        state.token = token
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    //清除本地用户数据
    CLEARUSER(state) {
        //清除仓库用户
        state.token = '';
        state.userInfo = {};
        //清除本地存储
        localStorage.removeItem("TOKEN");
    },
    BEGINLOADING(state){
        state.isloading = true;
    },
    ENDLOADING(state){
        state.isloading = false;
    }
    
}
//actions：处理actions，可以写自己的业务逻辑，也可以处理异步
const actions = {
    //无法修改state
    searchName({ commit }, name) {
        commit('SEARCHNAME', name);
    },
    //用户注册
    async userRegister({ commit }, user) {
        let arr = [];
        let fromuser='';
        for (const key in user) {
            arr.push(`${key}=${user[key]}`)
        }
        fromuser += arr.join('&');
        console.log('uuuu',fromuser)

        let result = await reqUserRegister(fromuser);
        console.log(commit)
        // console.log('注册',result, commit)
        if (result.code == 200) {
            return 'ok';
        }else if(result.code == 400){
            const msg = result.meta.msg
            return Promise.reject(new Error(msg))
        }else {
            return Promise.reject(new Error('注册失败...'))
        }
    },
    //用户登录
    async userLogin({ commit }, data) {
        let arr = [];
        let fromData='';
        for (const key in data) {
            arr.push(`${key}=${data[key]}`)
        }
        fromData += arr.join('&');

        let result = await reqUserLogin(fromData);
        // console.log('用户登录', result)
        //服务器返回token
        if (result.code == 200) {
            //在vuex保存token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            localStorage.setItem("TOKEN", result.data.token)
            return 'ok';
        }else if(result.code == 201 || result.code == 202 || result.code == 400){
            const msg = result.meta.msg
            return Promise.reject(new Error(msg));
        }else {
            return Promise.reject(new Error('登录失败...'));
        }
    },
    //获取用户信息
    async userInfo({ commit }) {
        let result = await reqUserInfo();
        // console.log('登录信息', result)
        if (result.code == 200) {
            //保存用户信息
            commit("USERINFO", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //退出登录
    async userLogout({ commit }) {
        //向服务器发请求，通知服务器清除token
        // let result = await reqLogout();
        // if (result.code == 200) {
        //     commit("CLEARUSER");
        //     return 'ok';
        // } else {
        //     return Promise.reject(new Error('faile'))
        // }
        console.log('已退出登录',reqLogout)
        commit("CLEARUSER");
        return 'ok';
    },
    //加载loading
    beginLoading({commit}){
        commit('BEGINLOADING');
    },
    //隐藏loading
    endLoading({commit}){
        commit('ENDLOADING');
    }

}
//getters：理解为计算属性，用于简化仓库数据，让组件获得仓库的数据更加方便
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})