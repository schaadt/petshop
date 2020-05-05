<template>
<div>
<article class="content">
<h2>Admin Page</h2>
<p class="adminText">In this layout, we display the areas in source order for any screen less that 500 pixels wide. <br>We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
  


<router-link class="addItem" to="/AddNewItem">Add Item</router-link>
  <ul class="listing">
  <li v-for="item in menuItems" :key="item.id" >
    <h3>{{item.name}}</h3>
    <div class="body"><p><img v-bind:src="item.image" alt="Hund" height="150" width="100"></p></div>
    <div class="cta"><h4>Pris: {{item.price}} DKK</h4><br><button v-on:click="deleteProduct(item.id)" class="buttonShop">Delete Product</button><br><br>
    



<label>Product Name</label> <br>
<input type="text" v-model="item.name" />
<br><br>
<label>Product Price</label> <br>
<input type="text" v-model="item.price" />
<br><br>
<button v-on:click="updateItem(item)" class="buttonShopUpdate">Update Product</button>

    </div>
  </li>
</ul>        
</article>






 </div>
</template>



<script>
import {dbAdminProduct} from '../firebase'




export default {
name: 'modal',
  data() {
   return {

     BasketItems:[],
     item:[],
     activeEditItem: null
     //menuItems: []
   }
 },

  beforeCreate(){
    this.$store.dispatch('setMenuItems')
  },

 methods:{

  editItem(item){
    this.item = item
    this.activeEditItem = item.id
  },

  updateItem(item){
    console.log("Itemsvalue: ", item, this.id);
    dbAdminProduct.doc(item.id).update(item)

    .then(() => {
    console.log("Document successfully updated!");
    })
    .catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
    });
  },

   deleteProduct(id){
     dbAdminProduct.doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
      }).catch(function(error) {
    console.error("Error removing document: ", error);
      });
   },

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

.adminText{
  color: #111111;
}

.deleteP{
  background: crimson;
  padding: 10px;
  color:#ffffff;
}


.editP{
  background: green;
  padding: 10px;
  color:#ffffff;
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

/* Greeting Modal Container */
#greeting-modal {
  visibility: hidden;
  opacity: 0;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* Greeting Modal Container - when open */
#greeting-modal:target {
  visibility: visible;
  opacity: 1;
}

/* Greeting Modal */
#greeting-modal .modal {
  opacity: 0;
  transform: translateY(-1rem);
  transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: .2s;
}

/* Greeting Modal - when open */
#greeting-modal:target .modal {
transform: translateY(0);
opacity: 1;
}

/* Modal Container Styles */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal Background Styles */
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .2);
}

/* Modal Body Styles */
.modal {
  z-index: 1;
  background-color: white;
  width: 80%;
  max-width: 500px;
  padding: 1rem;
  border-radius: 8px;
}



</style>
