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
    userInfo: ''
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
        let result = await reqUserRegister(user);
        console.log(result, commit)
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    //用户登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        console.log('用户登录', result)
        //服务器返回token
        if (result.code == 200) {
            //在vuex保存token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            localStorage.setItem("TOKEN", result.data.token)
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //获取用户信息
    async userInfo({ commit }) {
        let result = await reqUserInfo();
        console.log('登录信息', result)
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
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEARUSER");
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
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