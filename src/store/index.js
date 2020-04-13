import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BasketItems: [
      {name:'Orange Bold', price:250, quantity:1},
    ],
    currentUser: null
  },
  mutations: {
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
    }
  },
  getters:{
    getBasketItems: state => state.BasketItems,
    currentUser: state => state.currentUser
  },
  modules: {
  }
})
