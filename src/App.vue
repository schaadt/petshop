<template>
<div id="app">
<div class="wrapper">
<header class="main-head"><Header /></header>
<Navigation />
<router-view></router-view>
<div class="ad"><h2>BASKET HERE</h2>
<ShopBasket />
</div>
<footer class="main-footer"><Footer /></footer>
</div>
</div>
</template>



<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import ShopBasket from '@/components/ShopBasket.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    ShopBasket,
    Footer,
    Header
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
