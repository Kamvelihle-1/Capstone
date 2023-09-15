<template>
    <div class="checkout container-fluid justify-content-center pb-3 mt-5">
        <div class="row mb-5 pt-5">
            <h2 class="display-2">Checkout</h2>
        </div>
        <div class="row mt-5">
          <div class="card mb-3 mx-4" v-for="item in cart" :key="item.id" style="max-width: 540px;"  >
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
                        <p class="card-text  " id="price" >Price:R {{ item.Price * item.prodQuantity  }}</p>
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
          <button  @click="deleteCart">Go to checkout</button>
        </div>  
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
            if(this.user?.result?.length>0){
                return this.user?.result[0].userID
            }else{
                return  cookies.get("CurrentUser")?.result[0].userID
            }
          }
        },
        methods:{
          setTotalAmount(){
            const pValues = document.querySelectorAll('#price')
            pValues.forEach((pval)=>{
              this.tAmount += parseFloat(pval.textContent.split(' ')[1])
            
            })
        
          },
          deleteCart(){
            this.$store.dispatch("deleteCart",this.userId)
            this.output()
          },
         output(){
            swal({
                title: "Checkout",
                text: "You have checked out",
                icon: "success",
                timer: 3000
             })
                  
          }
        },
      mounted(){
          this.$store.dispatch('getCart',this.userId),
          this.setTotalAmount()
      },
      watch:{
       setTotalAmount(){
        console.log(document.querySelectorAll('#price').values);
       },
       tAmount(){
        console.log(this.tAmount);
       }
      }
        
    }
</script>

<style scoped>
.checkout{
  background-color: #c0d0d5;
  border-radius: .5rem;
}
button{
  padding: .5rem;
  background:#2c3e50;
  color:#f3f2e9;
  border-radius: 1rem;
}
button:hover{
background: #f3f2e9;
padding: 10px;
color:#2c3e50
}
</style>