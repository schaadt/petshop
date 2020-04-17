<template>
        <nav class="main-nav">
          <h2>CATEGORIES</h2>
         <div v-if="currentUser">
            <h4>{{ currentUser.email }}</h4>
      </div>
            <ul>
                <li><a href="">Nav 1</a></li>
                <li><a href="">Nav 2</a></li>
                <li><router-link to="/">Home</router-link></li> 
                <li><router-link to="/ShopItems">Store</router-link></li>
                <li><router-link to="/Login">Login</router-link></li>  
                <li><router-link to="/Admin">Admin</router-link></li> 
            </ul>
        </nav>
</template>

<script>


//import {db} from '../firebase'
import firebase from 'firebase'
import 'firebase/firestore'
import store from '../store/index.js'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
});



export default {
    computed:{
        currentUser() {
            return this.$store.getters.currentUser
           
        }
    }
}
</script>

<style scoped>


</style>
