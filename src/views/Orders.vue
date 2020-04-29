<template>
<div>
<article class="content">
<h2>ORDERS</h2>
<p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>


<div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='orange-column'>
        <h1>Orders</h1>
      </div>
    </div>
    <div class='column'>
      <div class='blue-column'>
         <h1>Revanue</h1>
      </div>
    </div>
  </div>
  <div class='row 2'>
    <div class='column right'>
        <div class="row">
            <div class='column'>
            <div class='green-column'>
                Some Text in Row 2, Column One44
            </div>
            </div>
            <div class='column'>
                    <div class='green-column'>
                Some Text in Row 2, Column One44
            </div>
            </div>
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        Some Text in Row 2, Column Two
      </div>
    </div>
  </div>
    <div class='row 2'>
    <div class='column right'>
      <div class='green-column'>
            <tr class="orders-table">
                <th class="orders-overview">Number</th>
                <th class="orders-overview">QTY</th>
                <th class="orders-overview">Name</th>
                <th class="orders-overview">Price</th>
                <th class="orders-overview">Status</th>
                <th class="orders-overview">Archive</th>
                <th class="orders-overview">Delete</th>
            </tr>

            <tr v-for="item in orderItemsTest" :key="item.name">
         
            <td class="orders-overview light">{{item.orderNumber}}</td>

                <td  class="orders-overview light"><p v-for="subitem in item.orderLines" :key="subitem.id">{{subitem.quantity}}</p></td>
                <td  class="orders-overview light"><p v-for="subitem in item.orderLines" :key="subitem.id">{{subitem.name}}</p></td>
                <td  class="orders-overview light"><p v-for="subitem in item.orderLines" :key="subitem.id">{{subitem.price}}</p></td>
           
            
            <td class="orders-overview light"><button v-bind:class="item.status" @click="switchState(item.id)">{{item.status}}</button></td>
            <td class="orders-overview light"><button v-on:click="archiveOrderItem(item.id)">Archive</button></td>
            <td class="orders-overview light"><button v-on:click="deleteOrderItem(item.id)">-</button></td>
            
          </tr>
      </div>
    </div>
    <div class='column'>

    </div>
  </div>
</div>




</article>
</div>
</template>



<script>
import {dbOrders} from '../firebase'


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
    this.$store.dispatch('setOrderItems')
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

   switchState(id){
     let selectedOrderItems = this.orderItems.filter(item => item.id === id)[0];

      if(selectedOrderItems.status === "inprogress"){
        dbOrders.doc(id).update({status: "complete"})
        .then(() =>{
        })
      }

      else if(selectedOrderItems.status === "incomplete"){
        dbOrders.doc(id).update({status: "inprogress"})
        .then(() =>{
        })
      }

      else if(selectedOrderItems.status === "complete"){
        dbOrders.doc(id).update({status: "incomplete"})
        .then(() =>{
        })
      }

   },

   archiveOrderItem(id){
     dbOrders.doc(id).update({archive: true, storeOrder: true})
     .then(() =>{})
   },

   deleteOrderItem(id){
     dbOrders.doc(id).delete().then(() => {
       console.log("order deleted");
     }).catch(() =>{

     })
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
   orderItemsTest (){
     return this.orderItems.filter(oItem => oItem.storeOrder == false)
   },

   basket(){
     
     return this.$store.getters.getBasketItems
     //return this.$store.state.BasketItems
   },

     orderItems() {
     return this.$store.getters.getOrderItems
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



h1{
   color: #e8e8e8; 
}

p{
   color: #e8e8e8; 
}

.right{
    margin-right: 10px;
}

.light{
    color: #d2d7d3;
}

.orders {
  margin-bottom: 0px;
    display: flex;
  flex-direction: column;
  margin-bottom: 10px;

}

.orders-table{
      text-align: left;
      width: 100%;
}
.orders-overview{
    width: 10%;
    text-align: left;
}
.orders-overview-item{
    width: 5%;
}

.status{
    padding: 10px;
    margin-bottom: 5px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
   margin-right: 15px;
}

.row-orders {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
 
  margin-bottom: 5px;
}

.blue-column {
  background-color: #2e3131;
  height: 100px;
}

.orange-column {
  background-color: #2e3131;
  height: 100px;
}

.green-column {
  background-color: #6c7a89;
  min-height: 100px;
  padding: 15px;
  color: #ffffff;
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
}


</style>
