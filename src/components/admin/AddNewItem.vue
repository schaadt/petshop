<template>
<div>
<article class="editContent">
<div class="grid-add">
<div class="itemAdd">  

<h2>Edit Content</h2>
<form>
<label>Produkt Navn</label> <br>
<input v-model="name"/>
<br><br>
<label>Produkt Pris</label> <br>
<input v-model="price"/>
<br><br>
<label>Description</label> <br>
<input v-model="prodDescription"/>
<br><br>
<label>Category</label> <br>
<input v-model="prodCategory"/>
<br><br>
<label>Image</label> <br>
<input type="file" @change="uploadImage"/>
<br><br><br><br>
</form>

<button class="buttonShopUpdate" v-on:click="addProduct()">Add Item</button>
</div>   


<div class="Preview">
<h2>Preview</h2>
<span>{{name}}</span><br>
<span>{{price}}</span><br>
<span>{{prodDescription}}</span><br>
<span>{{prodCategory}}</span><br>
</div>  
</div>
</article>
</div>
</template>

<script>
import {dbAdminProduct, fb} from '../../firebase'
export default {
 data(){
    return{
        name: '',
        price: '',
        image: null,
        prodDescription: '',
        prodCategory: '',

    }
  },
  methods: {


    uploadImage(e){
      let file = e.target.files[0];
      console.log(e.target.files[0])
      var storageRef = fb.storage().ref('products/' + file.name);
      
      let uploadTask = storageRef.put(file)
        uploadTask.on('state_changed', () =>{
  
        }, () => {
        // Handle unsuccessful uploads
        }, () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        this.image = downloadURL
        console.log('File available at', downloadURL);
        });
      });
    },

      addProduct(){
          dbAdminProduct.add({
              name: this.name,
              price: this.price,
              image: this.image,
              prodDescription: this.prodDescription,
              prodCategory: this.prodCategory

          })
      }
  }
}
</script>


<style lang="css">


.itemAdd { grid-area: AddItem;}

.preview { grid-area: preview;}


.grid-add {
  display: grid;
  grid-template-areas:
    'AddItem AddItem AddItem preview preview preview';
  grid-gap: 10px;
  padding: 10px;
  background-color: #ffffff;
}




</style>
