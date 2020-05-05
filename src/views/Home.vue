<template>
  <div class="home">
    <h1 class="homepage">Hello and Welcome to Hollys PetShop</h1>
    <p class="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
      Donec pharetra lacus vitae tortor rhoncus facilisis.<br> Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    <div class="row">
      <div class="column right">
        <div class="catBox"><h3>Cat Products</h3></div>
      </div>
      <div class="column">
        <div class="dogBox"><h3>Dog Products</h3></div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>


<style lang="css">

.homeText{
  color: #111111;
    display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 50px;
}

.catBox{
  min-height: 40vh;
  background-color:#ffffff;
  color: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/cat.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

}


.dogBox{
  min-height: 40vh;
  background-color: #ffffff;
  color: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/hollyhund.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.home{
  min-height: 100vh;
  background-color:#f4f7f6;
  padding: 50px;
}

.homepage{
   color: #111111; 
   font-size: 24px;
   font-family: 'Open Sans', sans-serif;
   margin-bottom: 20px;
}

p{
   color: #e8e8e8; 
}

.right{
    margin-right: 20px;
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
  margin-top: -8px;
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