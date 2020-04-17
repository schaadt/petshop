import Vue from 'vue'
import Vuex from 'vuex'
import { dbAdminProduct } from '../firebase'

//import firebase from 'firebase'
import 'firebase/firestore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BasketItems: [
      {name:'Orange Bold', price:250, quantity:1},
    ],
    menuItems:[],
    currentUser: null
  },
  mutations: {

    setMenuItems: state => {
      let menuItems = []
 
      dbAdminProduct.onSnapshot((snapshotItems) => {
        menuItems = []  // empty it, or it will duplicate the stuff on delete
        snapshotItems.forEach((doc) => {
          var menuItemData = doc.data();
          menuItems.push({ 
            // Spread operator istedet for at gøre det for hvert enkelte
            ...menuItemData, // spread operator - grabbing all the items (person, due, title, content, etc)
            id: doc.id 
          })
         // console.log("Test:", menuItemData, "id: ", doc.id)
        })
        state.menuItems = menuItems
      })
    },


    addProductToBasket:(state, BasketItems ) => {
    if(BasketItems instanceof Array) {
      BasketItems.forEach(item =>{
        if(state.BasketItems.find(itemInArray => item.name === itemInArray.name)){
          item = state.BasketItems.find(itemInArray => item.name === itemInArray.name)
          item.quantity++
        }
        else{
          state.BasketItems.push({
          name: item.name,
          price: item.price,
          quantity:1
         })
        }
      })
    }
  },
  userStatus(state, user){
    if(user){
      state.currentUser = user
    }
    else{
      state.currentUser = null
    }
  }
  },
  actions: {
    setUser(context, user){
      context.commit('userStatus', user)
    },
    setMenuItems: context => {
      context.commit('setMenuItems')
    },
  },
  getters:{
    getBasketItems: state => state.BasketItems,
    getMenuItems: state => state.menuItems,
    currentUser: state => state.currentUser
  },
  modules: {
  }
})
