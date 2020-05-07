<template>
<div>
<article class="content">
<h2>Admin Page</h2>
<p class="adminText">In this layout, we display the areas in source order for any screen less that 500 pixels wide. <br>We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
  
<router-link class="addItem" to="/AddNewItem">Add Item</router-link>
  <ul class="listing">
  <li v-for="item in menuItems" :key="item.id" >
    <h3>{{item.name}}</h3>
    <div class="body"><p><img v-bind:src="item.image" alt="Hund" height="150" width="140"></p></div>
    <div class="cta"><h4>Pris: {{item.price}} DKK</h4><br><button v-on:click="deleteProduct(item.id)" class="buttonShop">Delete Product</button><br><br>
    
<label>Product Name</label> <br>
<input type="text" v-model="item.name" />
<br><br>
<label>Product Price</label> <br>
<input type="text" v-model="item.price" />
<br><br>
<label>Description</label> <br>
<textarea type="text" v-model="item.prodDescription" />
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

 },
 computed: {
   menuItems() {
     return this.$store.getters.getMenuItems
   },
 }
}
</script>


<style lang="css">


textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  font-family: 'Roboto', sans-serif;
}

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


</style>
