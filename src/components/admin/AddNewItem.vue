<template>
<div>
<article class="content">
<div class="grid-add">
<div class="addItem">  
<form>
<label>Produkt Navn</label> <br>
<input v-model="name" />
<br><br>
<label>Produkt Pris</label> <br>
<input v-model="price" />
<br><br>
</form>

<button v-on:click="addProduct()">Add Item</button> -- <button>Fortryd</button>
</div>   


<div class="Preview">
Preview<br><br>
<span>{{name}}</span><br>
<span>{{price}}</span><br>
</div>  
</div>
</article>
</div>
</template>

<script>
import {dbAdminProduct} from '../../firebase'
export default {
 data(){
    return{
        name: '',
        price: ''
    }
  },
  methods: {
      addProduct(){
          dbAdminProduct.add({
              name: this.name,
              price: this.price
          })
      }
  }
}
</script>


<style lang="css">


.addItem { grid-area: AddItem;}
.preview { grid-area: preview;}


.grid-add {
  display: grid;
  grid-template-areas:
    'AddItem AddItem AddItem preview preview preview';
  grid-gap: 10px;
  padding: 10px;
}




</style>
