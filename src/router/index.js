import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShopItems from '../views/ShopItems.vue'
import Admin from '../views/Admin.vue'
import AddNewItem from '../components/admin/AddNewItem.vue'
import Login from '../components/admin/Login.vue'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/shopItems',
    name: 'ShopItems',
    component: ShopItems
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {requiresAuth: true}
  },
  {
    path: '/addNewItem',
    name: 'addNewItem',
    component: AddNewItem,
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('Login');
  else next();


})

export default router
