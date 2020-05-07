<template>
    <div>
<p><input v-on:click.prevent="logOut()" type="submit" value="Log Out" class="logOut"></p>
    </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
    export default {
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
    }
</script>

<style lang="css">

</style>