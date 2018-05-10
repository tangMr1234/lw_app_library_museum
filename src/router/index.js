import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Login'))
  })
} // 登录
const Home = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Home'))
  })
} // 主页面框架

const Index = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Index'))
  })
} // 首页
const Index1 = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Index1'))
  })
} // 首页
const Manufacturer = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/Manufacturer'))
  })
} // 厂家列表
const MF_details = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/MF_details/MF_details'))
  })
} // 厂家信息

const Vaccin_Detail = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Vaccin_Details/Vaccin_Detail'))
  })
} // 疫苗详情头部
const Vaccin_Details = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Vaccin_Details/Vaccin_Details'))
  })
} // 疫苗详情
const NotFound = resolve => {
  require.ensure([], () => {
    resolve(require('@/views/Layout/404'))
  })
} // 错误404

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '错误界面',
      hidden: true
    },
    {
      path: '*',
      name: '404',
      hidden: true,// 隐藏，在菜单中不显示
      redirect: {path: '/404'}
    },
    {
      path: '/',
      name: '主页面',
      component: Home,
      redirect: {path: '/index'},
      children: [
        {path: '/index', component: Index, name: '疫苗博物馆', icon: 'icon-dangan', meta: {link: '#/vaccin_detail'}},
        {path: '/manufacturer', component: Manufacturer, name: '厂家', icon: 'icon-scsxx', meta: {link: '#/MF_details'}},
        {path: '/2', component: Index, name: '动态', icon: 'icon-quanquandongtai', meta: {link: '#/details'}},
        {path: '/3', component: Index, name: '专家', icon: 'icon-yisheng', meta: {link: '#/details'}},
        {path: '/index1', component: Index1, name: 'xxxxxxx'},
      ]
    },
    {path: '/vaccin_detail', component: Vaccin_Detail, name: '疫苗详情'},
    {path: '/mf_details', component: MF_details, name: '厂家信息'}
  ]
})
