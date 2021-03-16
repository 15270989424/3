import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//引入
import Home from '@/components/home/Home'
import Vip from '@/components/vip/vip'
import Search from '@/components/search/search'
import Cart from '@/components/cart/cart'
import NewsList from '@/components/News/NewsList'
import new2 from '@/components/News/new2'
import new3 from '@/components/News/new3'
import new4 from '@/components/News/new4'
import new5 from '@/components/News/new5'
import new6 from '@/components/News/new6'
import new7 from '@/components/News/new7'
import new8 from '@/components/News/new8'


Vue.use(Router)


// 引入 Mint UI
import MintUI from 'mint-ui';
Vue.use(MintUI)





export default new Router({
  // linkActiveClass:'link-class',
  routes: [
    {
      path: '/',
     redirect:"/home"
     
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/vip',
      name: 'vip',
      component: Vip
    },{
      path: '/cart',
      name: 'cart',
      component: Cart
    },{
      path: '/search',
      name: 'search',
      component: Search
    },{
      path: '/new/new0',
      name: 'new0',
      component:NewsList
   
    },
    {
      path: '/new/new1',
      name: 'new1',
      component:new2
   
    },
    {
      path: '/new/new2',
      name: 'new2',
      component:new2
   
    },
    {
      path: '/new/new3',
      name: 'new3',
      component:new3
   
    },
    {
      path: '/new/new4',
      name: 'new4',
      component:new4
   
    },
    {
      path: '/new/new5',
      name: 'new5',
      component:new5
   
    },
    {
      path: '/new/new6',
      name: 'new6',
      component:new6
   
    },
    {
      path: '/new/new7',
      name: 'new7',
      component:new7
   
    }, {
      path: '/new/new8',
      name: 'new8',
      component:new8
   
    }
  ]
})
