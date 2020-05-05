<template>
<div id="app">
<div class="wrapper">
<header class="main-head"><h1>Holly' The Dog's Petshop</h1></header>
<Navigation />
<router-view></router-view>
<div class="ad"><h2>BASKET HERE</h2></div>
<footer class="main-footer"><h2>THE FOOTER</h2></footer>
</div>
</div>
</template>



<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
  },

}

</script>

<style lang="css">



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f7f6;
  margin: 0;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
