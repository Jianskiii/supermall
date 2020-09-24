import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//1。安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//3.导出router
export default router

//作用：重复点击路由后浏览器不会再报错（此报错并不影响程序运行）
//使用的使replace或者push方法就重写哪个
const originalPush = VueRouter.prototype.push
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}