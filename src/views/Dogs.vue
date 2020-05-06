<template>
<div>
<article class="content">
<h2 class="prodText">DOG ITEMS</h2>
<p class="prodText">Fusce a augue tortor. Phasellus nisl nisl, sodales quis placerat eget, porttitor non lorem.<br> Proin lobortis rutrum sem, eget pellentesque felis porttitor ac. Ut a lacinia libero. </p>

  <ul class="listing">
      <!-- eslint-disable -->
  <li v-for="item in menuItems" :key="item.name" v-if="item.prodCategory === 'Dog'" >
    <h3>{{item.name}}</h3>
    <div class="bodyDesc"><p class="prodText"><img v-bind:src="item.image" alt="Hund" height="120" width="100"><br/><br/>{{item.prodDescription}}</p>
    </div>
    <div class="cta"><h4>Pris: {{item.price}} DKK</h4> <button class="buttonShop" v-on:click="addToBasket(item)">Add To Basket</button>
    </div>
  </li>
     <!-- eslint-enable -->
</ul>        
</article>

<!-- <div v-for="item in BasketItems" :key="item.name" class="grid-basket">
  <div class="item2">{{item.price}}</div>
  <div class="item4">{{item.name}}</div>
   <div class="item5"><button v-on:click="increase(item)">+</button>  {{item.quantity}}  <button v-on:click="descrease(item)">-</button></div>
</div>

<div class="basketTotal">
  <div>
    <p class="prodText">SubTotal</p>
     <p class="prodText">Delevery</p>
     <p class="prodText">Total</p>
  </div>
  <div>
     <p class="prodText">{{ subTotal }}</p>
     <p class="prodText">50</p>
     <p class="prodText">{{total}}</p>
  </div>
</div>

<div class="basketTotal">
  <div>
    <button v-on:click="addCheckoutItem()">CheckOut</button>
  </div>
</div> -->

 </div>
</template>



<script>
//import {dbAdminProduct} from '../firebase'
export default {
name: 'shopItems',
  data() {
   return {
     basketDump:[],
   }
 },

  beforeCreate(){
    this.$store.dispatch('setMenuItems')
  },


 methods:{
/*    addCheckoutItem(){
     this.$store.dispatch('setCheckoutItems')
   }, */

   addToBasket(item){
    this.basketDump.push({
      name: item.name,
      price: item.price,
      quantity:1
     });
    this.$store.commit('addProductToBasket', this.basketDump);
    this.basketDump = [];
    //console.log('hvad er i kurven;', this.basketDump);
   },


/*    increase(item){
     item.quantity++
   },
   descrease(item){
     item.quantity--
     if (item.quantity === 0) {
       this.BasketItems.splice(this.BasketItems.indexOf(item), 1)
     }
   } */
 },
 computed: {

/*    BasketItems(){
     
     return this.$store.getters.getBasketItems
     //return this.$store.state.BasketItems
   }, */

     menuItems() {
     return this.$store.getters.getMenuItems
   },

/*    subTotal() {
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
   } */
 }
}
</script>


<style lang="css">

.prodText{
  color: #111111;
  line-height: 1.6em;
}

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
