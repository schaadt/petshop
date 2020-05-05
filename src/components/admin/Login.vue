<template>
    <div class="adminLogin">
<h1>Admin Login</h1>
  <form class="login-container">
    <p><input v-model="email" type="email" placeholder="Email" required></p>
    <p><input v-model="password" type="password" placeholder="Password" required></p>
    <p><input v-on:click.prevent="logIn()" type="submit" value="Log in" class="logIn"></p>
    <p><input v-on:click.prevent="logOut()" type="submit" value="Log Out" class="logOut"></p>
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

<style lang="css">
.adminLogin{
  min-height: 90vh;
}

.logIn{
  background-color: #4daf7c;
  color: #ffffff;
  width: 190px;
  cursor: pointer;
}

.logOut{
  background-color: #cf000f;
  color: #ffffff;
  width: 190px;
  cursor: pointer;
}


.logIn:hover {
  background-color: #2abb9b; /* Green */
  color: white;
}

.logOut:hover {
  background-color: #db0a5b; /* Green */
  color: white;
}


</style>