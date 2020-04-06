<template>
  <div id="app">
<div class="wrapper">
        <header class="main-head"><h1>Holly' The Dog's Petshop</h1></header>
        <Navigation />
        <article class="content">
            <h2>LATEST PRODUCTS</h2>
            <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
  

  <ul class="listing">
  <li v-for="item in ShopItems" :key="item.name" >
    <h3>{{item.name}}</h3>
    <div class="body"><p>The content of this listing item goes here.</p></div>
    <div class="cta"><h4>Pris: {{item.price}} DKK</h4> <button v-on:click="addToBasket(item)">Add To Basket</button>

    </div>
  </li>
</ul>        
        </article> 
        <aside class="side">
        </aside>
        <div class="ad">

<div v-for="item in BasketItems" :key="item.name" class="grid-basket">
 
  <div class="item2">{{item.price}}</div>

  <div class="item4">{{item.name}}</div>
   <div class="item5"><button v-on:click="increase(item)">+</button>  {{item.quantity}}  <button v-on:click="descrease(item)">-</button></div>

</div>

<div class="basketTotal">
  <div>
    <p>SubTotal</p>
    <p>Delevery</p>
    <p>Total</p>
  </div>
  <div>
    <p>{{ subTotal }}</p>
    <p>50</p>
    <p>{{total}}</p>
  </div>
</div>
<div class="basketTotal">
  <div>
 <button>CheckOut</button>
  </div>

</div>


        </div>
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
    Navigation
  },

data() {
   return {

     BasketItems:[],

     ShopItems: [
       {name: 'Tennis Bolde', price:250},
       {name: 'Fisk Fra Canada', price:1020},
       {name: 'HundeGuf', price:22},
       {name: 'Drillepind', price:49}
     ]
   }
 },
 methods:{
   addToBasket(item){
     if(this.BasketItems.find(itemInArray => item.name === itemInArray.name)){
       item = this.BasketItems.find(itemInArray => item.name === itemInArray.name)
       this.increase(item)
     }
     else{
       this.BasketItems.push({
       name: item.name,
       price: item.price,
       quantity:1
     })
     }
   },
   increase(item){
     item.quantity++
   },
   descrease(item){
     item.quantity--
     if (item.quantity === 0) {
       this.BasketItems.splice(this.BasketItems.indexOf(item), 1)
     }
   }
 },
 computed: {
   subTotal() {
     let subCost = 0;
     for(let items in this.BasketItems) {
       let individualItem = this.BasketItems[items]
       subCost += individualItem.quantity * individualItem.price
     }
     return subCost
   },
   total () {
     let delivery = 50
     let totalCost = this.subTotal
     return totalCost + delivery
   }
 }
}

</script>

<style lang="css">

.shopGrid {
  display: flex;
}
.flex-grid .col {
  flex: 1;
  text-align: left;
}

.shopGrid .col {
  width: 48%;
}
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




.item2 { grid-area: menu; width:150px; }

.item4 { grid-area: right; width: 150px; }
.item5 { grid-area: left; width: 80px; }


.grid-basket {
  display: grid;
  grid-template-areas:
    'left right right right menu menu'
    'left right right right menu menu'
    'left right right right menu menu';
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-basket > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 12px;
}


.basketTotal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
}


</style>
