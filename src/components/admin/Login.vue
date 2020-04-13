<template>
    <div>
<h1>Admin Login</h1>
  <form class="login-container">
    <p><input v-model="email" type="email" placeholder="Email" required></p>
    <p><input v-model="password" type="password" placeholder="Password" required></p>
    <p><input v-on:click.prevent="logIn()" type="submit" value="Log in"></p>
    <p><input v-on:click.prevent="logOut()" type="submit" value="Log Out"></p>
  </form>
    </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
  export default {
    data(){
      return{
        email: '',
        password: ''
      }
  },
  methods:{
    logIn(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() =>{
       this.$router.replace('/admin') 
      })
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert("Wrong PassWord")
        } else {
          alert (errorMessage)
        }
        console.log(error)
      })
    },
    logOut(){
      firebase.auth().signOut().then(() =>{
        alert('Logged Out');
        this.$router.replace('/Login') 
      }).catch(error =>{
        alert(error)
      })
    }

  }
}
</script>

<style lang="scss" scoped>

</style>