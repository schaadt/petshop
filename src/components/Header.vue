<template>
    <div>
        <div class="row">
            <div class="column">
                <div class="headerLeft">
                    <h1>Holly' The Dog's Petshop</h1>
                </div>
            </div>
            <div class="column">
                <div class="headerRight" v-if="currentUser">
                    <Logout />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
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
  components: {
    Logout
  },
    methods:{
        logOut(){
      firebase.auth().signOut().then(() =>{
        alert('Logged Out');
        this.$router.replace('/Login') 
      }).catch(error =>{
        alert(error)
      })
    }
    },
    computed:{
    currentUser() {
    return this.$store.getters.currentUser      
    }
    }
}
</script>

<style lang="css">

.headerLeft{
    text-align: left;
    padding: 20px;
}

.headerRight{
    text-align: right;
    padding: 20px;
    margin-top: 25px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-right: 15px;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-bottom: 5px;
}




@media screen and (max-width: 665px) {
	.row .column {
		flex-basis: 100%;
		margin: 0 0 20px 0;
  }

  .headerLeft{
    text-align: center;
    padding: 20px;
}

.headerRight{
    text-align: center;
    padding: 20px;
    margin-top: -25px;
}
  
}

</style>