//API接口统一管理
import requests from "./request";

//发请求：axios发请求返回结果Promise对象
export const movieOnInfoList = () => requests({ url: 'https://m.maoyan.com/ajax/movieOnInfoList', method: 'get' });

//注册 http://gmall-h5-api.atguigu.cn/api/user/passport/register  post
export const reqUserRegister = data => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/register', data, method: 'post' });

//登录
export const reqUserLogin = data => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/login', data, method: 'post' });

//获取用户信息【带token】
export const reqUserInfo = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/auth/getUserInfo', method: 'get' });

//退出登录
export const reqLogout = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/logout', method: 'get' });
