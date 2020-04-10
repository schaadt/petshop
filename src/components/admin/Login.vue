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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>