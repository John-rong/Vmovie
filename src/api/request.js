//axios进行二次封装
import store from '@/store';
import axios from 'axios';

//利用axios对象的方法creat，去创建一个axios实例
//request就是axios，再稍微配置一下
const requests = axios.create({

    //配置对象  基础路径
    // baseURL: "/api",
    //请求时间 5s超时
    timeout: 5000
});

//请求拦截器：发请求之前，请求拦截器可以检测到，可以在请求发出去之前拦截
requests.interceptors.request.use( config => {
    //需要携带token给服务器
    if(store.state.token){
        config.headers.token = store.state.token
    }
    return config;
});

//响应拦截器
requests.interceptors.response.use(
    res => {
        return res.data;
    },
    error => {
        console.log(error);
        return Promise.reject(new Error('faile'));
    }
);

//对外暴露
export default requests;