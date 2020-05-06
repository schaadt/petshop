<template>
        <nav class="main-nav">
          <h2>MENU</h2>
        
         <div class="loggedIn" v-if="currentUser">
           <p class="navText">{{ currentUser.email }}</p>
      </div>
            <ul>
                <li><router-link to="/">Home</router-link></li> 
                <li><router-link to="/ShopItems">Store</router-link></li>
                <li><router-link to="/Dogs">Dog Products</router-link></li>
                <li><router-link to="/Cats">Cat Products</router-link></li>
                <li><router-link to="/Login">Login</router-link></li>  
                <li><router-link to="/Admin">Admin</router-link></li> 
                <li><router-link v-if="currentUser" to="/Orders">Orders</router-link></li> 
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

.loggedIn{
  background-color: #f62459;
  padding: 10px;
}

.navText{
  color: #fff;
  font-size: 17px;
  font-weight: 600;

}


ul {
  padding-inline-start: 0px;
}

ul li {
  display:inline-block;
  background-color: #ffffff;
  border-bottom: 1px solid #e6eaea; 
  margin: 0px;
  padding-inline-start: 0px;
}

a {
  color:#202121;
  display:block;
  text-decoration: none;
  padding:20px 30px;
    font-size: 16px;
    font-weight: 600;
 }

a:hover {
  background-color: #0087c4;
    color: #e4f1fe;
}



@media screen and (max-width:685px) {


nav ul li {
  display:block;
  }

nav a {
  color:#e4f1fe;
  display:block;
  text-decoration: none;
  padding:10px 20px;
    font-size: 16px;
    font-weight: 600;
 }

}
/* END MENU*/

</style>
