//API接口统一管理
import requests from "./request";

//发请求：axios发请求返回结果Promise对象
// export const movieOnInfoList = () => requests({ url: 'https://m.maoyan.com/ajax/movieOnInfoList', method: 'get' });

//热映电影列表 mock
export const movieOnInfoList = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/ajax/movieOnInfoList', method: 'get' });
export const reqmovieInfoList = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/comingList', method: 'get' });

//狙击手电影详情 mock
export const jujishouMovie = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/jujishou', method: 'get' });

//豆瓣热门排行100 mock
export const reqdbRanking = () => requests({ url: 'https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/douban', method: 'get' });

//豆瓣排行（跨域）
export const douban = () => requests({ url: 'https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0', method: 'get' });

//注册 http://gmall-h5-api.atguigu.cn/api/user/passport/register  post
// export const reqUserRegister = data => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/register', data, method: 'post' });
export const reqUserRegister = data => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/register', data, method: 'post', headers: { "Content-Type": "application/x-www-form-urlencoded" } });

//登录
// export const reqUserLogin = data => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/login', data, method: 'post'});
export const reqUserLogin = data => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/login', data, method: 'post', headers: { "Content-Type": "application/x-www-form-urlencoded" } });

//获取用户信息【带token】
// export const reqUserInfo = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/auth/getUserInfo', method: 'get' });
export const reqUserInfo = () => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/userinfo', method: 'get' });

//更新用户信息【带token】
export const reqUpUserInfo = data => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/upuserinfo', data, method: 'post', headers: { "Content-Type": "application/x-www-form-urlencoded" } });

//退出登录
export const reqLogout = () => requests({ url: 'http://gmall-h5-api.atguigu.cn/api/user/passport/logout', method: 'get' });

//唠嗑主题上传【带token】
export const reqForumAdd = data => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/foruminfo', data, method: 'post', headers: { "Content-Type": "application/x-www-form-urlencoded" } });

//文件（图片，md）上传
export const reqUploder = data => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/uploder', data, method: 'post', headers: { "Content-Type": "multipart/form-data" } });

//获取唠嗑主题列表
export const reqForumlist = data => requests({ url: `http://nfq2hztm.hk2.wknwct.top/api/forumlist?currentPage=${data.currentPage}&pageSize=${data.pageSize}`, method: 'get'});
export const reqSearchForum = data => requests({ url: `http://nfq2hztm.hk2.wknwct.top/api/forumlist?currentPage=${data.currentPage}&pageSize=${data.pageSize}&title=${data.title}`, method: 'get'});

//评论
export const reqComment = data => requests({ url: 'http://nfq2hztm.hk2.wknwct.top/api/comment', data, method: 'post', headers: { "Content-Type": "application/x-www-form-urlencoded" } });

//获取评论
export const reqCommentlist = data => requests({ url: `http://nfq2hztm.hk2.wknwct.top/api/commentlist?commentid=${data}`, data, method: 'get' });
