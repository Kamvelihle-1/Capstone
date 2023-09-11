<template>
    <div class="container-fluid">
    <div class="body" v-if="cart">
              <div class="row table-container">
                <div class="col-12">
                  <h1>cartItems</h1>
                </div>
                <div class="col ">
                    <div class="cartTable">
                  <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists"  @submit="deleteCart">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Edit/Delete</th>
                      </tr>
                    </thead>
                    <tbody v-if="outputData.length>0">
                      <tr v-for="cartItem in outputData" :key="cartItem.id" class="bord">
                        <td>{{ cartItem.id}}</td>
                        <td>{{ userName }}</td>
                        <td>{{ cartItem.prodName }}</td>
                        <td>R {{ cartItem.Price }}</td>
                        <td>{{ cartItem.prodQuantity }}</td>
                        <td><img class="tableImg" :src="cartItem.prodUrl" alt="" /></td>
                        <td>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="setId(cartItem.id)" data-bs-target="#UpdateProd" data-bs-whatever="@mdo">Update</button>
                          <button
                            type="button"
                            class="btn btton"
                            @click= deletecartItem(cartItem.id)
                            id="delete-row"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr v-for="cartItem in cart" :key="cartItem.id" class="bord">
                        <td>{{ cartItem.id}}</td>
                        <td>{{ userName }}</td>
                        <td>{{ cartItem.prodName }}</td>
                        <td>R {{ cartItem.Price }}</td>
                        <td>{{ cartItem.prodQuantity }}</td>
                        <td><img class="tableImg" :src="cartItem.prodUrl" alt="" /></td>
                        <td>
                          <button type="button" class="btn " data-bs-toggle="modal" @click="setId(cartItem.id)" data-bs-target="#UpdateCart" data-bs-whatever="@mdo">Update</button>
                          <button
                            type="button"
                            class="btn btton"
                            @click= deletecartItem(cartItem.id)
                            id="delete-row"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    const axios = require('axios');
      export default {
       
        components:{
          SpinnerComp
        },
        data(){
                return{
                  userName:"",
                  payload:{},
                  outputData:[],
                  prodID:null,
                  prodQuantity:null,
                
                }
          },
          
          
        computed: {
        cart() {
          return this.$store.state.cart
        },
        preFilledItem() {
          return this.cart.find(cartItem => cartItem.prodID == this.prodID) || {};
         }
        },
        mounted() {
        this.$store.dispatch("getCart")
        },
        watch: {
          prodID() {
            this.data.prodQuantity = this.preFilledItem.Quantity
          }
        },
        methods: {
          newdataDisplay(data){
               this.outputData=data;
            },
          setId(x){
              this.prodID =x
            },
            updatecartItem(){
              this.payload.userID = userID
              this.payload.prodQuantity = this.prodQuantity
              this.payload.prodID =this.prodID
              console.log(this.payload);
              this.$store.dispatch("updateCart",this.payload)
             
            },
            deletecartItem(x){
                
              this.$store.dispatch("deleteCartItem",x)
            } 
          },  
      };
    </script>
    <style scoped>
    button{
        margin: 0.5rem;
        padding: 0.5rem;
        background:#2c3e50;
        color:white;
        border-radius: 1rem;
        font-family: 'REM', sans-serif;
    }
    button:hover{
      background: #f1d7b7;
      color:#2c3e50
    }
    .tableImg{
        width : 120px;
        height: auto;
    }
    .prodTable{
      overflow-x: scroll;
      padding: 2rem;
      max-width: 100%;
    }
    </style>