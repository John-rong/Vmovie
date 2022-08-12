//引入路由组件
import HomePage from '@/pages/HomePage'
const UserLogin = () => import('@/pages/UserLogin')
const DetailSearch = () => import('@/pages/DetailSearch')
const DetailPage = () => import('@/pages/DetailPage')
const RankingList = () => import('@/pages/RankingList')
const MyProfile = () => import('@/pages/MyProfile')

export default [
    {
        path: '/HomePage',
        component: HomePage,
        name:'HomePage'
    },
    {
        path: '/UserLogin',
        component: UserLogin,
        name:'UserLogin'
    },
    {
        path: '/DetailSearch',
        component: DetailSearch,
        name:'DetailSearch'
    },
    {
        path: '/DetailPage',
        component: DetailPage,
        name:'DetailPage'
    },
    {
        path: '/RankingList',
        component: RankingList,
        name:'RankingList'
    },
    {
        path: '/MyProfile',
        component: MyProfile,
        name:'MyProfile'
    },
    //重定向,当访问/，立马定向到首页
    {
        path: '/',
        redirect: '/HomePage'
    },
]