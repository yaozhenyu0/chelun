import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home.vue'
import Prate from '../views/Home/prate/prate.vue'
import InquiryPrice from '../views/Home/inquiryPrice/inquiryPrice.vue'
import AllPhoto from '../views/Home/allPhoto/allPhoto.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prate',
      name: 'prate',
      component: Prate
    },
    {
      path: '/inquiryPrice',
      name: 'inquiryPrice',
      component: InquiryPrice
    },
    {
      path: '/allPhoto',
      name: 'allPhoto',
      component: AllPhoto
    }
  ]
})
