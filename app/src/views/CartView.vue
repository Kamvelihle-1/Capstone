<template>
  <div class="container-fluid cart pt-5">
      <div class="row mt-4 ">
        <div class="col">
          <h2 class="display-2 ">Cart</h2>
        </div>
      </div>
      <div class="cart-panel p-2" v-if="cart?.length > 0">
      <div class="row justify-content-end px-5 mx-5">
        <div class="col-2 py-4">
          <button @click="deleteCart">Clear Cart</button>
        </div>
      </div>
      <div class="row">
          <div class="card mb-3 mx-4" v-for="item in cart" :key="item.id" style="max-width: 640px;"  >
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="item.prodUrl" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="row">
                      <div class="col text-center ">
                        <h5 class="card-title mt-5">{{ item.prodName}}</h5>
                        <p class="card-text">Quantity: {{ item.prodQuantity }}</p>
                        <p class="card-text text-end price" id="price" >Price:R {{ item.Price * item.prodQuantity  }}</p>
                    </div>
                    <div class="col  pt-3">
                        <button @click="DeleteItem(item.id)">Remove from cart</button>
                        <label class="mt-1" >Quantity update:</label>
                        <input class="my-2 cup" type="number" v-model="payload.prodQuantity" min="1" max="10">
                        <button class="my-2" @click="UpdateItem(item.id)">Update cart item</button>
                    </div>
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div class="row justify-content-end" >
        <label class="fs-3">Total amount:R {{ tAmount.toFixed(2)}}</label>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col">
          <router-link class="btn" to="/checkout">Go to checkout</router-link>
        </div>  
      </div>
    </div>
    <div v-else class="container mt-5 pt-5">
      <h3 class="display-3 mt-5 pt-5"> No Items available in your cart</h3>
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
            payload:{
              prodQuantity:1
            }
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
            if (this.user?.result?.length) {
          return this.user?.result[0].userID;
        } else {
          console.log(cookies.get("CurrentUser")?.result[0]);
          return  cookies.get("CurrentUser")?.result[0].userID
        }
          }
      },
      mounted(){
          this.$store.dispatch('getCart',this.userId),
          this.setTotalAmount()
      },
      watch:{
       setTotalAmount(){
        console.log(this.tAmount);
       },
       tAmount(){
        console.log(this.tAmount);
       }
      },
      methods:{
          setTotalAmount(){
            const pValues = document.querySelectorAll('#price')
            pValues.forEach((pval)=>{
              this.tAmount += parseFloat(pval.textContent.split(' ')[1])

            })
        
          },
          DeleteItem(x){
            this.ids.id =x
            this.ids.userID= this.userId
            this.$store.dispatch("deleteCartItem",this.ids)
          },
          deleteCart(){
            this.$store.dispatch("deleteCart",this.userId)
          },
          UpdateItem(x){
            this.payload.userID = this.userId
            this.payload.id = x
            this.$store.dispatch("updateCart",this.payload)
          }

      }
      
  }
</script>

<style scoped>
.cart-panel{
  background-color: #c0d0d5;
  border-radius: .5rem;
}
.cup{
  border-radius: .5rem;
}
button,.btn{
  padding: .5rem;
  background:#2c3e50;
  color:#f3f2e9;
  border-radius: 1rem;
}
button,.btn:hover{
background: #f3f2e9;
padding: 10px;
color:#2c3e50
}
</style>