<template>
  <div class="containter-fluid">
    <div v-if="cart">
      <div class="container">
        <div class="row table-container">
          <div class="col-12">
            <h1>Orders</h1>
           
          </div>
          <div class="col ">
            <div class="cartTable">
            <table
              class="table is-striped is-bordered mt-2 is-fullwidth array-lists"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>FullName</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Product Image</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id" class="bord">
                  <td>{{ item.id }}</td>
                  <td>{{ item.UserName }}</td>
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.Price }}</td>
                  <td>{{ item.prodQuantity }}</td>
                  <td><img class="tableImg" :src="item.prodUrl" alt="" /></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    <div v-else>
      <SpinnerComp/>
    </div>
  </div>
  </template>
  <script>
import SpinnerComp from './SpinnerComp.vue';
  export default {
    components:{
      SpinnerComp
    },
      computed: {
        cart(){
             return this.$store.state.cart
          },
      },
      mounted() {
        this.$store.dispatch('getCart',this.userId)
      },  
  }
  </script>
  
  <style scoped>

  .tableImg {
      width: 120px;
      height: auto;
  }
  table{
    width: 90%;
  }
  .cartTable{
  overflow-x: scroll;
  padding: 2rem;
  max-width: 100%;
}
  </style>