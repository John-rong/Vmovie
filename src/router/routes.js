//引入路由组件
const HomePage = () => import('@/pages/HomePage')
const UserLogin = () => import('@/pages/UserLogin')
const DetailSearch = () => import('@/pages/DetailSearch')
const DetailPage = () => import('@/pages/DetailPage')
const RankingList = () => import('@/pages/RankingList')
const MyProfile = () => import('@/pages/MyProfile')
const ForumPage = () => import('@/pages/ForumPage')

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
        path: '/DetailSearch/:filmName?',
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
    {
        path: '/ForumPage',
        component: ForumPage,
        name:'ForumPage'
    },
    //重定向,当访问/，立马定向到首页
    {
        path: '/',
        redirect: '/HomePage'
    },
]