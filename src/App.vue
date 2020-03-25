<template>
  <div id="app">
<div class="wrapper">
        <header class="main-head"><h1>Holly' The Dog's Petshop</h1></header>
        <Navigation />
        <article class="content">
            <h2>LATEST PRODUCTS</h2>
            <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
        <ul class="listing">
  <li>
    <h3>Item One</h3>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><a href="">Call to action!</a></div>
  </li>
   <li>
     <h3>Item Two</h3>
     <div class="body"><p>The content of this listing item goes here. Test</p></div>
     <div class="cta"><a href="">Call to action!</a></div>
   </li>
   <li class="wide">
     <h3>Item Three</h3>
     <div class="body"><p>The content of this listing item goes here.</p> 
     <p>This one has more text than the other items.</p>
     <p>Quite a lot more</p>
     <p>Perhaps we could do something different with it?</p></div>
     <div class="cta"><a href="">Call to action!</a></div>
    </li>
    <li>
     <h3>Item Four</h3>
     <div class="body"><p>The content of this listing item goes here.</p></div>
     <div class="cta"><a href="">Call to action!</a></div>
    </li>
     <li>
     <h3>Item Five</h3>
     <div class="body"><p>The content of this listing item goes here.</p></div>
      <div class="cta"><a href="">Call to action!</a></div>
    </li>
</ul>        
        </article> 
        <aside class="side"><h2>BASKET</h2></aside>
        <div class="ad">Advertising</div>
        <footer class="main-footer">The footer</footer>
</div>
  </div>
</template>



<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="css">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
