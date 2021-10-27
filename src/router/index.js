import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/crud',
    name: 'Crud',
    component: () => import(/* webpackChunkName: "crud" */ '../views/Crud.vue')
  },
  {
    path: '/crud_vuex',
    name: 'CrudVuex',
    component: () => import(/* webpackChunkName: "crud_vuex" */ '../views/CrudVuex.vue')
  },
  {
    path: '/crud_api',
    name: 'CrudApi',
    component: () => import(/* webpackChunkName: "crud_api" */ '../views/CrudApi.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
