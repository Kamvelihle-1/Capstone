<template>
  <div class="container cart ">
      <div class="row mt-4">
        <div class="col-10">
          <h2 class="display-2">Cart</h2>
        </div>
        <div class="col-2 pt-3">
          <button @click="deleteCart">Clear Cart</button>
        </div>
          
      </div>
      <div class="row">
          <div class="card mb-3" v-for="item in cart" :key="item.id" style="max-width: 540px;"  >
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="item.prodUrl" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title">{{ item.prodName}}</h5>
                        <p class="card-text">Quantity: {{ item.prodQuantity }}</p>
                        <p class="card-text text-end" id="price" v-bind="amount">Price:R {{ item.Price * item.prodQuantity  }}</p>
                    </div>
                    <div class="col mt-5 pt-3">
                        <button @click="DeleteItem(item.prodID)">Remove from cart</button>
                    </div>
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div class="row justify-content-end" >
        <label >Total amount: {{ tAmount}}</label>
      </div>
      <div class="row justify-content-center">
        <router-link class="btn" to="/checkout">Go to checkout</router-link>  
      </div>

  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
  export default {
      data(){
          return{
              tAmount:0,
              ids:{},
              amount
          }
      },
      computed:{
          cart(){
             return this.$store.state.cart
          },
          user() {
            return this.$store.state.user ||
            cookies.get("CurrentUser")
          },
          userId(){
            return this.user?.result[0].userID
          }
      },
      mounted(){
          this.$store.dispatch('getCart',this.userId)
          this.setTotalAmount()
      },
      watch:{
        nCart(){
          console.log(this.uCart);
        }
      },
      methods:{
          setTotalAmount(){
            const pValues = document.querySelectorAll('#price')
            pValues.forEach((pval)=>{
              this.tAmount += parseFloat(pval.textContent.split(' ')[1])
            })
            console.log(pValues);
          },
          DeleteItem(x){
            this.ids.prodID =x
            this.ids.userID= this.userId
            this.$store.dispatch("deleteCartItem",ids)
          }

      }
      
  }
</script>

<style scoped>

</style>