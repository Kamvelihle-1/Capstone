<template>
    <div class="container ">
        <div class="row">
            <h2 class="display-2">Checkout</h2>
        </div>
        <div class="row">
            <div class="card mb-3" v-for="item in cart" :key="item.id" style="max-width: 540px;"  >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img :src="item.prodUrl" class="img-fluid rounded-start" alt="">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                        <div class="col">
                            <h5 class="card-title">{{ item.prodName}}</h5>
                            <p class="card-text">Quantity: {{ item.prodQuantity }}</p>
                            <p class="card-text text-end">Price: {{ amount}}</p>
                        </div>
                        <div class="col">
                            <button @click="DeleteItem(item.prodID,item.prodQuantity)">Remove from cart</button>
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
    export default {
        data(){
            return{
                amount:0,
                tAmount:0
            }
        },
        computed:{
            cart(){
               return this.$store.state.cart
            }
        },
        mounted(){
            this.$store.dispatch('getCart')
        },
        watch:{
            cart

        },
        methods:{
            setNewPrice(x,y){
                this.amount = x*y
            },
            setTotalAmount(){
                this.tAmount += this.amount
            }
        }
        
    }
</script>

<style scoped>

</style>