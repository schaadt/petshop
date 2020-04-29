<template>
<div>
<article class="content">
<h2>LATEST PRODUCTS</h2>
<p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
  



  <ul class="listing">
  <li v-for="item in menuItems" :key="item.name" >
    <h3>{{item.name}}</h3>
    <div class="body"><p><img v-bind:src="item.image" alt="Hund" height="150" width="100"></p></div>
    <div class="cta"><h4>Pris: {{item.price}} DKK</h4> <button v-on:click="addToBasket(item)">Add To Basket</button>
    </div>
  </li>
</ul>        
</article>


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
 <button v-on:click="addCheckoutItem()">CheckOut</button>
  </div>

</div>


 </div>
</template>



<script>
//import {dbAdminProduct} from '../firebase'


export default {
name: 'shopItems',
  data() {
   return {

     basketDump:[],

    //  shopItems: [
    //    /*
    //    {name: 'Tennis Bolde', price:250},
    //    {name: 'Fisk Fra Canada', price:1020},
    //    {name: 'HundeGuf', price:22},
    //    {name: 'Drillepind', price:49}
    //     */
    //  ]
   }
 },

   beforeCreate(){
    this.$store.dispatch('setMenuItems')
  },
/*  created(){
   dbAdminProduct.get() .then((querySnapshot) => {
     querySnapshot.forEach((doc =>{
       var productsData = doc.data();
       this.shopItems.push({
         id: doc.id,
         name: productsData.name,
         price: productsData.price
       })
        // console.log(doc.id, "=>", doc.data());
     }))
   })
 }, */

 methods:{

   addCheckoutItem(){
     this.$store.dispatch('setCheckoutItems')
   },



   addToBasket(item){
/*      if(this.BasketItems.find(itemInArray => item.name === itemInArray.name)){
       item = this.BasketItems.find(itemInArray => item.name === itemInArray.name)
       this.increase(item)
     }
     else{
       this.BasketItems.push({
       name: item.name,
       price: item.price,
       quantity:1
     })
     } */
    this.basketDump.push({
      name: item.name,
      price: item.price,
      quantity:1
     });
    this.$store.commit('addProductToBasket', this.basketDump);
    this.basketDump = [];
    //console.log('hvad er i kurven;', this.basketDump);
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

   BasketItems(){
     
     return this.$store.getters.getBasketItems
     //return this.$store.state.BasketItems
   },

     menuItems() {
     return this.$store.getters.getMenuItems
   },

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
