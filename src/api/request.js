//axios进行二次封装
import store from '@/store';
import axios from 'axios';

// let reqNum = 0;
//利用axios对象的方法creat，去创建一个axios实例
//request就是axios，再稍微配置一下
const requests = axios.create({

    //配置对象  基础路径
    // baseURL: "/api",
    //请求时间 10s超时
    timeout: 10000
    
});

//请求拦截器：发请求之前，请求拦截器可以检测到，可以在请求发出去之前拦截
requests.interceptors.request.use( config => {
    // let WhiteList = ['https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/ajax/movieOnInfoList','https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/comingList','http://nfq2hztm.hk2.wknwct.top/api/userinfo']
    // let reqUrl = config.url;
    // if(WhiteList.includes(reqUrl)){
    //     store.dispatch('beginLoading');
    //     reqNum++;
    // }
    //需要携带token给服务器
    if(store.state.token){
        config.headers.token = store.state.token
    }
    return config;
});

//响应拦截器
requests.interceptors.response.use(
    res => {
        // if(reqNum<0){
        //     store.dispatch('endLoading');
        //     reqNum++;
        //     return res.data;
        // }
        // reqNum--;
        // if(reqNum == 0) store.dispatch('endLoading');
        return res.data;
    },
    error => {
        console.log(error);
        // if(reqNum<0){
        //     store.dispatch('endLoading');
        //     reqNum++;
        //     return Promise.reject(new Error('faile'));
        // }
        // reqNum--;
        // if(reqNum == 0) store.dispatch('endLoading');
        return Promise.reject(new Error('faile'));
    }
);

//对外暴露
export default requests;