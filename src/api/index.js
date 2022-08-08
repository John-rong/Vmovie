//API接口统一管理
import requests from "./request";

//发请求：axios发请求返回结果Promise对象
// export const movieOnInfoList = () => requests({ url: 'https://m.maoyan.com/ajax/movieOnInfoList', method: 'get' });

//热映电影列表 mock
export const movieOnInfoList = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/ajax/movieOnInfoList', method: 'get' });

//狙击手电影详情 mock
export const jujishouMovie = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/jujishou', method: 'get' });

//豆瓣热门排行100 mock
export const reqdbRanking = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/douban', method: 'get' });

//豆瓣排行（跨域）
export const douban = () => requests({ url: 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0', method: 'get' });

//注册 http://gmall-h5-api.atguigu.cn/api/user/passport/register  post
export const reqUserRegister = data => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/register', data, method: 'post' });

//登录
export const reqUserLogin = data => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/login', data, method: 'post' });

//获取用户信息【带token】
export const reqUserInfo = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/auth/getUserInfo', method: 'get' });

//退出登录
export const reqLogout = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/logout', method: 'get' });
