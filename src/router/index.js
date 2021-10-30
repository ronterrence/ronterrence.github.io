import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Product from '@/pages/SingleProduct'
import Product2 from '@/pages/SingleProduct2'
import FoodAgriculture from '@/pages/Food&Agriculture'
import NewArrival from '@/pages/NewArrival'
import TopProducts from '@/pages/topproducts'
import SellApplication from '@/pages/SellApplication'
import Fashion from '@/pages/fashion'
import Cart from '@/pages/cart'
import RequestQuote from '@/pages/requestquote'
import CheckOut from '@/pages/checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product2',
      name: 'Product2',
      component: Product2
    },
    {
      path: '/food&agriculture',
      name: 'food&agriculture',
      component: FoodAgriculture
    },
    {
      path: '/fashion',
      name: 'fashion',
      component: Fashion
    },
    {
      path: '/newarrival',
      name: 'newarrival',
      component: NewArrival
    },
    {
      path: '/topproducts',
      name: 'topproducts',
      component: TopProducts
    },
    {
      path: '/sellapplication',
      name: 'sellapplication',
      component: SellApplication
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut
    },
    {
      path: '/requestquote',
      name: 'requestquote',
      component: RequestQuote
    },
  ]
})
