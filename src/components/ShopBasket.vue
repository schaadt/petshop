<template>
    <div>
        <div v-for="item in BasketItems" :key="item.name" class="grid-basket">
            <div class="item2"><span class="itemsQ">{{item.price}}</span></div>
            <div class="item4"><span class="itemsQ">{{item.name}}</span></div>
            <div class="item5"><button class="basketAdd" v-on:click="increase(item)">+</button>  <span class="itemsQ">{{item.quantity}}</span>  <button class="basketDelete" v-on:click="descrease(item)">-</button></div>
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
        <div class="basketTotalC">
            <div class="center">
            <button class="buttonShop" v-on:click="addCheckoutItem()">CheckOut</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        basketDump:[],
        }
    },
    beforeCreate(){
        this.$store.dispatch('setMenuItems')
    },

methods:{

   addCheckoutItem(){
     this.$store.dispatch('setCheckoutItems')
   },

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

<style scoped>

.center{
    display: flex;
    align-items: center;
    justify-content: center;
}

.itemsQ{
    font-weight: 800;
    font-size: 14px;
    padding: 5px;
}

.basketAdd{
    background-color: #4daf7c;
    color: #ffffff;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
}

.basketDelete{
    background-color: #f62459;
    color: #ffffff;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
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
  background-color: #ffffff;
  border: 1px solid #e6eaea;
  padding: 10px;
}

.grid-basket > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 12px;
}

.basketTotal{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
  border: 1px solid #e6eaea;
}

.basketTotalC {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>