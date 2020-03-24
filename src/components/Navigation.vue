<template>
<nav><ul>
      <router-link tag="li" to="/">Home</router-link>
      <router-link tag="li" to="/about">Aboutdw</router-link>
      <router-link style="float:right" tag="li" to="/about">Login</router-link>
      
      </ul>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li :hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
