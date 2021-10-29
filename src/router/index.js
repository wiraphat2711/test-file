import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import project from '@/components/project.vue'
// import Student from '@/components/Student.vue'
// import Page1 from '@/components/Page1.vue'
// import Page2 from '@/components/Page2.vue'
// import showmember from '@/views/showmember.vue'
// import register from '@/components/register.vue'
// import login from '@/components/Login.vue'
import woman from '@/components/works/woman.vue'
import men from '@/components/works/men.vue'
import kid from '@/components/works/kid.vue'
import newwoman from '@/components/works/womannew.vue'
import womanclothes from '@/components/works/womanclothes.vue'
import womansale from '@/components/works/womansale.vue'
import mennew from '@/components/works/mennew.vue'
import mensale from '@/components/works/mensale.vue'
import menclothes from '@/components/works/menclothes.vue'
import kidnew from '@/components/works/kidnew.vue'
import kidsale from '@/components/works/kidsale.vue'
import kidclothes from '@/components/works/kidclothes.vue'
import shopping from '@/components/works/shopping.vue'

import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(axios,VueAxios)

const routes = [
  {
    path: '/',
    name: 'project',
    component: project
  },
  {
    path: '/woman',
    name: 'woman',
    component: woman
  },
  {
    path: '/project',
    name: 'project',
    component: project
  },
  {
    path: '/men',
    name: 'men',
    component: men
  },
  {
    path: '/kid',
    name: 'kid',
    component: kid
  },
  {
    path: '/newwoman',
    name: 'newwoman',
    component: newwoman
  },
  {
    path: '/womanclothes',
    name: 'womanclothes',
    component: womanclothes
  },
  {
    path: '/womansale',
    name: 'womansale',
    component: womansale
  },
  {
    path: '/mennew',
    name: 'mennew',
    component: mennew
  },
  {
    path: '/mensale',
    name: 'mensale',
    component: mensale
  },
  {
    path: '/menclothes',
    name: 'menclothes',
    component: menclothes
  },
  {
    path: '/kidnew',
    name: 'kidnew',
    component: kidnew
  },
  {
    path: '/kidsale',
    name: 'kidsale',
    component: kidsale
  },
  {
    path: '/kidclothes',
    name: 'kidclothes',
    component: kidclothes
  },
  {
    path: '/shopping/:pic',
    name: 'shopping',
    component: shopping
  },
  // {
  //   path: '/page1/:id/:Fname/:Lname',
  //   name: 'Page1',
  //   component: Page1
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
