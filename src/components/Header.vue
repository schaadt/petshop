<template>
    <div>
        <div class="row">
            <div class="column">
                <div class="headerLeft">
                    <h1>Holly' The Dog's Petshop</h1>
                </div>
            </div>
            <div class="column">
                <div class="headerRight">
                    <h1>Login</h1>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css">

.headerLeft{
    text-align: left;
    padding: 20px;
}

.headerRight{
    text-align: right;
    padding: 20px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-right: 15px;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-bottom: 5px;
}
</style>